"use client"

import { Fragment, useEffect, useRef, useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion, useInView } from "framer-motion"
import { WaveCanvas } from "@/components/wave-canvas"

// Animation variants for fade-in-up effect
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
}

// Section 1: 深海沉稳科技风 - 封面
function Section1() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="relative h-full w-full snap-start flex flex-col items-center justify-center overflow-hidden" style={{ backgroundColor: "#050B14" }}>
      {/* Multi-layered animated wave system */}
      <WaveCanvas />

      {/* Left bottom watermark */}
      <div className="absolute bottom-8 left-10 text-slate-600 text-sm font-light tracking-wider z-10">
        4399UED · 2026.03
      </div>

      {/* Main content - positioned in top 2/3 of screen */}
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="z-20 text-center flex flex-col items-center px-8 absolute top-[150px]"
      >
        {/* Level transition card - solid, no blur */}
        <motion.div 
          variants={fadeInUp}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-4 md:gap-8 px-10 md:px-16 py-6 md:py-8 rounded-2xl bg-[#111827] border border-white/5">
            <span className="text-4xl md:text-6xl lg:text-7xl font-bold text-white">P3T2</span>
            <span className="text-3xl md:text-5xl lg:text-6xl font-light text-[#77fbd1]">
              {"->"}
            </span>
            <span className="text-4xl md:text-6xl lg:text-7xl font-black text-[#77fbd1]">
              P4T1
            </span>
          </div>
        </motion.div>

        {/* Main headline - clean white */}
        <motion.h1 
          variants={fadeInUp}
          className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tight"
        >
          交互职级答辩
        </motion.h1>

        {/* Author badge - below title */}
        <motion.div 
          variants={fadeInUp}
        >
          <div className="flex items-center gap-4 px-8 py-4 rounded-full bg-[#1b2cf4] text-white text-base md:text-lg font-medium">
            <span>By 吴珊珊</span>
            <span className="w-px h-5 bg-white/30" />
            <span>UED交互2组</span>
          </div>
        </motion.div>
      </motion.div>

    </section>
  )
}

