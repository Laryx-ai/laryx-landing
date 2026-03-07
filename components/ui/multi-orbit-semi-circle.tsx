"use client";
import React, { useState, useEffect, useRef } from "react";

// 15 unique integrations — zero repetition across all orbits
// slugs from https://simpleicons.org
const INNER = [
  { name: "GitHub",  slug: "github"       },
  { name: "Figma",   slug: "figma"        },
  { name: "Jira",    slug: "jira"         },
];

const MIDDLE = [
  { name: "Vercel",  slug: "vercel"       },
  { name: "Stripe",  slug: "stripe"       },
  { name: "Linear",  slug: "linear"       },
  { name: "Notion",  slug: "notion"       },
];

const OUTER = [
  { name: "Next.js",    slug: "nextdotjs"          },
  { name: "Google",     slug: "google"             },
  { name: "Docker",     slug: "docker"             },
  { name: "GitLab",     slug: "gitlab"             },
  { name: "HubSpot",    slug: "hubspot"            },
  { name: "PostgreSQL", slug: "postgresql"         },
];

// Simple Icons CDN — no API key required, returns white SVG
function iconUrl(slug: string) {
  return `https://cdn.simpleicons.org/${slug}/ffffff`;
}

function SemiCircleOrbit({
  radius,
  centerX,
  centerY,
  icons,
  iconSize,
}: {
  radius: number;
  centerX: number;
  centerY: number;
  icons: { name: string; slug: string }[];
  iconSize: number;
}) {
  const count = icons.length;
  return (
    <>
      {/* Orbit arc */}
      <svg
        className="absolute inset-0 pointer-events-none"
        style={{ width: "100%", height: "100%", zIndex: 1 }}
        overflow="visible"
      >
        <path
          d={`M ${centerX - radius} ${centerY} A ${radius} ${radius} 0 0 1 ${centerX + radius} ${centerY}`}
          fill="none"
          stroke="rgba(4,102,200,0.2)"
          strokeWidth="2"
          strokeDasharray="4 10"
        />
      </svg>

      {/* Icons */}
      {icons.map((integration, index) => {
        const angle = count === 1 ? 90 : (index / (count - 1)) * 180;
        const x = radius * Math.cos((angle * Math.PI) / 180);
        const y = radius * Math.sin((angle * Math.PI) / 180);
        const tooltipAbove = angle > 90;

        return (
          <div
            key={integration.slug}
            className="absolute flex flex-col items-center group"
            style={{
              left: `${centerX + x - iconSize / 2}px`,
              top: `${centerY - y - iconSize / 2}px`,
              zIndex: 5,
            }}
          >
            <div className="rounded-full p-1.5 bg-black/60 border border-[#0466C8]/30 backdrop-blur-sm transition-all duration-300 group-hover:border-[#0466C8]/80 group-hover:shadow-[0_0_16px_rgba(4,102,200,0.5)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={iconUrl(integration.slug)}
                alt={integration.name}
                width={iconSize}
                height={iconSize}
                className="object-contain cursor-pointer transition-transform group-hover:scale-110"
                style={{ minWidth: iconSize, minHeight: iconSize }}
              />
            </div>

            {/* Tooltip */}
            <div
              className={`absolute ${
                tooltipAbove ? "bottom-[calc(100%+8px)]" : "top-[calc(100%+8px)]"
              } hidden group-hover:block rounded-lg bg-[#0466C8] px-2 py-1 text-xs text-white shadow-lg text-center whitespace-nowrap`}
            >
              {integration.name}
              <div
                className={`absolute left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-[#0466C8] ${
                  tooltipAbove ? "-bottom-1" : "-top-1"
                }`}
              />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default function MultiOrbitSemiCircle() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      setWidth(entry.contentRect.width);
    });
    ro.observe(el);
    setWidth(el.getBoundingClientRect().width);
    return () => ro.disconnect();
  }, []);

  const baseWidth = Math.min(width * 0.9, 720);
  const centerX = baseWidth / 2;
  const centerY = baseWidth * 0.5;

  const iconSize =
    width < 480
      ? Math.max(22, baseWidth * 0.05)
      : width < 768
      ? Math.max(26, baseWidth * 0.055)
      : Math.max(30, baseWidth * 0.065);

  return (
    <section
      ref={containerRef}
      className="py-20 px-8 relative min-h-screen w-full overflow-hidden bg-black flex items-center justify-center"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(4,102,200,0.12), transparent)",
        }}
      />

      <div className="relative flex flex-col items-center text-center z-10 w-full">
        {/* Badge */}
        <div className="relative inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm mb-6 border border-white/10">
          <div className="absolute top-0 left-1 right-1 h-px bg-linear-to-r from-transparent via-[#0466C8]/40 to-transparent rounded-full" />
          <span className="text-white/80 text-sm font-medium tracking-wide">⚡ Seamless Integrations</span>
        </div>

        <h2
          className="my-4 text-4xl font-bold lg:text-6xl text-white tracking-tight"
          style={{
            background: "linear-gradient(135deg, #ffffff 0%, #0466C8 50%, #ffffff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Integrations
        </h2>
        <p className="mb-12 max-w-2xl text-white/50 lg:text-lg font-light leading-relaxed px-4">
          Connect the tools your team already uses. Laryx plugs into your existing workflow — no friction, no migration.
        </p>

        {width > 0 && (
          <div className="relative" style={{ width: baseWidth, height: baseWidth * 0.6 }}>
            {/* Ambient center glow */}
            <div
              className="absolute pointer-events-none"
              style={{
                left: centerX - 80,
                top: centerY - 40,
                width: 160,
                height: 80,
                background: "radial-gradient(ellipse, rgba(4,102,200,0.22), transparent 90%)",
                filter: "blur(12px)",
              }}
            />
            <SemiCircleOrbit
              radius={baseWidth * 0.22}
              centerX={centerX}
              centerY={centerY}
              icons={INNER}
              iconSize={iconSize}
            />
            <SemiCircleOrbit
              radius={baseWidth * 0.36}
              centerX={centerX}
              centerY={centerY}
              icons={MIDDLE}
              iconSize={iconSize}
            />
            <SemiCircleOrbit
              radius={baseWidth * 0.50}
              centerX={centerX}
              centerY={centerY}
              icons={OUTER}
              iconSize={iconSize}
            />
          </div>
        )}
      </div>
    </section>
  );
}

