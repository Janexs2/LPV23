"use client"

import { motion } from "framer-motion"
import { CONFIG } from "@/lib/config"

const sintomas = [
  "comunicação", "sono", "seletividade",
  "hiperatividade", "falta de foco",
  "comportamentos desafiadores", "constipação", "dores abdominais",
]

export function Dores() {
  return (
    <section className="relative overflow-hidden" style={{ background: '#565455', paddingTop: 'clamp(64px, 8vw, 120px)', paddingBottom: 'clamp(64px, 8vw, 120px)' }}>
      {/* Grain */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "256px",
        }}
      />
      {/* Decorative accent circle */}
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full pointer-events-none" style={{ border: '1.5px solid rgba(237,216,150,0.12)' }} />
      <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full pointer-events-none" style={{ border: '1.5px solid rgba(237,216,150,0.1)' }} />

      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        {/* Label */}
        <motion.div
          className="flex items-center gap-3 mb-10"
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-10 h-px" style={{ background: '#edd896' }} />
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase" style={{ color: '#edd896', fontFamily: 'var(--font-sans)' }}>
            A raiz do problema
          </span>
        </motion.div>

        <motion.h2
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase leading-[0.92] mb-10"
          style={{ color: '#f4efec' }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Se você sente<br />
          que já tentou<br />
          <span style={{ color: '#edd896' }}>de tudo...</span>
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl leading-relaxed max-w-2xl mb-10"
          style={{ color: 'rgba(244,239,236,0.65)', fontFamily: 'var(--font-sans)' }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Talvez exista algo importante sendo ignorado: as causas orgânicas por trás dos sintomas. Muitas vezes, terapias têm resultados limitados porque questões como alterações intestinais, deficiências nutricionais e desequilíbrios do organismo não estão sendo investigados.
        </motion.p>

        {/* Quote */}
        <motion.div
          className="pl-6 mb-12"
          style={{ borderLeft: '4px solid #946e3d' }}
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="font-serif text-xl md:text-2xl italic leading-snug" style={{ color: '#edd896' }}>
            "Eu não trato o autismo.<br />
            Eu trato a criança, adolescente e adulto autista."
          </p>
        </motion.div>

        {/* Symptom tags */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-[11px] font-bold tracking-[0.3em] uppercase mb-4" style={{ color: 'rgba(244,239,236,0.35)', fontFamily: 'var(--font-sans)' }}>Sintomas tratáveis</p>
          <div className="flex flex-wrap gap-2">
            {sintomas.map((s) => (
              <span
                key={s}
                className="px-4 py-2 text-sm rounded-md transition-colors duration-200"
                style={{
                  border: '1px solid rgba(237,216,150,0.2)',
                  color: 'rgba(244,239,236,0.6)',
                  fontFamily: 'var(--font-sans)',
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.a
          href={CONFIG.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative overflow-hidden inline-flex items-center justify-center px-8 py-3.5 font-bold text-sm tracking-widest uppercase rounded-full text-white transition-shadow duration-300"
          style={{ background: '#946e3d', boxShadow: '0 6px 24px rgba(148,110,61,0.35)', fontFamily: 'var(--font-sans)' }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.03 }}
        >
          Agendar Minha Consulta
          <span className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-out opacity-10" />
        </motion.a>
      </div>
    </section>
  )
}