// Section 2: 深海沉稳科技风 - 个人介绍
function Section2() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="relative h-full w-full snap-start flex items-center justify-center overflow-hidden px-8 md:px-16" style={{ backgroundColor: "#050B14" }}>
      {/* Deep sea wave gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-[#1b2cf4]/22 via-[#1b2cf4]/08 to-transparent" />

      {/* Left bottom watermark */}
      <div className="absolute bottom-8 left-10 text-slate-600 text-sm font-light tracking-wider">
        4399UED
      </div>

      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 w-full max-w-6xl"
      >
        {/* Bento Grid - solid cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {/* Left Card - Profile (spans 2 rows) */}
          <motion.div 
            variants={fadeInUp}
            className="md:row-span-2"
          >
            <div className="h-full p-10 rounded-2xl bg-[#111827] border border-white/5">
              {/* Avatar with emoji - larger */}
              <div className="w-32 h-32 mx-auto rounded-full bg-[#1b2cf4] flex items-center justify-center text-6xl">
                👩‍🎨
              </div>
              
              {/* Name */}
              <h2 className="mt-6 text-4xl md:text-5xl font-black text-white text-center">
                吴珊珊
              </h2>
              
              {/* Position - brighter and larger */}
              <p className="mt-4 text-slate-300 text-center text-lg leading-relaxed">
                社区平台部-UED-交互设计师
              </p>
              
              {/* Role badge - solid blue pill */}
              <div className="mt-4 flex justify-center">
                <span className="px-4 py-1.5 rounded-full bg-[#1b2cf4] text-white text-base font-medium">
                  交互2组 组长
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Top Card - Experience */}
          <motion.div 
            variants={fadeInUp}
            className="md:col-span-2"
          >
            <div className="h-full p-8 rounded-2xl bg-[#111827] border border-white/5">
              <div className="flex items-baseline gap-4">
                <span className="text-6xl md:text-7xl font-black text-[#77fbd1]">
                  8 年
                </span>
                <span className="text-slate-300 text-xl">工作经验</span>
              </div>
              <div className="mt-4 text-slate-300 text-lg">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#1b2cf4]/25 border border-[#1b2cf4]/35 text-slate-100 text-base md:text-lg font-medium">
                  华侨大学 · 工业设计专业
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Bottom Card - Business Scope */}
          <motion.div 
            variants={fadeInUp}
            className="md:col-span-2"
          >
            <div className="h-full p-8 rounded-2xl bg-[#111827] border border-white/5">
              <div className="grid grid-cols-2 gap-6">
                {/* Left column */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">💻</span>
                    <h3 className="text-slate-300 text-base uppercase tracking-widest">主要负责</h3>
                  </div>
                  <p className="text-white text-xl md:text-2xl font-semibold">3387游戏</p>
                </div>
                
                {/* Divider */}
                <div className="border-l border-white/10 pl-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">✅</span>
                    <h3 className="text-slate-300 text-base uppercase tracking-widest">质量把关</h3>
                  </div>
                  <p className="text-white text-xl md:text-2xl font-semibold">安卓游戏盒 / 3387 游戏</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

/** 章节过渡页右上角气泡（规范：当前章蓝色实心，其余线框透明），用于 page3 / 第二章节过渡 / page22，及团队章内容页 page23–page27 */
function ChapterTransitionNavBubbles({ active }: { active: 1 | 2 | 3 | 4 }) {
  const labels = ["01 设计实践", "02 AI提效", "03 团队建设", "04 未来计划"] as const
  return (
    <div className="pointer-events-none absolute top-4 right-4 z-20 flex max-w-[calc(100%-2rem)] flex-row flex-wrap items-center justify-end gap-1.5 md:top-6 md:right-6 md:gap-2">
      {labels.map((label, i) => {
        const idx = (i + 1) as 1 | 2 | 3 | 4
        const isActive = idx === active
        return (
          <div
            key={label}
            className={`whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] md:px-3 md:py-1.5 md:text-xs ${
              isActive
                ? "border border-[#1b2cf4] bg-[#1b2cf4] font-bold text-white shadow-md shadow-[#1b2cf4]/35"
                : "border border-white/20 bg-transparent font-medium text-slate-300 backdrop-blur-sm"
            }`}
          >
            {label}
          </div>
        )
      })}
    </div>
  )
}

/**
 * 章节过渡页统一布局（以 page22 为规范）：
 * 细网格 + 底光 + 中心柔光 + 右下水印 + 4399UED + 右上章节气泡 + 左侧 Chapter / 大标题 / 副标题
 */
function ChapterTransitionLayout({
  watermarkDigit,
  chapterLabel,
  title,
  subtitle,
  activeModule,
}: {
  watermarkDigit: string
  chapterLabel: string
  title: string
  subtitle: string
  activeModule: 1 | 2 | 3 | 4
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.35 })

  return (
    <section
      className="relative flex h-full w-full snap-start items-center overflow-hidden"
      style={{ backgroundColor: "#050B14" }}
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.45]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(148, 163, 184, 0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148, 163, 184, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[30%] bg-gradient-to-t from-[#1b2cf4]/22 via-[#1b2cf4]/08 to-transparent" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 z-[1] h-[400px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1b2cf4]/10 blur-[100px]" />

      <div
        className="absolute right-0 bottom-0 z-0 flex select-none items-end justify-end overflow-visible pointer-events-none"
        aria-hidden
      >
        <span className="block translate-x-[0.02em] translate-y-[0.06em] font-black leading-[0.72] tracking-tighter text-white/[0.08] text-[min(72cqw,18rem)] sm:text-[min(68cqw,22rem)] md:text-[min(62cqw,28rem)] lg:text-[min(54cqw,34rem)] xl:text-[min(48cqw,40rem)] 2xl:text-[42rem]">
          {watermarkDigit}
        </span>
      </div>

      <div className="absolute bottom-8 left-10 z-10 text-sm font-light tracking-wider text-slate-600">
        4399UED
      </div>

      <ChapterTransitionNavBubbles active={activeModule} />

      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 mx-auto flex min-h-[60cqh] w-full max-w-7xl items-center px-10 md:px-16 lg:pl-20 lg:pr-12"
      >
        <div className="flex w-full flex-col items-start gap-4 text-left md:w-[55%] md:gap-6 lg:w-1/2">
          <motion.p
            variants={fadeInUp}
            className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#77fbd1] md:text-xs"
          >
            {chapterLabel}
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
          >
            {title}
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="max-w-md text-base font-medium leading-relaxed text-slate-400 md:text-lg lg:text-xl"
          >
            {subtitle}
          </motion.p>
        </div>
      </motion.div>
    </section>
  )
}

// Section 3：第一章节过渡页（page3）— 布局同 page22 规范
function Section3ChapterDesign() {
  return (
    <ChapterTransitionLayout
      watermarkDigit="01"
      chapterLabel="Chapter 01"
      title="01 设计实践"
      subtitle="不仅仅是画图"
      activeModule={1}
    />
  )
}

const section3CircleGradient =
  "rounded-full border-0 flex flex-col items-center justify-center bg-gradient-to-b from-[#13284c] to-[#020508] shadow-none"

const section3CircleSize =
  "w-60 h-60 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem] xl:w-96 xl:h-96"

/** 设计实践章节：右上角横向定位气泡（与双圆页同款，可复用到多页） */
function SectionDesignNavBubbles() {
  return (
    <div className="pointer-events-none absolute top-4 right-4 z-20 flex max-w-[calc(100%-2rem)] flex-row flex-wrap items-center justify-end gap-1.5 md:top-6 md:right-6 md:gap-2">
      <div className="px-2.5 py-1 whitespace-nowrap rounded-full border border-[#1b2cf4] bg-[#1b2cf4] text-[11px] font-bold text-white shadow-md shadow-[#1b2cf4]/35 md:px-3 md:py-1.5 md:text-xs">
        01 设计实践
      </div>
      <div className="px-2.5 py-1 whitespace-nowrap rounded-full border border-white/20 bg-slate-900/85 text-[11px] font-medium text-white backdrop-blur-sm md:px-3 md:py-1.5 md:text-xs">
        02 AI提效
      </div>
      <div className="px-2.5 py-1 whitespace-nowrap rounded-full border border-white/15 bg-slate-900/70 text-[11px] text-slate-200 md:px-3 md:py-1.5 md:text-xs">
        03 团队建设
      </div>
      <div className="px-2.5 py-1 whitespace-nowrap rounded-full border border-white/10 bg-slate-900/60 text-[11px] text-slate-300 md:px-3 md:py-1.5 md:text-xs">
        04 未来计划
      </div>
    </div>
  )
}

/** AI提效页右上角定位气泡：02 AI提效 蓝色高亮，其他为线性按钮 */
function SectionDesignNavBubblesAI() {
  return (
    <div className="pointer-events-none absolute top-4 right-4 z-20 flex max-w-[calc(100%-2rem)] flex-row flex-wrap items-center justify-end gap-1.5 md:top-6 md:right-6 md:gap-2">
      <div className="px-2.5 py-1 whitespace-nowrap rounded-full border border-white/20 bg-transparent text-[11px] font-medium text-slate-300 backdrop-blur-sm md:px-3 md:py-1.5 md:text-xs">
        01 设计实践
      </div>
      <div className="px-2.5 py-1 whitespace-nowrap rounded-full border border-[#1b2cf4] bg-[#1b2cf4] text-[11px] font-bold text-white shadow-md shadow-[#1b2cf4]/35 md:px-3 md:py-1.5 md:text-xs">
        02 AI提效
      </div>
      <div className="px-2.5 py-1 whitespace-nowrap rounded-full border border-white/20 bg-transparent text-[11px] font-medium text-slate-300 md:px-3 md:py-1.5 md:text-xs">
        03 团队建设
      </div>
      <div className="px-2.5 py-1 whitespace-nowrap rounded-full border border-white/20 bg-transparent text-[11px] font-medium text-slate-300 md:px-3 md:py-1.5 md:text-xs">
        04 未来计划
      </div>
    </div>
  )
}

/** 双圆页共用：底光、右上标签、水印 */
function Section3Ambient() {
  return (
    <>
      <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-[#1b2cf4]/22 via-[#1b2cf4]/08 to-transparent" />
      <SectionDesignNavBubbles />
      <div className="absolute bottom-8 left-10 z-10 text-sm font-light tracking-wider text-slate-600">
        4399UED
      </div>
    </>
  )
}

/** 双圆核心理念：单页 PPT — 仅双圆 → 翻页器/点击后双圆平滑上移并出现 💡，再翻页进入下一页 */
function Section3({
  insightRevealed,
  onInsightReveal,
}: {
  insightRevealed: boolean
  onInsightReveal: () => void
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.35 })

  const handleStagePointer = () => {
    if (!insightRevealed) onInsightReveal()
  }

  return (
    <section
      className="relative h-full w-full snap-start flex flex-col overflow-hidden px-6 md:px-12 lg:px-20"
      style={{ backgroundColor: "#050B14" }}
      data-section="dual-circles"
    >
      <Section3Ambient />
      <div
        ref={ref}
        role="presentation"
        onClick={handleStagePointer}
        onKeyDown={(e) => {
          if (insightRevealed) return
          if (e.key === "Enter") {
            e.preventDefault()
            onInsightReveal()
          }
        }}
        tabIndex={-1}
        className="relative z-10 flex min-h-0 flex-1 flex-col items-center justify-start outline-none pt-[max(3rem,calc(50cqh-11rem))] md:pt-[max(4rem,calc(50cqh-13rem))] lg:pt-[max(5rem,calc(50cqh-14rem))]"
      >
        {/* 不用 justify-center：否则 💡 插入后列变高会重新垂直居中，双圆会瞬间跳一帧（像闪一下） */}
        <div className="flex w-full max-w-[min(100%,80rem)] flex-col items-center">
          {/* 仅双圆做轻微平滑上移，与下方卡片拉开间距 */}
          <motion.div
            animate={{
              y: insightRevealed ? -16 : 0,
            }}
            transition={{
              type: "tween",
              duration: 0.52,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="shrink-0"
          >
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex flex-row flex-nowrap items-center justify-center gap-8 md:gap-14 lg:gap-20"
            >
              <motion.div
                variants={fadeInUp}
                className={`${section3CircleSize} ${section3CircleGradient}`}
              >
                <span className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-medium [text-shadow:none]">
                  把方案
                </span>
                <span
                  className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-[#77fbd1] font-black mt-2 md:mt-3 [text-shadow:none] drop-shadow-none"
                  style={{ textShadow: "none", filter: "none" }}
                >
                  画出来
                </span>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-center text-slate-500 shrink-0">
                <svg
                  className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                  <path d="M15.59 16.59L20.17 12 15.59 7.41 17 6l6 6-6 6-1.41-1.41z" />
                </svg>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className={`${section3CircleSize} ${section3CircleGradient}`}
              >
                <span className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-medium [text-shadow:none]">
                  把项目
                </span>
                <span
                  className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-[#77fbd1] font-black mt-2 md:mt-3 [text-shadow:none] drop-shadow-none"
                  style={{ textShadow: "none", filter: "none" }}
                >
                  做起来
                </span>
              </motion.div>
            </motion.div>
          </motion.div>

          <AnimatePresence>
            {insightRevealed && (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{
                  duration: 0.52,
                  delay: 0.08,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="mt-6 md:mt-8 w-full max-w-4xl px-2"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="rounded-2xl border border-white/10 bg-[#111827] px-3 py-3 md:rounded-3xl md:px-4 md:py-4 lg:px-5 lg:py-5">
                  <p className="flex flex-row flex-nowrap items-center justify-center gap-2 text-center text-lg font-medium tracking-wide text-white md:text-xl lg:text-2xl whitespace-nowrap">
                    <span className="text-2xl md:text-3xl shrink-0" aria-hidden>
                      💡
                    </span>
                    <span className="leading-snug">
                      向上有业务思考，向下打磨设计细节
                    </span>
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

// Section 4: Page5 - 需求内容
function Section4({
  demandExtraRevealed,
  onDemandExtraReveal,
}: {
  demandExtraRevealed: boolean
  onDemandExtraReveal?: () => void
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="relative h-full w-full snap-start overflow-hidden" style={{ backgroundColor: "#050B14" }}>
      <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-[#1b2cf4]/22 via-[#1b2cf4]/08 to-transparent" />
      <SectionDesignNavBubbles />

      {/* 左侧文案 */}
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="absolute left-0 z-10 flex items-center pl-16 md:pl-24 lg:pl-32"
        style={{ width: "58%", top: "50%", transform: "translateY(-50%)" }}
        onClick={() => { if (!demandExtraRevealed && onDemandExtraReveal) onDemandExtraReveal() }}
        style={{ cursor: demandExtraRevealed ? "default" : "pointer", width: "58%", top: "50%", transform: "translateY(-50%)" }}
      >
        <motion.div variants={fadeInUp} className="flex flex-col items-start text-left gap-12">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold tracking-wide text-slate-400 md:text-xl">需求内容</h3>
            <h2 className="text-4xl font-bold leading-snug text-white md:text-5xl lg:text-6xl xl:text-7xl">
              <span className="text-[#77fbd1] block">新人礼页面</span>
              <span className="text-white block">引导用户去游戏专区</span>
            </h2>
          </div>
          <div className="min-h-[5.5rem]">
            <motion.div
              initial={false}
              animate={{ opacity: demandExtraRevealed ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-3"
            >
              <h3 className="text-lg font-semibold tracking-wide text-slate-400 md:text-xl">需求目标</h3>
              <p className="text-3xl md:text-4xl font-medium text-white leading-snug">提高新用户的下载转化率</p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* 右侧手机 — 顶部留出气泡间距，底部可超出裁切 */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="absolute right-0 top-[6.5rem] bottom-0 z-10 flex items-start justify-end pr-10 md:pr-14 lg:pr-20 pt-0"
      >
        <div
          className="relative overflow-hidden rounded-t-[2.8rem] rounded-b-[2.8rem] border-2 border-slate-600"
          style={{ width: "clamp(260px, 36cqw, 460px)", aspectRatio: "9/19.5" }}
        >
            {/* Notch */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-black/60 rounded-full z-10" />
            {/* Screenshot — 宽度填满容器，高度自然溢出，从顶部裁剪 */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/xinrenli.png"
              alt="新人礼页面截图"
              className="absolute top-0 left-0 w-full h-auto"
            />
            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-[#050B14] to-transparent" />
            {/* Home indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-white/30 rounded-full z-10" />
          </div>
      </motion.div>
    </section>
  )
}

// Section 4B: Page6 - 3387的新用户 完成新游戏下载需要几步？
function Section4B() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="relative h-full w-full snap-start flex items-center justify-center overflow-hidden px-6" style={{ backgroundColor: "#050B14" }}>
      <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-[#1b2cf4]/22 via-[#1b2cf4]/08 to-transparent" />
      <SectionDesignNavBubbles />

      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 flex flex-col items-center justify-center text-center"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight"
        >
          3387的新用户
        </motion.h2>
        <motion.h2
          variants={fadeInUp}
          className="mt-5 md:mt-6 text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight"
        >
          完成新游戏下载
          <span className="text-[#77fbd1]">需要几步</span>
          ❓
        </motion.h2>
      </motion.div>
    </section>
  )
}

// Section 5: Page7 - 数据漏斗
function Section5({
  funnelStep,
  dataMetricsRevealed,
  corePointRevealed,
  onAdvance,
}: {
  funnelStep: number
  dataMetricsRevealed: boolean
  corePointRevealed: boolean
  onAdvance: () => void
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const screens = [
    { step: "1", label: "1️⃣ 打开APP", src: "/image1.png" },
    { step: "2", label: "2️⃣ 领新人券", src: "/image2.png" },
    { step: "3", label: "3️⃣ 查看游戏", src: "/image3.png" },
    { step: "4", label: "4️⃣ 进入游戏详情页", src: "/image4.png" },
  ]

  return (
    <section className="relative h-full w-full snap-start flex flex-col items-center justify-between py-6 md:py-8 overflow-hidden px-6" style={{ backgroundColor: "#050B14" }}>
      <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-[#1b2cf4]/22 via-[#1b2cf4]/08 to-transparent" />
      <SectionDesignNavBubbles />

      {/* 左上角小字 */}
      <p className="absolute top-6 left-6 md:top-8 md:left-8 z-10 text-base md:text-lg text-slate-500">拆解用户流程，找到数据卡点</p>

      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 w-full flex-1 flex flex-col items-center justify-center gap-4 md:gap-6 cursor-pointer"
        onClick={onAdvance}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onAdvance() } }}
        aria-label="点击翻页"
      >
        <motion.div
          variants={fadeInUp}
          animate={{ y: corePointRevealed ? -16 : 0 }}
          transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
          className="flex flex-col items-center gap-4 md:gap-6 will-change-transform"
        >
        <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 md:gap-4 min-w-0">
          {screens.map((s, i) => {
            const isVisible = i <= funnelStep
            return (
              <motion.div
                key={i}
                initial={false}
                animate={{ opacity: isVisible ? 1 : 0, visibility: isVisible ? "visible" : "hidden" }}
                transition={{ duration: 0.3 }}
                className="flex items-center shrink-0"
                style={{ pointerEvents: isVisible ? "auto" : "none" }}
              >
                <div className="flex flex-col items-center">
                  <p className="mb-2 text-sm md:text-base lg:text-lg text-slate-400 font-medium">{s.label}</p>
                  <div className="h-[55cqh] md:h-[60cqh] aspect-[9/19] rounded-2xl md:rounded-3xl bg-[#111827] border border-white/5 overflow-hidden transition-all duration-300 hover:border-orange-400/30 hover:bg-white/8 relative">
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 md:w-10 h-1.5 bg-slate-700/50 rounded-full z-10" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={s.src} alt={s.label} className="w-full h-full object-cover object-top" />
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-6 md:w-8 h-1 bg-slate-600/50 rounded-full z-10" />
                  </div>
                </div>
                {i < 3 && <span className={`text-slate-600 text-xl md:text-2xl mx-1 md:mx-2 z-10 ${i < funnelStep ? "" : "invisible"}`}>{">"}</span>}
              </motion.div>
            )
          })}
        </motion.div>
        <div className="min-h-[4rem] flex items-center justify-center">
          <motion.div
            initial={false}
            animate={{ opacity: dataMetricsRevealed ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20 px-4"
          >
            <div className="flex items-center gap-3">
              <span className="text-lg md:text-2xl lg:text-3xl text-white">1️⃣→2️⃣ 新人券领取率：</span>
              <span className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#77fbd1]">43%</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-lg md:text-2xl lg:text-3xl text-white">1️⃣ →3️⃣ 查看游戏率：</span>
              <span className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#77fbd1]">76%</span>
            </div>
          </motion.div>
        </div>
        </motion.div>
      </motion.div>
      <AnimatePresence>
        {corePointRevealed && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.4 }}
            className="relative z-10 w-[95%] max-w-3xl -mt-8 md:-mt-12"
          >
            <div className="px-6 py-4 md:px-10 md:py-5 rounded-full bg-red-500/10 border-2 border-dashed border-red-500/40 backdrop-blur-sm text-center">
              <p className="text-base md:text-2xl lg:text-3xl font-bold text-red-400">核心卡点：24% 买量用户未见游戏即流失！</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

// Section 6: 破局共识
function Section6() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="relative h-full w-full snap-start flex items-center justify-center overflow-hidden px-6" style={{ backgroundColor: "#050B14" }}>
      {/* Deep sea wave gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-[#1b2cf4]/22 via-[#1b2cf4]/08 to-transparent" />
      <SectionDesignNavBubbles />

      {/* 左上角小字 */}
      <p className="absolute top-6 left-6 md:top-8 md:left-8 z-10 text-base md:text-lg text-slate-500">结合数据结果，再次明确需求策略</p>

      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 w-full max-w-7xl flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10"
      >
        {/* 左侧：3个独立模块，往右挪，框跟随文字长度，标签等宽左对齐，右侧留间距 */}
        <motion.div variants={fadeInUp} className="w-full md:w-[45%] flex flex-col gap-4 md:gap-5 md:pl-12 lg:pl-16 items-start">
          <div className="rounded-2xl md:rounded-3xl bg-[#111827] border border-white/5 pl-5 pr-6 md:pl-6 md:pr-8 py-5 md:py-6 inline-flex items-baseline gap-4 md:gap-6 w-fit">
            <span className="text-slate-500 text-base md:text-lg w-[5.5rem] md:w-24 shrink-0">业务目标</span>
            <span className="text-white text-lg md:text-xl lg:text-2xl font-medium">提高新用户下载转化率</span>
          </div>
          <div className="rounded-2xl md:rounded-3xl bg-[#111827] border border-white/5 pl-5 pr-6 md:pl-6 md:pr-8 py-5 md:py-6 inline-flex items-baseline gap-4 md:gap-6 w-fit">
            <span className="text-slate-500 text-base md:text-lg w-[5.5rem] md:w-24 shrink-0">策略1</span>
            <span className="text-white text-xl md:text-2xl lg:text-3xl font-medium whitespace-nowrap">新用户启动APP，直接<span className="text-[#77fbd1]">落地到游戏列表</span></span>
          </div>
          <div className="rounded-2xl md:rounded-3xl bg-[#111827] border border-white/5 pl-5 pr-6 md:pl-6 md:pr-8 py-5 md:py-6 inline-flex items-baseline gap-4 md:gap-6 w-fit">
            <span className="text-slate-500 text-base md:text-lg w-[5.5rem] md:w-24 shrink-0">策略2</span>
            <span className="text-white text-xl md:text-2xl lg:text-3xl font-medium whitespace-nowrap">新人券以<span className="text-[#77fbd1]">弹窗</span>的形式直接曝光</span>
          </div>
        </motion.div>

        {/* 右侧：手机模型 加大 */}
        <motion.div variants={fadeInUp} className="flex-shrink-0 w-full md:w-[55%] flex justify-center">
          <div className="h-[65cqh] md:h-[75cqh] aspect-[9/19] rounded-2xl md:rounded-3xl bg-[#111827] border border-white/5 overflow-hidden relative">
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 md:w-10 h-1.5 bg-slate-700/50 rounded-full z-10" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/image8.png" alt="策略展示" className="w-full h-full object-cover object-top" />
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-6 md:w-8 h-1 bg-slate-600/50 rounded-full z-10" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

// Section 7: 福格模型 - B = MAP 公式布局
function Section7() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="relative h-full w-full snap-start flex items-center justify-center overflow-hidden px-6" style={{ backgroundColor: "#050B14" }}>
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <SectionDesignNavBubbles />

      {/* 左上角小字 */}
      <p className="absolute top-6 left-6 md:top-8 md:left-8 z-10 text-base md:text-lg text-slate-500">用设计体验细节，承接业务目标</p>

      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 flex flex-col items-center gap-10"
      >
        {/* Title - ENLARGED */}
        <motion.h2 
          variants={fadeInUp}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center"
        >
          结合Fogg模型 进行设计助推
        </motion.h2>

        {/* B = MAP Formula - ENLARGED */}
        <motion.div 
          variants={fadeInUp}
          className="flex items-center gap-6 md:gap-10 lg:gap-12"
        >
          {/* B */}
          <div className="flex flex-col items-center">
            <span className="text-8xl md:text-9xl lg:text-[10rem] font-black text-slate-200">B</span>
            <span className="text-white text-lg md:text-xl mt-3">行为</span>
          </div>

          {/* = */}
          <div className="flex flex-col items-center">
            <span className="text-6xl md:text-7xl lg:text-8xl font-bold text-slate-400">=</span>
            <span className="text-slate-500 text-lg md:text-xl mt-3">发生</span>
          </div>

          {/* M */}
          <div className="flex flex-col items-center">
            <span className="text-8xl md:text-9xl lg:text-[10rem] font-black text-[#77fbd1]">M</span>
            <span className="text-[#77fbd1] text-lg md:text-xl mt-3">动机</span>
          </div>

          {/* * */}
          <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-500">*</span>

          {/* A */}
          <div className="flex flex-col items-center">
            <span className="text-8xl md:text-9xl lg:text-[10rem] font-black text-orange-400">A</span>
            <span className="text-orange-400 text-lg md:text-xl mt-3">能力</span>
          </div>

          {/* * */}
          <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-500">*</span>

          {/* P */}
          <div className="flex flex-col items-center">
            <span className="text-8xl md:text-9xl lg:text-[10rem] font-black text-[#77fbd1]">P</span>
            <span className="text-[#77fbd1] text-lg md:text-xl mt-3">提示</span>
          </div>
        </motion.div>

        {/* Bottom text */}
        <motion.p 
          variants={fadeInUp}
          className="text-slate-400 text-lg md:text-xl tracking-wide mt-4"
        >
          同时出现的时候
        </motion.p>

        {/* Subtitle */}
        <motion.p 
          variants={fadeInUp}
          className="text-slate-600 text-sm tracking-wide"
        >
          福格行为模型 Fogg Behavior Model
        </motion.p>
      </motion.div>
    </section>
  )
}

// Section 7b: 设计体验细节 - 左图右文 (新增 page10)
function Section7b({ step, onAdvance }: { step: number; onAdvance: () => void }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const cards = [
    { title: <><span className="text-[#77fbd1]">稀缺性</span><span className="text-white"> 增加动机</span></>, sub: "抽奖机、超过92%新人、低奖励轮播" },
    { title: <><span className="text-[#77fbd1]">损失厌恶</span><span className="text-white"> 增加动机</span></>, sub: "倒计时、已放入账户、二次挽留弹窗" },
    { title: <><span className="text-orange-400">增强引导</span><span className="text-white"> 增加提示</span></>, sub: "立即解锁、按钮动效" },
  ]

  return (
    <section className="relative h-full w-full snap-start flex items-center justify-center overflow-hidden px-6" style={{ backgroundColor: "#050B14" }}>
      <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-[#1b2cf4]/22 via-[#1b2cf4]/08 to-transparent" />
      <SectionDesignNavBubbles />

      {/* 左上角小字 */}
      <p className="absolute top-6 left-6 md:top-8 md:left-8 z-10 text-base md:text-lg text-slate-500">用设计体验细节，承接业务目标</p>

      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        onClick={onAdvance}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onAdvance() } }}
        aria-label="点击翻页"
        className="relative z-10 w-full max-w-7xl h-[85cqh] flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 cursor-pointer"
      >
        {/* 左侧：image9 宽度为图片本身 */}
        <motion.div variants={fadeInUp} className="flex items-center justify-center flex-shrink-0">
          <div className="rounded-2xl md:rounded-3xl overflow-hidden border border-white/5 bg-[#111827] w-fit max-h-[45cqh] md:max-h-[80cqh]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/image9.png" alt="设计体验细节" className="max-h-[45cqh] md:max-h-[80cqh] w-auto object-contain block" />
          </div>
        </motion.div>

        {/* 右侧：3个模块，点击逐个展示，预留空间避免位移 */}
        <motion.div variants={fadeInUp} className="flex flex-col gap-4 md:gap-5 md:pl-4 flex-1 min-w-0 min-h-[280px] md:min-h-[320px] justify-center">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={false}
              animate={{ opacity: step > i ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl md:rounded-3xl bg-[#111827] border border-white/5 pl-5 pr-6 md:pl-6 md:pr-8 py-5 md:py-6 w-fit"
            >
              <p className="text-xl md:text-2xl lg:text-3xl font-medium">{card.title}</p>
              <p className="mt-2 text-sm md:text-base text-slate-400">{card.sub}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

// Section 8: 战果高光 - 7:3 布局，左侧2个手机，右侧数字 (page11)
function Section8() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="relative h-full w-full snap-start flex items-center justify-center overflow-hidden px-6" style={{ backgroundColor: "#050B14" }}>
      <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-[#1b2cf4]/22 via-[#1b2cf4]/08 to-transparent" />
      <SectionDesignNavBubbles />

      {/* 左上角小字 */}
      <p className="absolute top-6 left-6 md:top-8 md:left-8 z-10 text-base md:text-lg text-slate-500">数据验收</p>

      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 w-full max-w-7xl flex flex-col md:flex-row gap-10 items-center px-4"
      >
        {/* Left side - 2 phone placeholders (70%) - 放大 */}
        <motion.div variants={fadeInUp} className="w-full md:w-[70%] flex items-center justify-center gap-6 md:gap-10">
          {/* Phone 1 */}
          <div 
            className="h-[58cqh] md:h-[72cqh] aspect-[9/19] rounded-2xl md:rounded-3xl bg-[#111827] border border-white/5 overflow-hidden relative transition-all duration-300 hover:border-orange-400/30"
          >
            <div className="absolute top-3 md:top-4 left-1/2 -translate-x-1/2 w-10 md:w-14 h-1.5 md:h-2 bg-slate-700/50 rounded-full z-10" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/image1.png" alt="优化前" className="w-full h-full object-cover object-top" />
            <div className="absolute bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 w-8 md:w-12 h-1 bg-slate-600/50 rounded-full z-10" />
          </div>

          {/* Arrow */}
          <motion.div
            animate={{ x: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <svg className="w-8 h-8 md:w-12 md:h-12 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.div>

          {/* Phone 2 */}
          <div 
            className="h-[58cqh] md:h-[72cqh] aspect-[9/19] rounded-2xl md:rounded-3xl bg-white/5 backdrop-blur-none border border-orange-400/30 overflow-hidden relative transition-all duration-300 hover:border-orange-400/50"
          >
            <div className="absolute top-3 md:top-4 left-1/2 -translate-x-1/2 w-10 md:w-14 h-1.5 md:h-2 bg-slate-700/50 rounded-full z-10" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/image5.png" alt="优化后" className="w-full h-full object-cover object-top" />
            <div className="absolute bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 w-8 md:w-12 h-1 bg-slate-600/50 rounded-full z-10" />
          </div>
        </motion.div>

        {/* Right side - Big numbers (30%) - ENLARGED */}
        <div className="w-full md:w-[30%] flex flex-col gap-10 items-center justify-center">
          {/* Metric 1 */}
          <motion.div variants={fadeInUp} className="text-center">
            <p className="text-slate-500 text-base uppercase tracking-widest mb-3">新人券领取率</p>
            <div className="flex flex-col items-center gap-3">
              <span className="text-3xl md:text-4xl text-slate-500 font-light">42.75%</span>
              <svg className="w-8 h-8 text-orange-400 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <span className="text-5xl md:text-7xl font-bold text-[#77fbd1]">56%</span>
            </div>
          </motion.div>

          {/* Metric 2 */}
          <motion.div variants={fadeInUp} className="text-center">
            <p className="text-slate-500 text-base uppercase tracking-widest mb-3">下载转化率</p>
            <div className="flex flex-col items-center gap-3">
              <span className="text-3xl md:text-4xl text-slate-500 font-light">45%</span>
              <svg className="w-8 h-8 text-orange-400 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <span className="text-5xl md:text-7xl font-bold text-[#77fbd1]">48%</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

// Section 9: 经验提炼 - 翻页动画 (page12)
function Section9({ step, onAdvance }: { step: number; onAdvance: () => void }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section 
      className="relative h-full w-full snap-start flex items-center justify-center overflow-hidden px-6 cursor-pointer" 
      style={{ backgroundColor: "#050B14" }}
      onClick={onAdvance}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onAdvance() } }}
      aria-label="点击翻页"
    >
      <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-[#1b2cf4]/22 via-[#1b2cf4]/08 to-transparent" />
      <SectionDesignNavBubbles />

      {/* 左上角小字 */}
      <p className="absolute top-6 left-6 md:top-8 md:left-8 z-10 text-base md:text-lg text-slate-500">沉淀可复用的团队思考模型</p>

      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 w-full h-full"
      >
        {/* Step0: 全屏放大 image6 - 进入视口时触发显示动画 */}
        <motion.div
          initial={false}
          animate={{ opacity: step === 0 ? 1 : 0, scale: step === 0 ? 1 : 0.5 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className={`absolute inset-0 flex items-center justify-center px-4 ${step === 0 ? "" : "pointer-events-none"}`}
        >
          <motion.div 
            className="w-full max-w-[calc(100cqw-3rem)]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView && step === 0 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/image6.png" alt="需求辨析模型" className="w-full h-auto object-contain block" />
          </motion.div>
        </motion.div>

        {/* Step1/2: 双栏布局 */}
        <motion.div
          initial={false}
          animate={{ opacity: step >= 1 ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className={`absolute inset-0 flex items-center justify-center px-4 ${step >= 1 ? "" : "pointer-events-none"}`}
        >
          <div className="flex flex-col md:flex-row gap-8 md:gap-10 w-full max-w-7xl justify-center">
          {/* Left: 需求辨析模型 - 无位移直接展示 */}
          <motion.div 
            initial={false}
            animate={{ opacity: step >= 1 ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-5 w-fit"
          >
            <span className="inline-flex self-start px-5 py-2.5 rounded-full text-lg md:text-xl font-medium bg-gradient-to-r from-[#1b2cf4]/20 to-cyan-500/20 border border-[#1b2cf4]/30 text-[#5b7fff]">
              需求辨析模型
            </span>
            <div className="rounded-3xl bg-[#111827] border border-white/5 overflow-hidden w-fit max-h-[70cqh]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/image6.png" alt="需求辨析模型" className="max-h-[60cqh] md:max-h-[70cqh] w-auto object-contain block" />
            </div>
          </motion.div>

          {/* Right: 用户行为分析模型 - step2 显示 */}
          <motion.div
            initial={false}
            animate={{ opacity: step >= 2 ? 1 : 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col gap-5 w-fit"
          >
            <span className="inline-flex self-start px-5 py-2.5 rounded-full text-lg md:text-xl font-medium bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 text-purple-300">
              用户行为分析模型
            </span>
            <div className="rounded-3xl bg-[#111827] border border-white/5 overflow-hidden w-fit max-h-[70cqh]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/image7.png" alt="用户行为分析模型" className="max-h-[60cqh] md:max-h-[70cqh] w-auto object-contain block" />
            </div>
          </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

// Section 10: 总结卡片 (Bento Box) - page13
function Section10() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [hasBeenVisible, setHasBeenVisible] = useState(false)
  useEffect(() => {
    if (isInView) setHasBeenVisible(true)
  }, [isInView])

  const summaryCards = [
    { title: "更广" },
    { title: "更细腻" },
    { title: "更高效" },
  ]

  return (
    <section className="relative h-full w-full snap-start flex flex-col items-center justify-center overflow-hidden px-6" style={{ backgroundColor: "#050B14" }}>
      <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-[#1b2cf4]/22 via-[#1b2cf4]/08 to-transparent" />
      <SectionDesignNavBubbles />

      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={hasBeenVisible ? "visible" : "hidden"}
        className="relative z-10 w-full max-w-6xl px-4 flex flex-col items-center gap-8 md:gap-10"
      >
        {/* 页面上方大字 */}
        <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white text-center">
          以数据增长为驱动，以用户为中心
        </motion.h2>

        {/* Bento Grid - 3 equal cards 高度降低 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {summaryCards.map((card, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial={false}
              className="aspect-[4/3] max-h-[220px] md:max-h-[260px] p-6 md:p-8 rounded-3xl bg-[#111827] border border-white/5 flex flex-col items-center justify-center transition-all duration-500 hover:border-white/25 hover:bg-white/8"
            >
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#77fbd1]">{card.title}</h3>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

// Section 10b：第二章节过渡页 — 布局同 page22 规范（原独立 page3 样式，已与 page3 / page22 统一）
function Section10b() {
  return (
    <ChapterTransitionLayout
      watermarkDigit="02"
      chapterLabel="Chapter 02"
      title="02 AI提效"
      subtitle="以AI赋能设计"
      activeModule={2}
    />
  )
}

// Section 11 已移除 (原 page15)

// Section 12: 定制 GEM 管家（page15）
function Section12({ showRight }: { showRight: boolean }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const lines = [
    "不确定需求价值",
    "如何最小化验证想法",
    "不知道怎么定数值",
    "选择方案困难",
    "新功能至少需包含哪些模块",
    "数据遇到瓶颈，思路卡壳",
  ]

  return (
    <section className="relative h-full w-full snap-start flex flex-col items-center justify-start overflow-hidden px-6 pb-12 pt-20 md:pt-28" style={{ backgroundColor: "#050B14" }}>
      <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-[#1b2cf4]/22 via-[#1b2cf4]/08 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-[#1b2cf4]/10 rounded-full blur-[100px]" />
      <SectionDesignNavBubblesAI />

      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 mt-4 flex w-full max-w-6xl flex-col gap-6 px-0 md:mt-6"
      >
        {/* 标题：与 page16（Section13）位置、字号统一 */}
        <motion.h2 variants={fadeInUp} className="text-2xl font-bold text-white md:text-3xl lg:text-4xl">
          {"定制 3387 专属 GEM 管家"}
        </motion.h2>

        {/* 左图右文：左图略小，右侧左对齐并靠近图片 */}
        <motion.div variants={fadeInUp} className="flex flex-col gap-6 md:flex-row md:items-start md:gap-4 lg:gap-5">
          {/* Left：略缩小尺寸 */}
          <div className="flex shrink-0 justify-center md:justify-start md:max-w-[min(38%,420px)]">
            <div className="w-fit max-w-full rounded-2xl border border-white/5 bg-[#111827] p-2 transition-all duration-300 hover:border-[#1b2cf4]/30 md:rounded-3xl md:p-2.5">
              <Image
                src="/image26.png"
                alt="产品业务数据语料库"
                width={1400}
                height={1000}
                className="h-auto max-h-[min(52cqh,560px)] w-auto max-w-full object-contain"
                sizes="(max-width: 768px) 92vw, 38vw"
                unoptimized
              />
            </div>
          </div>

          {/* Right：字号加大；桌面端两列左右排布 */}
          <div className="flex min-h-[min(50cqh,420px)] min-w-0 flex-1 flex-col justify-center gap-3.5 md:min-h-[min(58cqh,520px)] md:gap-4">
            <div className="grid w-full grid-cols-1 items-start gap-3 md:grid-cols-2 md:gap-x-4 md:gap-y-3.5 lg:gap-x-5">
              {lines.map((line) => (
                <div
                  key={line}
                  className={`w-full max-w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-left text-lg leading-relaxed text-slate-100 transition-opacity duration-300 md:rounded-2xl md:px-5 md:py-4 md:text-xl lg:px-6 lg:py-4 lg:text-2xl ${
                    showRight ? "opacity-100" : "pointer-events-none opacity-0"
                  }`}
                >
                  {line}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

// Section 13: AI 出方案 Demo (1) - page16
function Section13() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const designText = `设计一个活动
界面元素：一个小勇士+怪物
玩法：通过砍怪来获得宝箱奖励，当把怪砍死时，可以获得宝箱奖励。
技能：通过看广告可以获得自动砍怪，等于不用手动砍了，再次返回APP就可以领取离线收益，看广告可以获得xx分钟，可能是半小时、1小时这种。玩家可以看10+个广告
宝箱：如果是有看广告的用户，宝箱可以开出金币，如果是手动点击开宝箱或者使用第三方连点器开宝箱的用户，开出来的宝箱只有一些虚拟道具（不同的武器皮肤，没有什么作用，仅收集）。宝箱可以随机爆率，今天可能少一些，明天可能多一些，增加不确定性。
新用户设计：进入的时候，引导看广告可以立马砍死一只怪获得宝箱，以此来提升第一次的爽感！
数值设定：预计看广告的用户一天可以砍死好几只，而不看广告的用户可能就是1-2只
金币兑换：金币可以兑换成平台币或提现，提现的话满10可以提现，兑换比例为1:1，而兑换成平台币可以按1:1.5的倍率，且支持随时兑换，希望引导用户更多进行平台币兑换而非提现`

  return (
    <section className="relative h-full w-full snap-start flex flex-col items-center justify-start overflow-hidden px-6 pb-12 pt-20 md:pt-28" style={{ backgroundColor: "#050B14" }}>
      <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-[#1b2cf4]/22 via-[#1b2cf4]/08 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-[#1b2cf4]/10 rounded-full blur-[100px]" />
      <SectionDesignNavBubblesAI />

      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 w-full max-w-6xl flex flex-col gap-6 mt-4 md:mt-6"
      >
        {/* Title */}
        <motion.h2 
          variants={fadeInUp}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-white"
        >
          AI 快速生成可交互 Demo
        </motion.h2>

        {/* 左文右图：桌面端左右列垂直居中对齐（非顶对齐） */}
        <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-6 md:items-center">
          {/* Left - 文字框：仅包裹文字高度 */}
          <div 
            className="w-full md:w-[58%] md:flex-shrink-0 -mt-3 md:-mt-6 rounded-3xl bg-[#111827] border border-white/5 p-6 md:p-8 h-auto transition-all duration-300 hover:border-green-400/30"
          >
            <pre className="text-slate-300 text-sm md:text-base leading-relaxed whitespace-pre-wrap font-sans">
              {designText}
            </pre>
          </div>

          {/* Right - GIF1.gif：更大尺寸，宽度随图片比例；整体上移 */}
          <div className="w-full md:flex-1 flex justify-center -mt-5 md:-mt-16 lg:-mt-20">
            <div 
              className="w-fit max-w-full rounded-3xl bg-[#111827] border border-white/5 overflow-hidden transition-all duration-300 hover:border-cyan-400/30"
            >
              <img 
                src="/GIF1.gif" 
                alt="AI Demo" 
                className="block h-auto w-auto max-w-full max-h-[min(88cqh,calc(100cqh-160px))] object-contain object-center"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

// Section 14: AI 出方案 Demo (2) - page17
function Section14() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="relative h-full w-full snap-start flex flex-col items-center justify-start overflow-hidden px-6 pb-12 pt-20 md:pt-28" style={{ backgroundColor: "#050B14" }}>
      <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-[#1b2cf4]/22 via-[#1b2cf4]/08 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-[#1b2cf4]/10 rounded-full blur-[100px]" />
      <SectionDesignNavBubblesAI />

      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 w-full max-w-6xl flex flex-col gap-6 mt-0 md:mt-1"
      >
        {/* Title（与 page16 同一位置） */}
        <motion.h2 
          variants={fadeInUp}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-white"
        >
          AI 快速生成可交互 Demo
        </motion.h2>

        {/* 单图铺满 */}
        <motion.div variants={fadeInUp} className="w-full">
          <div className="relative w-full overflow-hidden rounded-2xl border border-white/5 bg-[#111827] md:rounded-3xl h-[min(72cqh,calc(100cqh-11rem))] min-h-[280px]">
            <img
              src="/image13.png"
              alt="AI 快速生成可交互 Demo"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

// page18：福格行为模型 — 布局同 page16（Section13）
function SectionFoggBehavior() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const designTextBody = `我是一名0.1折游戏平台的交互设计师
我需要设计一个优惠券弹窗，在新用户首次启动APP时告诉他获得了6张不同面值的优惠券（60元、110元、180元、330元、500元、1000元），这些优惠券可以在游戏充值中使用上。
逻辑说明：弹窗需要支持用户选择是否领取`

  const designTextGoal = "设计目标：提高优惠券的领取率"

  return (
    <section className="relative h-full w-full snap-start flex flex-col items-center justify-start overflow-hidden px-6 pb-12 pt-20 md:pt-28" style={{ backgroundColor: "#050B14" }}>
      <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-[#1b2cf4]/22 via-[#1b2cf4]/08 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-[#1b2cf4]/10 rounded-full blur-[100px]" />
      <SectionDesignNavBubblesAI />

      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 w-full max-w-6xl flex flex-col gap-6 mt-4 md:mt-6"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-white"
        >
          AI辅助设计助推
        </motion.h2>

        <motion.div variants={fadeInUp} className="w-full md:max-w-md">
          <div
            className="rounded-3xl bg-[#111827] border border-white/5 p-5 md:p-7 h-auto transition-all duration-300 hover:border-green-400/30"
          >
            <div className="text-slate-300 text-base md:text-lg leading-relaxed font-sans whitespace-pre-wrap">
              {designTextBody}
            </div>
            <p className="mt-4 text-lg md:text-xl lg:text-[1.35rem] font-semibold leading-snug text-[#77fbd1]">
              {designTextGoal}
            </p>
          </div>
        </motion.div>

        {/* 小屏：图在文案下方 */}
        <motion.div variants={fadeInUp} className="flex justify-center md:hidden">
          <div className="w-fit max-w-full rounded-2xl bg-[#111827] border border-white/5 overflow-hidden">
            <img
              src="/image12.png"
              alt="设计助推"
              className="block h-auto w-full max-h-[min(62cqh,calc(100cqh-20rem))] object-contain object-center"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* 右列：顶区避开定位气泡，其下垂直居中；略缩小（仅 md+） */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="pointer-events-none absolute left-[24%] right-14 top-24 bottom-10 z-10 hidden md:flex md:items-center md:justify-end md:pr-0 lg:left-[26%] lg:right-20 lg:top-32 lg:bottom-12"
      >
        <div className="pointer-events-auto w-fit max-w-[min(100%,52rem)] rounded-3xl bg-[#111827] border border-white/5 overflow-hidden transition-all duration-300 hover:border-cyan-400/30 md:-translate-x-10 lg:-translate-x-14">
          <img
            src="/image12.png"
            alt="设计助推"
            className="block h-auto w-auto max-w-full object-contain object-center max-h-[min(74cqh,calc(100cqh-10rem))] md:max-h-[min(78cqh,calc(100cqh-9rem))]"
          />
        </div>
      </motion.div>
    </section>
  )
}

// page19：游戏化文案对比；→ 与右侧 AI 气泡需点击翻页器/空格后再展示
function SectionAIGameCopy({ showArrowAndAI }: { showArrowAndAI: boolean }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const rows: { original: string; ai: string }[] = [
    { original: "排行榜虚位以待", ai: "趁现在没人，随便冲点就能霸榜" },
    { original: "已获得1小时挂机时长", ai: "1小时全自动砍怪已开启，老哥可以去忙了" },
    { original: "金币可支持兑换、提现", ai: "金币别闲置，可直接提现或兑换平台币" },
  ]

  return (
    <section className="relative h-full w-full snap-start flex flex-col items-center justify-start overflow-hidden px-6 pb-12 pt-20 md:pt-28" style={{ backgroundColor: "#050B14" }}>
      <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-[#1b2cf4]/22 via-[#1b2cf4]/08 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-[#1b2cf4]/10 rounded-full blur-[100px]" />
      <SectionDesignNavBubblesAI />

      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 w-full max-w-6xl flex flex-col mt-6 md:mt-10"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-white"
        >
          AI辅助游戏化文案拟写
        </motion.h2>

        {/* 三列始终占位，仅用透明度/visibility 切换，避免展开时版面跳动 */}
        <motion.div
          variants={fadeInUp}
          className="mx-auto mt-10 w-fit max-w-full md:mt-12"
        >
          <div className="grid grid-cols-1 gap-y-7 md:grid-cols-[280px_auto_auto] md:gap-y-9 md:gap-x-5 lg:gap-x-6">
            <p className="pb-1 text-center text-lg font-bold tracking-wide text-slate-400 md:text-xl lg:text-2xl">
              原文案
            </p>
            <span className="hidden min-h-[1.5rem] md:block md:min-w-[2rem]" aria-hidden />
            <p
              className={`pb-1 text-center text-lg font-bold tracking-wide text-[#77fbd1] transition-opacity duration-300 md:text-xl lg:text-2xl ${
                showArrowAndAI ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            >
              AI生成文案
            </p>

            {rows.map((row, i) => (
              <Fragment key={i}>
                <div className="flex w-full max-w-[280px] items-center rounded-2xl border border-white/5 bg-[#111827] px-4 py-4 transition-all duration-300 hover:border-[#77fbd1]/40 md:rounded-3xl md:px-5 md:py-5">
                  <p className="w-full text-base leading-relaxed text-slate-200 md:text-lg lg:text-xl">{row.original}</p>
                </div>
                <div
                  className={`flex min-h-[2.5rem] items-center justify-center py-1 transition-opacity duration-300 md:min-w-[2rem] md:py-0 ${
                    showArrowAndAI ? "opacity-100" : "pointer-events-none opacity-0"
                  }`}
                  aria-hidden
                >
                  <span className="text-2xl font-light text-[#77fbd1] md:text-3xl lg:text-4xl">→</span>
                </div>
                <div
                  className={`w-full overflow-x-auto rounded-2xl border border-[#77fbd1]/35 bg-white/5 px-4 py-4 backdrop-blur-none transition-opacity duration-300 [-webkit-overflow-scrolling:touch] md:rounded-3xl md:px-5 md:py-5 ${
                    showArrowAndAI ? "opacity-100" : "pointer-events-none opacity-0"
                  }`}
                >
                  <p className="whitespace-nowrap text-base font-medium leading-normal text-white md:text-lg lg:text-xl xl:text-2xl">
                    {row.ai}
                  </p>
                </div>
              </Fragment>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

// Section 16: AI 管理动作；revealStep 0=左右均隐藏，1=左侧「小组管理动作」，2=右侧「每日个人复盘」（占位不位移）
function Section16({ revealStep }: { revealStep: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const showLeft = revealStep >= 1
  const showRight = revealStep >= 2

  return (
    <section className="relative h-full w-full snap-start flex flex-col items-center justify-center overflow-hidden px-6 py-10 md:py-12" style={{ backgroundColor: "#050B14" }}>
      <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-[#1b2cf4]/22 via-[#1b2cf4]/08 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-[#1b2cf4]/10 rounded-full blur-[100px]" />
      <SectionDesignNavBubblesAI />

      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 flex w-full max-w-6xl flex-col gap-5 md:gap-6"
      >
        {/* Title */}
        <motion.h2
          variants={fadeInUp}
          className="shrink-0 text-center text-3xl font-bold text-white md:text-4xl lg:text-5xl"
        >
          AI 辅助团队管理与自我复盘
        </motion.h2>

        {/* Two equal cards */}
        <motion.div variants={fadeInUp} className="flex flex-col gap-5 md:flex-row md:gap-6">

          {/* Left：小组管理动作 */}
          <div
            className={`flex flex-1 flex-col rounded-2xl border border-white/8 bg-[#0d1623] px-7 py-6 transition-opacity duration-300 hover:border-[#1b2cf4]/30 md:rounded-3xl md:px-8 md:py-7 ${
              showLeft ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <p className="mb-5 text-center text-xl font-bold tracking-wide text-white md:mb-6 md:text-2xl">
              小组管理动作
            </p>
            <ul className="flex flex-col justify-center gap-3 md:gap-4">
              {[
                "如何筛选简历",
                "如何拟写更有挑战的面试题",
                "如何安排新人考核",
                "如何设定好设计主题",
                "如何进行新人谈话",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] px-5 py-3 text-lg text-slate-200 md:text-xl lg:text-2xl"
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#1b2cf4]" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right：每日个人复盘 — 整块随翻页器显示，占位不位移 */}
          <div
            className={`flex flex-1 flex-col items-center rounded-2xl border border-white/8 bg-[#0d1623] px-7 py-6 transition-opacity duration-300 md:rounded-3xl md:px-8 md:py-7 ${
              showRight ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <p className="mb-4 shrink-0 text-center text-xl font-bold tracking-wide text-white md:mb-5 md:text-2xl">
              每日个人复盘
            </p>
            <div className="flex min-h-0 w-full flex-1 items-center justify-center">
              <div className="w-fit max-w-full overflow-hidden rounded-xl border border-white/10 bg-[#111827] p-1.5 md:rounded-2xl md:p-2">
                <Image
                  src="/image17.png"
                  alt="每日个人复盘"
                  width={1200}
                  height={900}
                  className="h-auto max-h-[min(34cqh,380px)] w-auto max-w-full object-contain"
                  sizes="(max-width: 768px) 90vw, 42vw"
                  unoptimized
                />
              </div>
            </div>
            <div className="mt-4 flex shrink-0 flex-wrap items-center justify-center gap-2 md:mt-5 md:gap-3">
              <span className="rounded-full border border-[#1b2cf4] bg-[#1b2cf4] px-5 py-2 text-base font-semibold text-white shadow shadow-[#1b2cf4]/30 md:px-6 md:text-lg">
                复盘好的行动
              </span>
              <span className="rounded-full border border-white/20 bg-white/5 px-5 py-2 text-base font-medium text-slate-200 md:px-6 md:text-lg">
                优化下一步
              </span>
              <span className="rounded-full border border-white/20 bg-white/5 px-5 py-2 text-base font-medium text-slate-200 md:px-6 md:text-lg">
                情绪舒缓
              </span>
            </div>
          </div>

        </motion.div>
      </motion.div>
    </section>
  )
}

// Section 17: 番茄钟与护城河（page21）；phoneStep 0=仅初版，1=+「>」+1.0，2=+「>」+2.0；均占位避免跳动
function Section17({
  showInsight,
  phoneStep,
}: {
  showInsight: boolean
  phoneStep: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const phones: { label: string; src: string }[] = [
    { label: "初版", src: "/image14.png" },
    { label: "1.0", src: "/image15.jpg" },
    { label: "2.0", src: "/image16.jpg" },
  ]

  return (
    <section className="relative flex h-full w-full snap-start flex-col overflow-hidden px-5 py-6 md:px-8 md:py-8 lg:px-10 xl:px-12" style={{ backgroundColor: "#050B14" }}>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-green-500/10 rounded-full blur-[120px]" />
      <SectionDesignNavBubblesAI />

      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 flex min-h-0 w-full max-w-[1800px] flex-1 flex-col gap-4 lg:flex-row lg:items-stretch lg:gap-4 xl:gap-6"
      >
        {/* 左侧：整体偏左；标题与图片区拉开间距；「>」与图片同列垂直居中（grid 第二行） */}
        <div className="flex min-h-0 min-w-0 flex-1 flex-col justify-center gap-4 pl-4 md:pl-10 lg:pl-12 lg:pr-2 xl:pl-16">
          <motion.h2
            variants={fadeInUp}
            className="mt-6 shrink-0 text-left text-2xl font-bold text-white md:mt-10 md:text-3xl lg:mt-12 lg:text-4xl"
          >
            v0+cursor开发番茄待办APP
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="mt-6 min-h-0 flex-1 overflow-x-auto md:mt-8 lg:mt-10"
          >
            <div className="flex h-full w-max items-start gap-4 md:gap-x-2 lg:gap-x-3">
            {phones.map((phone, i) => {
              const segmentVisible = i === 0 || phoneStep >= i
              if (i === 0) {
                return (
                  <div
                    key={phone.src}
                    className={`flex w-fit flex-col items-start gap-3 transition-opacity duration-300 ${
                      segmentVisible ? "opacity-100" : "pointer-events-none opacity-0"
                    }`}
                  >
                    <p className="w-full text-left text-base font-bold text-white md:text-lg lg:text-xl">
                      {phone.label}
                    </p>
                    <div className="w-fit overflow-hidden rounded-lg border border-white/10 bg-transparent md:rounded-xl [&_img]:block">
                      <Image
                        src={phone.src}
                        alt={phone.label}
                        width={720}
                        height={1280}
                        className="h-auto max-h-[min(56cqh,760px)] w-auto min-w-[160px] max-w-[min(92cqw,340px)] object-contain object-left md:max-h-[min(60cqh,820px)] md:max-w-[min(28cqw,360px)] lg:max-w-[min(26cqw,380px)]"
                        sizes="(max-width: 768px) 92vw, (max-width: 1200px) 28vw, 380px"
                        unoptimized
                        priority
                      />
                    </div>
                  </div>
                )
              }
              return (
                <div
                  key={phone.src}
                  className={`grid w-fit grid-cols-[auto_auto] gap-x-2 gap-y-2 transition-opacity duration-300 md:gap-x-3 lg:gap-x-4 ${
                    segmentVisible ? "opacity-100" : "pointer-events-none opacity-0"
                  }`}
                >
                  {/* Row 1: 空占位 + 标签 */}
                  <div aria-hidden />
                  <p className="text-left text-base font-bold text-white md:text-lg lg:text-xl">
                    {phone.label}
                  </p>
                  {/* Row 2: > + 图片（「>」self-stretch 后 flex items-center 实现垂直居中） */}
                  <div className="flex items-center justify-center self-stretch text-slate-500 md:px-0.5 lg:px-1">
                    <span className="text-xl font-light md:text-2xl lg:text-3xl">&gt;</span>
                  </div>
                  <div className="w-fit overflow-hidden rounded-lg border border-white/10 bg-transparent md:rounded-xl [&_img]:block">
                    <Image
                      src={phone.src}
                      alt={phone.label}
                      width={720}
                      height={1280}
                      className="h-auto max-h-[min(56cqh,760px)] w-auto min-w-[160px] max-w-[min(92cqw,340px)] object-contain object-left md:max-h-[min(60cqh,820px)] md:max-w-[min(28cqw,360px)] lg:max-w-[min(26cqw,380px)]"
                      sizes="(max-width: 768px) 92vw, (max-width: 1200px) 28vw, 380px"
                      unoptimized
                      priority
                    />
                  </div>
                </div>
              )
            })}
            </div>
          </motion.div>
        </div>

        {/* 右侧：靠近页面右边缘，不叠压左侧图片 */}
        <div className="relative z-10 flex w-full shrink-0 flex-col justify-center pr-6 md:pr-8 lg:w-auto lg:min-w-[280px] lg:max-w-[420px] lg:self-stretch lg:py-8 lg:pr-10 xl:pr-14">
          <div className="flex min-h-[180px] flex-1 flex-col justify-center lg:min-h-[220px]">
            <div
              className={`rounded-2xl border border-green-400/30 bg-white/5 px-5 py-6 text-center transition-opacity duration-500 md:px-6 md:py-7 ${
                showInsight ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
              aria-hidden={!showInsight}
            >
              <p className="font-semibold leading-relaxed text-white">
                <span className="block whitespace-nowrap text-base text-slate-300 md:text-lg lg:text-xl">AI时代更需要</span>
                <span className="mt-3 block whitespace-nowrap text-xl font-bold text-[#77fbd1] md:text-2xl lg:text-3xl">产品思维与体验敏感度</span>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

// page22：第三章节过渡页 — 使用 ChapterTransitionLayout（与 page3、第二章节过渡页同一规范）
function SectionTeamBuildTransition() {
  return (
    <ChapterTransitionLayout
      watermarkDigit="03"
      chapterLabel="Chapter 03"
      title="03 团队建设"
      subtitle="理顺队伍，让组员长起来"
      activeModule={3}
    />
  )
}

// page28：第4章节过渡页 — ChapterTransitionLayout 统一规范
function SectionChapterFutureTransition() {
  return (
    <ChapterTransitionLayout
      watermarkDigit="04"
      chapterLabel="Chapter 04"
      title="04 未来计划"
      subtitle="以终为始，持续迭代"
      activeModule={4}
    />
  )
}

// Section 18: 模块开场 - 团队生长
function Section18() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="relative h-full w-full snap-start flex items-center justify-center overflow-hidden px-6" style={{ backgroundColor: "#050B14" }}>
      {/* Deep sea wave gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-[#1b2cf4]/22 via-[#1b2cf4]/08 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-[#1b2cf4]/10 via-cyan-500/10 to-green-500/10 rounded-full blur-[120px]" />

      <ChapterTransitionNavBubbles active={3} />

      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 flex flex-col items-center gap-8"
      >
        {/* Main title — 两行；「标准化」「共成长」绿色 */}
        <motion.h2
          variants={fadeInUp}
          className="text-center text-4xl font-bold leading-relaxed text-white md:text-6xl lg:text-7xl xl:text-[5.5rem]"
        >
          <span className="block">应对50%人员更替</span>
          <span className="mt-4 block md:mt-5">
            从<span className="text-[#77fbd1]">标准化</span>到<span className="text-[#77fbd1]">共成长</span>
          </span>
        </motion.h2>
      </motion.div>
    </section>
  )
}

// Section 19: 标准化基建 - 4大资产（上文下图，按键直接切换无滑动动画）
function Section19({ cardStep }: { cardStep: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const assets = [
    { num: "1", title: "项目协作文档",   src: "/image22.png" },
    { num: "2", title: "新人培养计划",   src: "/image24.png" },
    { num: "3", title: "试用期考察表",   src: "/image23.png" },
    { num: "4", title: "数据分析验收表", src: "/image20.png" },
  ]
  const asset = assets[cardStep]

  return (
    <section
      className="relative flex h-full w-full snap-start flex-col overflow-hidden"
      style={{ backgroundColor: "#050B14" }}
    >
      <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-[#1b2cf4]/22 via-[#1b2cf4]/08 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-[#1b2cf4]/10 rounded-full blur-[100px]" />

      <ChapterTransitionNavBubbles active={3} />

      {/* 左上角小字 */}
      <p className="absolute top-6 left-6 z-20 text-base text-slate-500 md:top-8 md:left-8 md:text-lg">
        建立标准化流程
      </p>

      {/* 页码指示点 */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {assets.map((_, i) => (
          <span
            key={i}
            className={`block h-1.5 rounded-full transition-all duration-300 ${
              i === cardStep ? "w-6 bg-white" : "w-1.5 bg-white/30"
            }`}
          />
        ))}
      </div>

      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 flex min-h-0 flex-1 flex-col pt-16 md:pt-20"
      >
        {/* 当前卡片直接切换，无左右滑动动画 */}
        <div className="relative min-h-0 flex-1 overflow-hidden">
          <div key={asset.src} className="flex h-full flex-col px-6 pb-12 md:px-10 md:pb-14 lg:px-14">
            <motion.div variants={fadeInUp} className="shrink-0 py-4 md:py-5">
              <p className="text-center text-xl font-semibold text-white md:text-2xl lg:text-3xl">
                {asset.num}. {asset.title}
              </p>
            </motion.div>
            <div className="relative min-h-0 flex-1 overflow-hidden rounded-2xl border border-white/8 bg-[#0d1623] md:rounded-3xl">
              <Image
                src={asset.src}
                alt={asset.title}
                fill
                className="object-contain p-4 md:p-6"
                sizes="100vw"
                unoptimized
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

// Section 20: 3个举措提高团队效能（circleStep 0→1→2 依次显示后两圈）
function Section20({ circleStep }: { circleStep: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const starCls =
    "select-none font-light text-slate-500 transition-opacity duration-300 text-2xl md:text-4xl lg:text-5xl min-w-[1.5rem] shrink-0 text-center"

  const circleInner = (
    label: string,
    border: string,
    text: string,
    glow: string,
    visible: boolean,
  ) => (
    <div
      className={`flex flex-col items-center gap-4 transition-opacity duration-300 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div
        className={`relative flex h-36 w-36 md:h-48 md:w-48 lg:h-56 lg:w-56 items-center justify-center rounded-full border-2 bg-white/5 ${border} transition-all duration-300 hover:scale-105`}
      >
        <div className={`absolute inset-0 rounded-full ${glow} blur-xl`} />
        <span className={`relative z-10 text-xl md:text-2xl lg:text-3xl font-bold ${text} text-center leading-tight`}>
          {label}
        </span>
      </div>
    </div>
  )

  return (
    <section className="relative h-full w-full snap-start flex flex-col items-center justify-center overflow-hidden px-6 py-12" style={{ backgroundColor: "#050B14" }}>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-[#1b2cf4]/20 via-[#1b2cf4]/06 to-transparent" />

      <ChapterTransitionNavBubbles active={3} />

      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 flex w-full max-w-5xl flex-col items-center gap-16 md:gap-20 px-4"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white text-center"
        >
          3个举措提高团队效能
        </motion.h2>

        <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-6 md:gap-10 lg:gap-14">
          {circleInner("标准化", "border-[#1b2cf4]/50", "text-[#77fbd1]", "bg-[#1b2cf4]/10", true)}
          <span className={`${starCls} ${circleStep >= 1 ? "opacity-100" : "opacity-0"}`} aria-hidden>
            *
          </span>
          {circleInner("管理放权", "border-purple-400/50", "text-purple-300", "bg-purple-500/10", circleStep >= 1)}
          <span className={`${starCls} ${circleStep >= 2 ? "opacity-100" : "opacity-0"}`} aria-hidden>
            *
          </span>
          {circleInner("带新人", "border-green-400/50", "text-green-300", "bg-green-500/10", circleStep >= 2)}
        </motion.div>
      </motion.div>
    </section>
  )
}

// Section 21: 带新人心法 - 对比句子；点击翻页器逐一展示，绝对定位避免位移
function Section21({ comparisonStep }: { comparisonStep: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const comparisons = [
    { 
      left: "不谈感受", 
      right: "谈逻辑", 
      note: "问：带来的问题是什么？" 
    },
    { 
      left: "不谈能做什么", 
      right: "谈该做什么", 
      note: "问：对目标有帮助吗？" 
    },
    { 
      left: "谈要做什么", 
      right: "更谈还能做什么", 
      note: "问：为了达成目标还能做啥？" 
    },
  ]

  return (
    <section className="relative h-full w-full snap-start flex flex-col items-center justify-start overflow-hidden px-6 pb-12 pt-20 md:pt-28" style={{ backgroundColor: "#050B14" }}>
      {/* Background grid — 与 page25 统一 */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-[#1b2cf4]/20 via-[#1b2cf4]/06 to-transparent" />

      <ChapterTransitionNavBubbles active={3} />

      {/* 标题：独立容器 */}
      <motion.h2
        ref={ref}
        variants={fadeInUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 mt-4 w-full max-w-6xl px-0 text-2xl font-bold text-white md:mt-6 md:text-3xl lg:text-4xl"
      >
        带新人：做引导者，而非答案提供者
      </motion.h2>

      {/* 对比内容：绝对定位，点击逐一展示，无位移 */}
      <div className="absolute left-6 right-6 top-[calc(8rem+4rem)] z-10 flex w-full max-w-6xl flex-col gap-10 md:left-8 md:right-8 md:top-[calc(10rem+5rem)] md:gap-12 lg:top-[calc(11rem+6rem)] lg:gap-14">
        {comparisons.map((item, index) => (
          <div
            key={index}
            className={`flex items-center justify-center gap-4 transition-opacity duration-300 md:gap-6 lg:gap-8 ${
              index < comparisonStep ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <span className="text-xl font-medium text-slate-500 text-right flex-1 md:text-3xl lg:text-4xl">
              {item.left}
            </span>
            <span className="text-2xl text-orange-400/60 md:text-3xl lg:text-4xl">➔</span>
            <div className="flex flex-col flex-1">
              <span className="text-xl font-bold text-[#77fbd1] md:text-3xl lg:text-4xl">{item.right}</span>
              <span className="mt-2 text-sm font-medium text-slate-400 md:mt-2.5 md:text-base lg:text-lg">
                {item.note}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// Section 22: 知识输出与分享（page27，第三章节）— 5图文卡片
function Section22() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const items = [
    { title: "组内AI分享会", src: "/image28.png" },
    { title: "高校分享《从课程设计到商业设计》", src: "/image31.JPG" },
    { title: "企业分享《以数据增长为驱动の项目实践》", src: "/image30.PNG" },
    { title: "衡量视觉设计的用户感受", src: "/image29.png" },
    { title: "如何提升新用户下载率", src: "/image32.png" },
  ]

  return (
    <section
      className="relative flex h-full min-h-0 w-full snap-start flex-col overflow-hidden px-6 pb-8 pt-14 md:px-10 md:pb-10 md:pt-16 lg:px-14"
      style={{ backgroundColor: "#050B14" }}
    >
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-[#1b2cf4]/22 via-[#1b2cf4]/08 to-transparent" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#1b2cf4]/10 rounded-full blur-[100px]" />

      <ChapterTransitionNavBubbles active={3} />

      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 flex min-h-0 flex-1 flex-col gap-4 md:gap-5 lg:gap-6"
      >
        <motion.h2
          variants={fadeInUp}
          className="shrink-0 text-2xl font-bold text-white md:text-3xl lg:text-4xl"
        >
          知识输出与分享
        </motion.h2>

        {/* 5张卡片：上3下2，图片区统一 16:9 比例 */}
        <motion.div
          variants={fadeInUp}
          className="flex min-h-0 flex-1 flex-col gap-3 md:gap-4 lg:gap-5"
        >
          {/* 第一行：3张 */}
          <div className="grid grid-cols-3 gap-3 md:gap-4 lg:gap-5">
            {items.slice(0, 3).map((item, i) => (
              <div key={i} className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#111827]">
                <div className="shrink-0 px-4 py-3 md:px-5 md:py-3.5">
                  <p className="line-clamp-2 text-sm font-semibold leading-snug text-white md:text-base">{item.title}</p>
                </div>
                {/* 16:9 图片区 */}
                <div className="relative w-full overflow-hidden border-t border-white/5" style={{ paddingBottom: "56.25%" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.src} alt={item.title} className="absolute inset-0 h-full w-full object-cover object-center" />
                </div>
              </div>
            ))}
          </div>
          {/* 第二行：2张，宽度同上方1/3，水平居中 */}
          <div className="flex justify-center gap-3 md:gap-4 lg:gap-5">
            {items.slice(3).map((item, i) => (
              <div key={i} className="flex w-1/3 min-w-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#111827]">
                <div className="shrink-0 px-4 py-3 md:px-5 md:py-3.5">
                  <p className="line-clamp-1 text-sm font-semibold leading-snug text-white md:text-base">{item.title}</p>
                </div>
                {/* 16:9 图片区 */}
                <div className="relative w-full overflow-hidden border-t border-white/5" style={{ paddingBottom: "56.25%" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.src} alt={item.title} className="absolute inset-0 h-full w-full object-cover object-center" />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

// Section 23: 角色定义（page28，原 page27）
function Section23({ showMindset }: { showMindset: boolean }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const formulaItems = ["了解业务", "全局思维", "迭代意识"]
  const mindsets = [
    { n: "01", title: "知价值", desc: "知道需求对项目的核心价值" },
    { n: "02", title: "判影响", desc: "预判设计方案会带来多大影响" },
    { n: "03", title: "促增长", desc: "通过设计手段促进数据增长" },
  ]

  return (
    <section className="relative flex h-full min-h-0 w-full snap-start flex-col overflow-hidden px-8 pb-8 pt-14 md:px-14 md:pb-10 md:pt-16 lg:px-20 xl:px-24" style={{ backgroundColor: "#050B14" }}>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(148, 163, 184, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148, 163, 184, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[28%] bg-gradient-to-t from-[#1b2cf4]/18 via-[#1b2cf4]/06 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-1/4 h-[320px] w-[min(80cqw,420px)] -translate-y-1/2 translate-x-1/4 rounded-full bg-white/[0.03] blur-[100px]" />

      <ChapterTransitionNavBubbles active={4} />

      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 mx-auto flex min-h-0 w-full max-w-[90rem] flex-1 flex-col gap-4 md:gap-5 lg:gap-6"
      >
        <motion.p
          variants={fadeInUp}
          className="text-sm font-bold uppercase tracking-[0.28em] text-slate-500 md:text-base"
        >
          ROLE DEFINITION
        </motion.p>

        <motion.div variants={fadeInUp} className="flex flex-col gap-3 md:gap-5 lg:gap-6">
          <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
            增长体验设计师
            <span className="mx-2 text-[#77fbd1] md:mx-3 lg:mx-4">=</span>
          </h2>
          <div className="flex flex-wrap items-center gap-2.5 md:gap-3 lg:gap-4">
            {formulaItems.map((t, i) => (
              <Fragment key={t}>
                {i > 0 && <span className="text-3xl font-light text-[#77fbd1] md:text-4xl lg:text-5xl">+</span>}
                <span className="rounded-2xl border border-white/15 bg-[#111827] px-7 py-4 text-xl font-semibold text-white shadow-sm md:px-10 md:py-5 md:text-2xl lg:px-12 lg:py-6 lg:text-3xl">
                  {t}
                </span>
              </Fragment>
            ))}
            <span className="text-3xl font-light text-[#77fbd1] md:text-4xl lg:text-5xl">+</span>
            <span className="rounded-2xl border-2 border-[#77fbd1] bg-[#77fbd1]/12 px-7 py-4 text-xl font-bold text-[#77fbd1] shadow-[0_0_32px_rgba(119,251,209,0.4)] md:px-10 md:py-5 md:text-2xl lg:px-12 lg:py-6 lg:text-3xl">
              懂增长策略
            </span>
          </div>
        </motion.div>

        {/* 下方 MINDSET 模块：默认隐藏，点击翻页器后显示，绝对定位避免位移 */}
        <motion.div
          variants={fadeInUp}
          className="absolute left-0 right-0 bottom-8 grid grid-cols-1 gap-4 rounded-2xl border border-white/10 bg-[#0d1623]/95 p-5 backdrop-blur-sm transition-opacity duration-500 md:bottom-10 md:grid-cols-3 md:gap-5 md:rounded-3xl md:p-6 lg:bottom-12 lg:gap-6 lg:p-8"
          style={{ 
            opacity: showMindset ? 1 : 0, 
            visibility: showMindset ? "visible" : "hidden",
            pointerEvents: showMindset ? "auto" : "none" 
          }}
        >
          {mindsets.map((m) => (
            <div
              key={m.n}
              className="flex flex-col gap-2 border-b border-white/5 pb-4 last:border-b-0 last:pb-0 md:border-b-0 md:border-r md:border-white/5 md:pb-0 md:pr-5 md:last:border-r-0 md:last:pr-0 lg:gap-3"
            >
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#77fbd1] md:text-base">MINDSET {m.n}</p>
              <p className="text-xl font-bold text-white md:text-2xl lg:text-3xl">{m.title}</p>
              <p className="text-base leading-relaxed text-slate-300 md:text-lg lg:text-xl">{m.desc}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

// Section 24: 2026 行动计划三模块（page29）
function Section24() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section
      className="relative flex h-full min-h-0 w-full snap-start flex-col overflow-hidden px-6 pb-8 pt-14 md:px-8 md:pb-10 md:pt-16 lg:px-10"
      style={{ backgroundColor: "#050B14" }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(148, 163, 184, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148, 163, 184, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[28%] bg-gradient-to-t from-[#1b2cf4]/18 via-[#1b2cf4]/06 to-transparent" />

      <ChapterTransitionNavBubbles active={4} />

      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 mx-auto flex min-h-0 w-full max-w-7xl flex-1 flex-col gap-5 md:gap-6"
      >
        <motion.h2 variants={fadeInUp} className="shrink-0 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
          2026 行动计划
        </motion.h2>

        {/* 三模块布局：左侧略宽 + 右侧加宽 */}
        <motion.div variants={fadeInUp} className="flex min-h-0 flex-1 gap-4 md:gap-5 lg:gap-6">
          {/* 左：Module 1 — 全高（宽度略增） */}
          <div className="flex w-[44%] max-w-[480px] shrink-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#111827] md:w-[42%] md:rounded-3xl lg:w-[40%]">
            <div className="shrink-0 px-5 pt-4 pb-2 md:px-6 md:pt-5 md:pb-3">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 md:text-xs">ACTION 01</p>
              <p className="mt-1 text-lg font-bold text-white md:text-xl lg:text-2xl">引入数据验收</p>
            </div>
            <div className="relative min-h-0 flex-1 overflow-hidden border-t border-white/5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/image27.PNG"
                alt="引入数据验收"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>

          {/* 右：Module 2 + 3 垂直堆叠（Module 2 加高，Module 3 降低） */}
          <div className="flex min-h-0 min-w-0 flex-1 flex-col gap-4 md:gap-5 lg:gap-6">
            {/* Module 2：收集好设计 — 加高 */}
            <div className="flex min-h-0 flex-[1.4] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#111827] md:rounded-3xl">
              <div className="shrink-0 px-5 pt-4 pb-2 md:px-6 md:pt-5 md:pb-3">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 md:text-xs">ACTION 02</p>
                <p className="mt-1 text-lg font-bold text-white md:text-xl lg:text-2xl">收集好设计</p>
              </div>
              <div className="relative min-h-0 flex-1 overflow-hidden border-t border-white/5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/image21.png"
                  alt="收集好设计"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>

            {/* Module 3：学习增长理论 — 降低高度 */}
            <div className="flex min-h-0 flex-[0.6] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#111827] md:rounded-3xl">
              <div className="shrink-0 px-5 pt-4 pb-2 md:px-6 md:pt-5 md:pb-3">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 md:text-xs">ACTION 03</p>
                <p className="mt-1 text-lg font-bold text-white md:text-xl lg:text-2xl">学习增长理论</p>
              </div>
              <div className="flex min-h-0 flex-1 items-center justify-center border-t border-white/5 bg-[#0d1623]/60">
                <span className="text-6xl md:text-7xl lg:text-8xl" role="img" aria-label="书">📚</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

// Section 25: 结语愿景 · 四行横条（原 page31）
function Section25() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const lines = [
    "团队向「体验增长设计师」成长",
    "拥抱AI 保持探索与好奇心",
    "做设计 保持业务洞察",
    "做自己 保持复盘、保持输出、保持生长",
  ]

  return (
    <section className="relative flex h-full min-h-0 w-full snap-start flex-col overflow-hidden px-4 pb-8 pt-16 md:px-6 md:pb-10 md:pt-20" style={{ backgroundColor: "#050B14" }}>
      {/* 背景：与 page1 一致的蓝色波浪动画 */}
      <WaveCanvas />

      <ChapterTransitionNavBubbles active={4} />

      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-20 mx-auto flex min-h-0 w-full max-w-4xl flex-1 flex-col items-center justify-center gap-5 md:max-w-5xl md:gap-7 lg:gap-8"
      >
        <motion.h2 variants={fadeInUp} className="shrink-0 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
          近期规划
        </motion.h2>
        {lines.map((text, index) => (
          <motion.div
            key={text}
            variants={fadeInUp}
            className="w-fit max-w-full rounded-2xl border border-white/10 bg-[#111827]/90 px-7 py-5 shadow-md shadow-black/20 backdrop-blur-sm md:rounded-3xl md:px-12 md:py-6"
          >
            <p className="text-center text-xl font-semibold leading-relaxed text-white md:text-2xl lg:text-3xl">
              <span className="mr-2 font-bold text-[#77fbd1]">{index + 1}.</span>
              {text}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

/** 双圆页在全部 section 中的索引（0-based）：S1,S2,章节01,本页 */
const SECTION3_DUAL_CIRCLES_INDEX = 3
/** Section4 需求内容页索引 */
const SECTION4_INDEX = 4
/** Section5 数据漏斗页索引（新增 Section4B 后为 6） */
const SECTION5_INDEX = 6
/** Section7b 设计体验细节页索引 */
const SECTION7B_INDEX = 9
/** Section9 经验提炼页索引 */
const SECTION9_INDEX = 11
/** Section12 定制 GEM 管家页索引（page15） */
const SECTION12_INDEX = 14
/** SectionAIGameCopy 游戏化文案页索引（page19） */
const SECTION_AIGAME_COPY_INDEX = 18
/** Section16 AI复盘页索引（page20） */
const SECTION16_INDEX = 19
/** Section17 番茄待办页索引（page21） */
const SECTION17_INDEX = 20
/** Section19 标准化基建页索引（page24） */
const SECTION19_INDEX = 23
/** Section20 三举措页索引（page25） */
const SECTION20_INDEX = 24
/** Section21 带新人心法页索引（page26） */
const SECTION21_INDEX = 25
/** Section22 知识输出页索引（page27） */
const SECTION22_INDEX = 26
/** Section23 角色定义页索引（page29） */
const SECTION23_INDEX = 28

export default function PromotionPresentation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentSection, setCurrentSection] = useState(0)
  const [section3InsightRevealed, setSection3InsightRevealed] = useState(false)
  const [section4DemandExtra, setSection4DemandExtra] = useState(false)
  const [section5FunnelStep, setSection5FunnelStep] = useState(0)
  const [section5DataMetricsRevealed, setSection5DataMetricsRevealed] = useState(false)
  const [section5CorePointRevealed, setSection5CorePointRevealed] = useState(false)
  const [section7bStep, setSection7bStep] = useState(0)
  const [section9Step, setSection9Step] = useState(0)
  const [section17InsightRevealed, setSection17InsightRevealed] = useState(false)
  /** page21：0=仅初版，1=+「>」+1.0，2=+「>」+2.0（均占位） */
  const [section17PhoneStep, setSection17PhoneStep] = useState(0)
  const [sectionAIGameCopyRevealed, setSectionAIGameCopyRevealed] = useState(false)
  /** page20：0=左右均隐藏，1=左侧，2=右侧 */
  const [section16RevealStep, setSection16RevealStep] = useState(0)
  /** page24：0–3 当前显示卡片索引（从第一张开始） */
  const [section19CardStep, setSection19CardStep] = useState(0)
  /** page25：0=仅「标准化」，1=+「管理放权」，2=+「带新人」 */
  const [section20CircleStep, setSection20CircleStep] = useState(0)
  /** page15：右侧要点点击翻页器后显示 */
  const [section12RightRevealed, setSection12RightRevealed] = useState(false)
  /** page28：mindset 模块点击后显示 */
  const [section23MindsetRevealed, setSection23MindsetRevealed] = useState(false)
  /** page26：对比模块 0=无，1~3=逐条显示 */
  const [section21ComparisonStep, setSection21ComparisonStep] = useState(0)
  const totalSections = 31
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [stageScale, setStageScale] = useState(() =>
    typeof window !== "undefined"
      ? Math.min(window.innerWidth / 1440, window.innerHeight / 810)
      : 1
  )

  useEffect(() => {
    const updateScale = () =>
      setStageScale(Math.min(window.innerWidth / 1440, window.innerHeight / 810))
    const syncFullscreen = () => setIsFullscreen(Boolean(document.fullscreenElement))
    const onFullscreenChange = () => {
      syncFullscreen()
      updateScale()
    }
    syncFullscreen()
    updateScale()
    window.addEventListener("resize", updateScale)
    document.addEventListener("fullscreenchange", onFullscreenChange)
    return () => {
      window.removeEventListener("resize", updateScale)
      document.removeEventListener("fullscreenchange", onFullscreenChange)
    }
  }, [])

  // 离开双圆页后重置「第二步」，下次进入仍从仅双圆开始
  useEffect(() => {
    if (currentSection !== SECTION3_DUAL_CIRCLES_INDEX) {
      setSection3InsightRevealed(false)
    }
  }, [currentSection])

  // 离开 Section4 后重置需求目标展示
  useEffect(() => {
    if (currentSection !== SECTION4_INDEX) {
      setSection4DemandExtra(false)
    }
  }, [currentSection])

  // 离开 Section5 后重置
  useEffect(() => {
    if (currentSection !== SECTION5_INDEX) {
      setSection5FunnelStep(0)
      setSection5DataMetricsRevealed(false)
      setSection5CorePointRevealed(false)
    }
  }, [currentSection])

  // 离开 Section7b 后重置
  useEffect(() => {
    if (currentSection !== SECTION7B_INDEX) {
      setSection7bStep(0)
    }
  }, [currentSection])

  // 离开 Section9 后重置
  useEffect(() => {
    if (currentSection !== SECTION9_INDEX) {
      setSection9Step(0)
    }
  }, [currentSection])

  // 离开 Section17 后重置结语与手机分步
  useEffect(() => {
    if (currentSection !== SECTION17_INDEX) {
      setSection17InsightRevealed(false)
      setSection17PhoneStep(0)
    }
  }, [currentSection])

  // 离开 page19 后重置「→ + AI 文案」展示
  useEffect(() => {
    if (currentSection !== SECTION_AIGAME_COPY_INDEX) {
      setSectionAIGameCopyRevealed(false)
    }
  }, [currentSection])

  // 离开 page20 后重置分步展示
  useEffect(() => {
    if (currentSection !== SECTION16_INDEX) {
      setSection16RevealStep(0)
    }
  }, [currentSection])

  // 离开 page24 后重置卡片步数（回到第一张）
  useEffect(() => {
    if (currentSection !== SECTION19_INDEX) {
      setSection19CardStep(0)
    }
  }, [currentSection])

  // 离开 page25 后重置圆圈分步
  useEffect(() => {
    if (currentSection !== SECTION20_INDEX) {
      setSection20CircleStep(0)
    }
  }, [currentSection])

  // 离开 page15 后重置右侧展示
  useEffect(() => {
    if (currentSection !== SECTION12_INDEX) {
      setSection12RightRevealed(false)
    }
  }, [currentSection])

  // 离开 page28 后重置 mindset 展示
  useEffect(() => {
    if (currentSection !== SECTION23_INDEX) {
      setSection23MindsetRevealed(false)
    }
  }, [currentSection])

  // 离开 page26 后重置对比模块展示
  useEffect(() => {
    if (currentSection !== SECTION21_INDEX) {
      setSection21ComparisonStep(0)
    }
  }, [currentSection])

  // Section9 step1 后 1秒 自动进入 step2
  useEffect(() => {
    if (section9Step !== 1) return
    const t = setTimeout(() => setSection9Step(2), 1000)
    return () => clearTimeout(t)
  }, [section9Step])

  // Keyboard navigation for presentation remote
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const container = containerRef.current
      if (!container) return

      const sections = container.querySelectorAll("section")

      // Next page: PageDown, ArrowDown, Space
      if (e.key === "PageDown" || e.key === "ArrowDown" || e.key === " ") {
        if (
          currentSection === SECTION3_DUAL_CIRCLES_INDEX &&
          !section3InsightRevealed
        ) {
          e.preventDefault()
          setSection3InsightRevealed(true)
          return
        }
        // Section4：第一次按显示「需求目标」，第二次按滚动到下一页
        if (currentSection === SECTION4_INDEX && !section4DemandExtra) {
          e.preventDefault()
          setSection4DemandExtra(true)
          return
        }
        // Section5：依次显示手机→数据模块→核心卡点
        if (currentSection === SECTION5_INDEX) {
          e.preventDefault()
          if (section5FunnelStep < 3) {
            setSection5FunnelStep((s) => s + 1)
          } else if (!section5DataMetricsRevealed) {
            setSection5DataMetricsRevealed(true)
          } else if (!section5CorePointRevealed) {
            setSection5CorePointRevealed(true)
          } else {
            const nextIndex = Math.min(currentSection + 1, totalSections - 1)
            sections[nextIndex]?.scrollIntoView({ behavior: "smooth" })
            setCurrentSection(nextIndex)
          }
          return
        }
        // Section7b：依次显示右侧3个文字模块
        if (currentSection === SECTION7B_INDEX) {
          e.preventDefault()
          if (section7bStep < 3) {
            setSection7bStep((s) => s + 1)
          } else {
            const nextIndex = Math.min(currentSection + 1, totalSections - 1)
            sections[nextIndex]?.scrollIntoView({ behavior: "smooth" })
            setCurrentSection(nextIndex)
          }
          return
        }
        // Section9：翻页动画 0→1→2，step2 后滚动下一页
        if (currentSection === SECTION9_INDEX) {
          e.preventDefault()
          if (section9Step < 1) {
            setSection9Step(1)
          } else if (section9Step < 2) {
            setSection9Step(2)
          } else {
            const nextIndex = Math.min(currentSection + 1, totalSections - 1)
            sections[nextIndex]?.scrollIntoView({ behavior: "smooth" })
            setCurrentSection(nextIndex)
          }
          return
        }
        // page15：第一次按键展开右侧文字框，不翻页
        if (currentSection === SECTION12_INDEX && !section12RightRevealed) {
          e.preventDefault()
          setSection12RightRevealed(true)
          return
        }
        // page26：依次显示 3 条对比，全部显示后翻页
        if (currentSection === SECTION21_INDEX) {
          e.preventDefault()
          if (section21ComparisonStep < 3) {
            setSection21ComparisonStep((s) => s + 1)
          } else {
            const nextIndex = Math.min(currentSection + 1, totalSections - 1)
            sections[nextIndex]?.scrollIntoView({ behavior: "smooth" })
            setCurrentSection(nextIndex)
          }
          return
        }
        // page28：第一次按键显示 mindset 模块，不翻页
        if (currentSection === SECTION23_INDEX && !section23MindsetRevealed) {
          e.preventDefault()
          setSection23MindsetRevealed(true)
          return
        }
        // page19：第一次按键展开 → 与右侧 AI 模块，不翻页
        if (currentSection === SECTION_AIGAME_COPY_INDEX && !sectionAIGameCopyRevealed) {
          e.preventDefault()
          setSectionAIGameCopyRevealed(true)
          return
        }
        // page20：先展开左侧，再展开右侧，两步均完成后再翻页
        if (currentSection === SECTION16_INDEX) {
          e.preventDefault()
          if (section16RevealStep < 2) {
            setSection16RevealStep((s) => s + 1)
            return
          }
          const nextIndex = Math.min(currentSection + 1, totalSections - 1)
          sections[nextIndex]?.scrollIntoView({ behavior: "smooth" })
          setCurrentSection(nextIndex)
          return
        }
        // page21：先依次展开 1.0、2.0（含 >），再展开右侧结语，最后才翻页
        if (currentSection === SECTION17_INDEX) {
          e.preventDefault()
          if (section17PhoneStep < 2) {
            setSection17PhoneStep((s) => s + 1)
            return
          }
          if (!section17InsightRevealed) {
            setSection17InsightRevealed(true)
            return
          }
          const nextIndex = Math.min(currentSection + 1, totalSections - 1)
          sections[nextIndex]?.scrollIntoView({ behavior: "smooth" })
          setCurrentSection(nextIndex)
          return
        }
        // page24：依次滑入 4 张卡片，全部显示后翻页
        if (currentSection === SECTION19_INDEX) {
          e.preventDefault()
          if (section19CardStep < 3) {
            setSection19CardStep((s) => s + 1)
            return
          }
          const nextIndex = Math.min(currentSection + 1, totalSections - 1)
          sections[nextIndex]?.scrollIntoView({ behavior: "smooth" })
          setCurrentSection(nextIndex)
          return
        }
        // page25：依次显示「管理放权」「带新人」，再翻页
        if (currentSection === SECTION20_INDEX) {
          e.preventDefault()
          if (section20CircleStep < 2) {
            setSection20CircleStep((s) => s + 1)
            return
          }
          const nextIndex = Math.min(currentSection + 1, totalSections - 1)
          sections[nextIndex]?.scrollIntoView({ behavior: "smooth" })
          setCurrentSection(nextIndex)
          return
        }
        e.preventDefault()
        const nextIndex = Math.min(currentSection + 1, totalSections - 1)
        sections[nextIndex]?.scrollIntoView({ behavior: "smooth" })
        setCurrentSection(nextIndex)
      }

      // Previous page: PageUp, ArrowUp
      if (e.key === "PageUp" || e.key === "ArrowUp") {
        // Section4：若已展示需求目标则先收起，再退才滚动
        if (currentSection === SECTION4_INDEX && section4DemandExtra) {
          e.preventDefault()
          setSection4DemandExtra(false)
          return
        }
        // Section5：反向依次收起
        if (currentSection === SECTION5_INDEX) {
          e.preventDefault()
          if (section5CorePointRevealed) {
            setSection5CorePointRevealed(false)
          } else if (section5DataMetricsRevealed) {
            setSection5DataMetricsRevealed(false)
          } else if (section5FunnelStep > 0) {
            setSection5FunnelStep((s) => s - 1)
          } else {
            const prevIndex = Math.max(currentSection - 1, 0)
            sections[prevIndex]?.scrollIntoView({ behavior: "smooth" })
            setCurrentSection(prevIndex)
          }
          return
        }
        // Section7b：反向依次收起
        if (currentSection === SECTION7B_INDEX) {
          e.preventDefault()
          if (section7bStep > 0) {
            setSection7bStep((s) => s - 1)
          } else {
            const prevIndex = Math.max(currentSection - 1, 0)
            sections[prevIndex]?.scrollIntoView({ behavior: "smooth" })
            setCurrentSection(prevIndex)
          }
          return
        }
        // Section9：反向
        if (currentSection === SECTION9_INDEX) {
          e.preventDefault()
          if (section9Step > 0) {
            setSection9Step((s) => s - 1)
          } else {
            const prevIndex = Math.max(currentSection - 1, 0)
            sections[prevIndex]?.scrollIntoView({ behavior: "smooth" })
            setCurrentSection(prevIndex)
          }
          return
        }
        // page15：若右侧已展示则先收起再退页
        if (currentSection === SECTION12_INDEX && section12RightRevealed) {
          e.preventDefault()
          setSection12RightRevealed(false)
          return
        }
        // page28：若 mindset 已展示则先收起再退页
        if (currentSection === SECTION23_INDEX && section23MindsetRevealed) {
          e.preventDefault()
          setSection23MindsetRevealed(false)
          return
        }
        // page20：先收起右侧再收起左侧，再退页
        if (currentSection === SECTION16_INDEX) {
          e.preventDefault()
          if (section16RevealStep > 0) {
            setSection16RevealStep((s) => s - 1)
            return
          }
          const prevIndex = Math.max(currentSection - 1, 0)
          sections[prevIndex]?.scrollIntoView({ behavior: "smooth" })
          setCurrentSection(prevIndex)
          return
        }
        // page24：反向滑动卡片
        if (currentSection === SECTION19_INDEX) {
          e.preventDefault()
          if (section19CardStep > 0) {
            setSection19CardStep((s) => s - 1)
            return
          }
          const prevIndex = Math.max(currentSection - 1, 0)
          sections[prevIndex]?.scrollIntoView({ behavior: "smooth" })
          setCurrentSection(prevIndex)
          return
        }
        // page25：先收起「带新人」「管理放权」再退页
        if (currentSection === SECTION20_INDEX) {
          e.preventDefault()
          if (section20CircleStep > 0) {
            setSection20CircleStep((s) => s - 1)
            return
          }
          const prevIndex = Math.max(currentSection - 1, 0)
          sections[prevIndex]?.scrollIntoView({ behavior: "smooth" })
          setCurrentSection(prevIndex)
          return
        }
        // page26：先收起对比模块再退页
        if (currentSection === SECTION21_INDEX) {
          e.preventDefault()
          if (section21ComparisonStep > 0) {
            setSection21ComparisonStep((s) => s - 1)
          } else {
            const prevIndex = Math.max(currentSection - 1, 0)
            sections[prevIndex]?.scrollIntoView({ behavior: "smooth" })
            setCurrentSection(prevIndex)
          }
          return
        }
        // page21：先收起结语，再收回 2.0 / 1.0
        if (currentSection === SECTION17_INDEX) {
          e.preventDefault()
          if (section17InsightRevealed) {
            setSection17InsightRevealed(false)
            return
          }
          if (section17PhoneStep > 0) {
            setSection17PhoneStep((s) => s - 1)
            return
          }
          const prevIndex = Math.max(currentSection - 1, 0)
          sections[prevIndex]?.scrollIntoView({ behavior: "smooth" })
          setCurrentSection(prevIndex)
          return
        }
        e.preventDefault()
        const prevIndex = Math.max(currentSection - 1, 0)
        sections[prevIndex]?.scrollIntoView({ behavior: "smooth" })
        setCurrentSection(prevIndex)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentSection, section3InsightRevealed, section4DemandExtra, section5FunnelStep, section5DataMetricsRevealed, section5CorePointRevealed, section7bStep, section9Step, section12RightRevealed, section23MindsetRevealed, section21ComparisonStep, sectionAIGameCopyRevealed, section16RevealStep, section17PhoneStep, section17InsightRevealed, section19CardStep, section20CircleStep, totalSections])

  // Update current section on scroll
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      const scrollTop = container.scrollTop
      // 与每节 h-full（相对 810px 高设计画板）、滚动容器 clientHeight 一致
      const sectionHeight = container.clientHeight || window.innerHeight
      // 用视口中线判定当前页，避免 smooth 滚动过程中 Math.round 与按键翻页不同步（多按一次才翻页）
      const centerLine = scrollTop + sectionHeight / 2
      const newSection = Math.min(Math.max(0, Math.floor(centerLine / sectionHeight)), totalSections - 1)
      setCurrentSection(newSection)
    }

    container.addEventListener("scroll", handleScroll)
    return () => container.removeEventListener("scroll", handleScroll)
  }, [])

  const scaledW = 1440 * stageScale
  const scaledH = 810 * stageScale

  return (
    <div className="fixed inset-0 z-0 flex h-screen w-screen items-center justify-center overflow-hidden bg-[#050B14]">
      <div
        className="flex shrink-0 items-center justify-center overflow-hidden"
        style={{ width: scaledW, height: scaledH }}
      >
        <div
          className="relative isolate min-h-0 shrink-0 overflow-hidden bg-[#050B14] shadow-2xl [container-type:size]"
          style={{
            width: 1440,
            height: 810,
            transform: `scale(${stageScale})`,
            transformOrigin: "center center",
          }}
        >
          <div
            ref={containerRef}
            className="relative z-10 h-full min-h-0 w-full overflow-y-auto overscroll-contain snap-y snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            style={{ backgroundColor: "#050B14" }}
          >
            <div className="pointer-events-none absolute inset-0 z-0">
              <div className="absolute -top-32 -left-32 h-[700px] w-[700px] rounded-full bg-[#1b2cf4]/10 blur-[160px]" />
              <div className="absolute -bottom-32 -right-32 h-[600px] w-[600px] rounded-full bg-purple-500/10 blur-[140px]" />
              <div className="absolute top-1/2 left-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[180px]" />
            </div>
            <div
              className="pointer-events-none absolute inset-0 z-[1] opacity-[0.03]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                backgroundRepeat: "repeat",
              }}
            />

            <Section1 />
      <Section2 />
      <Section3ChapterDesign />
      <Section3
        insightRevealed={section3InsightRevealed}
        onInsightReveal={() => setSection3InsightRevealed(true)}
      />
      <Section4 demandExtraRevealed={section4DemandExtra} onDemandExtraReveal={() => setSection4DemandExtra(true)} />
      <Section4B />
      <Section5
        funnelStep={section5FunnelStep}
        dataMetricsRevealed={section5DataMetricsRevealed}
        corePointRevealed={section5CorePointRevealed}
        onAdvance={() => {
          if (section5FunnelStep < 3) {
            setSection5FunnelStep((s) => s + 1)
          } else if (!section5DataMetricsRevealed) {
            setSection5DataMetricsRevealed(true)
          } else if (!section5CorePointRevealed) {
            setSection5CorePointRevealed(true)
          } else {
            const container = containerRef.current
            if (container) {
              const sections = container.querySelectorAll("section")
              const nextIndex = Math.min(currentSection + 1, totalSections - 1)
              sections[nextIndex]?.scrollIntoView({ behavior: "smooth" })
              setCurrentSection(nextIndex)
            }
          }
        }}
      />
      <Section6 />
      <Section7 />
      <Section7b
        step={section7bStep}
        onAdvance={() => {
          if (section7bStep < 3) {
            setSection7bStep((s) => s + 1)
          } else {
            const container = containerRef.current
            if (container) {
              const sections = container.querySelectorAll("section")
              const nextIndex = Math.min(currentSection + 1, totalSections - 1)
              sections[nextIndex]?.scrollIntoView({ behavior: "smooth" })
              setCurrentSection(nextIndex)
            }
          }
        }}
      />
      <Section8 />
      <Section9
        step={section9Step}
        onAdvance={() => {
          if (section9Step < 1) {
            setSection9Step(1)
          } else if (section9Step < 2) {
            setSection9Step(2)
          } else {
            const container = containerRef.current
            if (container) {
              const sections = container.querySelectorAll("section")
              const nextIndex = Math.min(currentSection + 1, totalSections - 1)
              sections[nextIndex]?.scrollIntoView({ behavior: "smooth" })
              setCurrentSection(nextIndex)
            }
          }
        }}
      />
      <Section10 />
      <Section10b />
      <Section12 showRight={section12RightRevealed} />
      <Section13 />
      <Section14 />
      <SectionFoggBehavior />
      <SectionAIGameCopy showArrowAndAI={sectionAIGameCopyRevealed} />
      <Section16 revealStep={section16RevealStep} />
      <Section17 showInsight={section17InsightRevealed} phoneStep={section17PhoneStep} />
      <SectionTeamBuildTransition />
      <Section18 />
      <Section19 cardStep={section19CardStep} />
      <Section20 circleStep={section20CircleStep} />
      <Section21 comparisonStep={section21ComparisonStep} />
      <Section22 />
      <SectionChapterFutureTransition />
      <Section23 showMindset={section23MindsetRevealed} />
      <Section24 />
      <Section25 />
          </div>
        </div>
      </div>

      {!isFullscreen && (
        <button
          type="button"
          onClick={() => {
            void document.documentElement.requestFullscreen()
          }}
          className="fixed bottom-6 right-6 z-[60] flex items-center gap-2 rounded-full border border-white/20 bg-[#111827]/90 px-4 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-[#111827]"
          aria-label="全屏"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
          </svg>
          全屏
        </button>
      )}

      {/* Page indicator - hidden by default, shows on hover */}
      <div className="fixed right-0 top-0 bottom-0 w-16 z-50 group">
        <div className="absolute inset-0" />
        <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {[...Array(31)].map((_, index) => (
            <button
              key={index}
              onClick={() => {
                const container = containerRef.current
                if (!container) return
                const sections = container.querySelectorAll("section")
                if (
                  index === SECTION12_INDEX &&
                  currentSection === SECTION12_INDEX &&
                  !section12RightRevealed
                ) {
                  setSection12RightRevealed(true)
                  return
                }
                if (
                  index === SECTION_AIGAME_COPY_INDEX &&
                  currentSection === SECTION_AIGAME_COPY_INDEX &&
                  !sectionAIGameCopyRevealed
                ) {
                  setSectionAIGameCopyRevealed(true)
                  return
                }
                if (index === SECTION16_INDEX && currentSection === SECTION16_INDEX) {
                  if (section16RevealStep < 2) {
                    setSection16RevealStep((s) => s + 1)
                    return
                  }
                }
                if (index === SECTION17_INDEX && currentSection === SECTION17_INDEX) {
                  if (section17PhoneStep < 2) {
                    setSection17PhoneStep((s) => s + 1)
                    return
                  }
                  if (!section17InsightRevealed) {
                    setSection17InsightRevealed(true)
                    return
                  }
                }
                if (index === SECTION19_INDEX && currentSection === SECTION19_INDEX) {
                  if (section19CardStep < 3) {
                    setSection19CardStep((s) => s + 1)
                    return
                  }
                }
                if (index === SECTION20_INDEX && currentSection === SECTION20_INDEX) {
                  if (section20CircleStep < 2) {
                    setSection20CircleStep((s) => s + 1)
                    return
                  }
                }
                if (index === SECTION21_INDEX && currentSection === SECTION21_INDEX) {
                  if (section21ComparisonStep < 3) {
                    setSection21ComparisonStep((s) => s + 1)
                    return
                  }
                }
                if (
                  index === SECTION23_INDEX &&
                  currentSection === SECTION23_INDEX &&
                  !section23MindsetRevealed
                ) {
                  setSection23MindsetRevealed(true)
                  return
                }
                sections[index]?.scrollIntoView({ behavior: "smooth" })
                setCurrentSection(index)
              }}
              className={`flex items-center justify-end gap-1.5 rounded-full transition-all duration-300 ${
                currentSection === index 
                  ? "bg-white/20 px-2 py-0.5" 
                  : "hover:bg-white/10 px-2 py-0.5"
              }`}
              aria-label={`Go to page ${index + 1}`}
            >
              <span className={`text-[10px] font-medium tabular-nums ${
                currentSection === index ? "text-white" : "text-slate-400"
              }`}>
                {index + 1}
              </span>
              <span
                className={`w-2 h-2 rounded-full shrink-0 transition-all duration-300 ${
                  currentSection === index 
                    ? "bg-white scale-125" 
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
