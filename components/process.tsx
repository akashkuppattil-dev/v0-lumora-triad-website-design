'use client'

import { useState, useEffect, useRef } from 'react'
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronDown, Play, Settings, RefreshCw, Compass, ShieldAlert, Cpu } from 'lucide-react'

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Discover',
    tagline: 'Strategy & Alignment',
    description: 'We deeply analyze your business objectives, target audience, and market landscape to establish a scalable product strategy.',
    deliverables: [
      'Competitive benchmarking & gap audits',
      'Target persona & user journey maps',
      'Feature scope & architectural definition',
      'Core timeline & resource allocation plans'
    ]
  },
  {
    number: '02',
    title: 'Design',
    tagline: 'High-Fidelity User Experience',
    description: 'Crafting premium, intuitive interfaces and clean layout systems that solve real problems, build customer trust, and drive conversions.',
    deliverables: [
      'Interactive Figma high-fidelity prototypes',
      'Tailored design token systems (colors, spacing)',
      'Responsive wireframes & accessibility audits',
      'High-conversion UI asset packaging'
    ]
  },
  {
    number: '03',
    title: 'Develop',
    tagline: 'Scalable Frontend & Logic',
    description: 'Engineering high-performance web products with clean code, modern server components, modular APIs, and structured data.',
    deliverables: [
      'Next.js, React, & Tailwind frontend builds',
      'Modular REST & GraphQL API configurations',
      'Custom Headless CMS content pipelines',
      'Rigorous unit & end-to-end integration tests'
    ]
  },
  {
    number: '04',
    title: 'Launch',
    tagline: 'Speed & SEO Optimization',
    description: 'Executing technical audits and deployment automation to ensure absolute page speeds, security, and search engine visibility.',
    deliverables: [
      'Next-generation Core Web Vitals optimization',
      'Advanced technical SEO metadata scripting',
      'Secure Vercel or AWS cloud orchestration',
      'Active SSL, DNS, & analytics tagging configuration'
    ]
  },
  {
    number: '05',
    title: 'Support',
    tagline: 'Growth & Performance Analytics',
    description: 'Providing ongoing uptime audits, security updates, and collaborative growth partnerships to continuously refine your product.',
    deliverables: [
      '24/7 server performance & uptime monitoring',
      'Continuous security patch deployment',
      'Periodic styling & dynamic feature iteration',
      'Conversion optimization & user engagement reviews'
    ]
  }
]

