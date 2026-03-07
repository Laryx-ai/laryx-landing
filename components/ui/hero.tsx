"use client"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { MeshGradient, PulsingBorder } from "@paper-design/shaders-react"
import { motion, AnimatePresence } from "framer-motion"
import { MenuIcon, XIcon, Music2 } from "lucide-react"

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Integrations", href: "#integrations" },
]

const PARTICLES = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  left: 20 + (i * 13.7 + 7) % 60,
  top: 20 + (i * 17.3 + 11) % 60,
  dx: (i % 3) * 8 - 8,
  delay: i * 0.2,
}))

function EqBars() {
  return (
    <span className="flex items-end gap-0.5 h-3.5">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="eq-bar w-0.75 rounded-sm bg-[#1ED760]"
          style={{ animationDelay: `${i * 0.18}s` }}
        />
      ))}
    </span>
  )
}

export default function ShaderShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [spotifyOpen, setSpotifyOpen] = useState(true)

  // Set iframe src after hydration so browser treats it as user-initiated,
  // which allows autoplay=1 to fire reliably.
  useEffect(() => {
    if (iframeRef.current) {
      iframeRef.current.src =
        "https://open.spotify.com/embed/playlist/37i9dQZF1DX4sWSpwq3LiO?utm_source=generator&theme=0&autoplay=1"
    }
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-black relative overflow-hidden">
      <svg className="absolute inset-0 w-0 h-0">
        <defs>
          <filter id="glass-effect" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence baseFrequency="0.005" numOctaves="1" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.3" />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0.02
                      0 1 0 0 0.02
                      0 0 1 0 0.05
                      0 0 0 0.9 0"
              result="tint"
            />
          </filter>
          <filter id="gooey-filter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
          <filter id="logo-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0466C8" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#0466C8" />
          </linearGradient>
          <linearGradient id="hero-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="30%" stopColor="#0466C8" />
            <stop offset="70%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#0466C8" />
          </linearGradient>
          <filter id="text-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      <MeshGradient
        className="absolute inset-0 w-full h-full"
        colors={["#000000", "#0466C8", "#0355a0", "#021f3d", "#ffffff"]}
        speed={0.3}
      />
      <MeshGradient
        className="absolute inset-0 w-full h-full opacity-60"
        colors={["#000000", "#ffffff", "#0466C8", "#0355a0"]}
        speed={0.2}
      />

      <header className="relative z-20 flex items-center justify-between px-5 py-4 md:px-6">
        {/* Logo */}
        <motion.div
          className="flex items-center group cursor-pointer"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <motion.div
            className="relative h-10 w-auto"
            style={{ filter: "url(#logo-glow)" }}
            whileHover={{
              rotate: [0, -2, 2, 0],
              transition: { duration: 0.6, ease: "easeInOut" },
            }}
          >
            <Image
              src="/Frame 21.png"
              alt="Laryx"
              width={120}
              height={40}
              className="h-10 w-auto object-contain drop-shadow-lg"
              priority
            />
          </motion.div>

          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/60 rounded-full"
                style={{
                  left: `${PARTICLES[i].left}%`,
                  top: `${PARTICLES[i].top}%`,
                }}
                animate={{
                  y: [-10, -20, -10],
                  x: [0, PARTICLES[i].dx, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/70 hover:text-white text-xs font-light px-4 py-1.5 rounded-full hover:bg-white/10 transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Login Button Group with Arrow */}
        <div className="hidden md:flex items-center gap-2">
          {/* Spotify toggle */}
          <div className="relative">
            <motion.button
              onClick={() => setSpotifyOpen((v) => !v)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200"
              style={{
                background: spotifyOpen ? "rgba(30,215,96,0.12)" : "rgba(255,255,255,0.06)",
                backdropFilter: "blur(12px)",
                border: spotifyOpen ? "1px solid rgba(30,215,96,0.3)" : "1px solid rgba(255,255,255,0.1)",
                color: spotifyOpen ? "#1ED760" : "rgba(255,255,255,0.65)",
                boxShadow: spotifyOpen ? "0 0 12px rgba(30,215,96,0.15)" : "none",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle ambient music"
            >
              {spotifyOpen ? <EqBars /> : <Music2 size={13} />}
              <span>{spotifyOpen ? "Playing" : "Ambient"}</span>
            </motion.button>
          </div>

          {/* Gooey login */}
          <div
            className="relative flex items-center group"
            id="gooey-btn"
            style={{ filter: "url(#gooey-filter)" }}
          >
            <button className="absolute right-0 px-2.5 py-2 rounded-full bg-white text-black font-normal text-xs transition-all duration-300 hover:bg-white/90 cursor-pointer h-8 flex items-center justify-center -translate-x-10 group-hover:-translate-x-19 z-0">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </button>
            <button className="px-6 py-2 rounded-full bg-white text-black font-normal text-xs transition-all duration-300 hover:bg-white/90 cursor-pointer h-8 flex items-center z-10">
              Login
            </button>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center gap-2">
          {/* Mobile Spotify toggle */}
          <motion.button
            onClick={() => setSpotifyOpen((v) => !v)}
            className="flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200"
            style={{
              background: spotifyOpen ? "rgba(30,215,96,0.12)" : "rgba(255,255,255,0.06)",
              border: spotifyOpen ? "1px solid rgba(30,215,96,0.3)" : "1px solid rgba(255,255,255,0.1)",
              color: spotifyOpen ? "#1ED760" : "rgba(255,255,255,0.65)",
            }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle ambient music"
          >
            {spotifyOpen ? <EqBars /> : <Music2 size={13} />}
          </motion.button>

          <button
            className="flex items-center justify-center w-9 h-9 rounded-full bg-white/8 backdrop-blur-sm text-white border border-white/15 transition-all duration-200 hover:bg-white/15 hover:border-white/30 active:scale-95"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <motion.div
              animate={{ rotate: menuOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {menuOpen ? <XIcon size={16} /> : <MenuIcon size={16} />}
            </motion.div>
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            className="md:hidden relative z-10 mx-4 mt-2 rounded-2xl overflow-hidden"
            style={{
              background: "rgba(4, 102, 200, 0.08)",
              backdropFilter: "blur(24px) saturate(180%)",
              WebkitBackdropFilter: "blur(24px) saturate(180%)",
              border: "1px solid rgba(255,255,255,0.12)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.15), 0 0 0 0.5px rgba(4,102,200,0.2)",
            }}
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {/* top highlight line */}
            <div className="absolute top-0 left-8 right-8 h-px bg-linear-to-r from-transparent via-white/30 to-transparent" />
            {/* blue ambient glow top-left */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#0466C8]/20 rounded-full blur-2xl pointer-events-none" />
            <nav className="relative flex flex-col py-3">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-white/75 hover:text-white text-sm font-light px-5 py-3 hover:bg-white/8 transition-colors"
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.05 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="mx-5 my-2 h-px bg-linear-to-r from-transparent via-white/15 to-transparent" />
              <a
                href="#features"
                onClick={() => setMenuOpen(false)}
                className="mx-4 mb-2 text-center py-2.5 rounded-full bg-linear-to-r from-[#0466C8] to-[#0355a0] text-white font-medium text-sm hover:from-[#0577e0] hover:to-[#0466C8] transition-all shadow-[0_2px_12px_rgba(4,102,200,0.4)]"
              >
                Login
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="absolute bottom-8 left-8 z-20 max-w-2xl">
        <div className="text-left">
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm mb-6 relative border border-white/10"
            style={{
              filter: "url(#glass-effect)",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute top-0 left-1 right-1 h-px bg-linear-to-r from-transparent via-[#0466C8]/40 to-transparent rounded-full" />
            <span className="text-white/90 text-sm font-medium relative z-10 tracking-wide">
              ✨ High-Performance Software Systems
            </span>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-none tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.span
              className="block font-light text-white/90 text-4xl md:text-5xl lg:text-6xl mb-2 tracking-wider"
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #0466C8 30%, #ffffff 70%, #0466C8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "url(#text-glow)",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              Reliable
            </motion.span>
            <span className="block font-black text-white drop-shadow-2xl">Software</span>
            <span className="block font-light text-white/80 italic">Architecture</span>
          </motion.h1>

          <motion.p
            className="text-lg font-light text-white/70 mb-8 leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Laryx designs and builds high-quality software systems, platforms, and tools — with an unwavering focus on
            performance, reliability, security, and scalable architecture.
          </motion.p>

          <motion.div
            className="flex items-center gap-6 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <motion.a
              href="#pricing"
              className="px-10 py-4 rounded-full bg-transparent border-2 border-white/30 text-white font-medium text-sm transition-all duration-300 hover:bg-white/10 hover:border-[#0466C8]/60 hover:text-white cursor-pointer backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Pricing
            </motion.a>
            <motion.a
              href="#features"
              className="px-10 py-4 rounded-full bg-linear-to-r from-[#0466C8] to-[#0355a0] text-white font-semibold text-sm transition-all duration-300 hover:from-[#0577e0] hover:to-[#0466C8] cursor-pointer shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.a>
          </motion.div>
        </div>
      </main>

      {/* Spotify player panel — fixed below header, always mounted */}
      <motion.div
        className="fixed top-17 right-4 z-50 w-[min(280px,calc(100vw-2rem))] rounded-2xl overflow-hidden"
        animate={{
          opacity: spotifyOpen ? 1 : 0,
          y: spotifyOpen ? 0 : -8,
          scale: spotifyOpen ? 1 : 0.97,
        }}
        initial={false}
        transition={{ duration: 0.22, ease: "easeOut" }}
        style={{
          pointerEvents: spotifyOpen ? "auto" : "none",
          background: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(28px) saturate(180%)",
          WebkitBackdropFilter: "blur(28px) saturate(180%)",
          border: "1px solid rgba(255,255,255,0.12)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.12), 0 0 0 0.5px rgba(30,215,96,0.15)",
        }}
      >
        <div className="absolute top-0 left-8 right-8 h-px bg-linear-to-r from-transparent via-[#1ED760]/30 to-transparent" />
        <iframe
          ref={iframeRef}
          width="100%"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="eager"
          title="Spotify ambient player"
        />
      </motion.div>

      {/* Bottom-right: pulsing badge only */}
      <div className="absolute bottom-8 right-4 sm:right-8 z-30">
        <div className="relative w-20 h-20 flex items-center justify-center">
          <PulsingBorder
            colors={["#0466C8", "#0355a0", "#ffffff", "#4d9de0", "#021f3d"]}
            colorBack="#00000000"
            speed={1.5}
            roundness={1}
            thickness={0.1}
            softness={0.2}
            intensity={5}
            spots={5}
            spotSize={0.1}
            pulse={0.1}
            smoke={0.5}
            smokeSize={4}
            scale={0.65}
            rotation={0}
            frame={9161408.251009725}
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
            }}
          />

          {/* Rotating Text Around the Pulsing Border */}
          <motion.svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            style={{ transform: "scale(1.6)" }}
          >
            <defs>
              <path id="circle" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
            </defs>
            <text className="text-sm fill-white/80 font-medium">
              <textPath href="#circle" startOffset="0%">
                Laryx • Performance • Reliability • Security • Scalability •
              </textPath>
            </text>
          </motion.svg>
        </div>

      </div>
    </div>
  )
}
