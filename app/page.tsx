"use client"

import { Fragment, useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
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
        4399UED · 2026.04
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
          <div className="flex items-center gap-5 px-10 py-5 rounded-full bg-[#1b2cf4] text-white text-lg font-medium md:gap-6 md:px-12 md:py-5 md:text-xl lg:text-2xl">
            <span>By 吴珊珊</span>
            <span className="w-px h-5 shrink-0 bg-white/30 md:h-6" />
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
        {/* md+：左个人信息 + 右列上下两张卡（flex 保证横排，避免 grid row-span 排成单列） */}
        <div className="flex flex-col gap-5 md:flex-row md:items-stretch md:gap-6">
          {/* Left Card - Profile */}
          <motion.div 
            variants={fadeInUp}
            className="flex w-full shrink-0 flex-col md:w-[42%] lg:w-[40%] md:self-stretch"
          >
            <div className="flex h-full min-h-0 flex-col p-10 rounded-2xl bg-[#111827] border border-white/5">
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
                <span className="rounded-full bg-[#1b2cf4] px-5 py-2 text-lg font-medium text-white md:px-6 md:py-2.5 md:text-xl">
                  交互2组 组长
                </span>
              </div>
            </div>
          </motion.div>

          <div className="flex min-w-0 flex-col gap-5 md:min-h-0 md:flex-1 md:flex-col md:gap-6">
            {/* Right Top Card - Experience */}
            <motion.div variants={fadeInUp} className="shrink-0">
              <div className="p-8 rounded-2xl bg-[#111827] border border-white/5">
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

            {/* Right Bottom Card - Business Scope：md 起拉高与左侧卡片底对齐 */}
            <motion.div variants={fadeInUp} className="flex min-h-0 flex-col md:flex-1">
              <div className="flex min-h-0 flex-col rounded-2xl border border-white/5 bg-[#111827] p-8 md:flex-1 md:justify-center">
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
        </div>
      </motion.div>
    </section>
  )
}

