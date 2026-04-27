"use client"

import { motion } from "framer-motion"
import { CONFIG } from "@/lib/config"

const pilares = [
  { num: "01", label: "Cognição", desc: "Melhora da função cognitiva e aprendizado" },
  { num: "02", label: "Foco", desc: "Atenção e concentração sustentadas" },
  { num: "03", label: "Comportamento", desc: "Redução de crises e regulação emocional" },
  { num: "04", label: "Intestino", desc: "Eixo intestino-cérebro equilibrado" },
]

export function Neurosuplementacao() {
  return (
    <section className="relative overflow-hidden" style={{ background: 'white', paddingTop: 'clamp(64px, 8vw, 120px)', paddingBottom: 'clamp(64px, 8vw, 120px)' }}>
      {/* Decorative stripe accent */}
      <div className="absolute top-0 left-0 w-1 h-full" style={{ background: 'linear-gradient(to bottom, transparent, #946e3d, transparent)' }} />

      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Label */}
        <motion.div
          className="inline-flex items-center gap-3 px-5 py-2 mb-12 rounded-full"
          style={{ border: '1px solid rgba(148,110,61,0.3)', background: 'rgba(148,110,61,0.05)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#946e3d' }} />
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase" style={{ color: '#946e3d', fontFamily: 'var(--font-sans)' }}>Metodologia exclusiva</span>
        </motion.div>

        {/* Headline + intro */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 lg:items-end mb-16">
          <motion.h2
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase leading-[0.92] lg:w-1/2"
            style={{ color: '#565455' }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            COM A{" "}
            <span style={{ color: '#946e3d' }}>NEURO&shy;SUPLE&shy;MENTAÇÃO</span>
          </motion.h2>
          <motion.p
            className="text-lg leading-relaxed lg:w-1/2 lg:pb-3"
            style={{ color: '#565455', opacity: 0.75, fontFamily: 'var(--font-sans)' }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Uma estratégia nutricional voltada para o equilíbrio e desempenho neurológico. Utilizamos vitaminas, minerais, ácidos graxos essenciais, aminoácidos e outros nutrientes fundamentais para favorecer o funcionamento saudável do cérebro.
          </motion.p>
        </div>

        {/* Pillars — 2x2 mobile, 4 col desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: 'rgba(148,110,61,0.1)' }}>
          {pilares.map((p, i) => (
            <motion.div
              key={p.num}
              className="p-7 md:p-8 flex flex-col gap-3"
              style={{ background: 'white' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              whileHover={{ background: '#f4efec' }}
            >
              <span className="font-serif text-3xl md:text-4xl font-light" style={{ color: 'rgba(148,110,61,0.25)' }}>{p.num}</span>
              <h3 className="font-bold text-base" style={{ color: '#946e3d', fontFamily: 'var(--font-sans)' }}>{p.label}</h3>
              <p className="text-sm leading-snug" style={{ color: '#565455', opacity: 0.7, fontFamily: 'var(--font-sans)' }}>{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Image banner */}
        <motion.div
          className="mt-12 rounded-2xl overflow-hidden relative"
          style={{ height: '220px' }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={CONFIG.imgDecor1}
            alt="Neurosuplementação"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(148,110,61,0.7) 0%, rgba(86,84,85,0.3) 60%, transparent 100%)' }} />
          <div style={{ position: 'absolute', bottom: 28, left: 28 }}>
            <p className="text-white font-serif text-2xl md:text-3xl font-light">Nutrição que transforma</p>
            <p className="text-white text-sm mt-1" style={{ opacity: 0.75, fontFamily: 'var(--font-sans)' }}>Cada suplemento, uma razão clínica.</p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a
            href={CONFIG.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden inline-flex items-center justify-center px-8 py-3.5 font-bold text-sm tracking-widest uppercase rounded-full text-white transition-shadow duration-300"
            style={{ background: '#946e3d', boxShadow: '0 6px 24px rgba(148,110,61,0.3)', fontFamily: 'var(--font-sans)' }}
          >
            Quero Saber Mais
            <span className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-out opacity-10" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
