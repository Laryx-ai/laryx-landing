'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { motion, useReducedMotion } from 'motion/react';
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from 'lucide-react';
import { Button } from './button';
import Image from 'next/image';

interface FooterLink {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}
interface FooterLinkGroup {
  label: string;
  links: FooterLink[];
}

type StickyFooterProps = React.ComponentProps<'footer'>;

const FOOTER_HEIGHT = 480;

export function StickyFooter({ className, ...props }: StickyFooterProps) {
  const [footerHeight, setFooterHeight] = React.useState(FOOTER_HEIGHT);

  React.useEffect(() => {
    const update = () => {
      if (window.innerWidth < 480) setFooterHeight(640);
      else if (window.innerWidth < 640) setFooterHeight(560);
      else setFooterHeight(FOOTER_HEIGHT);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <footer
      className={cn('relative w-full', className)}
      style={{
        height: footerHeight,
        clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)',
      }}
      {...props}
    >
      <div
        className="fixed bottom-0 w-full"
        style={{ height: footerHeight }}
      >
        <div
          className="sticky overflow-hidden border-t border-white/10 bg-[#020c1b]"
          style={{ top: `calc(100vh - ${footerHeight}px)`, height: footerHeight }}
        >
      {/* Subtle glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[600px] rounded-full bg-[radial-gradient(ellipse,rgba(4,102,200,0.12),transparent_70%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-8 md:px-12">
        {/* Brand watermark title */}
        <AnimatedContainer delay={0}>
          <div className="mb-8 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Image
                src="/Frame 21.png"
                alt="Laryx"
                width={120}
                height={40}
                className="object-contain"
              />
              <p className="mt-3 max-w-xs text-sm text-white/40 leading-relaxed">
                High-quality software systems, platforms, and tools — built for
                teams that demand intelligence at every layer.
              </p>
            </div>
            <div className="flex gap-2 mt-4 sm:mt-0">
              {socialLinks.map((link) => (
                <Button
                  key={link.title}
                  size="icon"
                  variant="outline"
                  className="size-8 border-white/10 bg-white/5 text-white/60 hover:bg-[#0466C8]/20 hover:text-white"
                  asChild
                >
                  <a href={link.href} aria-label={link.title}>
                    <link.icon className="size-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </AnimatedContainer>

        {/* Link grid */}
        <div className="grid grid-cols-2 gap-8 border-t border-white/5 pt-8 sm:grid-cols-4">
          {footerLinkGroups.map((group, index) => (
            <AnimatedContainer key={group.label} delay={0.05 + index * 0.07}>
              <h3 className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-[#0466C8]">
                {group.label}
              </h3>
              <ul className="space-y-2 text-xs text-white/45">
                {group.links.map((link) => (
                  <li key={link.title}>
                    <a
                      href={link.href}
                      className="transition-colors duration-200 hover:text-white"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </AnimatedContainer>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col items-center justify-between gap-2 border-t border-white/5 pt-4 text-xs text-white/25 sm:flex-row">
          <p>© 2026 Laryx, Inc. All rights reserved.</p>
          <p>
            <a href="https://laryx.ai/privacy" className="transition-colors hover:text-white/50">Privacy Policy</a>
            {' · '}
            <a href="https://laryx.ai/terms" className="transition-colors hover:text-white/50">Terms of Service</a>
          </p>
        </div>
      </div>
        </div>
      </div>
    </footer>
  );
}

const socialLinks = [
  { title: 'GitHub', href: 'https://github.com/laryx-ai', icon: GithubIcon },
  { title: 'LinkedIn', href: 'https://linkedin.com/company/laryx-ai', icon: LinkedinIcon },
  { title: 'X / Twitter', href: 'https://twitter.com/laryx_ai', icon: TwitterIcon },
  { title: 'YouTube', href: 'https://youtube.com/@laryx_ai', icon: YoutubeIcon },
];

const footerLinkGroups: FooterLinkGroup[] = [
  {
    label: 'Product',
    links: [
      { title: 'Technical Agent', href: '#features' },
      { title: 'Signal Classifier', href: '#features' },
      { title: 'Laryx Retrieval', href: '#features' },
      { title: 'Inference Layer', href: '#features' },
      { title: 'Pricing', href: '#pricing' },
    ],
  },
  {
    label: 'Solutions',
    links: [
      { title: 'Enterprise Support', href: '#' },
      { title: 'Developer Platforms', href: '#' },
      { title: 'SaaS Automation', href: '#' },
      { title: 'Healthcare', href: '#' },
      { title: 'Financial Services', href: '#' },
    ],
  },
  {
    label: 'Resources',
    links: [
      { title: 'Documentation', href: '#' },
      { title: 'API Reference', href: '#' },
      { title: 'Blog', href: '#' },
      { title: 'System Status', href: '#' },
      { title: 'Community', href: '#' },
    ],
  },
  {
    label: 'Company',
    links: [
      { title: 'About Us', href: '#' },
      { title: 'Careers', href: '#' },
      { title: 'Partners', href: '#' },
      { title: 'Privacy Policy', href: '#' },
      { title: 'Contact', href: '#' },
    ],
  },
];

type AnimatedContainerProps = React.ComponentProps<typeof motion.div> & {
  children?: React.ReactNode;
  delay?: number;
};

function AnimatedContainer({
  delay = 0.1,
  children,
  ...props
}: AnimatedContainerProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
