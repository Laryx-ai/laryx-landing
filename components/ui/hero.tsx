"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { MeshGradient, PulsingBorder } from "@paper-design/shaders-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Integrations", href: "#integrations" },
];

export default function ShaderShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [spotifyOpen, setSpotifyOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (iframeRef.current) {
      iframeRef.current.src =
        "https://open.spotify.com/embed/playlist/37i9dQZF1DX4sWSpwq3LiO?utm_source=generator&theme=0&autoplay=1";
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isScrolled = scrollY > 350;
  const isMorphed = scrollY > 350;

  return (
    <div ref={containerRef} className="min-h-screen bg-black relative overflow-hidden">
      <svg className="absolute inset-0 w-0 h-0 pointer-events-none">
        <defs>
          <filter id="logo-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
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

<header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between mx-auto transition-all duration-500 ease-out"
        style={{
          paddingLeft: isScrolled ? "16px" : "clamp(16px, 4vw, 32px)",
          paddingRight: isScrolled ? "16px" : "clamp(16px, 4vw, 32px)",
          paddingTop: isScrolled ? "16px" : "28px",
          paddingBottom: isScrolled ? "16px" : "28px",
          marginTop: isScrolled ? "12px" : "0px",
          maxWidth: isScrolled ? "1200px" : "100%",
          background: isScrolled ? "rgba(0, 0, 0, 0.4)" : "transparent",
          backdropFilter: isScrolled ? "blur(20px) saturate(180%)" : "none",
          WebkitBackdropFilter: isScrolled ? "blur(20px) saturate(180%)" : "none",
          borderRadius: isScrolled ? "24px" : "0px",
          boxShadow: isScrolled ? "0 4px 30px rgba(0, 0, 0, 0.3)" : "none",
        }}
      >
        <motion.div
          className="flex items-center cursor-pointer"
          animate={{ scale: isMorphed ? 0.75 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative h-10 w-auto" style={{ filter: "url(#logo-glow)" }}>
            <Image
              src="/Frame 21.png"
              alt="Laryx"
              width={isMorphed ? 80 : 120}
              height={isMorphed ? 26 : 40}
              className="h-10 w-auto object-contain drop-shadow-lg transition-all duration-300"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          className={cn(
            "flex items-center gap-1 transition-all duration-500 rounded-full",
            isMorphed 
              ? "bg-white/10 border border-white/20 px-5 py-2" 
              : "px-3 py-1.5"
          )}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-white/70 hover:text-white transition-all duration-200 rounded-full",
                isMorphed ? "text-sm px-4" : "text-xs px-4"
              )}
            >
              {link.label}
            </a>
          ))}
        </motion.div>

        <motion.button
          className={cn(
            "rounded-full font-medium bg-amber-50 text-black transition-all duration-300",
            isMorphed ? "px-6 py-2 text-sm" : "px-6 py-2 text-xs"
          )}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Login
        </motion.button>
      </header>

      <main className="absolute bottom-8 left-8 z-20 max-w-2xl">
        <div className="text-left">
          {/* <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm mb-6 relative border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute top-0 left-1 right-1 h-px bg-linear-to-r from-transparent via-[#0466C8]/40 to-transparent rounded-full" />
            <span className="text-white/90 text-sm font-medium relative z-10 tracking-wide">
              ✨ High-Performance Software Systems
            </span>
          </motion.div> */}

          <motion.h1
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-none tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.span
              className="block font-light text-white/90 text-4xl md:text-5xl lg:text-6xl mb-2 tracking-wider font-aclonica"
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #0466C8 30%, #ffffff 70%, #0466C8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
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
            style={{ color: "rgba(255,255,255,0.85)" }}
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
  );
}