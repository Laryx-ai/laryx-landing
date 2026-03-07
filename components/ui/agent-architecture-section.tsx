"use client";
import { CpuArchitecture } from "@/components/ui/cpu-architecture";

const AGENT_NODES = [
  { color: "#00aaff", label: "Laryx Retrieval", desc: "Context-grounded answers from your document corpus" },
  { color: "#FFD800", label: "Semantic Index", desc: "High-density vector search across structured knowledge" },
  { color: "#FF008B", label: "Signal Classifier", desc: "Real-time query routing across seven intent signals" },
  { color: "#ffffff", label: "Inference Layer", desc: "Pluggable model backends with unified API surface" },
  { color: "#22c55e", label: "Knowledge Vault", desc: "Versioned document store with live indexing" },
  { color: "#f97316", label: "Laryx Core API", desc: "Stateless, decoupled service layer for any client" },
  { color: "#0466C8", label: "Orchestration Engine", desc: "Dynamic prompt assembly and multi-step reasoning" },
  { color: "#f43f5e", label: "Session Context", desc: "Persistent turn history for coherent multi-round dialogue" },
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
          <p className="max-w-2xl text-white/50 text-lg font-light leading-relaxed">
            Laryx builds intelligent systems that understand context, intent, and history — 
            delivering precise answers at every layer of your product.
          </p>
        </div>

        {/* CPU Diagram — full width, large on big screens */}
        <div className="w-full aspect-[2/1] min-h-[220px] rounded-2xl border border-white/10 bg-white/3 backdrop-blur-sm p-4 lg:p-8">
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

        {/* Legend — 2 cols on mobile, 4 cols on lg+ */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {AGENT_NODES.map((node) => (
            <div
              key={node.label}
              className="group flex items-start gap-3 rounded-xl border border-white/10 bg-white/3 backdrop-blur-sm px-4 py-3 transition-all duration-300 hover:border-[#0466C8]/40 hover:bg-white/5"
            >
              <span
                className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full"
                style={{ backgroundColor: node.color }}
              />
              <div>
                <p className="text-white text-sm font-medium leading-tight">{node.label}</p>
                <p className="text-white/40 text-xs mt-0.5 leading-snug">{node.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Signal routing chips */}
        <div className="mt-16 flex flex-col items-center gap-6">
          <p className="text-white/40 text-sm tracking-widest uppercase">Signal Routing</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { emoji: "💳", label: "Billing" },
              { emoji: "🔧", label: "Troubleshooting" },
              { emoji: "🔐", label: "Account" },
              { emoji: "🔗", label: "Integrations" },
              { emoji: "⚙️", label: "Developer" },
              { emoji: "💡", label: "Feature Request" },
              { emoji: "💬", label: "General" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 hover:border-[#0466C8]/50 hover:text-white transition-all duration-200"
              >
                <span>{item.emoji}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
