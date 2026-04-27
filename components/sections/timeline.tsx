"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { CONFIG } from "@/lib/config"

const etapas = [
  {
    id: "antes",
    titulo: "ANTES",
    numero: "01",
    conteudo: "Envio um questionário prévio para saber mais sobre o paciente e seu histórico clínico.",
  },
  {
    id: "durante",
    titulo: "DURANTE",
    numero: "02",
    conteudo: "Realizo a anamnese, onde o paciente especifica suas principais queixas. Conversamos sobre o estilo de vida, hábitos alimentares, saúde intestinal e muito mais. Realizamos as primeiras metas de intervenção.",
  },
  {
    id: "apos",
    titulo: "APÓS",
    numero: "03",
    conteudo: "Realizo a prescrição de suplementações iniciais para o acompanhamento nutricional. Envio o plano alimentar e o pedido de exames laboratoriais para investigação de alergias, deficiências nutricionais, inflamação etc.",
  },
  {
    id: "proxima",
    titulo: "PRÓXIMA CONSULTA",
    numero: "04",
    conteudo: "Avaliamos os ganhos da primeira fase e fazemos a leitura dos exames. Cada consulta tem uma fase específica do tratamento, individualizado de acordo com a necessidade de cada paciente.",
  },
]

export function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const autoRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const goTo = (i: number, dir?: number) => {
    setDirection(dir ?? (i > activeIndex ? 1 : -1))
    setActiveIndex(i)
  }
  const prev = () => goTo(activeIndex === 0 ? etapas.length - 1 : activeIndex - 1, -1)
  const next = () => goTo(activeIndex === etapas.length - 1 ? 0 : activeIndex + 1, 1)

  // Auto-advance
  useEffect(() => {
    autoRef.current = setTimeout(() => next(), 5000)
    return () => { if (autoRef.current) clearTimeout(autoRef.current) }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex])

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d > 0 ? -60 : 60 }),
  }

  return (
    <section id="timeline" className="relative overflow-hidden" style={{ background: 'white', paddingTop: 'clamp(64px, 8vw, 120px)', paddingBottom: 'clamp(64px, 8vw, 120px)' }}>
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="font-serif font-bold select-none" style={{ fontSize: 'clamp(5rem,18vw,16rem)', color: 'rgba(148,110,61,0.03)', lineHeight: 1, whiteSpace: 'nowrap' }}>CONSULTA</span>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-px" style={{ background: '#946e3d' }} />
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase" style={{ color: '#946e3d', fontFamily: 'var(--font-sans)' }}>Passo a passo</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl uppercase leading-[0.92]" style={{ color: '#565455' }}>
            COMO É A<br />
            <span style={{ color: '#946e3d' }}>CONSULTA?</span>
          </h2>
        </motion.div>

        {/* Carousel container */}
        <div className="relative">
          {/* Step indicators */}
          <div className="flex gap-2 mb-8">
            {etapas.map((e, i) => (
              <button
                key={e.id}
                onClick={() => goTo(i)}
                className="flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-300 text-left"
                style={{
                  background: activeIndex === i ? '#946e3d' : 'rgba(148,110,61,0.07)',
                  border: `1px solid ${activeIndex === i ? '#946e3d' : 'rgba(148,110,61,0.14)'}`,
                  boxShadow: activeIndex === i ? '0 4px 16px rgba(148,110,61,0.25)' : 'none',
                  flex: activeIndex === i ? '1.5' : '1',
                  minWidth: 0,
                  transition: 'all 0.3s ease',
                }}
              >
                <span className="font-serif text-sm opacity-60 flex-shrink-0" style={{ color: activeIndex === i ? 'rgba(255,255,255,0.6)' : '#946e3d' }}>{e.numero}</span>
                <span className="hidden sm:block font-bold text-xs tracking-wider uppercase truncate" style={{ color: activeIndex === i ? 'white' : '#565455', fontFamily: 'var(--font-sans)' }}>{e.titulo}</span>
              </button>
            ))}
          </div>

          {/* Slide area */}
          <div
            className="rounded-3xl overflow-hidden relative"
            style={{ background: '#f9f5f2', border: '1px solid rgba(148,110,61,0.1)', minHeight: 280 }}
          >
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="flex flex-col lg:flex-row gap-8 items-start p-8 md:p-10 lg:p-12"
              >
                {/* Text */}
                <div className="flex-1">
                  <span className="font-serif font-light block mb-4 leading-none" style={{ fontSize: 'clamp(3.5rem,8vw,6rem)', color: 'rgba(148,110,61,0.1)' }}>
                    {etapas[activeIndex].numero}
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl mb-5" style={{ color: '#946e3d' }}>
                    {etapas[activeIndex].titulo}
                  </h3>
                  <p className="text-base md:text-lg leading-relaxed" style={{ color: '#565455', fontFamily: 'var(--font-sans)', maxWidth: 520 }}>
                    {etapas[activeIndex].conteudo}
                  </p>

                  {/* Author badge */}
                  <div className="flex items-center gap-3 mt-8 pt-6" style={{ borderTop: '1px solid rgba(148,110,61,0.12)' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={CONFIG.fotoCircular}
                      alt={CONFIG.nome}
                      style={{ width: 36, height: 36, borderRadius: '50%', objectFit: 'cover', border: '2px solid white', boxShadow: '0 2px 8px rgba(148,110,61,0.2)' }}
                    />
                    <div>
                      <p className="text-xs font-semibold" style={{ color: '#946e3d', fontFamily: 'var(--font-sans)' }}>Joice Mazzini</p>
                      <p className="text-xs" style={{ color: '#565455', opacity: 0.5, fontFamily: 'var(--font-sans)' }}>Nutricionista · CRN</p>
                    </div>
                  </div>
                </div>

                {/* Side image */}
                <div className="lg:w-52 flex-shrink-0 hidden lg:block">
                  <div className="rounded-2xl overflow-hidden" style={{ aspectRatio: '3/4', boxShadow: '0 8px 32px rgba(148,110,61,0.12)', border: '4px solid white' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={CONFIG.imgDecor3}
                      alt="Consulta"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Nav arrows */}
            <div className="absolute bottom-6 right-6 flex gap-2">
              <button
                onClick={prev}
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
                style={{ background: 'white', border: '1px solid rgba(148,110,61,0.2)', color: '#946e3d', boxShadow: '0 2px 8px rgba(148,110,61,0.1)' }}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
                style={{ background: '#946e3d', border: '1px solid #946e3d', color: 'white', boxShadow: '0 4px 12px rgba(148,110,61,0.3)' }}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5" style={{ background: 'rgba(148,110,61,0.1)' }}>
              <motion.div
                className="h-full"
                style={{ background: '#946e3d' }}
                initial={{ width: '0%' }}
                animate={{ width: `${((activeIndex + 1) / etapas.length) * 100}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <a
            href={CONFIG.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden inline-flex items-center justify-center px-8 py-4 font-bold text-sm tracking-widest uppercase rounded-full text-white transition-shadow duration-300"
            style={{ background: '#946e3d', boxShadow: '0 6px 24px rgba(148,110,61,0.3)', fontFamily: 'var(--font-sans)' }}
          >
            Agendar Minha Consulta
            <span className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-out opacity-10" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
