'use client';
import React from 'react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckIcon, SparklesIcon, ZapIcon } from 'lucide-react';

type PricingCardProps = {
  titleBadge: string;
  priceLabel: string;
  priceSuffix?: string;
  features: string[];
  cta?: string;
  ctaHref?: string;
  className?: string;
};

function FilledCheck() {
  return (
    <div className="rounded-full p-0.5" style={{ background: '#0466C8' }}>
      <CheckIcon className="size-3 text-white" strokeWidth={3} />
    </div>
  );
}

function PricingCard({
  titleBadge,
  priceLabel,
  priceSuffix = '/month',
  features,
  cta = 'Get Started',
  ctaHref = '#pricing',
  className,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-xl border border-white/10 bg-white/3 backdrop-blur-sm',
        className,
      )}
    >
      <div className="flex items-center gap-3 p-4">
        <Badge
          variant="secondary"
          className="border border-white/10 bg-white/5 text-white/60 text-[10px] tracking-widest"
        >
          {titleBadge}
        </Badge>
        <div className="ml-auto">
          <Button
            variant="outline"
            className="h-8 border-white/10 bg-white/5 text-white/70 hover:bg-[#0466C8]/20 hover:text-white hover:border-[#0466C8]/40 text-xs px-4"
            asChild
          >
            <a href={ctaHref}>{cta}</a>
          </Button>
        </div>
      </div>

      <div className="flex items-end gap-2 px-4 py-2">
        <span className="font-mono text-5xl font-semibold tracking-tight text-white">
          {priceLabel}
        </span>
        {priceLabel.toLowerCase() !== 'free' && (
          <span className="text-white/40 text-sm pb-1">{priceSuffix}</span>
        )}
      </div>

      <ul className="grid gap-3 p-4 text-sm text-white/50">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-3">
            <FilledCheck />
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function BentoPricing() {
  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-8">
      {/* Featured / Pro card */}
      <div
        className={cn(
          'relative w-full overflow-hidden rounded-xl border border-[#0466C8]/40 bg-[#0466C8]/5 backdrop-blur-sm',
          'lg:col-span-5',
        )}
      >
        {/* Grid texture overlay */}
        <div className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(white,transparent)]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0466C8]/8 to-[#0466C8]/3 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
            <div
              aria-hidden="true"
              className="absolute inset-0 size-full mix-blend-overlay bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px]"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 p-4">
          <Badge className="border-0 text-[10px] tracking-widest" style={{ background: '#0466C8' }}>
            LARYX PRO
          </Badge>
          <Badge
            variant="outline"
            className="hidden lg:flex border-[#0466C8]/40 text-[#0466C8] text-[10px]"
          >
            <SparklesIcon className="me-1 size-3" />
            Most Popular
          </Badge>
          <div className="ml-auto">
            <Button
              className="h-8 px-5 text-xs font-semibold text-white"
              style={{ background: '#0466C8' }}
              asChild
            >
              <a href="mailto:hello@laryx.ai">Start Free Trial</a>
            </Button>
          </div>
        </div>

        <div className="flex flex-col p-4 lg:flex-row">
          <div className="pb-4 lg:w-[30%]">
            <span className="font-mono text-5xl font-semibold tracking-tight text-white">$49</span>
            <span className="text-white/40 text-sm">/month</span>
          </div>
          <ul className="grid gap-3 text-sm text-white/60 lg:w-[70%]">
            {[
              'Full access to Technical Agent & Signal Classifier',
              'Unlimited knowledge vault ingestion',
              'Multi-model Inference Layer with failover',
              'Team collaboration and shared session context',
              'Priority support with dedicated SLA',
            ].map((f, i) => (
              <li key={i} className="flex items-center gap-3">
                <FilledCheck />
                <span className="leading-relaxed">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Starter */}
      <PricingCard
        titleBadge="STARTER"
        priceLabel="Free"
        cta="Sign Up Free"
        ctaHref="mailto:hello@laryx.ai"
        features={[
          'Technical Agent — up to 500 queries/mo',
          'Basic Signal Classifier (3 intents)',
          'Public Knowledge Vault access',
        ]}
        className="lg:col-span-3"
      />

      {/* Teams */}
      <PricingCard
        titleBadge="TEAMS"
        priceLabel="$19"
        cta="Get Started"
        ctaHref="mailto:hello@laryx.ai"
        features={[
          'Everything in Starter',
          'Custom knowledge vault with live indexing',
          'Advanced analytics and session replay',
          'Up to 10 team members',
        ]}
        className="lg:col-span-4"
      />

      {/* Enterprise */}
      <PricingCard
        titleBadge="ENTERPRISE"
        priceLabel="$99"
        cta="Contact Sales"
        ctaHref="mailto:sales@laryx.ai"
        features={[
          'Unlimited queries and team seats',
          'Private model deployment via Inference Layer',
          'Dedicated Laryx Core API instance',
          'Custom SLA & compliance reporting',
        ]}
        className="lg:col-span-4"
      />
    </div>
  );
}

export function BentoPricingSection() {
  return (
    <section className="relative w-full overflow-hidden bg-black py-24">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(4,102,200,0.12), transparent)',
        }}
      />

      {/* Dot grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '14px 14px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/60 backdrop-blur-sm">
            <ZapIcon className="size-3.5 text-[#0466C8]" />
            Simple, transparent pricing
          </div>
          <h2
            className="text-4xl font-bold tracking-tight lg:text-5xl"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #0466C8 60%, #ffffff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Pricing Built for Builders
          </h2>
          <p className="mt-4 text-white/40 text-sm md:text-base leading-relaxed">
            From solo developers to enterprise teams — Laryx scales with you.
            No hidden fees, no lock-in.
          </p>
        </div>

        <BentoPricing />
      </div>
    </section>
  );
}
