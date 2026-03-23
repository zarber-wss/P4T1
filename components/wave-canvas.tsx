"use client"

import { useEffect, useRef } from "react"

interface WaveLayerConfig {
  yOffset: number      // Vertical position (0-1)
  speed: number        // Animation speed
  amplitude: number    // Wave height
  frequency: number    // Wave density
  colorStops: string[] // Gradient colors
  layerIndex: number
  harmonics: { amplitude: number; frequency: number; speed: number; phase: number }[]
}

const waveLayers: WaveLayerConfig[] = [
  {
    yOffset: 0.45,
    speed: 0.3,
    amplitude: 60,
    frequency: 0.002,
    colorStops: ["rgba(0, 30, 100, 0.4)", "rgba(0, 10, 30, 0.6)"],
    layerIndex: 0,
    harmonics: [
      { amplitude: 20, frequency: 0.004, speed: 0.5, phase: 0 },
      { amplitude: 10, frequency: 0.006, speed: 0.7, phase: Math.PI / 3 }
    ]
  },
  {
    yOffset: 0.55,
    speed: 0.4,
    amplitude: 80,
    frequency: 0.0025,
    colorStops: ["rgba(0, 50, 150, 0.6)", "rgba(0, 20, 60, 0.7)"],
    layerIndex: 1,
    harmonics: [
      { amplitude: 25, frequency: 0.005, speed: 0.6, phase: Math.PI / 4 },
      { amplitude: 15, frequency: 0.007, speed: 0.8, phase: Math.PI / 2 }
    ]
  },
  {
    yOffset: 0.70,
    speed: 0.5,
    amplitude: 100,
    frequency: 0.003,
    colorStops: ["rgba(0, 80, 255, 0.8)", "rgba(0, 30, 100, 0.85)"],
    layerIndex: 2,
    harmonics: [
      { amplitude: 30, frequency: 0.004, speed: 0.55, phase: Math.PI / 6 },
      { amplitude: 20, frequency: 0.008, speed: 0.9, phase: Math.PI }
    ]
  },
  {
    yOffset: 0.85,
    speed: 0.6,
    amplitude: 120,
    frequency: 0.0035,
    colorStops: ["rgba(0, 100, 255, 1)", "rgba(0, 40, 120, 0.95)"],
    layerIndex: 3,
    harmonics: [
      { amplitude: 35, frequency: 0.005, speed: 0.65, phase: Math.PI / 5 },
      { amplitude: 25, frequency: 0.009, speed: 1.0, phase: Math.PI / 2 },
      { amplitude: 15, frequency: 0.012, speed: 1.2, phase: Math.PI * 1.5 }
    ]
  }
]

export function WaveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)
  const timeRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const drawWave = (layer: WaveLayerConfig, time: number) => {
      const width = canvas.getBoundingClientRect().width
      const height = canvas.getBoundingClientRect().height
      const baseY = height * layer.yOffset

      ctx.beginPath()
      ctx.moveTo(0, height)

      for (let x = 0; x <= width; x += 2) {
        // Main wave
        let y = baseY + Math.sin(x * layer.frequency + time * layer.speed) * layer.amplitude

        // Add harmonics for organic movement
        for (const harmonic of layer.harmonics) {
          y += Math.sin(x * harmonic.frequency + time * harmonic.speed + harmonic.phase) * harmonic.amplitude
        }

        if (x === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }

      ctx.lineTo(width, height)
      ctx.lineTo(0, height)
      ctx.closePath()

      // Create gradient fill
      const gradient = ctx.createLinearGradient(0, baseY - layer.amplitude, 0, height)
      gradient.addColorStop(0, layer.colorStops[0])
      gradient.addColorStop(1, layer.colorStops[1])
      ctx.fillStyle = gradient
      ctx.fill()

      // Add subtle glow effect
      const glowAlpha = 0.1 + layer.layerIndex * 0.1
      ctx.shadowColor = `rgba(0, 100, 255, ${glowAlpha})`
      ctx.shadowBlur = 20 + layer.layerIndex * 10
    }

    const animate = () => {
      const width = canvas.getBoundingClientRect().width
      const height = canvas.getBoundingClientRect().height

      ctx.clearRect(0, 0, width, height)

      // Draw layers from back to front
      for (const layer of waveLayers) {
        drawWave(layer, timeRef.current)
      }

      timeRef.current += 0.016 // ~60fps
      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute bottom-0 left-0 w-full h-[60%] pointer-events-none z-0"
    />
  )
}
