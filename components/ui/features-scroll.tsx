"use client";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface Feature {
  title: string;
  description: string;
  color: string;
}

const FEATURES: Feature[] = [
  { 
    title: "Laryx Retrieval", 
    description: "Context-grounded answers from your document corpus",
    color: "#00aaff" 
  },
  { 
    title: "Semantic Index", 
    description: "High-density vector search across structured knowledge",
    color: "#FFD800" 
  },
  { 
    title: "Signal Classifier", 
    description: "Real-time query routing across seven intent signals",
    color: "#FF008B" 
  },
  { 
    title: "Inference Layer", 
    description: "Pluggable model backends with unified API surface",
    color: "#ffffff" 
  },
  { 
    title: "Knowledge Vault", 
    description: "Versioned document store with live indexing",
    color: "#22c55e" 
  },
  { 
    title: "Laryx Core API", 
    description: "Stateless, decoupled service layer for any client",
    color: "#f97316" 
  },
  { 
    title: "Orchestration Engine", 
    description: "Dynamic prompt assembly and multi-step reasoning",
    color: "#0466C8" 
  },
  { 
    title: "Session Context", 
    description: "Persistent turn history for coherent multi-round dialogue",
    color: "#f43f5e" 
  },
];

function FeatureIcon({ color, label }: { color: string; label: string }) {
  const initial = label.split(" ").pop()?.charAt(0) || "L";
  return (
    <div
      className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-2xl flex items-center justify-center"
      style={{
        background: `linear-gradient(135deg, ${color}20 0%, ${color}08 100%)`,
        border: `1px solid ${color}40`,
      }}
    >
      <div 
        className="w-32 h-32 lg:w-40 lg:h-40 rounded-2xl flex items-center justify-center"
        style={{
          background: `linear-gradient(135deg, ${color}30 0%, ${color}15 100%)`,
          border: `2px solid ${color}60`,
        }}
      >
        <span 
          className="text-7xl lg:text-8xl font-bold"
          style={{ color }}
        >
          {initial}
        </span>
      </div>
    </div>
  );
}

function FeatureCard({
  feature,
  isActive,
}: {
  feature: Feature;
  isActive: boolean;
}) {
  return (
    <div
      className={cn(
        "absolute inset-0 flex items-center justify-center transition-all duration-500 ease-out",
        isActive ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
      style={{
        transform: isActive ? "translateY(0)" : "translateY(30px)",
        filter: isActive ? "blur(0px)" : "blur(8px)",
      }}
    >
      <div className="w-full max-w-5xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FeatureIcon color={feature.color} label={feature.title} />
          
          <div className="text-center lg:text-left space-y-4">
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <span 
                className="text-5xl lg:text-6xl font-light"
                style={{ color: feature.color }}
              >
                {feature.title}
              </span>
            </div>
            <p className="text-base text-white/50 max-w-sm mx-auto lg:mx-0">
              {feature.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FeaturesScrollSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const sectionStart = rect.top;
      const sectionEnd = rect.bottom;
      
      const inStickyZone = sectionStart <= 0 && sectionEnd > windowHeight;

      const entering = sectionStart > 0 && sectionStart < windowHeight;
      const leaving = sectionEnd > 0 && sectionEnd < windowHeight;
      
      if (entering) {
        const progress = 1 - (sectionStart / windowHeight);
        setOpacity(Math.min(1, progress));
      } else if (leaving) {
        const progress = sectionEnd / windowHeight;
        setOpacity(Math.min(1, progress));
      } else if (inStickyZone) {
        setOpacity(1);
      } else {
        setOpacity(0);
      }

      if (inStickyZone) {
        const scrolled = Math.abs(rect.top);
        const totalHeight = rect.height - windowHeight;
        const perFeature = totalHeight / FEATURES.length;
        const newIndex = Math.min(
          Math.floor(scrolled / perFeature),
          FEATURES.length - 1
        );
        setActiveIndex(newIndex);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black"
      style={{ height: `${FEATURES.length * 100}vh` }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(4,102,200,0.08), transparent)",
          }}
        />
      </div>

      <div
        className={cn(
          "sticky top-0 left-0 w-full h-screen overflow-hidden transition-opacity duration-300",
        )}
        style={{ opacity }}
      >
        <div className="pt-16 pb-4 text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 text-sm font-medium tracking-wide">
            Features
          </span>
        </div>

        <div className="relative h-[calc(100vh-100px)]">
          {FEATURES.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
              isActive={activeIndex === index}
            />
          ))}
        </div>

        <div className="absolute right-6 lg:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3">
          {FEATURES.map((feature, index) => (
            <div
              key={feature.title}
              className={cn(
                "w-1.5 transition-all duration-300 rounded-full",
                activeIndex === index ? "h-8" : "h-2"
              )}
              style={{
                backgroundColor: activeIndex === index ? feature.color : `${feature.color}40`,
              }}
            />
          ))}
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/30 text-xs">
          {String(activeIndex + 1).padStart(2, '0')} / {String(FEATURES.length).padStart(2, '0')}
        </div>
      </div>
    </section>
  );
}