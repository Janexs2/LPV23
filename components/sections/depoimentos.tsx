"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CONFIG } from "@/lib/config"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

export function Depoimentos() {
  const [active, setActive] = useState(0)
  const dep = CONFIG.depoimentos
  const prev = () => setActive((a) => (a === 0 ? dep.length - 1 : a - 1))
  const next = () => setActive((a) => (a === dep.length - 1 ? 0 : a + 1))

  return (
    <section className="relative overflow-hidden" style={{ background: '#f4efec', paddingTop: 'clamp(64px, 8vw, 120px)', paddingBottom: 'clamp(64px, 8vw, 120px)' }}>
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="font-serif font-bold select-none" style={{ fontSize: 'clamp(5rem,16vw,14rem)', color: 'rgba(148,110,61,0.05)', lineHeight: 1 }}>
          FAMÍLIAS
        </span>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-px" style={{ background: '#946e3d' }} />
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase" style={{ color: '#946e3d', fontFamily: 'var(--font-sans)' }}>Resultados reais</span>
            <div className="w-10 h-px" style={{ background: '#946e3d' }} />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl uppercase leading-[0.92]" style={{ color: '#565455' }}>
            VEJA O QUE FAMÍLIAS<br />
            <span style={{ color: '#946e3d' }}>COMPARTILHAM</span>
          </h2>
        </motion.div>

        {/* Desktop: all 3 cards */}
        <div className="hidden md:grid grid-cols-3 gap-6 mb-12">
          {dep.map((d, i) => (
            <motion.div
              key={i}
              className="rounded-2xl p-7 flex flex-col gap-4 relative"
              style={{ background: 'white', border: '1px solid rgba(148,110,61,0.1)', boxShadow: '0 4px 20px rgba(148,110,61,0.07)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              whileHover={{ y: -4, boxShadow: '0 12px 36px rgba(148,110,61,0.12)' }}
            >
              <Quote className="w-8 h-8 opacity-20" style={{ color: '#946e3d' }} />
              <p className="text-sm leading-relaxed flex-1" style={{ color: '#565455', fontFamily: 'var(--font-sans)' }}>{d.texto}</p>
              <div>
                <div className="h-px mb-4" style={{ background: 'rgba(148,110,61,0.12)' }} />
                <div className="flex items-center gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={CONFIG.fotoCircular}
                    alt={d.nome}
                    style={{ width: 36, height: 36, borderRadius: '50%', objectFit: 'cover', border: '2px solid white', boxShadow: '0 2px 8px rgba(148,110,61,0.2)' }}
                  />
                  <div>
                    <p className="font-bold text-sm" style={{ color: '#946e3d', fontFamily: 'var(--font-sans)' }}>{d.nome}</p>
                    <p className="text-xs" style={{ color: '#565455', opacity: 0.6, fontFamily: 'var(--font-sans)' }}>{d.destaque}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: carousel */}
        <div className="md:hidden mb-8">
          <motion.div
            key={active}
            className="rounded-2xl p-6 flex flex-col gap-4"
            style={{ background: 'white', border: '1px solid rgba(148,110,61,0.1)', boxShadow: '0 4px 20px rgba(148,110,61,0.08)' }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35 }}
          >
            <Quote className="w-7 h-7 opacity-20" style={{ color: '#946e3d' }} />
            <p className="text-sm leading-relaxed" style={{ color: '#565455', fontFamily: 'var(--font-sans)' }}>{dep[active].texto}</p>
            <div>
              <div className="h-px mb-4" style={{ background: 'rgba(148,110,61,0.12)' }} />
              <div className="flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={CONFIG.fotoCircular} alt={dep[active].nome} style={{ width: 36, height: 36, borderRadius: '50%', objectFit: 'cover' }} />
                <div>
                  <p className="font-bold text-sm" style={{ color: '#946e3d', fontFamily: 'var(--font-sans)' }}>{dep[active].nome}</p>
                  <p className="text-xs" style={{ color: '#565455', opacity: 0.6, fontFamily: 'var(--font-sans)' }}>{dep[active].destaque}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex items-center justify-center gap-4 mt-5">
            <button onClick={prev} className="w-10 h-10 rounded-full flex items-center justify-center" style={{ border: '1.5px solid rgba(148,110,61,0.3)', color: '#946e3d' }}>
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-1.5">
              {dep.map((_, i) => (
                <button key={i} onClick={() => setActive(i)} className="rounded-full transition-all" style={{ width: active === i ? 20 : 7, height: 7, background: active === i ? '#946e3d' : 'rgba(148,110,61,0.2)' }} />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full flex items-center justify-center" style={{ border: '1.5px solid rgba(148,110,61,0.3)', color: '#946e3d' }}>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <a
            href={CONFIG.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden inline-flex items-center justify-center px-8 py-3.5 font-bold text-sm tracking-widest uppercase rounded-full text-white transition-shadow duration-300"
            style={{ background: '#946e3d', boxShadow: '0 6px 24px rgba(148,110,61,0.3)', fontFamily: 'var(--font-sans)' }}
          >
            Quero Esse Resultado Também
            <span className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-out opacity-10" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