/** 第三屏：目录 /「接下来，我想聊聊这些」（字号层级、间距与参考图一致；底光/水印与首、二屏统一） */
function SectionTableOfContents() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.35 })

  const items = [
    { num: "01", zh: "专业能力", en: "PROFESSIONAL ABILITY" },
    { num: "02", zh: "AI赋能", en: "AI EMPOWERMENT" },
    { num: "03", zh: "团队建设", en: "TEAM BUILDING" },
    { num: "04", zh: "未来计划", en: "FUTURE PLANS" },
  ] as const

  return (
    <section
      className="relative flex h-full w-full snap-start items-center overflow-hidden py-10 pl-10 pr-12 md:py-0 md:pl-20 md:pr-24 lg:pl-24 lg:pr-28"
      style={{ backgroundColor: "#050B14" }}
    >
      {/* 与第二屏一致的底光 */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-[#1b2cf4]/22 via-[#1b2cf4]/08 to-transparent" />
      {/* 与首屏一致的左下角水印 */}
      <div className="pointer-events-none absolute bottom-8 left-10 z-10 text-sm font-light tracking-wider text-slate-600">
        4399UED · 2026.04
      </div>

      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-start gap-10 md:flex-row md:items-center md:justify-between md:gap-24 lg:gap-32"
      >
        {/* 左栏：略加宽以便标题单行；md+ 整体上移，右栏不动 */}
        <div className="flex max-w-full flex-col items-start gap-4 md:w-[40%] md:max-w-none md:shrink-0 md:-translate-y-20 md:gap-5 md:pl-2 lg:-translate-y-24 lg:pl-4">
          <motion.span
            variants={fadeInUp}
            className="rounded-full bg-[#77fbd1]/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.32em] text-[#77fbd1] md:px-3.5 md:py-2 md:text-[11px]"
          >
            CONTENTS
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="max-w-[min(100%,22rem)] text-4xl font-black leading-tight tracking-tight text-white sm:max-w-none sm:text-5xl md:text-6xl md:leading-tight lg:text-7xl xl:text-7xl"
          >
            接下来，我想聊聊这些
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="h-1.5 w-16 rounded-full bg-gradient-to-r from-[#77fbd1] to-[#1b2cf4] md:h-2 md:w-20"
            aria-hidden
          />
        </div>

        {/* 右栏：整体变窄，靠右对齐，与右页边留白加大 */}
        <div className="flex min-h-0 min-w-0 w-full flex-1 flex-col gap-5 md:ml-auto md:mr-2 md:w-full md:max-w-[32rem] md:flex-none md:gap-5 lg:mr-4 lg:max-w-[34rem] lg:gap-6">
          {items.map((row) => (
            <motion.div
              key={row.num}
              variants={fadeInUp}
              className="flex items-center gap-6 rounded-2xl border border-white/10 bg-[#111827] px-7 py-5 shadow-sm shadow-black/25 md:gap-8 md:rounded-3xl md:px-9 md:py-6"
            >
              <span className="select-none text-5xl font-black italic leading-none text-[#77fbd1] tabular-nums md:text-6xl lg:text-7xl">
                {row.num}
              </span>
              <div className="min-w-0 flex-1 border-l border-white/10 pl-6 md:pl-8">
                <p className="text-xl font-bold leading-snug text-white md:text-2xl lg:text-3xl">{row.zh}</p>
                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400 md:text-xs">
                  {row.en}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

/** 章节过渡页右上角气泡（规范：当前章蓝色实心，其余线框透明），用于 page3 / 第二章节过渡 / page22，及团队章内容页 page23–page27 */
function ChapterTransitionNavBubbles({ active }: { active: 1 | 2 | 3 | 4 }) {
  const labels = ["01 专业能力", "02 AI赋能", "03 团队建设", "04 未来计划"] as const
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
      title="01 专业能力"
      subtitle="不仅仅是画图"
      activeModule={1}
    />
  )
}

const section3CircleGradient =
  "rounded-full border-0 flex flex-col items-center justify-center bg-gradient-to-b from-[#13284c] to-[#020508] shadow-none"
/** 与第 5 屏双圆圈卡片相同的纵向渐变（矩形卡面复用） */
const section3CircleFillGradient = "bg-gradient-to-b from-[#13284c] to-[#020508]"

const section3CircleSize =
  "w-60 h-60 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem] xl:w-96 xl:h-96"

/** 专业能力章节：右上角横向定位气泡（与双圆页同款，可复用到多页） */
function SectionDesignNavBubbles() {
  return (
    <div className="pointer-events-none absolute top-4 right-4 z-20 flex max-w-[calc(100%-2rem)] flex-row flex-wrap items-center justify-end gap-1.5 md:top-6 md:right-6 md:gap-2">
      <div className="px-2.5 py-1 whitespace-nowrap rounded-full border border-[#1b2cf4] bg-[#1b2cf4] text-[11px] font-bold text-white shadow-md shadow-[#1b2cf4]/35 md:px-3 md:py-1.5 md:text-xs">
        01 专业能力
      </div>
      <div className="px-2.5 py-1 whitespace-nowrap rounded-full border border-white/20 bg-slate-900/85 text-[11px] font-medium text-white backdrop-blur-sm md:px-3 md:py-1.5 md:text-xs">
        02 AI赋能
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

/** AI赋能页右上角定位气泡：02 AI赋能 蓝色高亮，其他为线性按钮 */
function SectionDesignNavBubblesAI() {
  return (
    <div className="pointer-events-none absolute top-4 right-4 z-20 flex max-w-[calc(100%-2rem)] flex-row flex-wrap items-center justify-end gap-1.5 md:top-6 md:right-6 md:gap-2">
      <div className="px-2.5 py-1 whitespace-nowrap rounded-full border border-white/20 bg-transparent text-[11px] font-medium text-slate-300 backdrop-blur-sm md:px-3 md:py-1.5 md:text-xs">
        01 专业能力
      </div>
      <div className="px-2.5 py-1 whitespace-nowrap rounded-full border border-[#1b2cf4] bg-[#1b2cf4] text-[11px] font-bold text-white shadow-md shadow-[#1b2cf4]/35 md:px-3 md:py-1.5 md:text-xs">
        02 AI赋能
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

/** 专业能力章内容页共用：底光、右上标签、左下水印 */
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

/** 第 5 屏：设计思维的转变（分步揭示：右侧模块 -> 底部结论） */
function Section3({ revealStep }: { revealStep: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.35 })

  /** 「数据目标」实底标签 */
  const dataGoalTagBg = "#59BF9F"
  /** 其余强调绿字：做起来、底部高亮词 */
  const accentMint = "#76FCD0"

  const dottedTagCls =
    "relative z-20 rounded-lg border border-dashed border-white/55 bg-black/40 px-4 py-2 text-base font-semibold text-white backdrop-blur-[2px] md:px-5 md:py-2.5 md:text-lg lg:px-6 lg:py-3 lg:text-xl"

  return (
    <section
      className="relative h-full w-full snap-start flex flex-col overflow-hidden px-6 md:px-12 lg:px-20"
      style={{ backgroundColor: "#000000" }}
      data-section="dual-circles"
    >
      <Section3Ambient />

      {/* 左上：标题区（参考图） */}
      <div className="pointer-events-none absolute left-8 top-8 z-20 md:left-14 md:top-10 lg:left-16">
        <div className="pointer-events-auto flex items-start gap-3 md:gap-3.5">
          <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#1b2cf4] md:mt-2.5 md:h-3 md:w-3" aria-hidden />
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl lg:text-4xl">设计思维的转变</h2>
            <p className="mt-1 text-sm font-medium text-slate-500 md:mt-1.5 md:text-base">Design Mindset Shift</p>
          </div>
        </div>
      </div>

      <div
        ref={ref}
        className="relative z-10 flex min-h-0 flex-1 flex-col items-center justify-center px-2 pb-24 pt-[5.5rem] md:pb-28 md:pt-24 lg:pt-28"
      >
        <div className="flex w-full max-w-[min(100%,80rem)] flex-col items-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex w-full flex-col items-stretch justify-center gap-8 md:flex-row md:items-center md:gap-3 lg:gap-5 xl:gap-6"
          >
            {/* 左：把方案画出来 + 标签 */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-center md:flex-1"
            >
              <div className={`relative z-10 ${section3CircleSize} ${section3CircleGradient}`}>
                <span className="text-2xl font-medium text-white md:text-3xl lg:text-4xl xl:text-5xl [text-shadow:none]">
                  把方案
                </span>
                <span className="mt-2 text-3xl font-black text-white md:mt-3 md:text-5xl lg:text-6xl xl:text-7xl [text-shadow:none] md:leading-tight">
                  画出来
                </span>
              </div>
              <div className="z-20 -mt-14 flex flex-wrap items-center justify-center gap-2 md:-mt-16 md:gap-3 lg:-mt-20">
                <span className={dottedTagCls}>业务需求</span>
                <span className="text-2xl font-light text-slate-400 md:text-3xl" aria-hidden>
                  +
                </span>
                <span className={dottedTagCls}>用户体验</span>
              </div>
            </motion.div>

            {/* 中：双箭头（step1 起显示） */}
            <motion.div variants={fadeInUp} className="flex shrink-0 items-center justify-center text-slate-500">
              <svg
                className={`h-9 w-9 rotate-90 transition-opacity duration-300 md:h-14 md:w-14 md:rotate-0 lg:h-16 lg:w-16 xl:h-20 xl:w-20 ${
                  revealStep >= 1 ? "opacity-100" : "pointer-events-none opacity-0"
                }`}
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                <path d="M15.59 16.59L20.17 12 15.59 7.41 17 6l6 6-6 6-1.41-1.41z" />
              </svg>
            </motion.div>

            {/* 右：把项目做起来 + 标签（step1 起显示） */}
            <div
              className={`flex flex-col items-center transition-opacity duration-300 md:flex-1 ${
                revealStep >= 1 ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            >
              <div className={`relative z-10 ${section3CircleSize} ${section3CircleGradient}`}>
                <span className="text-2xl font-medium text-white md:text-3xl lg:text-4xl xl:text-5xl [text-shadow:none]">
                  把项目
                </span>
                <span
                  className="mt-2 text-3xl font-black md:mt-3 md:text-5xl lg:text-6xl xl:text-7xl [text-shadow:none] md:leading-tight"
                  style={{ color: accentMint }}
                >
                  做起来
                </span>
              </div>
              <div className="z-20 -mt-14 flex flex-wrap items-center justify-center gap-2 md:-mt-16 md:gap-3 lg:-mt-20">
                <span
                  className="relative z-20 rounded-lg px-4 py-2 text-base font-bold text-white shadow-sm md:px-5 md:py-2.5 md:text-lg lg:px-6 lg:py-3 lg:text-xl"
                  style={{ backgroundColor: dataGoalTagBg }}
                >
                  数据目标
                </span>
                <span className="text-2xl font-light text-slate-400 md:text-3xl" aria-hidden>
                  +
                </span>
                <span className={dottedTagCls}>用户体验</span>
              </div>
            </div>
          </motion.div>

          {/* 底部结论条：step2 起显示，保持占位避免版面位移 */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mt-10 flex w-full justify-center px-2 md:mt-12 lg:mt-14"
          >
            <div
              className={`w-fit max-w-[min(100%,78rem)] rounded-full border border-white/10 bg-[#0d1623] px-12 py-3.5 text-center text-xl font-medium leading-snug text-white shadow-lg shadow-black/30 transition-opacity duration-300 md:px-[5.25rem] md:py-4 md:text-2xl lg:px-24 lg:py-4 lg:text-3xl ${
                revealStep >= 2 ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
              aria-hidden={revealStep < 2}
            >
              以<span style={{ color: accentMint }}>数据</span>为导向的<span style={{ color: accentMint }}>增长</span>体验设计
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/** 第 6 / 13 / 17 屏：与第 5 屏同底、水印、右上章节气泡；双 Step 卡片（第 13、17 屏可默认隐藏 STEP 02） */
function SectionTargetExecute({
  step2ExtraRevealed,
  onRevealStep2,
  slide17SideHints = false,
}: {
  step2ExtraRevealed?: boolean
  onRevealStep2?: () => void
  /** 仅第 17 屏：主标题右侧灰色延伸文案 */
  slide17SideHints?: boolean
} = {}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.35 })
  const mint = "#76FCD0"
  const step1Accent = "#63C4F5"
  const showStep2 = step2ExtraRevealed !== false
  const needsStep2Reveal = step2ExtraRevealed === false

  return (
    <section
      className="relative flex h-full w-full snap-start flex-col overflow-hidden px-6 md:px-12 lg:px-20"
      style={{
        backgroundColor: "#000000",
        ...(needsStep2Reveal ? { cursor: "pointer" } : {}),
      }}
      onClick={() => {
        if (needsStep2Reveal && onRevealStep2) onRevealStep2()
      }}
      role="presentation"
    >
      <Section3Ambient />
      <div
        ref={ref}
        className="relative z-10 flex min-h-0 flex-1 flex-col items-center justify-center py-10 md:py-14 lg:py-16"
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex w-full max-w-[min(100%,52rem)] flex-col items-center gap-10 md:max-w-[56rem] md:gap-12 lg:max-w-[60rem] lg:gap-14"
        >
          <div className="flex flex-col items-center text-center">
            <motion.h2
              variants={fadeInUp}
              className="w-full max-w-none whitespace-nowrap text-center text-2xl font-black leading-tight tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
            >
              以<span style={{ color: mint }}>数据</span>为导向的增长体验设计
            </motion.h2>
          </div>

          <div className="flex w-full flex-col gap-6 md:gap-8 lg:gap-9">
            <motion.div
              variants={fadeInUp}
              className="rounded-2xl border-2 bg-[#111827] px-6 py-6 shadow-md shadow-black/20 md:rounded-3xl md:px-10 md:py-8 lg:px-12 lg:py-9"
              style={{ borderColor: step1Accent }}
            >
              <div className="min-w-0 text-left">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/70 md:text-xs lg:text-sm">
                  <span style={{ color: step1Accent }}>STEP 01</span>
                  <span className="text-white/40"> / </span>
                  <span
                    className="text-sm font-bold tracking-normal md:text-base lg:text-lg"
                    style={{ color: step1Accent }}
                  >
                    业务视角
                  </span>
                </p>
                {slide17SideHints ? (
                  <div className="mt-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 md:mt-4 lg:mt-5">
                    <p className="min-w-0 text-xl font-bold leading-snug text-white md:text-2xl lg:text-3xl xl:text-4xl">
                      拆解数据目标，找准策略方向
                    </p>
                    <p className="shrink-0 text-base font-medium leading-snug text-slate-400 md:text-lg lg:text-xl">
                      👉🏻落地到首页，展示新人券
                    </p>
                  </div>
                ) : (
                  <p className="mt-3 text-xl font-bold leading-snug text-white md:mt-4 md:text-2xl lg:mt-5 lg:text-3xl xl:text-4xl">
                    拆解数据目标，找准策略方向
                  </p>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={false}
              animate={{ opacity: showStep2 ? 1 : 0 }}
              transition={{ duration: 0.35 }}
              className={showStep2 ? "w-full" : "pointer-events-none w-full"}
            >
              <motion.div
                variants={fadeInUp}
                className="rounded-2xl border-2 bg-[#111827] px-6 py-6 shadow-md shadow-black/20 md:rounded-3xl md:px-10 md:py-8 lg:px-12 lg:py-9"
                style={{ borderColor: mint }}
              >
                <div className="min-w-0 text-left">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/70 md:text-xs lg:text-sm">
                    <span style={{ color: mint }}>STEP 02</span>
                    <span className="text-white/40"> / </span>
                    <span
                      className="text-sm font-bold tracking-normal md:text-base lg:text-lg"
                      style={{ color: mint }}
                    >
                      设计视角
                    </span>
                  </p>
                  {slide17SideHints ? (
                    <div className="mt-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 md:mt-4 lg:mt-5">
                      <p className="min-w-0 text-xl font-bold leading-snug text-white md:text-2xl lg:text-3xl xl:text-4xl">
                        结合设计心理，引导用户行为
                      </p>
                      <p className="shrink-0 text-base font-medium leading-snug text-slate-400 md:text-lg lg:text-xl">
                        👉🏻稀缺性、沉没成本、福格行为模型…
                      </p>
                    </div>
                  ) : (
                    <p className="mt-3 text-xl font-bold leading-snug text-white md:mt-4 md:text-2xl lg:mt-5 lg:text-3xl xl:text-4xl">
                      结合设计心理，引导用户行为
                    </p>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Section 4: Page5 - 业务需求
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
        style={{
          width: "58%",
          top: "50%",
          transform: "translateY(-50%)",
          cursor: demandExtraRevealed ? "default" : "pointer",
        }}
        onClick={() => {
          if (!demandExtraRevealed && onDemandExtraReveal) onDemandExtraReveal()
        }}
      >
        <motion.div variants={fadeInUp} className="flex flex-col items-start text-left gap-12">
          <div className="space-y-3">
            <h3 className="text-xl font-semibold tracking-wide text-slate-400 md:text-2xl lg:text-3xl">
              业务需求
            </h3>
            <h2 className="text-3xl font-bold leading-snug text-white md:text-4xl lg:text-5xl xl:text-6xl">
              <span className="block text-[#77fbd1]">新人礼页面</span>
              <span className="block text-white">引导用户去游戏专区</span>
            </h2>
          </div>
          <div className="min-h-[5.5rem]">
            <motion.div
              initial={false}
              animate={{ opacity: demandExtraRevealed ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-3"
            >
              <h3 className="text-xl font-semibold tracking-wide text-slate-400 md:text-2xl lg:text-3xl">
                数据目标
              </h3>
              <p className="text-3xl font-medium leading-snug text-white md:text-4xl lg:text-5xl">
                提高新用户的下载转化率
              </p>
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

// Section 4B: Page6 - 3387新用户 从启动到下载几步
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
          className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          3387新用户
        </motion.h2>
        <div className="mt-5 flex w-full min-w-0 justify-center overflow-hidden px-2 md:mt-6">
          <motion.h2
            variants={fadeInUp}
            className="inline-block max-w-full whitespace-nowrap text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            从启动app到下载游戏<span className="text-[#77fbd1]">需要几步？</span>
          </motion.h2>
        </div>
      </motion.div>
    </section>
  )
}

// Section 5: Page7 - 数据漏斗
function Section5({
  funnelStep,
  dataMetricsRevealed,
  onAdvance,
}: {
  funnelStep: number
  dataMetricsRevealed: boolean
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
        <motion.div variants={fadeInUp} className="flex flex-col items-center gap-4 md:gap-6">
          <motion.div variants={fadeInUp} className="flex min-w-0 items-center justify-center gap-2 md:gap-4">
            {screens.map((s, i) => {
              const isVisible = i <= funnelStep
              return (
                <motion.div
                  key={i}
                  initial={false}
                  animate={{ opacity: isVisible ? 1 : 0, visibility: isVisible ? "visible" : "hidden" }}
                  transition={{ duration: 0.3 }}
                  className="flex shrink-0 items-center"
                  style={{ pointerEvents: isVisible ? "auto" : "none" }}
                >
                  <div className="flex flex-col items-center">
                    <p className="mb-2 text-sm font-medium text-slate-400 md:text-base lg:text-lg">{s.label}</p>
                    <div className="relative aspect-[9/19] h-[55cqh] rounded-2xl border border-white/5 bg-[#111827] transition-all duration-300 hover:border-orange-400/30 hover:bg-white/8 md:h-[60cqh] md:rounded-3xl overflow-hidden">
                      <div className="absolute top-2 left-1/2 z-10 h-1.5 w-8 -translate-x-1/2 rounded-full bg-slate-700/50 md:w-10" />
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={s.src} alt={s.label} className="h-full w-full object-cover object-top" />
                      <div className="absolute bottom-2 left-1/2 z-10 h-1 w-6 -translate-x-1/2 rounded-full bg-slate-600/50 md:w-8" />
                    </div>
                  </div>
                  {i < 3 && <span className={`z-10 mx-1 text-xl text-slate-600 md:mx-2 md:text-2xl ${i < funnelStep ? "" : "invisible"}`}>{">"}</span>}
                </motion.div>
              )
            })}
          </motion.div>
          <div className="flex min-h-[4rem] items-center justify-center">
            <motion.div
              initial={false}
              animate={{ opacity: dataMetricsRevealed ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="flex w-full max-w-5xl flex-col items-center justify-center gap-8 px-4 md:flex-row md:gap-20"
            >
              <div className="flex items-center gap-3">
                <span className="text-lg text-white md:text-2xl lg:text-3xl">1️⃣→2️⃣ 新人券领取率：</span>
                <span className="text-2xl font-medium text-[#77fbd1] md:text-3xl lg:text-4xl">43%</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-lg text-white md:text-2xl lg:text-3xl">1️⃣ →3️⃣ 查看游戏率：</span>
                <span className="text-2xl font-medium text-[#77fbd1] md:text-3xl lg:text-4xl">76%</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

// Section 6: 破局共识
function Section6({
  extraRevealed,
  onExtraReveal,
}: {
  extraRevealed: boolean
  onExtraReveal?: () => void
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section
      className="relative h-full w-full snap-start flex items-center justify-center overflow-hidden px-6"
      style={{
        backgroundColor: "#050B14",
        cursor: extraRevealed ? "default" : "pointer",
      }}
      onClick={() => {
        if (!extraRevealed && onExtraReveal) onExtraReveal()
      }}
      role="presentation"
    >
      {/* Deep sea wave gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-[#1b2cf4]/22 via-[#1b2cf4]/08 to-transparent" />
      <SectionDesignNavBubbles />

      {/* 左上：与第 5 屏「设计思维的转变」同款结构 */}
      <div className="pointer-events-none absolute left-6 top-6 z-20 md:left-8 md:top-8 lg:left-10 lg:top-10">
        <div className="pointer-events-auto flex items-start gap-3 md:gap-3.5">
          <span
            className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#1b2cf4] md:mt-2.5 md:h-3 md:w-3"
            aria-hidden
          />
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl lg:text-4xl">
              结合数据洞察，定义需求策略
            </h2>
            <p className="mt-1 text-sm font-medium text-slate-500 md:mt-1.5 md:text-base">Insight-led demand strategy</p>
          </div>
        </div>
      </div>

      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 flex w-full max-w-7xl -translate-y-3 flex-col items-center justify-center gap-4 pt-20 md:-translate-y-5 md:flex-row md:gap-5 md:pt-24 lg:gap-6 lg:pt-[5.5rem]"
      >
        {/* 左侧：数据目标 / 原需求 / 数据卡点 / 新需求；相对右侧再略上移 */}
        <motion.div
          variants={fadeInUp}
          className="flex w-full flex-col items-start gap-3 md:w-[48%] md:-translate-y-2 md:gap-4 md:pl-8 lg:-translate-y-3 lg:pl-12"
        >
          <div className="inline-flex w-fit max-w-full items-baseline gap-4 rounded-2xl border border-white/5 bg-[#111827] py-5 pl-5 pr-6 md:gap-6 md:rounded-3xl md:py-6 md:pl-6 md:pr-8">
            <span className="w-[5.5rem] shrink-0 text-base text-slate-500 md:w-24 md:text-lg">数据目标</span>
            <span className="text-lg font-medium text-white md:text-xl lg:text-2xl">提高新用户下载转化率</span>
          </div>
          <div className="inline-flex max-w-full flex-nowrap items-baseline gap-4 whitespace-nowrap rounded-2xl border border-white/5 bg-[#111827] py-5 pl-5 pr-6 md:gap-6 md:rounded-3xl md:py-6 md:pl-6 md:pr-8">
            <span className="w-20 shrink-0 text-base text-slate-500 md:w-24 md:text-lg">原需求</span>
            <span className="shrink-0 text-lg font-medium text-white md:text-xl lg:text-2xl">
              新人礼页引导用户去游戏专区
            </span>
          </div>
          <div className="w-fit max-w-full overflow-hidden rounded-2xl border border-dashed border-red-400/45 bg-red-500/10 py-4 pl-5 pr-6 md:rounded-3xl md:py-5 md:pl-6 md:pr-8">
            <p className="whitespace-nowrap text-lg font-medium leading-snug text-red-200 md:text-xl lg:text-2xl">
              数据卡点：24%的用户没有浏览游戏就流失了
            </p>
          </div>
          <motion.div
            initial={false}
            animate={{ opacity: extraRevealed ? 1 : 0 }}
            transition={{ duration: 0.35 }}
            className={extraRevealed ? "pointer-events-auto" : "pointer-events-none"}
          >
            <div className="inline-flex max-w-full flex-nowrap items-baseline gap-4 whitespace-nowrap rounded-2xl border border-white/5 bg-[#111827] py-5 pl-5 pr-6 md:gap-6 md:rounded-3xl md:py-6 md:pl-6 md:pr-8">
              <span className="w-20 shrink-0 text-base text-slate-500 md:w-24 md:text-lg">新需求</span>
              <span className="shrink-0 text-lg font-medium text-white md:text-xl lg:text-2xl">
                启动APP落地首页，显示新人券
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* 右侧：与改版前相同 9:19 + 高度；仅外层淡入，避免比例被 w-full/max-w 拉变形 */}
        <motion.div variants={fadeInUp} className="flex w-full shrink-0 justify-center md:w-[52%]">
          <motion.div
            initial={false}
            animate={{ opacity: extraRevealed ? 1 : 0 }}
            transition={{ duration: 0.35 }}
            className={`mx-auto w-fit shrink-0 ${extraRevealed ? "pointer-events-auto" : "pointer-events-none"}`}
          >
            <div className="relative h-[65cqh] aspect-[9/19] overflow-hidden rounded-2xl border border-white/5 bg-[#111827] md:h-[75cqh] md:rounded-3xl">
              <div className="absolute left-1/2 top-2 z-10 h-1.5 w-8 -translate-x-1/2 rounded-full bg-slate-700/50 md:w-10" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/image8.png" alt="需求示意" className="h-full w-full object-cover object-top" />
              <div className="absolute bottom-2 left-1/2 z-10 h-1 w-6 -translate-x-1/2 rounded-full bg-slate-600/50 md:w-8" />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

// Section 7b: 设计体验细节 - 左图右文 (新增 page10)
function Section7b({ step, onAdvance }: { step: number; onAdvance: () => void }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const cards = [
    { title: <span className="text-[#77fbd1]">营造稀缺性</span>, sub: "抽奖机、超过92%新人、低奖励轮播" },
    { title: <span className="text-[#77fbd1]">利用损失厌恶</span>, sub: "倒计时、已放入账户、二次挽留弹窗" },
    { title: <span className="text-orange-400">加强动作提示</span>, sub: "立即解锁、按钮动效" },
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

        {/* 右侧：3 张同宽卡片，占满右栏可加宽 */}
        <motion.div
          variants={fadeInUp}
          className="flex min-h-[280px] w-full min-w-0 flex-1 flex-col justify-center gap-4 self-stretch md:min-h-[320px] md:gap-5 md:pl-5 lg:pl-6"
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={false}
              animate={{ opacity: step > i ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="w-full rounded-2xl border border-white/5 bg-[#111827] py-5 pl-5 pr-6 md:rounded-3xl md:py-6 md:pl-6 md:pr-8"
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
        className="relative z-10 flex w-full max-w-7xl flex-col items-center gap-4 px-3 md:flex-row md:gap-5 md:px-4 lg:gap-6"
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

        {/* Right side - Big numbers（整体再略左移） */}
        <div className="flex w-full flex-col items-stretch justify-center gap-8 md:w-[30%] md:-translate-x-4 md:gap-10 lg:-translate-x-7 xl:-translate-x-8">
          {/* Metric 1 */}
          <motion.div variants={fadeInUp} className="w-full text-right">
            <p className="mb-3 text-lg font-medium uppercase tracking-widest text-slate-500 md:text-xl lg:text-2xl">
              新人券领取率
            </p>
            <div className="flex flex-row flex-nowrap items-center justify-end gap-2 md:gap-4">
              <span className="shrink-0 text-3xl font-light text-slate-500 md:text-4xl">42.75%</span>
              <svg
                className="h-6 w-6 shrink-0 text-orange-400 md:h-8 md:w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <span className="shrink-0 text-5xl font-bold text-[#77fbd1] md:text-7xl">56%</span>
            </div>
          </motion.div>

          {/* Metric 2 */}
          <motion.div variants={fadeInUp} className="w-full text-right">
            <p className="mb-3 text-lg font-medium uppercase tracking-widest text-slate-500 md:text-xl lg:text-2xl">
              下载转化率
            </p>
            <div className="flex flex-row flex-nowrap items-center justify-end gap-2 md:gap-4">
              <span className="shrink-0 text-3xl font-light text-slate-500 md:text-4xl">45%</span>
              <svg
                className="h-6 w-6 shrink-0 text-orange-400 md:h-8 md:w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <span className="shrink-0 text-5xl font-bold text-[#77fbd1] md:text-7xl">48%</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

/** 大包体下载 × 设计心理（第 14 屏）：双卡先显、下载完成率角标再显（均为 opacity，无位移） */
function SectionBigDownloadWait({
  bottomCardsRevealed,
  completionRateRevealed,
}: {
  bottomCardsRevealed: boolean
  completionRateRevealed: boolean
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.25 })
  const accent = "#76FCD0"
  const cardOpacity = isInView && bottomCardsRevealed ? 1 : 0
  const rateOpacity = isInView && completionRateRevealed ? 1 : 0

  const cardShell =
    "flex min-h-0 flex-col rounded-2xl border border-white/10 bg-[#0d1219] p-4 shadow-xl shadow-black/40 md:rounded-3xl md:p-5 lg:p-6"

  return (
    <section className="relative flex h-full w-full snap-start flex-col overflow-hidden" style={{ backgroundColor: "#000000" }}>
      <Section3Ambient />

      {/* 左上：与第 5 屏同款蓝点 + 主标题（非居中） */}
      <div className="pointer-events-none absolute left-8 top-8 z-20 md:left-14 md:top-10 lg:left-16">
        <div className="pointer-events-auto flex max-w-[min(calc(100vw-4rem),48rem)] items-start gap-3 md:gap-3.5 lg:max-w-[52rem]">
          <span
            className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#1b2cf4] md:mt-2.5 md:h-3 md:w-3"
            aria-hidden
          />
          <div>
            <h2 className="text-xl font-bold leading-snug tracking-tight text-white sm:text-2xl md:text-3xl lg:text-4xl">
              大包体下载破局，用<span style={{ color: accent }}>设计心理学</span>重塑等待体验
            </h2>
          </div>
        </div>
      </div>

      <div
        ref={ref}
        className="relative z-10 flex min-h-0 flex-1 flex-col px-5 pb-8 pt-[6.25rem] md:px-10 md:pb-10 md:pt-[7rem] lg:px-16 lg:pt-[7.5rem]"
      >
        {/* 下载完成率：右侧、略低；默认透明占位，避免显隐位移 */}
        <motion.div
          initial={false}
          animate={{ opacity: rateOpacity }}
          transition={{ duration: 0.35 }}
          className="pointer-events-none absolute right-5 top-[10rem] z-30 w-[min(calc(100%-2.5rem),17rem)] md:right-8 md:top-[11.25rem] md:w-[19.5rem] lg:right-12 lg:top-[12rem] lg:w-[21rem]"
          aria-hidden
        >
          <div className="rounded-xl border border-white/15 bg-[#1b2cf4] px-4 py-3.5 shadow-xl shadow-black/40 md:rounded-2xl md:px-6 md:py-5">
            <p className="text-base font-bold tracking-wide text-white md:text-lg lg:text-xl">下载完成率</p>
            <p className="mt-2 text-xl font-bold tabular-nums leading-tight text-white md:mt-2.5 md:text-3xl lg:text-4xl">
              从65% → <span style={{ color: accent }}>82%</span>
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex min-h-0 flex-1 flex-col justify-center"
        >
          {/* 双卡：仅两张卡占网格，顶对齐 + 同排，避免与角标混排错位 */}
          <div className="mx-auto grid min-h-0 w-full max-w-[min(100%,58rem)] flex-1 grid-cols-1 gap-4 md:max-w-[min(100%,68rem)] md:grid-cols-12 md:grid-rows-1 md:items-stretch md:gap-5 lg:max-w-[min(100%,72rem)] lg:gap-7">
            <motion.div
              initial={false}
              animate={{ opacity: cardOpacity }}
              transition={{ duration: 0.35 }}
              className={`${cardShell} min-h-0 md:col-span-5 md:row-start-1 md:self-stretch ${bottomCardsRevealed ? "" : "pointer-events-none"}`}
            >
              <h3 className="mb-3 shrink-0 text-left text-base font-semibold leading-snug text-white md:mb-4 md:text-xl lg:text-2xl">
                ① 入场即得，增加<span className="text-red-400">「损失厌恶」</span>
              </h3>
              <div className="flex min-h-0 flex-1 items-center justify-center px-1 pb-1 pt-0 md:px-2 md:pb-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/big-download-card1.png"
                  alt="天降福利弹窗"
                  className="h-[min(60cqh,calc(100dvh-15rem))] w-auto max-w-full object-contain object-top md:h-[min(62cqh,calc(100dvh-14.5rem))]"
                />
              </div>
            </motion.div>

            <motion.div
              initial={false}
              animate={{ opacity: cardOpacity }}
              transition={{ duration: 0.35 }}
              className={`${cardShell} min-h-0 md:col-span-7 md:row-start-1 md:self-stretch ${bottomCardsRevealed ? "" : "pointer-events-none"}`}
            >
              <h3 className="mb-3 shrink-0 text-left text-base font-semibold leading-snug text-white md:mb-4 md:text-xl lg:text-2xl">
                ② 先松后紧，利用<span style={{ color: accent }}>「沉没成本」</span>
              </h3>
              <div className="flex min-h-0 flex-1 items-center justify-center px-1 pb-1 pt-0 md:px-2 md:pb-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/big-download-card2.png"
                  alt="下载进度与优惠券"
                  className="h-auto w-full max-h-[min(56cqh,calc(100dvh-15rem))] max-w-full object-contain object-center md:max-h-[min(62cqh,calc(100dvh-14.5rem))]"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/** 福利 Tab 改版（第 15 屏）：revealPhase 0 右卡占位透明 →1 显右卡 →2 显全屏居中蓝条 */
function SectionWelfareTabRevision({ revealPhase }: { revealPhase: 0 | 1 | 2 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.22 })
  const mint = "#76FCD0"

  const points = [
    {
      num: "①",
      title: "我的游戏福利，聚焦用户资产",
      tags: ["高频功能", "便捷领取"],
    },
    {
      num: "②",
      title: "针对白嫖用户，促活跃的补贴活动",
      tags: ["每日必领", "突出签到、畅玩卡"],
    },
    {
      num: "③",
      title: "针对大R用户，大充值补贴活动",
      tags: ["充值必选", "外置福利信息"],
    },
  ]

  const tagClass =
    "rounded-md border border-[#76fcd0]/50 bg-[#76fcd0]/10 px-3 py-1.5 text-base font-medium text-white/95 md:px-3.5 md:py-2 md:text-lg"

  const welfareCardFrame =
    "flex min-h-0 rounded-3xl border border-white/10 bg-[#121923] p-4 shadow-xl shadow-black/40 md:p-5 lg:rounded-[1.75rem] lg:p-5"

  const rightContentVisible = revealPhase >= 1
  const statsOverlayVisible = revealPhase >= 2

  return (
    <section className="relative flex h-full w-full snap-start flex-col overflow-hidden" style={{ backgroundColor: "#000000" }}>
      <Section3Ambient />

      <div className="pointer-events-none absolute bottom-7 left-8 z-20 text-xs font-light tracking-wider text-slate-500 md:bottom-8 md:left-10 md:text-sm">
        4399UED
      </div>

      <div className="pointer-events-none absolute left-8 top-8 z-20 md:left-14 md:top-10 lg:left-16">
        <div className="pointer-events-auto flex max-w-[min(calc(100vw-4rem),52rem)] items-start gap-3 md:gap-3.5 lg:max-w-[56rem]">
          <span
            className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#1b2cf4] md:mt-2.5 md:h-3 md:w-3"
            aria-hidden
          />
          <div>
            <h2 className="text-xl font-bold leading-snug tracking-tight text-white sm:text-2xl md:text-3xl lg:text-4xl">
              福利Tab改版：从堆砌功能到<span style={{ color: mint }}>按人群分发</span>
            </h2>
          </div>
        </div>
      </div>

      <div
        ref={ref}
        className="relative z-10 flex min-h-0 flex-1 flex-col justify-center px-5 pb-9 pt-[6.5rem] md:px-10 md:pb-10 md:pt-[7.25rem] lg:justify-stretch lg:px-12 lg:pb-8 lg:pt-[7.5rem] xl:px-14"
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mx-auto flex min-h-0 w-full max-w-[min(100%,70rem)] flex-1 flex-col items-stretch gap-4 md:max-w-[min(100%,74rem)] lg:h-[min(66cqh,calc(100dvh-9.25rem))] lg:max-h-[min(70cqh,calc(100dvh-8.75rem))] lg:flex-row lg:items-stretch lg:gap-5 xl:max-w-[min(100%,76rem)]"
        >
          {/* 左卡：仅左图 */}
          <motion.div
            variants={fadeInUp}
            className={`${welfareCardFrame} w-full items-center justify-center lg:w-[min(36%,21rem)] lg:max-w-[22rem] lg:flex-none lg:overflow-hidden`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/welfare-tab-figure1.png"
              alt="福利页活动与领券模块示意"
              className="h-auto max-h-[min(48cqh,calc(100dvh-15rem))] w-full object-contain object-top lg:block lg:h-full lg:max-h-full lg:w-auto lg:max-w-full lg:object-contain lg:object-top"
            />
          </motion.div>

          {/* 右卡：不占位变化，整块 opacity 揭示（不用子 stagger，避免先空壳再填内容） */}
          <motion.div
            initial={false}
            animate={{ opacity: isInView && rightContentVisible ? 1 : 0 }}
            transition={{ duration: 0.35 }}
            className={`${welfareCardFrame} relative min-h-0 flex-1 flex-col overflow-visible lg:h-full lg:min-h-0 lg:flex-row lg:items-stretch`}
            aria-hidden={!rightContentVisible}
          >
            <div className="flex min-h-0 w-full flex-1 flex-col gap-5 lg:flex-row lg:items-stretch lg:gap-5">
              {/* 模块2：右图列收窄，图片在竖向约束下尽量放大 */}
              <div className="flex min-h-0 w-full shrink-0 items-center justify-center border-b border-white/5 pb-4 lg:h-full lg:w-[min(40%,18.5rem)] lg:max-w-[20rem] lg:flex-none lg:self-stretch lg:border-b-0 lg:pb-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/welfare-tab-right-figure1.png"
                  alt="福利 Tab 分人群模块示意（图1）"
                  className="h-auto max-h-[min(56cqh,calc(100dvh-13rem))] w-full object-contain object-top md:max-h-[min(58cqh,calc(100dvh-12rem))] lg:block lg:max-h-[min(64cqh,calc(100dvh-10rem))] lg:w-auto lg:max-w-full lg:object-contain lg:object-top"
                />
              </div>

              {/* 模块3：文案列加宽，标题与标签略放大 */}
              <div className="relative flex min-h-0 min-w-0 flex-1 flex-col gap-6 pt-6 lg:min-h-0 lg:flex-[1.25] lg:basis-0 lg:justify-start lg:gap-7 lg:pt-10 lg:pl-3 xl:pl-5 xl:pt-12">
                {points.slice(0, 2).map((p, i) => (
                  <div
                    key={p.title}
                    className={`flex shrink-0 flex-col gap-2.5 md:gap-3 ${i === 1 ? "mt-4 lg:mt-6" : ""}`}
                  >
                    <p className="text-left text-base font-bold leading-snug text-white md:text-lg lg:text-xl xl:text-2xl">
                      <span style={{ color: mint }}>{p.num}</span> {p.title}
                    </p>
                    <div className="flex flex-wrap gap-2 md:gap-2.5">
                      {p.tags.map((t) => (
                        <span key={t} className={`${tagClass} md:text-lg lg:text-xl`}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}

                {points.slice(2).map((p) => (
                  <div
                    key={p.title}
                    className="mt-10 flex shrink-0 flex-col gap-2.5 md:mt-12 md:gap-3 lg:mt-14"
                  >
                    <p className="text-left text-base font-bold leading-snug text-white md:text-lg lg:text-xl xl:text-2xl">
                      <span style={{ color: mint }}>{p.num}</span> {p.title}
                    </p>
                    <div className="flex flex-wrap gap-2 md:gap-2.5">
                      {p.tags.map((t) => (
                        <span key={t} className={`${tagClass} md:text-lg lg:text-xl`}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 蓝条：相对右侧模块卡片水平+垂直居中；宽度为原先上限的约 70% */}
            <motion.div
              initial={false}
              animate={{ opacity: statsOverlayVisible ? 1 : 0 }}
              transition={{ duration: 0.35 }}
              className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center px-3 md:px-4"
              aria-hidden={!statsOverlayVisible}
            >
              <div className="w-full max-w-[min(65.8vw,30.8rem)] rounded-2xl border border-white/15 bg-[#1b2cf4] px-5 py-5 text-center shadow-2xl shadow-black/50 md:max-w-[min(64.4vw,33.6rem)] md:rounded-3xl md:px-8 md:py-7 lg:max-w-[min(63vw,36.4rem)] lg:px-10 lg:py-8">
                <p className="text-center text-xl font-bold tabular-nums leading-snug text-white md:text-2xl lg:text-3xl xl:text-[2rem]">
                  页面渗透率 <span className="text-white">24%</span>{" "}
                  <span className="text-white/85">→</span>{" "}
                  <span style={{ color: mint }}>25.3%</span>
                </p>
                <p className="mt-3 text-center text-xl font-bold tabular-nums leading-snug text-white md:mt-4 md:text-2xl lg:text-3xl lg:mt-5 xl:text-[2rem]">
                  当日留存 <span className="text-white">72%</span>{" "}
                  <span className="text-white/85">→</span>{" "}
                  <span style={{ color: mint }}>77.8%</span>
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
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

// Section 10b：第二章节过渡页 — 布局同 page22 规范（原独立 page3 样式，已与 page3 / page22 统一）
function Section10b() {
  return (
    <ChapterTransitionLayout
      watermarkDigit="02"
      chapterLabel="Chapter 02"
      title="02 AI赋能"
      subtitle="以AI赋能设计"
      activeModule={2}
    />
  )
}

/** 第 19 屏：AI 赋能四列总览（底光/水印/右上导航同第 14 屏；四列由父级 revealStep 分步揭示） */
function SectionAIEmpowerFourColumns({ revealStep }: { revealStep: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })
  const cardShell =
    "flex min-h-0 flex-col rounded-2xl border border-white/10 bg-[#0d1219]/95 p-4 shadow-lg shadow-black/30 md:rounded-3xl md:p-5 lg:p-6"
  const dashedBtn =
    "w-full rounded-lg border border-dashed border-white/35 bg-black/25 px-3 py-2.5 text-center text-sm font-medium leading-snug text-slate-200 md:px-4 md:py-3 md:text-base lg:text-lg"

  const col1Tags = ["不确定需求价值", "数据分析遇到瓶颈", "MVP最小化验证", "方案选择困难"] as const
  const col4Tags = ["更易懂", "更简洁", "更游戏化", "更情感化"] as const

  const colMotion = (stepNeed: number) => ({
    opacity: revealStep >= stepNeed ? 1 : 0,
    y: revealStep >= stepNeed ? 0 : 18,
  })

  return (
    <section className="relative flex h-full w-full snap-start flex-col overflow-hidden" style={{ backgroundColor: "#000000" }}>
      <Section3Ambient />

      <motion.div
        className="pointer-events-none absolute left-8 top-8 z-20 md:left-14 md:top-10 lg:left-16"
        initial={{ opacity: 0, y: 12 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
        transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="pointer-events-auto flex max-w-[min(calc(100vw-4rem),56rem)] items-start gap-3 md:gap-3.5 lg:max-w-[60rem]">
          <span
            className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#1b2cf4] md:mt-2.5 md:h-3 md:w-3"
            aria-hidden
          />
          <div>
            <h2 className="text-xl font-bold leading-snug tracking-tight text-white sm:text-2xl md:text-3xl lg:text-4xl">
              以AI赋能设计：更有效、更快、更好
            </h2>
          </div>
        </div>
      </motion.div>

      <div
        ref={ref}
        className="relative z-10 flex min-h-0 flex-1 flex-col px-4 pb-8 pt-[6.25rem] md:px-8 md:pb-10 md:pt-[7rem] lg:px-12 lg:pt-[7.5rem]"
      >
        <div className="mx-auto grid min-h-0 w-full max-w-[min(100%,96rem)] flex-1 grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:min-h-[min(56cqh,30rem)] lg:grid-cols-[3fr_3fr_3.5fr_2.5fr] lg:items-stretch lg:gap-3 xl:min-h-[min(58cqh,32rem)] xl:gap-4">
          {/* 列 1：专属产品分析师（图1）；lg 下略窄于第 3 列 */}
          <motion.div
            initial={false}
            animate={colMotion(1)}
            transition={{ duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={`${cardShell} h-full min-h-0 min-w-0`}
          >
            <h3 className="relative z-10 mb-2 shrink-0 text-center text-base font-bold text-white md:mb-2.5 md:text-lg lg:text-xl">
              专属产品分析师
            </h3>
            <div className="relative z-0 mb-2 flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden rounded-xl border border-white/10 bg-white shadow-inner">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/ai-empower-fig1.png"
                alt="专属产品分析师示意"
                className="h-full min-h-0 w-full object-contain object-center"
              />
            </div>
            <div className="relative z-10 mt-auto flex shrink-0 flex-col gap-2.5 md:gap-3">
              {col1Tags.map((t) => (
                <span key={t} className={dashedBtn}>
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* 列 2：快速生成 Demo */}
          <motion.div
            initial={false}
            animate={colMotion(2)}
            transition={{ duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={`${cardShell} h-full min-h-0 min-w-0`}
          >
            <h3 className="relative z-10 mb-2 shrink-0 text-center text-base font-bold text-white md:mb-2.5 md:text-lg lg:text-xl">
              快速生成 Demo
            </h3>
            <div className="relative z-0 flex min-h-0 min-w-0 flex-1 overflow-hidden rounded-xl border border-white/15 bg-black/40 p-0.5 md:p-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/GIF1.gif"
                alt="快速生成 Demo 示意"
                className="h-full min-h-0 w-full object-cover object-top"
              />
            </div>
          </motion.div>

          {/* 列 3：AI辅助设计助推 — lg 下略加宽 */}
          <motion.div
            initial={false}
            animate={colMotion(3)}
            transition={{ duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={`${cardShell} h-full min-h-0 min-w-0`}
          >
            <h3 className="relative z-10 mb-2 shrink-0 text-center text-base font-bold text-white md:mb-2.5 md:text-lg lg:text-xl">
              AI辅助设计助推
            </h3>
            <div className="relative z-0 flex min-h-0 min-w-0 flex-1 overflow-hidden rounded-xl border border-white/15 bg-black/40 p-0.5 md:p-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/ai-empower-design-boost.png"
                alt="AI辅助设计助推示意"
                className="h-full min-h-0 w-full object-cover object-top"
              />
            </div>
          </motion.div>

          {/* 列 4：AI文案拟写 — lg 下略收窄 */}
          <motion.div
            initial={false}
            animate={colMotion(4)}
            transition={{ duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={`${cardShell} h-full min-h-0 min-w-0`}
          >
            <h3 className="relative z-10 mb-2 shrink-0 text-center text-base font-bold text-white md:mb-2.5 md:text-lg lg:text-xl">
              AI文案拟写
            </h3>
            <div className="relative z-10 flex min-h-0 min-w-0 flex-1 flex-col justify-center gap-2.5 md:gap-3">
              {col4Tags.map((t) => (
                <span key={t} className={dashedBtn}>
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/** 第 31 屏：带新人三列卡片（文案、布局与参考稿一致） */
function SectionLeadNewcomersThreeCards() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.22 })
  const mint = "#76FCD0"

  const columns = [
    {
      emoji: "🎯",
      title: "懂目标",
      tags: ["挖掘需求表象", "拆解功能场景"],
    },
    {
      emoji: "🔍",
      title: "磨细节",
      tags: ["推演全流程卡点", "层级及文案推敲", "评审UI稿"],
    },
    {
      emoji: "🦾",
      title: "促协作",
      tags: ["规范交互说明", "规范协作流程"],
    },
  ] as const

  const tagClass =
    "rounded-md border border-dashed border-white/35 bg-black/20 px-3 py-2.5 text-center text-base font-medium leading-snug md:px-4 md:py-3 md:text-lg lg:text-xl"

  return (
    <section
      className="relative flex h-full w-full snap-start flex-col overflow-x-hidden overflow-y-visible"
      style={{ backgroundColor: "#000000" }}
    >
      <Section3Ambient />

      <div className="pointer-events-none absolute bottom-7 left-8 z-20 text-xs font-light tracking-wider text-slate-500 md:bottom-8 md:left-10 md:text-sm">
        4399UED
      </div>

      <div className="pointer-events-none absolute left-8 top-8 z-20 md:left-14 md:top-10 lg:left-16">
        <div className="pointer-events-auto flex max-w-[min(calc(100vw-4rem),52rem)] items-start gap-3 md:gap-3.5 lg:max-w-[56rem]">
          <span
            className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#1b2cf4] md:mt-2.5 md:h-3 md:w-3"
            aria-hidden
          />
          <div>
            <h2 className="text-xl font-bold leading-snug tracking-tight text-white sm:text-2xl md:text-3xl lg:text-4xl">
              带新人：做引导者，而非答案提供者
            </h2>
          </div>
        </div>
      </div>

      <div
        ref={ref}
        className="relative z-10 flex min-h-0 flex-1 flex-col justify-center overflow-visible px-5 pb-10 pt-[6.5rem] md:px-10 md:pb-12 md:pt-[7.25rem] lg:px-12 lg:pt-[7.5rem] xl:px-14"
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mx-auto grid w-full max-w-[min(100%,70rem)] grid-cols-1 items-stretch gap-8 overflow-visible pt-10 sm:max-w-[min(100%,72rem)] sm:pt-12 md:grid-cols-3 md:gap-7 md:pt-14 lg:max-w-[min(100%,76rem)] lg:gap-8 lg:pt-16 xl:gap-10"
        >
          {columns.map((col) => (
            <motion.div
              key={col.title}
              variants={fadeInUp}
              className={`relative flex min-h-0 flex-col items-center overflow-visible rounded-3xl ${section3CircleFillGradient} px-5 pb-8 pt-16 text-center shadow-xl shadow-black/40 md:px-7 md:pb-10 md:pt-20 lg:rounded-[1.75rem] lg:px-8 lg:pb-11 lg:pt-24`}
            >
              <span
                className="pointer-events-none absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-[46%] select-none text-[4.5rem] leading-none sm:text-7xl md:text-8xl md:-translate-y-[48%] lg:text-9xl lg:-translate-y-[50%]"
                aria-hidden
              >
                {col.emoji}
              </span>
              <div className="relative z-10 flex w-full flex-col items-center">
                <h3 className="mt-1 text-3xl font-bold leading-tight text-white md:mt-2 md:text-4xl lg:mt-3 lg:text-5xl">
                  {col.title}
                </h3>
                <div className="mx-auto mt-6 flex w-full max-w-[12.5rem] flex-col gap-3 md:mt-7 md:max-w-[13.5rem] md:gap-3.5 lg:mt-8 lg:max-w-[14rem] lg:gap-4">
                  {col.tags.map((t) => (
                    <span key={t} className={`${tagClass} w-full`} style={{ color: mint }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Section 11 已移除 (原 page15)
// 原第 20–23 屏（Section12 / Section13 / SectionFoggBehavior / SectionAIGameCopy）已从演示中移除

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
                <div className="shrink-0 px-4 py-3 md:px-5 md:py-4">
                  <p className="line-clamp-2 text-base font-semibold leading-snug text-white md:text-lg lg:text-xl">
                    {item.title}
                  </p>
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
                <div className="shrink-0 px-4 py-3 md:px-5 md:py-4">
                  <p className="line-clamp-1 text-base font-semibold leading-snug text-white md:text-lg lg:text-xl">
                    {item.title}
                  </p>
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

/** Section3 设计思维转变页索引（第 5 屏，0-based） */
const SECTION3_INDEX = 4
/** Section4 业务需求页索引 */
const SECTION4_INDEX = 6
/** Section5 数据漏斗页索引（新增 Section4B 后为 8） */
const SECTION5_INDEX = 8
/** Section6 破局共识页索引 */
const SECTION6_INDEX = 9
/** Section7b 设计体验细节页索引（去掉原 Section7 福格页后前移 1） */
const SECTION7B_INDEX = 10
/** 第二段 TARGET/STEP 页索引（第 13 屏，STEP 02 默认隐藏） */
const SECTION_DUP_TARGET_EXECUTE_INDEX = 12
/** 大包体下载等待页索引（第 14 屏，底部双卡默认隐藏） */
const SECTION_BIG_DOWNLOAD_WAIT_INDEX = 13
/** 福利 Tab 改版页索引（第 15 屏） */
const SECTION_WELFARE_TAB_INDEX = 14
/** Section9 经验提炼页索引 */
const SECTION9_INDEX = 15
/** 与第 13 屏同结构与动画（第 17 屏，STEP 02 独立显隐） */
const SECTION_DUP_TARGET_EXECUTE_SLIDE17_INDEX = 16
/** 第 19 屏：AI 赋能四列总览（分步揭示） */
const SECTION_AI_EMPOWER_OVERVIEW_INDEX = 18
/** Section16 AI复盘页索引 */
const SECTION16_INDEX = 19
/** Section17 番茄待办页索引 */
const SECTION17_INDEX = 20
/** Section19 标准化基建页索引 */
const SECTION19_INDEX = 23
/** Section20 三举措页索引 */
const SECTION20_INDEX = 24
/** Section21 带新人心法页索引 */
const SECTION21_INDEX = 26
/** Section22 知识输出页索引（第 32 屏） */
const SECTION22_INDEX = 27
/** 带新人三卡片（第 31 屏） */
const SECTION_LEAD_NEWCOMERS_INDEX = 25
/** Section23 角色定义页索引 */
const SECTION23_INDEX = 29

/** 右侧页码定位器：章节锚点（0-based），悬停展开小图预览与章名 */
const PAGER_CHAPTER_MARKERS: { index: number; label: string }[] = [
  { index: 3, label: "01 专业能力" },
  { index: 17, label: "02 AI赋能" },
  { index: 21, label: "03 团队建设" },
  { index: 28, label: "04 未来计划" },
]

export default function PromotionPresentation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentSection, setCurrentSection] = useState(0)
  /** 第 5 屏：0=默认，1=显示右侧模块，2=显示底部结论条 */
  const [section3RevealStep, setSection3RevealStep] = useState(0)
  const [section4DemandExtra, setSection4DemandExtra] = useState(false)
  /** 第 10 屏：新需求 + 右侧示意，翻页器/空格后显示 */
  const [section6ExtraRevealed, setSection6ExtraRevealed] = useState(false)
  /** 第 13 屏（第二段 TARGET/STEP）：STEP 02 默认隐藏，翻页器/空格后再显示 */
  const [dupTargetStep2Revealed, setDupTargetStep2Revealed] = useState(false)
  /** 第 17 屏：与第 13 屏同页，STEP 02 显隐独立 */
  const [dupTargetSlide17Step2Revealed, setDupTargetSlide17Step2Revealed] = useState(false)
  /** 第 14 屏：底部双卡先显，「下载完成率」再显（均无位移） */
  const [bigDownloadCardsRevealed, setBigDownloadCardsRevealed] = useState(false)
  const [bigDownloadRateRevealed, setBigDownloadRateRevealed] = useState(false)
  /** 第 15 屏：0 右卡内容隐藏 →1 翻页显右卡 →2 再显蓝条 */
  const [welfareTabRevealPhase, setWelfareTabRevealPhase] = useState<0 | 1 | 2>(0)
  const [section5FunnelStep, setSection5FunnelStep] = useState(0)
  const [section5DataMetricsRevealed, setSection5DataMetricsRevealed] = useState(false)
  const [section7bStep, setSection7bStep] = useState(0)
  const [section9Step, setSection9Step] = useState(0)
  const [section17InsightRevealed, setSection17InsightRevealed] = useState(false)
  /** page21：0=仅初版，1=+「>」+1.0，2=+「>」+2.0（均占位） */
  const [section17PhoneStep, setSection17PhoneStep] = useState(0)
  /** page20：0=左右均隐藏，1=左侧，2=右侧 */
  const [section16RevealStep, setSection16RevealStep] = useState(0)
  /** page24：0–3 当前显示卡片索引（从第一张开始） */
  const [section19CardStep, setSection19CardStep] = useState(0)
  /** page25：0=仅「标准化」，1=+「管理放权」，2=+「带新人」 */
  const [section20CircleStep, setSection20CircleStep] = useState(0)
  /** page28：mindset 模块点击后显示 */
  const [section23MindsetRevealed, setSection23MindsetRevealed] = useState(false)
  /** page26：对比模块 0=无，1~3=逐条显示 */
  const [section21ComparisonStep, setSection21ComparisonStep] = useState(0)
  /** 第 19 屏：0=四列均隐藏，1~4 依次显示四列 */
  const [sectionAIEmpowerRevealStep, setSectionAIEmpowerRevealStep] = useState(0)
  const totalSections = 32
  const [isFullscreen, setIsFullscreen] = useState(false)

  useEffect(() => {
    const syncFullscreen = () => setIsFullscreen(Boolean(document.fullscreenElement))
    syncFullscreen()
    document.addEventListener("fullscreenchange", syncFullscreen)
    return () => document.removeEventListener("fullscreenchange", syncFullscreen)
  }, [])

  // 离开第 5 屏后重置分步揭示
  useEffect(() => {
    if (currentSection !== SECTION3_INDEX) {
      setSection3RevealStep(0)
    }
  }, [currentSection])

  // 离开 Section4 后重置需求目标展示
  useEffect(() => {
    if (currentSection !== SECTION4_INDEX) {
      setSection4DemandExtra(false)
    }
  }, [currentSection])

  // 离开 Section6 后重置新需求 + 右侧示意
  useEffect(() => {
    if (currentSection !== SECTION6_INDEX) {
      setSection6ExtraRevealed(false)
    }
  }, [currentSection])

  // 离开第 13 屏（第二段 TARGET/STEP）后重置 STEP 02 显隐
  useEffect(() => {
    if (currentSection !== SECTION_DUP_TARGET_EXECUTE_INDEX) {
      setDupTargetStep2Revealed(false)
    }
  }, [currentSection])

  // 离开第 17 屏（第二段 TARGET/STEP 副本）后重置 STEP 02 显隐
  useEffect(() => {
    if (currentSection !== SECTION_DUP_TARGET_EXECUTE_SLIDE17_INDEX) {
      setDupTargetSlide17Step2Revealed(false)
    }
  }, [currentSection])

  // 离开第 14 屏后重置底部双卡与下载完成率显隐
  useEffect(() => {
    if (currentSection !== SECTION_BIG_DOWNLOAD_WAIT_INDEX) {
      setBigDownloadCardsRevealed(false)
      setBigDownloadRateRevealed(false)
    }
  }, [currentSection])

  // 离开第 15 屏后重置揭示阶段
  useEffect(() => {
    if (currentSection !== SECTION_WELFARE_TAB_INDEX) {
      setWelfareTabRevealPhase(0)
    }
  }, [currentSection])

  // 离开 Section5 后重置
  useEffect(() => {
    if (currentSection !== SECTION5_INDEX) {
      setSection5FunnelStep(0)
      setSection5DataMetricsRevealed(false)
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

  // 离开第 19 屏后重置四列分步
  useEffect(() => {
    if (currentSection !== SECTION_AI_EMPOWER_OVERVIEW_INDEX) {
      setSectionAIEmpowerRevealStep(0)
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
        // 第 5 屏：依次显示右侧模块、底部结论条，再翻页
        if (currentSection === SECTION3_INDEX && section3RevealStep < 2) {
          e.preventDefault()
          setSection3RevealStep((s) => Math.min(s + 1, 2))
          return
        }
        // Section4：第一次按显示「需求目标」，第二次按滚动到下一页
        if (currentSection === SECTION4_INDEX && !section4DemandExtra) {
          e.preventDefault()
          setSection4DemandExtra(true)
          return
        }
        // Section6：第一次显示「新需求」+ 右侧图，再按翻页
        if (currentSection === SECTION6_INDEX && !section6ExtraRevealed) {
          e.preventDefault()
          setSection6ExtraRevealed(true)
          return
        }
        // 第 13 屏：第一次显示 STEP 02，再按翻页
        if (
          currentSection === SECTION_DUP_TARGET_EXECUTE_INDEX &&
          !dupTargetStep2Revealed
        ) {
          e.preventDefault()
          setDupTargetStep2Revealed(true)
          return
        }
        // 第 17 屏：与第 13 屏同交互
        if (
          currentSection === SECTION_DUP_TARGET_EXECUTE_SLIDE17_INDEX &&
          !dupTargetSlide17Step2Revealed
        ) {
          e.preventDefault()
          setDupTargetSlide17Step2Revealed(true)
          return
        }
        // 第 14 屏：先展开双卡，再展开「下载完成率」，再翻页
        if (currentSection === SECTION_BIG_DOWNLOAD_WAIT_INDEX) {
          e.preventDefault()
          if (!bigDownloadCardsRevealed) {
            setBigDownloadCardsRevealed(true)
            return
          }
          if (!bigDownloadRateRevealed) {
            setBigDownloadRateRevealed(true)
            return
          }
          const nextIndex = Math.min(currentSection + 1, totalSections - 1)
          sections[nextIndex]?.scrollIntoView({ behavior: "smooth" })
          setCurrentSection(nextIndex)
          return
        }
        // 第 15 屏：先显右卡内容，再显蓝条，再翻页
        if (currentSection === SECTION_WELFARE_TAB_INDEX && welfareTabRevealPhase < 2) {
          e.preventDefault()
          setWelfareTabRevealPhase((p) => (p < 2 ? ((p + 1) as 0 | 1 | 2) : p))
          return
        }
        // Section5：依次显示手机流程→数据指标，再下一页
        if (currentSection === SECTION5_INDEX) {
          e.preventDefault()
          if (section5FunnelStep < 3) {
            setSection5FunnelStep((s) => s + 1)
          } else if (!section5DataMetricsRevealed) {
            setSection5DataMetricsRevealed(true)
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
        // 第 19 屏：依次显示四列，再翻页
        if (currentSection === SECTION_AI_EMPOWER_OVERVIEW_INDEX && sectionAIEmpowerRevealStep < 4) {
          e.preventDefault()
          setSectionAIEmpowerRevealStep((s) => Math.min(s + 1, 4))
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
        // Section6：已展示则先收起再退页
        if (currentSection === SECTION6_INDEX && section6ExtraRevealed) {
          e.preventDefault()
          setSection6ExtraRevealed(false)
          return
        }
        // 第 13 屏：STEP 02 已显示则先收起再退页
        if (
          currentSection === SECTION_DUP_TARGET_EXECUTE_INDEX &&
          dupTargetStep2Revealed
        ) {
          e.preventDefault()
          setDupTargetStep2Revealed(false)
          return
        }
        // 第 17 屏：与第 13 屏同交互
        if (
          currentSection === SECTION_DUP_TARGET_EXECUTE_SLIDE17_INDEX &&
          dupTargetSlide17Step2Revealed
        ) {
          e.preventDefault()
          setDupTargetSlide17Step2Revealed(false)
          return
        }
        // 第 14 屏：先收起下载完成率，再收起双卡，再退页
        if (currentSection === SECTION_BIG_DOWNLOAD_WAIT_INDEX) {
          e.preventDefault()
          if (bigDownloadRateRevealed) {
            setBigDownloadRateRevealed(false)
            return
          }
          if (bigDownloadCardsRevealed) {
            setBigDownloadCardsRevealed(false)
            return
          }
          const prevIndex = Math.max(currentSection - 1, 0)
          sections[prevIndex]?.scrollIntoView({ behavior: "smooth" })
          setCurrentSection(prevIndex)
          return
        }
        // 第 15 屏：先收蓝条 → 再隐右卡 → 再退页
        if (currentSection === SECTION_WELFARE_TAB_INDEX && welfareTabRevealPhase > 0) {
          e.preventDefault()
          setWelfareTabRevealPhase((p) => (p > 0 ? ((p - 1) as 0 | 1 | 2) : p))
          return
        }
        // Section5：反向依次收起
        if (currentSection === SECTION5_INDEX) {
          e.preventDefault()
          if (section5DataMetricsRevealed) {
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
        // 第 19 屏：先收起第四列→…→第一列，再退页
        if (currentSection === SECTION_AI_EMPOWER_OVERVIEW_INDEX && sectionAIEmpowerRevealStep > 0) {
          e.preventDefault()
          setSectionAIEmpowerRevealStep((s) => Math.max(s - 1, 0))
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
  }, [currentSection, section3RevealStep, section4DemandExtra, section6ExtraRevealed, dupTargetStep2Revealed, dupTargetSlide17Step2Revealed, bigDownloadCardsRevealed, bigDownloadRateRevealed, welfareTabRevealPhase, section5FunnelStep, section5DataMetricsRevealed, section7bStep, section9Step, sectionAIEmpowerRevealStep, section23MindsetRevealed, section21ComparisonStep, section16RevealStep, section17PhoneStep, section17InsightRevealed, section19CardStep, section20CircleStep, totalSections])

  // Update current section on scroll
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      const scrollTop = container.scrollTop
      // 与每节 h-full（相对 16:9 画板）、滚动容器 clientHeight 一致
      const sectionHeight = container.clientHeight || window.innerHeight
      // 用视口中线判定当前页，避免 smooth 滚动过程中 Math.round 与按键翻页不同步（多按一次才翻页）
      const centerLine = scrollTop + sectionHeight / 2
      const newSection = Math.min(Math.max(0, Math.floor(centerLine / sectionHeight)), totalSections - 1)
      setCurrentSection(newSection)
    }

    container.addEventListener("scroll", handleScroll)
    return () => container.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="presentation-root fixed inset-0 z-0 bg-black" data-presentation-root>
      <div className="presentation-stage flex h-full w-full min-h-0 items-center justify-center" data-presentation-stage>
        <div
          className="presentation-canvas relative isolate min-h-0 overflow-hidden bg-[#050B14] shadow-2xl [container-type:size]"
          data-presentation-canvas
          style={{
            width: "min(100dvw, calc(100dvh * 16 / 9))",
            height: "min(100dvh, calc(100dvw * 9 / 16))",
          }}
        >
          <div
            ref={containerRef}
            className="presentation-scroll relative z-10 h-full min-h-0 w-full overflow-y-auto overscroll-contain snap-y snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            data-presentation-scroll
            style={{ backgroundColor: "#050B14" }}
          >
            <div className="presentation-print-ignore pointer-events-none absolute inset-0 z-0">
              <div className="absolute -top-32 -left-32 h-[700px] w-[700px] rounded-full bg-[#1b2cf4]/10 blur-[160px]" />
              <div className="absolute -bottom-32 -right-32 h-[600px] w-[600px] rounded-full bg-purple-500/10 blur-[140px]" />
              <div className="absolute top-1/2 left-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[180px]" />
            </div>
            <div
              className="presentation-print-ignore pointer-events-none absolute inset-0 z-[1] opacity-[0.03]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                backgroundRepeat: "repeat",
              }}
            />

            <Section1 />
      <Section2 />
      <SectionTableOfContents />
      <Section3ChapterDesign />
      <Section3 revealStep={section3RevealStep} />
      <SectionTargetExecute />
      <Section4 demandExtraRevealed={section4DemandExtra} onDemandExtraReveal={() => setSection4DemandExtra(true)} />
      <Section4B />
      <Section5
        funnelStep={section5FunnelStep}
        dataMetricsRevealed={section5DataMetricsRevealed}
        onAdvance={() => {
          if (section5FunnelStep < 3) {
            setSection5FunnelStep((s) => s + 1)
          } else if (!section5DataMetricsRevealed) {
            setSection5DataMetricsRevealed(true)
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
      <Section6
        extraRevealed={section6ExtraRevealed}
        onExtraReveal={() => setSection6ExtraRevealed(true)}
      />
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
      <SectionTargetExecute
        step2ExtraRevealed={dupTargetStep2Revealed}
        onRevealStep2={() => setDupTargetStep2Revealed(true)}
      />
      <SectionBigDownloadWait
        bottomCardsRevealed={bigDownloadCardsRevealed}
        completionRateRevealed={bigDownloadRateRevealed}
      />
      <SectionWelfareTabRevision revealPhase={welfareTabRevealPhase} />
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
      <SectionTargetExecute
        step2ExtraRevealed={dupTargetSlide17Step2Revealed}
        onRevealStep2={() => setDupTargetSlide17Step2Revealed(true)}
        slide17SideHints
      />
      <Section10b />
      <SectionAIEmpowerFourColumns revealStep={sectionAIEmpowerRevealStep} />
      <Section16 revealStep={section16RevealStep} />
      <Section17 showInsight={section17InsightRevealed} phoneStep={section17PhoneStep} />
      <SectionTeamBuildTransition />
      <Section18 />
      <Section19 cardStep={section19CardStep} />
      <Section20 circleStep={section20CircleStep} />
      <SectionLeadNewcomersThreeCards />
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
          className="presentation-print-ignore fixed bottom-6 right-6 z-[60] flex items-center gap-2 rounded-full border border-white/20 bg-[#111827]/90 px-4 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-[#111827]"
          aria-label="全屏"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
          </svg>
          全屏
        </button>
      )}

      {/* 右侧页码定位器：仅显示页码，章节页高亮章名 */}
      <div className="presentation-print-ignore fixed right-0 top-0 bottom-0 z-50 w-[4.75rem] group md:w-[5.75rem]">
        <div className="absolute inset-0" />
        <div className="pointer-events-auto absolute right-1 top-1/2 flex max-h-[calc(100vh-2rem)] -translate-y-1/2 flex-col items-end gap-1 overflow-y-auto overflow-x-visible py-4 opacity-0 transition-opacity duration-300 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden group-hover:opacity-100 md:right-2">
          {[...Array(totalSections)].map((_, index) => {
            const chapter = PAGER_CHAPTER_MARKERS.find((c) => c.index === index)
            return (
            <button
              key={index}
              onClick={() => {
                const container = containerRef.current
                if (!container) return
                const sections = container.querySelectorAll("section")
                if (
                  index === SECTION3_INDEX &&
                  currentSection === SECTION3_INDEX &&
                  section3RevealStep < 2
                ) {
                  setSection3RevealStep((s) => Math.min(s + 1, 2))
                  return
                }
                if (
                  index === SECTION6_INDEX &&
                  currentSection === SECTION6_INDEX &&
                  !section6ExtraRevealed
                ) {
                  setSection6ExtraRevealed(true)
                  return
                }
                if (
                  index === SECTION_DUP_TARGET_EXECUTE_INDEX &&
                  currentSection === SECTION_DUP_TARGET_EXECUTE_INDEX &&
                  !dupTargetStep2Revealed
                ) {
                  setDupTargetStep2Revealed(true)
                  return
                }
                if (
                  index === SECTION_DUP_TARGET_EXECUTE_SLIDE17_INDEX &&
                  currentSection === SECTION_DUP_TARGET_EXECUTE_SLIDE17_INDEX &&
                  !dupTargetSlide17Step2Revealed
                ) {
                  setDupTargetSlide17Step2Revealed(true)
                  return
                }
                if (
                  index === SECTION_BIG_DOWNLOAD_WAIT_INDEX &&
                  currentSection === SECTION_BIG_DOWNLOAD_WAIT_INDEX
                ) {
                  if (!bigDownloadCardsRevealed) {
                    setBigDownloadCardsRevealed(true)
                    return
                  }
                  if (!bigDownloadRateRevealed) {
                    setBigDownloadRateRevealed(true)
                    return
                  }
                }
                if (
                  index === SECTION_WELFARE_TAB_INDEX &&
                  currentSection === SECTION_WELFARE_TAB_INDEX &&
                  welfareTabRevealPhase < 2
                ) {
                  setWelfareTabRevealPhase((p) => (p < 2 ? ((p + 1) as 0 | 1 | 2) : p))
                  return
                }
                if (
                  index === SECTION_AI_EMPOWER_OVERVIEW_INDEX &&
                  currentSection === SECTION_AI_EMPOWER_OVERVIEW_INDEX &&
                  sectionAIEmpowerRevealStep < 4
                ) {
                  setSectionAIEmpowerRevealStep((s) => Math.min(s + 1, 4))
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
              className={`group/row relative flex items-center justify-end gap-1.5 rounded-full transition-all duration-300 ${
                currentSection === index
                  ? "bg-white/20 px-1.5 py-0.5 md:px-2"
                  : "px-1.5 py-0.5 hover:bg-white/10 md:px-2"
              } ${chapter ? "ring-1 ring-[#77fbd1]/30" : ""}`}
              aria-label={chapter ? `${chapter.label}，第 ${index + 1} 页` : `第 ${index + 1} 页`}
              title={chapter ? chapter.label : undefined}
            >
              <span className="flex min-w-0 flex-col items-end leading-none">
                {chapter ? (
                  <span className="mb-0.5 hidden max-w-[5.5rem] truncate text-right text-[8px] font-semibold leading-tight text-[#77fbd1] group-hover/row:block md:text-[9px]">
                    {chapter.label}
                  </span>
                ) : null}
                <span
                  className={`text-[10px] font-medium tabular-nums ${
                    currentSection === index ? "text-white" : "text-slate-400"
                  }`}
                >
                  {index + 1}
                </span>
              </span>
              <span
                className={`h-2 w-2 shrink-0 rounded-full transition-all duration-300 ${
                  currentSection === index ? "scale-125 bg-white" : "bg-white/30 hover:bg-white/50"
                }`}
              />
            </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
