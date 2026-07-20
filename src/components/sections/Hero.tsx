"use client";

import Image from "next/image";
import { motion } from "motion/react";
import AmbientGlow from "@/components/effects/AmbientGlow";
import Button from "@/components/ui/Button";

const EASE = [0.22, 1, 0.36, 1] as const;

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0 },
} as const;

const ctaVariants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
} as const;

export default function Hero() {
  return (
    <section className="relative bg-ink-900 text-ink-100 overflow-hidden min-h-[80vh] flex items-center">
      {/* Original farm photo */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/hero-field.jpg"
          alt=""
          fill
          priority
          className="object-cover opacity-40 hero-ken-burns"
          sizes="100vw"
        />
      </div>

      {/* Ink wash so gradients and type stay readable */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-ink-900/55"
      />

      {/* Soft gold gradient waves over the photo */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        <div className="hero-grad-wave hero-grad-wave-1" />
        <div className="hero-grad-wave hero-grad-wave-2" />
        <div className="hero-grad-wave hero-grad-wave-3" />
      </div>

      <AmbientGlow variant="hero" />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-ink-900/80 via-ink-900/40 to-transparent"
      />

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent 0%, rgba(193,155,62,0.45) 30%, rgba(193,155,62,0.45) 70%, transparent 100%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-14 sm:pt-12 sm:pb-16 lg:pt-14 lg:pb-18 w-full">
        <div className="max-w-3xl">
          <motion.p
            initial="hidden"
            animate="show"
            variants={itemVariants}
            transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
            className="text-gold-300 text-xs font-semibold uppercase tracking-[0.35em] mb-4"
          >
            The Legislative for Life Foundation
          </motion.p>

          <motion.h1
            initial="hidden"
            animate="show"
            variants={itemVariants}
            transition={{ duration: 0.7, ease: EASE, delay: 0.35 }}
            className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.08]"
          >
            Educating policymakers.{" "}
            <span className="text-gold-300">Empowering</span>{" "}
            <span className="text-gold-300">communities.</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            variants={itemVariants}
            transition={{ duration: 0.7, ease: EASE, delay: 0.5 }}
            className="mt-5 text-lg sm:text-xl text-ink-200 leading-relaxed max-w-2xl"
          >
            We translate policy research and lived experience into plain-language
            guidance for rural communities and the policymakers who serve them.
            From farm policy to civic engagement, we connect data to decisions.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            variants={ctaVariants}
            transition={{ duration: 0.6, ease: EASE, delay: 0.65 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Button href="/join-us" size="lg">
              Join Us
            </Button>
            <Button href="/about" variant="outline-gold" size="lg">
              About the Foundation
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
