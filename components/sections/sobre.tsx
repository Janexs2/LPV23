"use client"

import { motion } from "framer-motion"
import { CONFIG } from "@/lib/config"

const credenciais = [
  "13 anos de experiência em nutrição clínica funcional",
  "Mãe atípica — mãe do Frederico (TEA)",
  "Pós-graduada em TEA, TDAH e Seletividade Alimentar",
  "Formada na 1ª turma da 1ª pós do Brasil na área",
  "Mentoria internacional — Portugal",
  "Academia Nutrição e Autismo",
]

export function Sobre() {
  return (
    <section id="sobre" className="relative overflow-hidden" style={{ background: 'white', paddingTop: 'clamp(64px, 8vw, 120px)', paddingBottom: 'clamp(64px, 8vw, 120px)' }}>
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-end pointer-events-none overflow-hidden pr-8">
        <span className="font-serif font-bold select-none" style={{ fontSize: 'clamp(5rem,16vw,14rem)', color: 'rgba(148,110,61,0.035)', lineHeight: 1 }}>
          JOICE
        </span>
      </div>
      {/* Subtle top accent */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(148,110,61,0.2), transparent)' }} />

      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        {/* Label */}
        <motion.div
          className="flex items-center gap-3 mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="w-10 h-px" style={{ background: '#946e3d' }} />
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase" style={{ color: '#946e3d', fontFamily: 'var(--font-sans)' }}>
            Quem está por trás
          </span>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 items-start">
          {/* Photo col — single photo only */}
          <motion.div
            className="lg:w-[300px] flex-shrink-0 mx-auto lg:mx-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Main photo with organic shape */}
            <div className="relative">
              <div
                className="relative overflow-hidden mx-auto"
                style={{
                  width: 'min(260px, 78vw)',
                  borderRadius: '55% 45% 60% 40% / 50% 55% 45% 50%',
                  border: '5px solid white',
                  boxShadow: '10px 14px 40px rgba(148,110,61,0.18), 0 4px 16px rgba(0,0,0,0.08)',
                  aspectRatio: '4/5',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={CONFIG.fotoPessoal}
                  alt={CONFIG.nome}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }}
                />
              </div>
              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-3 -right-2 rounded-2xl px-4 py-3"
                style={{
                  background: 'white',
                  boxShadow: '0 8px 24px rgba(148,110,61,0.18)',
                  border: '1px solid rgba(148,110,61,0.1)',
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <p className="text-xs font-bold" style={{ color: '#946e3d', fontFamily: 'var(--font-sans)' }}>13+ anos</p>
                <p className="text-xs" style={{ color: '#565455', opacity: 0.6, fontFamily: 'var(--font-sans)' }}>de experiência</p>
              </motion.div>
            </div>

            {/* CRN badge */}
            <div className="mt-8 text-center">
              <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#946e3d', opacity: 0.65, fontFamily: 'var(--font-sans)' }}>{CONFIG.crn}</span>
            </div>
          </motion.div>

          {/* Text col */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl uppercase leading-[0.95] mb-3" style={{ color: '#565455' }}>
              {CONFIG.nome.split(' ')[0]}<br />
              <span style={{ color: '#946e3d' }}>{CONFIG.nome.split(' ').slice(1).join(' ')}</span>
            </h2>
            <p className="text-xs font-bold tracking-widest uppercase mb-8" style={{ color: '#565455', opacity: 0.45, fontFamily: 'var(--font-sans)' }}>
              {CONFIG.profissao}
            </p>

            <div className="space-y-4 mb-10">
              <p className="text-base md:text-lg leading-relaxed" style={{ color: '#565455', fontFamily: 'var(--font-sans)' }}>
                Sou nutricionista clínica funcional com 13 anos de experiência e especialização em crianças, adolescentes e adultos com TEA e TDAH. Mas mais do que especialista, sou mãe atípica — mãe do Frederico.
              </p>
              <p className="text-base md:text-lg leading-relaxed" style={{ color: '#565455', fontFamily: 'var(--font-sans)' }}>
                Foi ao viver na pele os desafios de uma família atípica que minha prática foi completamente transformada. Hoje, ofereço um atendimento que vai além da ciência: é acolhedor, humano e profundamente empático.
              </p>
            </div>

            {/* Credentials grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-10">
              {credenciais.map((c, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3 py-3 px-4 rounded-xl"
                  style={{ background: 'rgba(148,110,61,0.04)', border: '1px solid rgba(148,110,61,0.1)' }}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i }}
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#edd896' }} />
                  <span className="text-sm leading-relaxed" style={{ color: '#565455', fontFamily: 'var(--font-sans)' }}>{c}</span>
                </motion.div>
              ))}
            </div>

            <a
              href={CONFIG.instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-70"
              style={{ color: '#946e3d', fontFamily: 'var(--font-sans)' }}
            >
              <span>{CONFIG.instagram}</span>
              <span>→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
