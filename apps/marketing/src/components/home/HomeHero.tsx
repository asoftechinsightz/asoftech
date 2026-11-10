"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/content/site";

export function HomeHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-navy text-cloud">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-hero-glow"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-10 h-[34rem] w-[34rem] rounded-full bg-electric/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 bottom-0 h-[22rem] w-[22rem] rounded-full bg-cyan-neon/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 60% 40%, black 20%, transparent 75%)",
        }}
      />

      <Container className="relative flex min-h-[100svh] flex-col justify-center pb-20 pt-28">
        <motion.p
          className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-neon"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {siteConfig.name}
        </motion.p>
        <motion.h1
          className="max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
        >
          {siteConfig.hero}
        </motion.h1>
        <motion.p
          className="mt-6 max-w-xl text-lg leading-relaxed text-white/75"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16 }}
        >
          Enterprise technology consulting, digital engineering, AI automation,
          and SaaS products for organisations that need clarity as much as
          capability.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-wrap gap-3"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24 }}
        >
          <Button href="/contact" variant="inverse">
            Book a consultation
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
          <Button href="/products" variant="ghost">
            Explore products
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
