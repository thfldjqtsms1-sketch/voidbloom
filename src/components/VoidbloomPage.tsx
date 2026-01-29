"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import type { Lang } from "@/lib/i18n";
import { getDict } from "@/lib/i18n";

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

export default function VoidbloomPage({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  const otherLang = lang === "en" ? "/ko/" : "/";

  return (
    <div className="bg-black text-white min-h-screen">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <motion.a
            href={lang === "en" ? "/" : "/ko/"}
            whileHover={{ scale: 1.05, letterSpacing: "0.4em" }}
            whileTap={{ scale: 0.95 }}
            className="text-lg font-bold tracking-[0.3em] text-cyan-accent"
          >
            VOIDBLOOM
          </motion.a>
          <div className="flex items-center gap-8 text-sm tracking-wider">
            <a href="#about" className="hover:text-cyan-accent transition-colors">{t.nav.about}</a>
            <a href="#process" className="hover:text-cyan-accent transition-colors">{t.nav.process}</a>
            <a href="#work" className="hover:text-cyan-accent transition-colors">{t.nav.work}</a>
            <a href="#contact" className="hover:text-cyan-accent transition-colors">{t.nav.contact}</a>
            <a href={otherLang} className="border border-white/20 px-3 py-1 hover:border-cyan-accent hover:text-cyan-accent transition-all">
              {lang === "en" ? "KOR" : "ENG"}
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <motion.header ref={heroRef} style={{ opacity: heroOpacity, scale: heroScale }} className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-black" />

        {/* 3D Geometric */}
        <div className="geo-scene relative z-10 mb-8">
          <div className="geo-cube">
            <div className="face front" />
            <div className="face back" />
            <div className="face right" />
            <div className="face left" />
            <div className="face top" />
            <div className="face bottom" />
          </div>
          <div className="geo-octa">
            <div className="tri" /><div className="tri" /><div className="tri" /><div className="tri" />
            <div className="tri" /><div className="tri" /><div className="tri" /><div className="tri" />
          </div>
        </div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, letterSpacing: "0.5em" }}
          animate={{ opacity: 1, letterSpacing: "0.3em" }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="relative z-10 text-6xl md:text-8xl font-bold tracking-[0.3em] text-white"
        >
          VOIDBLOOM
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="relative z-10 mt-4 text-sm tracking-[0.4em] uppercase text-gray-400"
        >
          {t.hero.tagline}
        </motion.p>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 z-10 flex flex-col items-center scroll-indicator">
          <span className="text-[10px] tracking-[0.4em] text-gray-500 uppercase mb-2">{t.hero.scroll}</span>
          <div className="w-px h-8 bg-gradient-to-b from-cyan-accent to-transparent" />
        </div>
      </motion.header>

      {/* ABOUT */}
      <div className="h-32 bg-gradient-to-b from-black via-gray-950 to-black" />
      <Section className="max-w-4xl mx-auto px-6 py-32" >
        <div id="about" className="scroll-mt-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 bracket-left bracket-right inline-block">
            {t.about.title}
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-6">{t.about.p1}</p>
          <p className="text-lg text-gray-400 leading-relaxed">{t.about.p2}</p>
        </div>
      </Section>

      {/* PHILOSOPHY */}
      <Section className="bg-white/[0.01] border-y border-white/5 py-40">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-xs tracking-[0.5em] text-cyan-accent uppercase mb-8 block">Manifesto</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-12 tracking-tight">{t.philosophy.title}</h2>
          <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed mb-12 italic">
            "{t.philosophy.text}"
          </p>
          <div className="h-px w-24 bg-cyan-accent/30 mx-auto mb-12" />
          <p className="text-sm tracking-[0.2em] text-gray-500 uppercase max-w-2xl mx-auto leading-loose">
            {t.philosophy.vision}
          </p>
        </div>
      </Section>

      {/* PROCESS / METHODOLOGY */}
      <Section className="max-w-7xl mx-auto px-6 py-40">
        <div id="process" className="scroll-mt-20">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">{t.process.title}</h2>
            <p className="text-gray-500 max-w-md text-right tracking-wide uppercase text-xs leading-relaxed">
              Synthesizing biological intuition with algorithmic precision to redefine the boundaries of spatial experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-white/10 border border-white/10">
            {(["sound", "light", "motion"] as const).map((key) => (
              <div key={key} className="bg-black p-12 hover:bg-white/[0.02] transition-colors group">
                <h3 className="text-cyan-accent text-xs tracking-[0.3em] uppercase mb-12 border-b border-cyan-accent/20 pb-4 inline-block">
                  {t.process[key].name}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm group-hover:text-white transition-colors duration-500">
                  {t.process[key].desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CATEGORIES / DIMENSIONS */}
      <Section className="max-w-6xl mx-auto px-6 py-32">
        <h2 className="text-3xl font-bold tracking-[0.2em] text-center mb-20">{t.categories.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {(["sound", "light", "motion"] as const).map((key, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="cat-card group p-10 bg-white/[0.02] flex flex-col justify-between min-h-[320px]"
            >
              <span className="text-[11px] tracking-[0.3em] text-gray-600">0{i + 1}</span>
              <div>
                <h3 className="text-3xl font-bold tracking-[0.15em] mb-4 group-hover:text-cyan-accent transition-colors duration-500">
                  {t.categories[key].name}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-300 transition-colors duration-500">
                  {t.categories[key].desc}
                </p>
              </div>
              <div className="w-8 h-px bg-white/10 group-hover:w-16 group-hover:bg-cyan-accent transition-all duration-500 mt-6" />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* EXHIBITIONS */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <Section className="max-w-5xl mx-auto px-6 py-32" >
        <div id="work" className="scroll-mt-20">
          <h2 className="text-3xl font-bold tracking-[0.2em] mb-16">{t.exhibitions.title}</h2>
          <div className="space-y-0">
            {t.exhibitions.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex flex-col py-10 border-b border-white/5 group cursor-pointer hover:border-cyan-accent/30 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-6">
                    <span className="text-sm text-gray-600 font-mono tracking-tighter">{item.year}</span>
                    <h3 className="text-2xl md:text-3xl font-medium group-hover:text-cyan-accent transition-colors tracking-tight">{item.name}</h3>
                  </div>
                  <span className="text-sm text-gray-500 tracking-[0.2em] uppercase">{item.loc}</span>
                </div>
                <p className="text-gray-500 text-sm max-w-2xl leading-relaxed group-hover:text-gray-300 transition-colors">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-40 text-center">
        <div id="contact" className="scroll-mt-20">
          <p className="text-sm tracking-[0.3em] text-gray-500 mb-6 uppercase">{t.cta.sub}</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-10">{t.cta.text}</h2>
          <a
            href="mailto:contact@voidbloom.art"
            className="inline-block border border-cyan-accent text-cyan-accent px-10 py-4 text-sm tracking-[0.3em] uppercase hover:bg-cyan-accent hover:text-black transition-all duration-500"
          >
            {t.cta.text}
          </a>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-xs tracking-[0.2em] text-gray-600">{t.footer.rights}</span>
          <div className="flex gap-8 text-xs tracking-wider text-gray-500">
            <a href="#" className="hover:text-cyan-accent transition-colors">Instagram</a>
            <a href="#" className="hover:text-cyan-accent transition-colors">Twitter</a>
            <a href="#" className="hover:text-cyan-accent transition-colors">Vimeo</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
