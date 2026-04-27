"use client"

import { motion } from "framer-motion"
import { CONFIG } from "@/lib/config"
import { Check } from "lucide-react"

const evaluationItems = [
  { icon: "🧬", label: "Histórico clínico completo" },
  { icon: "🔬", label: "Exames laboratoriais" },
  { icon: "🫁", label: "Sintomas gastrointestinais" },
  { icon: "🍽️", label: "Comportamento alimentar" },
  { icon: "🏠", label: "Rotina da família" },
  { icon: "✨", label: "Sensibilidades sensoriais" },
  { icon: "🌙", label: "Sono e comportamento" },
  { icon: "💊", label: "Necessidade de suplementação" },
]

export function Conexao() {
  return (
    <section className="relative overflow-hidden" style={{ background: '#565455', paddingTop: 'clamp(64px, 8vw, 120px)', paddingBottom: 'clamp(64px, 8vw, 120px)' }}>
      {/* Subtle diagonal pattern */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(255,255,255,0.5) 40px, rgba(255,255,255,0.5) 41px)`,
        }}
      />
      {/* Glow top right */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(237,216,150,0.08) 0%, transparent 70%)' }} />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(148,110,61,0.1) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-10 h-px" style={{ background: '#edd896' }} />
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase" style={{ color: '#edd896', fontFamily: 'var(--font-sans)' }}>Como funciona</span>
            <div className="w-10 h-px" style={{ background: '#edd896' }} />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl uppercase leading-[0.92] mb-5" style={{ color: '#f4efec' }}>
            CONSULTA<br />
            <span style={{ color: '#edd896' }}>INDIVIDUALIZADA</span>
          </h2>
          <p className="text-base max-w-sm mx-auto" style={{ color: 'rgba(244,239,236,0.5)', fontFamily: 'var(--font-sans)', lineHeight: 1.75 }}>
            Cada criança é única. Por isso, o plano também precisa ser.
          </p>
        </motion.div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* Left: items grid */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-bold tracking-[0.28em] uppercase mb-6" style={{ color: '#edd896', fontFamily: 'var(--font-sans)' }}>
              O que avaliamos:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {evaluationItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="flex items-center gap-3 py-3.5 px-4 rounded-2xl transition-all duration-300"
                  style={{ background: 'rgba(244,239,236,0.06)', border: '1px solid rgba(237,216,150,0.1)' }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i }}
                  whileHover={{ background: 'rgba(244,239,236,0.1)', borderColor: 'rgba(237,216,150,0.22)' }}
                >
                  <span style={{ fontSize: 16, lineHeight: 1 }}>{item.icon}</span>
                  <span className="text-sm" style={{ color: 'rgba(244,239,236,0.75)', fontFamily: 'var(--font-sans)' }}>{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: image + quote + CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="flex flex-col gap-6"
          >
            <div className="rounded-2xl overflow-hidden relative" style={{ aspectRatio: '16/10', boxShadow: '0 20px 50px rgba(0,0,0,0.3)' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={CONFIG.imgDecor2}
                alt="Consulta individualizada"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(86,84,85,0.5) 0%, transparent 60%)' }} />
            </div>

            {/* Quote card */}
            <div className="rounded-2xl p-6" style={{ background: 'rgba(237,216,150,0.08)', border: '1px solid rgba(237,216,150,0.14)' }}>
              <div className="flex gap-3 items-start">
                <span className="font-serif text-3xl leading-none" style={{ color: 'rgba(237,216,150,0.35)', marginTop: -4 }}>&ldquo;</span>
                <div>
                  <p className="font-serif text-lg italic leading-relaxed mb-2" style={{ color: '#edd896' }}>
                    Atendimento além da planilha alimentar.
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(244,239,236,0.55)', fontFamily: 'var(--font-sans)' }}>
                    Cada consulta considera o contexto da família, as particularidades do paciente e metas realistas para sua realidade.
                  </p>
                </div>
              </div>
            </div>

            <a
              href={CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden inline-flex w-full items-center justify-center px-8 py-4 font-bold text-sm tracking-widest uppercase rounded-full text-white transition-all duration-300"
              style={{ background: '#946e3d', boxShadow: '0 6px 24px rgba(148,110,61,0.35)', fontFamily: 'var(--font-sans)' }}
            >
              Agendar Minha Consulta
              <span className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-out opacity-10" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
