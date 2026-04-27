"use client";
import { CpuArchitecture } from "@/components/ui/cpu-architecture";

const AGENT_NODES = [
  { color: "#00aaff", label: "Laryx Retrieval", desc: "Context-grounded answers from your document corpus", icon: "/retrival.png" },
  { color: "#FFD800", label: "Semantic Index", desc: "High-density vector search across structured knowledge", icon: "/semantic.png" },
  { color: "#FF008B", label: "Signal Classifier", desc: "Real-time query routing across seven intent signals", icon: "/classifier.png" },
  { color: "#ffffff", label: "Inference Layer", desc: "Pluggable model backends with unified API surface", icon: "/inference.png" },
  { color: "#22c55e", label: "Knowledge Vault", desc: "Versioned document store with live indexing", icon: "/vault.png" },
  { color: "#f97316", label: "Laryx Core API", desc: "Stateless, decoupled service layer for any client", icon: "/coreapi.png" },
  { color: "#0466C8", label: "Orchestration Engine", desc: "Dynamic prompt assembly and multi-step reasoning", icon: "/orchestra.png" },
  { color: "#f43f5e", label: "Session Context", desc: "Persistent turn history for coherent multi-round dialogue", icon: "/session.png" },
];

export default function AgentArchitectureSection() {
  return (
    <section className="py-24 relative w-full overflow-hidden bg-black">
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(4,102,200,0.10), transparent)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm mb-6 border border-white/10">
            <span className="text-white/80 text-sm font-medium tracking-wide">⚙️ How Laryx Thinks</span>
          </div>
          <h2
            className="text-4xl lg:text-6xl font-bold tracking-tight mb-4"
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, #0466C8 50%, #ffffff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Technical Agent
          </h2>
          <p className="max-w-2xl text-white/60 text-lg font-light leading-relaxed">
            Laryx builds intelligent systems that understand context, intent, and history — 
            delivering precise answers at every layer of your product.
          </p>
        </div>

        {/* CPU Diagram — full width, large on big screens */}
        <div className="w-full aspect-2/1 min-h-55 rounded-2xl border border-white/10 bg-white/3 backdrop-blur-sm p-4 lg:p-8">
          <CpuArchitecture
            className="text-white/25 w-full h-full"
            width="100%"
            height="100%"
            text="Laryx"
            animateText
            animateLines
            animateMarkers
            nodeLabels={AGENT_NODES.map((n) => ({ text: n.label, color: n.color }))}
          />
        </div>
      </div>
    </section>
  );
}