export function Process() {
  const [activeStep, setActiveStep] = useState(0)
  const [openAccordion, setOpenAccordion] = useState<number | null>(0)

  // Phase 1: Discover Sandbox States
  const [scope, setScope] = useState(60)
  const [complexity, setComplexity] = useState(50)
  const [speed, setSpeed] = useState(70)

  // Phase 2: Design Sandbox States
  const [selectedPalette, setSelectedPalette] = useState<'emerald' | 'indigo' | 'coral' | 'mono'>('mono')
  const [radiusClass, setRadiusClass] = useState<'rounded-none' | 'rounded-md' | 'rounded-2xl'>('rounded-2xl')

  // Phase 3: Develop Sandbox States
  const [activeFile, setActiveFile] = useState<'page.tsx' | 'route.ts'>('page.tsx')
  const [isBuilding, setIsBuilding] = useState(false)
  const [buildStep, setBuildStep] = useState(0)
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    'ready - started server on 0.0.0.0:3000, url: http://localhost:3000'
  ])

  // Phase 4: Launch Sandbox States
  const [isAuditing, setIsAuditing] = useState(false)
  const [auditScores, setAuditScores] = useState({ performance: 0, accessibility: 0, seo: 0 })

  // Phase 5: Support Sandbox States
  const [wavePhase, setWavePhase] = useState(0)
  const [uptimeLogMode, setUptimeLogMode] = useState<'metrics' | 'status'>('metrics')

  const handleNext = () => {
    setActiveStep((prev) => (prev + 1) % PROCESS_STEPS.length)
  }

  const handlePrev = () => {
    setActiveStep((prev) => (prev - 1 + PROCESS_STEPS.length) % PROCESS_STEPS.length)
  }

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index)
  }

  // Phase 3: Simulated Build Execution
  const runBuild = () => {
    if (isBuilding) return
    setIsBuilding(true)
    setBuildStep(0)
    setTerminalLogs(['$ npm run build', ''])

    const steps = [
      'Creating an optimized production build...',
      'Compiling client-side bundles & layouts...',
      '▲ Next.js production build metrics:',
      '  ├ / (Home)           Size: 84.2 kB | Load: 142 kB',
      '  ├ /work (Portfolio)  Size: 21.6 kB | Load: 98 kB',
      '  └ /services/[slug]    Size: 12.4 kB | Load: 86 kB',
      'Optimizing SEO headers & accessibility trees...',
      '✓ Production build compiled successfully in 384ms!'
    ]

    let current = 0
    const interval = setInterval(() => {
      if (current < steps.length) {
        setTerminalLogs((prev) => [...prev, steps[current]])
        setBuildStep((c) => c + 1)
        current++
      } else {
        clearInterval(interval)
        setIsBuilding(false)
      }
    }, 450)
  }

  // Phase 4: Simulated Lighthouse Audit
  const runLighthouseAudit = () => {
    if (isAuditing) return
    setIsAuditing(true)
    setAuditScores({ performance: 0, accessibility: 0, seo: 0 })

    const targets = { performance: 100, accessibility: 98, seo: 100 }
    let currentScore = 0

    const interval = setInterval(() => {
      currentScore += 5
      if (currentScore <= 100) {
        setAuditScores({
          performance: Math.min(currentScore, targets.performance),
          accessibility: Math.min(currentScore, targets.accessibility),
          seo: Math.min(currentScore, targets.seo)
        })
      } else {
        clearInterval(interval)
        setIsAuditing(false)
      }
    }, 45)
  }

  // Phase 5: SVG Wave Oscillation
  useEffect(() => {
    let animationFrameId: number
    const tick = () => {
      setWavePhase((prev) => (prev + 0.08) % (Math.PI * 2))
      animationFrameId = requestAnimationFrame(tick)
    }
    animationFrameId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(animationFrameId)
  }, [])

  // Dynamic Strategy calculations for Phase 1
  const getStrategyBadge = () => {
    if (speed > 80 && scope < 50) return 'Rapid MVP Pipeline'
    if (complexity > 75) return 'Enterprise Microservice Architecture'
    return 'Custom High-Performance Jamstack'
  }
  const getEstimatedDuration = () => {
    return Math.max(3, Math.round((complexity * 0.08) + (scope * 0.05)))
  }

  return (
    <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-transparent border-t border-white/10 relative overflow-hidden">

      {/* Background radial highlight */}
      <div className="absolute right-[-10%] top-[40%] w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-px bg-foreground" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground opacity-60">
            Methodology
          </span>
        </div>

        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter mb-16 sm:mb-20 text-foreground">
          How We Work
        </h2>

        {/* ── DESKTOP VIEW: Split interactive dashboard ── */}
        <div className="hidden lg:grid grid-cols-12 gap-12 items-start">

          {/* Left Sticky Stepper Tree (45%) */}
          <div className="col-span-5 sticky top-32 space-y-8">
            <div className="relative border-l border-white/10 pl-6 space-y-8">
              {PROCESS_STEPS.map((step, index) => {
                const isActive = index === activeStep
                return (
                  <button
                    key={step.number}
                    onClick={() => setActiveStep(index)}
                    className="w-full text-left group flex flex-col focus:outline-none relative transition-all"
                  >
                    {/* Vertical timeline connector bullet */}
                    <div
                      className={`absolute left-[-31.5px] top-1.5 w-4 h-4 rounded-full border transition-all duration-300 ${isActive
                          ? 'border-sky-400 bg-background shadow-[0_0_10px_rgba(56,189,248,0.5)] scale-125'
                          : 'border-white/20 bg-neutral-900 group-hover:border-white/40'
                        }`}
                    />

                    <span className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-1 transition-all ${isActive ? 'text-sky-400' : 'text-muted-foreground opacity-55 group-hover:opacity-80'
                      }`}>
                      Phase {step.number} — {step.tagline}
                    </span>

                    <h3 className={`text-2xl font-black tracking-tight transition-all ${isActive ? 'text-foreground' : 'text-muted-foreground opacity-60 group-hover:opacity-100'
                      }`}>
                      {step.title}
                    </h3>

                    {isActive && (
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed transition-opacity duration-300">
                        {step.description}
                      </p>
                    )}
                  </button>
                )
              })}
            </div>

            {/* Previous/Next Navigation Actions */}
            <div className="flex gap-4 pt-4 pl-6">
              <button
                onClick={handlePrev}
                className="p-3 border border-white/10 rounded-full hover:bg-foreground hover:text-background hover:scale-105 active:scale-95 transition-all"
                aria-label="Previous methodology step"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                onClick={handleNext}
                className="p-3 border border-white/10 rounded-full hover:bg-foreground hover:text-background hover:scale-105 active:scale-95 transition-all"
                aria-label="Next methodology step"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Right Visual Interactive Console Canvas (55%) */}
          <div className="col-span-7 bg-[#141414]/80 border border-white/10 rounded-[2rem] p-8 backdrop-blur-xl min-h-[500px] flex flex-col justify-between shadow-2xl relative overflow-hidden group/console hover:border-white/20 transition-all">

            {/* Header info */}
            <div className="flex justify-between items-center border-b border-white/5 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                <span className="text-[11px] font-mono text-muted-foreground ml-2 uppercase tracking-widest opacity-60">
                  Interactive Sandbox // Phase {PROCESS_STEPS[activeStep].number}
                </span>
              </div>
              <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold tracking-wider text-muted-foreground">
                DELIVERABLE
              </div>
            </div>

            {/* Sandbox Canvas */}
            <div className="flex-1 flex flex-col justify-center">

              {/* ── PHASE 1: DISCOVER SANDBOX ── */}
              {activeStep === 0 && (
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h4 className="text-xs uppercase font-bold tracking-widest text-muted-foreground opacity-80">
                      Determine Alignment Matrix
                    </h4>

                    {/* Range Sliders */}
                    <div className="space-y-3 font-mono text-xs">
                      <div className="space-y-1">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground uppercase">Project Scope Scale</span>
                          <span className="text-foreground">{scope}%</span>
                        </div>
                        <input
                          type="range"
                          min="10" max="100"
                          value={scope}
                          onChange={(e) => setScope(Number(e.target.value))}
                          className="w-full accent-foreground bg-white/10 rounded-lg h-1 appearance-none cursor-pointer"
                        />
                      </div>

                      <div className="space-y-1">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground uppercase">Technical Complexity</span>
                          <span className="text-foreground">{complexity}%</span>
                        </div>
                        <input
                          type="range"
                          min="10" max="100"
                          value={complexity}
                          onChange={(e) => setComplexity(Number(e.target.value))}
                          className="w-full accent-foreground bg-white/10 rounded-lg h-1 appearance-none cursor-pointer"
                        />
                      </div>

                      <div className="space-y-1">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground uppercase">Deployment Velocity</span>
                          <span className="text-foreground">{speed}%</span>
                        </div>
                        <input
                          type="range"
                          min="10" max="100"
                          value={speed}
                          onChange={(e) => setSpeed(Number(e.target.value))}
                          className="w-full accent-foreground bg-white/10 rounded-lg h-1 appearance-none cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Estimated Output Result */}
                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono text-muted-foreground uppercase">Computed Strategy</span>
                      <span className="text-xs font-bold text-sky-400 bg-sky-400/10 px-2 py-0.5 rounded border border-sky-400/20">
                        {getStrategyBadge()}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-foreground/80">Estimated Scoping Period</span>
                      <span className="font-bold text-foreground">{getEstimatedDuration()} Weeks</span>
                    </div>
                  </div>
                </div>
              )}

              {/* ── PHASE 2: DESIGN SANDBOX ── */}
              {activeStep === 1 && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h4 className="text-xs uppercase font-bold tracking-widest text-muted-foreground opacity-80">
                      Configure Design Token Lab
                    </h4>

                    {/* Switcher Toggles */}
                    <div className="flex gap-2">
                      {(['mono', 'emerald', 'indigo', 'coral'] as const).map((palette) => (
                        <button
                          key={palette}
                          onClick={() => setSelectedPalette(palette)}
                          className={`w-6 h-6 rounded-full border transition-all ${palette === 'mono' ? 'bg-zinc-400 border-zinc-200' :
                              palette === 'emerald' ? 'bg-emerald-400 border-emerald-300' :
                                palette === 'indigo' ? 'bg-indigo-400 border-indigo-300' :
                                  'bg-rose-400 border-rose-300'
                            } ${selectedPalette === palette ? 'scale-110 ring-2 ring-white' : 'opacity-60 hover:opacity-100'}`}
                          title={`Select ${palette} token theme`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Draggable/Togglable border controls */}
                  <div className="flex gap-3 text-xs font-mono">
                    <button
                      onClick={() => setRadiusClass('rounded-none')}
                      className={`px-3 py-1.5 border rounded-lg ${radiusClass === 'rounded-none' ? 'bg-white/10 border-white/20 text-white' : 'border-white/5 text-muted-foreground'}`}
                    >
                      Sharp
                    </button>
                    <button
                      onClick={() => setRadiusClass('rounded-md')}
                      className={`px-3 py-1.5 border rounded-lg ${radiusClass === 'rounded-md' ? 'bg-white/10 border-white/20 text-white' : 'border-white/5 text-muted-foreground'}`}
                    >
                      Balanced
                    </button>
                    <button
                      onClick={() => setRadiusClass('rounded-2xl')}
                      className={`px-3 py-1.5 border rounded-lg ${radiusClass === 'rounded-2xl' ? 'bg-white/10 border-white/20 text-white' : 'border-white/5 text-muted-foreground'}`}
                    >
                      Pill
                    </button>
                  </div>

                  {/* Component Preview Render box */}
                  <div className={`p-6 bg-white/[0.02] border border-white/5 ${radiusClass} transition-all duration-300`}>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className={`text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 border rounded ${selectedPalette === 'mono' ? 'bg-zinc-500/10 text-zinc-300 border-zinc-500/20' :
                            selectedPalette === 'emerald' ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20' :
                              selectedPalette === 'indigo' ? 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20' :
                                'bg-rose-500/10 text-rose-300 border-rose-500/20'
                          }`}>
                          Token Configurator
                        </span>
                        <div className="w-3 h-3 rounded-full bg-white/10" />
                      </div>

                      <h5 className="text-lg font-black tracking-tight text-white leading-none">
                        Interactive Dashboard Frame
                      </h5>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Wireframe layouts adapt instantly based on global design definitions. Feel free to toggle the colors above.
                      </p>

                      <button className={`w-full py-2.5 text-xs font-bold transition-all text-center ${selectedPalette === 'mono' ? 'bg-white text-black hover:bg-zinc-200' :
                          selectedPalette === 'emerald' ? 'bg-emerald-500 text-black hover:bg-emerald-400' :
                            selectedPalette === 'indigo' ? 'bg-indigo-500 text-white hover:bg-indigo-400' :
                              'bg-rose-500 text-white hover:bg-rose-400'
                        } ${radiusClass}`}>
                        Primary Action Link
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* ── PHASE 3: DEVELOP SANDBOX ── */}
              {activeStep === 2 && (
                <div className="space-y-4 font-mono text-xs text-left">

                  {/* File tab selectors */}
                  <div className="flex border-b border-white/5 pb-2 gap-2">
                    <button
                      onClick={() => setActiveFile('page.tsx')}
                      className={`px-3 py-1 rounded transition-colors ${activeFile === 'page.tsx' ? 'bg-white/5 text-white' : 'text-muted-foreground hover:text-white'}`}
                    >
                      page.tsx
                    </button>
                    <button
                      onClick={() => setActiveFile('route.ts')}
                      className={`px-3 py-1 rounded transition-colors ${activeFile === 'route.ts' ? 'bg-white/5 text-white' : 'text-muted-foreground hover:text-white'}`}
                    >
                      api/route.ts
                    </button>
                  </div>

                  {/* Code Screen Container */}
                  <div className="p-4 bg-black/60 rounded-xl border border-white/5 min-h-[160px] overflow-x-auto text-[11px] leading-relaxed text-zinc-300">
                    {activeFile === 'page.tsx' ? (
                      <div>
                        <span className="text-blue-400">import</span> {'{ Hero }'} <span className="text-blue-400">from</span> <span className="text-amber-300">{"'@/components/hero'"}\n</span>
                        <span className="text-blue-400">import</span> {'{ Process }'} <span className="text-blue-400">from</span> <span className="text-amber-300">{"'@/components/process'"}\n\n</span>
                        <span className="text-purple-400">export default function</span> <span className="text-yellow-400">HomePage</span>() {'{\n'}
                        &nbsp;&nbsp;<span className="text-purple-400">return</span> (\n
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-green-400">main</span> className=<span className="text-amber-300">{"\"overflow-hidden\""}</span>&gt;\n
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-green-400">Hero</span> priority /&gt;\n
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-green-400">Process</span> /&gt;\n
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-green-400">main</span>&gt;\n
                        &nbsp;&nbsp;)\n
                        {'}'}
                      </div>
                    ) : (
                      <div>
                        <span className="text-blue-400">import</span> {'{ NextResponse }'} <span className="text-blue-400">from</span> <span className="text-amber-300">{"'next/server'"}\n\n</span>
                        <span className="text-purple-400">export async function</span> <span className="text-yellow-400">POST</span>(request: Request) {'{\n'}
                        &nbsp;&nbsp;<span className="text-purple-400">const</span> data = <span className="text-purple-400">await</span> request.<span className="text-yellow-400">json</span>();\n
                        &nbsp;&nbsp;<span className="text-purple-400">return</span> NextResponse.<span className="text-yellow-400">json</span>({'{'} status: <span className="text-amber-300">{"'compiled'"}</span> {'}'});\n
                        {'}'}
                      </div>
                    )}
                  </div>

                  {/* Terminal Execution */}
                  <div className="bg-black rounded-lg p-3 border border-white/5 space-y-1">
                    <div className="flex justify-between items-center text-[10px] text-muted-foreground border-b border-white/5 pb-1 mb-1.5">
                      <span>TERMINAL CONSOLE</span>
                      <button
                        onClick={runBuild}
                        disabled={isBuilding}
                        className="flex items-center gap-1.5 text-sky-400 hover:text-sky-300 disabled:text-muted-foreground cursor-pointer"
                      >
                        <Play size={10} />
                        Run Build
                      </button>
                    </div>

                    <div className="space-y-1 text-[10px] text-zinc-400 overflow-y-auto max-h-[80px]">
                      {terminalLogs.map((log, i) => (
                        <div key={i} className="whitespace-pre-wrap">{log}</div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* ── PHASE 4: LAUNCH SANDBOX ── */}
              {activeStep === 3 && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h4 className="text-xs uppercase font-bold tracking-widest text-muted-foreground opacity-80">
                      Audit Core Web Vitals
                    </h4>

                    <button
                      onClick={runLighthouseAudit}
                      disabled={isAuditing}
                      className="flex items-center gap-2 px-3 py-1.5 border border-white/10 rounded-full text-xs font-bold hover:bg-white hover:text-black transition-all cursor-pointer disabled:opacity-50"
                    >
                      <RefreshCw size={12} className={isAuditing ? 'animate-spin' : ''} />
                      {isAuditing ? 'Auditing System...' : 'Run Audit'}
                    </button>
                  </div>

                  {/* Three Circular Progress Dials */}
                  <div className="grid grid-cols-3 gap-4">
                    {/* Performance Dial */}
                    <div className="flex flex-col items-center space-y-2">
                      <div className="relative w-20 h-20 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90">
                          <circle cx="40" cy="40" r="34" className="stroke-white/5 fill-none" strokeWidth="6" />
                          <circle
                            cx="40" cy="40" r="34"
                            className="stroke-emerald-400 fill-none transition-all duration-300"
                            strokeWidth="6"
                            strokeDasharray={2 * Math.PI * 34}
                            strokeDashoffset={2 * Math.PI * 34 * (1 - auditScores.performance / 100)}
                          />
                        </svg>
                        <span className="absolute text-sm font-bold font-mono text-emerald-400">{auditScores.performance}</span>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Performance</span>
                    </div>

                    {/* Accessibility Dial */}
                    <div className="flex flex-col items-center space-y-2">
                      <div className="relative w-20 h-20 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90">
                          <circle cx="40" cy="40" r="34" className="stroke-white/5 fill-none" strokeWidth="6" />
                          <circle
                            cx="40" cy="40" r="34"
                            className="stroke-emerald-400 fill-none transition-all duration-300"
                            strokeWidth="6"
                            strokeDasharray={2 * Math.PI * 34}
                            strokeDashoffset={2 * Math.PI * 34 * (1 - auditScores.accessibility / 100)}
                          />
                        </svg>
                        <span className="absolute text-sm font-bold font-mono text-emerald-400">{auditScores.accessibility}</span>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Accessibility</span>
                    </div>

                    {/* SEO Dial */}
                    <div className="flex flex-col items-center space-y-2">
                      <div className="relative w-20 h-20 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90">
                          <circle cx="40" cy="40" r="34" className="stroke-white/5 fill-none" strokeWidth="6" />
                          <circle
                            cx="40" cy="40" r="34"
                            className="stroke-emerald-400 fill-none transition-all duration-300"
                            strokeWidth="6"
                            strokeDasharray={2 * Math.PI * 34}
                            strokeDashoffset={2 * Math.PI * 34 * (1 - auditScores.seo / 100)}
                          />
                        </svg>
                        <span className="absolute text-sm font-bold font-mono text-emerald-400">{auditScores.seo}</span>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">SEO Metrics</span>
                    </div>
                  </div>

                  <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl text-center text-xs text-muted-foreground">
                    Deployments utilize Server Side Generation (SSG) to achieve instantaneous response rates.
                  </div>
                </div>
              )}

              {/* ── PHASE 5: SUPPORT SANDBOX ── */}
              {activeStep === 4 && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center border-b border-white/5 pb-2">
                    <h4 className="text-xs uppercase font-bold tracking-widest text-muted-foreground opacity-80">
                      Live Performance Monitor
                    </h4>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setUptimeLogMode('metrics')}
                        className={`text-[10px] font-mono px-2 py-0.5 border rounded ${uptimeLogMode === 'metrics' ? 'bg-white/10 text-white border-white/20' : 'border-transparent text-muted-foreground'
                          }`}
                      >
                        METRICS
                      </button>
                      <button
                        onClick={() => setUptimeLogMode('status')}
                        className={`text-[10px] font-mono px-2 py-0.5 border rounded ${uptimeLogMode === 'status' ? 'bg-white/10 text-white border-white/20' : 'border-transparent text-muted-foreground'
                          }`}
                      >
                        HEALTH LOGS
                      </button>
                    </div>
                  </div>

                  {uptimeLogMode === 'metrics' ? (
                    <div className="space-y-4">
                      {/* Live Waveform drawing */}
                      <div className="h-20 bg-black/60 rounded-xl border border-white/5 flex items-center relative overflow-hidden">
                        <svg className="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
                          {/* Animated Sine wave path */}
                          <path
                            d={`M 0 50 
                                Q 30 ${50 + Math.sin(wavePhase) * 20}, 60 50 
                                T 120 50 
                                T 180 50 
                                T 240 50 
                                T 300 50`}
                            fill="none"
                            stroke="#38bdf8"
                            strokeWidth="2"
                            className="opacity-80"
                          />
                          <path
                            d={`M 0 50 
                                Q 30 ${50 + Math.sin(wavePhase + Math.PI) * 15}, 60 50 
                                T 120 50 
                                T 180 50 
                                T 240 50 
                                T 300 50`}
                            fill="none"
                            stroke="#6366f1"
                            strokeWidth="1.5"
                            className="opacity-40"
                          />
                        </svg>
                        <span className="absolute top-2 left-3 text-[9px] font-mono bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded">
                          Live Pulse Stream
                        </span>
                      </div>

                      {/* Health Stat Indicators */}
                      <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                        <div className="p-3 bg-white/[0.02] border border-white/5 rounded-xl space-y-1 text-left">
                          <span className="text-muted-foreground uppercase text-[9px] tracking-wider block">Average Uptime</span>
                          <span className="text-white font-bold text-sm block">99.98%</span>
                        </div>
                        <div className="p-3 bg-white/[0.02] border border-white/5 rounded-xl space-y-1 text-left">
                          <span className="text-muted-foreground uppercase text-[9px] tracking-wider block">Node Response</span>
                          <span className="text-white font-bold text-sm block">38ms</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="p-4 bg-black/60 rounded-xl border border-white/5 space-y-2 text-left text-[10px] font-mono text-zinc-400">
                      <div className="flex gap-2"><span className="text-emerald-400">●</span> <span>[INFO] Security status checked: 0 Vulnerabilities</span></div>
                      <div className="flex gap-2"><span className="text-emerald-400">●</span> <span>[INFO] Automated dependency updates completed</span></div>
                      <div className="flex gap-2"><span className="text-emerald-400">●</span> <span>[INFO] Edge cache invalidated successfully</span></div>
                      <div className="flex gap-2"><span className="text-indigo-400">●</span> <span>[STAT] SEO rankings updated (+1.4% search reach)</span></div>
                    </div>
                  )}
                </div>
              )}

            </div>

            {/* List of deliverables for the selected active step */}
            <div className="border-t border-white/5 pt-6 mt-6">
              <h4 className="text-[10px] uppercase font-bold tracking-[0.25em] text-muted-foreground mb-4 text-left">
                Phase Deliverables & Scope
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                {PROCESS_STEPS[activeStep].deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-foreground/80 font-medium">
                    <CheckCircle2 size={14} className="text-sky-400 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* ── MOBILE VIEW: Interactive accordion stack ── */}
        <div className="lg:hidden space-y-6">
          {PROCESS_STEPS.map((step, index) => {
            const isOpen = openAccordion === index
            return (
              <div
                key={step.number}
                className={`border rounded-2xl transition-all duration-300 overflow-hidden ${isOpen ? 'border-white/20 bg-[#161616]' : 'border-white/5 bg-transparent hover:border-white/10'
                  }`}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <span className={`text-sm font-mono transition-colors ${isOpen ? 'text-sky-400' : 'text-muted-foreground'}`}>
                      {step.number}
                    </span>
                    <div>
                      <span className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground block opacity-60">
                        {step.tagline}
                      </span>
                      <h3 className="text-lg font-black tracking-tight text-foreground">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  <ChevronDown
                    size={16}
                    className={`text-muted-foreground transition-transform duration-300 ${isOpen ? 'rotate-180 text-foreground' : ''}`}
                  />
                </button>

                {/* Accordion Content */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 border-t border-white/5' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                    }`}
                >
                  <div className="overflow-hidden">
                    <div className="p-5 space-y-6">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>

                      {/* Interactive Visual Element embedded directly inside the open accordion */}
                      <div className="p-5 bg-black/40 border border-white/5 rounded-xl">

                        {/* Phase 1 Mobile Sandbox */}
                        {index === 0 && (
                          <div className="space-y-4">
                            <span className="text-[10px] font-mono text-muted-foreground block mb-2">DYNAMIC SCENARIOS</span>
                            <div className="space-y-3 font-mono text-xs">
                              <div className="space-y-1">
                                <div className="flex justify-between text-[10px]">
                                  <span>SCOPE SCALE</span>
                                  <span>{scope}%</span>
                                </div>
                                <input
                                  type="range" min="10" max="100" value={scope}
                                  onChange={(e) => setScope(Number(e.target.value))}
                                  className="w-full accent-foreground bg-white/10 rounded h-1 appearance-none"
                                />
                              </div>
                              <div className="space-y-1">
                                <div className="flex justify-between text-[10px]">
                                  <span>TECHNICAL COMPLEXITY</span>
                                  <span>{complexity}%</span>
                                </div>
                                <input
                                  type="range" min="10" max="100" value={complexity}
                                  onChange={(e) => setComplexity(Number(e.target.value))}
                                  className="w-full accent-foreground bg-white/10 rounded h-1 appearance-none"
                                />
                              </div>
                            </div>
                            <div className="pt-2 border-t border-white/5 text-[10px] font-mono text-zinc-400 flex justify-between">
                              <span>Strategy: <b className="text-sky-400">{getStrategyBadge()}</b></span>
                              <span>Timeline: <b className="text-white">{getEstimatedDuration()}w</b></span>
                            </div>
                          </div>
                        )}

                        {/* Phase 2 Mobile Sandbox */}
                        {index === 1 && (
                          <div className="space-y-4">
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-[10px] font-mono text-muted-foreground">TOKEN PALETTE</span>
                              <div className="flex gap-1.5">
                                {(['mono', 'emerald', 'indigo', 'coral'] as const).map((palette) => (
                                  <button
                                    key={palette}
                                    onClick={() => setSelectedPalette(palette)}
                                    className={`w-4 h-4 rounded-full ${palette === 'mono' ? 'bg-zinc-400' :
                                        palette === 'emerald' ? 'bg-emerald-400' :
                                          palette === 'indigo' ? 'bg-indigo-400' :
                                            'bg-rose-400'
                                      } ${selectedPalette === palette ? 'ring-2 ring-white scale-110' : 'opacity-60'}`}
                                  />
                                ))}
                              </div>
                            </div>
                            <div className={`p-4 bg-white/[0.02] border border-white/5 rounded-xl text-xs space-y-2`}>
                              <h5 className="font-bold text-white">Live Design Tokens</h5>
                              <button className={`w-full py-1.5 text-[10px] font-bold ${selectedPalette === 'mono' ? 'bg-white text-black' :
                                  selectedPalette === 'emerald' ? 'bg-emerald-500 text-black' :
                                    selectedPalette === 'indigo' ? 'bg-indigo-500 text-white' :
                                      'bg-rose-500 text-white'
                                } rounded-md`}>
                                Styled Action Component
                              </button>
                            </div>
                          </div>
                        )}

                        {/* Phase 3 Mobile Sandbox */}
                        {index === 2 && (
                          <div className="space-y-3 text-[10px] font-mono">
                            <div className="flex justify-between items-center border-b border-white/5 pb-1 mb-2">
                              <span>BUILD WORKFLOW</span>
                              <button onClick={runBuild} disabled={isBuilding} className="text-sky-400 font-bold">
                                RUN BUILD
                              </button>
                            </div>
                            <div className="bg-black p-3 rounded border border-white/5 max-h-[80px] overflow-y-auto leading-normal text-zinc-400">
                              {terminalLogs.slice(-4).map((log, i) => (
                                <div key={i}>{log}</div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Phase 4 Mobile Sandbox */}
                        {index === 3 && (
                          <div className="space-y-4">
                            <div className="flex justify-between items-center">
                              <span className="text-[10px] font-mono text-muted-foreground">AUDIT DASHBOARD</span>
                              <button onClick={runLighthouseAudit} disabled={isAuditing} className="text-[10px] font-bold text-sky-400 border border-sky-400/20 px-2 py-0.5 rounded bg-sky-400/5">
                                Audit PageSpeed
                              </button>
                            </div>
                            <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
                              <div className="p-2 bg-white/[0.02] border border-white/5 rounded">
                                <div className="text-emerald-400 font-bold text-sm">{auditScores.performance}</div>
                                <div className="text-[8px] text-muted-foreground uppercase mt-1">Perf</div>
                              </div>
                              <div className="p-2 bg-white/[0.02] border border-white/5 rounded">
                                <div className="text-emerald-400 font-bold text-sm">{auditScores.accessibility}</div>
                                <div className="text-[8px] text-muted-foreground uppercase mt-1">Access</div>
                              </div>
                              <div className="p-2 bg-white/[0.02] border border-white/5 rounded">
                                <div className="text-emerald-400 font-bold text-sm">{auditScores.seo}</div>
                                <div className="text-[8px] text-muted-foreground uppercase mt-1">SEO</div>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Phase 5 Mobile Sandbox */}
                        {index === 4 && (
                          <div className="space-y-3 font-mono text-[10px]">
                            <div className="h-12 bg-black/60 rounded border border-white/5 flex items-center overflow-hidden">
                              <svg className="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
                                <path
                                  d={`M 0 50 Q 30 ${50 + Math.sin(wavePhase) * 25}, 60 50 T 120 50 T 180 50 T 240 50 T 300 50`}
                                  fill="none" stroke="#38bdf8" strokeWidth="3"
                                />
                              </svg>
                            </div>
                            <div className="flex justify-between">
                              <span>UPTIME: <b className="text-white">99.98%</b></span>
                              <span>LATENCY: <b className="text-white">38ms</b></span>
                            </div>
                          </div>
                        )}

                      </div>

                      {/* Deliverables checklist */}
                      <div className="space-y-3 border-t border-white/5 pt-4">
                        <h4 className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">
                          Key Deliverables
                        </h4>
                        <div className="space-y-2">
                          {step.deliverables.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2.5 text-xs text-foreground/80 font-medium">
                              <CheckCircle2 size={13} className="text-sky-400 flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
