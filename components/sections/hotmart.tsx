"use client"

import { motion } from "framer-motion"
import { CONFIG } from "@/lib/config"
import { BookOpen, ArrowRight } from "lucide-react"

// Product cover images using new assets
const productImages = [
  CONFIG.imgDecor1,
  CONFIG.imgDecor2,
  CONFIG.imgDecor3,
]

export function HotmartSection() {
  const produtos = CONFIG.hotmartProdutos

  return (
    <section className="relative overflow-hidden" style={{ background: 'white', paddingTop: 'clamp(64px, 8vw, 120px)', paddingBottom: 'clamp(64px, 8vw, 120px)' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-px" style={{ background: '#946e3d' }} />
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase" style={{ color: '#946e3d', fontFamily: 'var(--font-sans)' }}>Materiais Complementares</span>
            <div className="w-10 h-px" style={{ background: '#946e3d' }} />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl uppercase leading-[0.92]" style={{ color: '#565455' }}>
            MATERIAIS{" "}
            <span style={{ color: '#946e3d' }}>EXCLUSIVOS</span>
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {produtos.map((p, i) => (
            <motion.a
              key={p.titulo}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl overflow-hidden"
              style={{ background: 'white', border: '1px solid rgba(148,110,61,0.12)', boxShadow: '0 4px 20px rgba(148,110,61,0.07)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              whileHover={{ y: -6, boxShadow: '0 16px 48px rgba(148,110,61,0.15)' }}
            >
              {/* Cover image */}
              <div style={{ aspectRatio: '4/3', overflow: 'hidden', position: 'relative' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={productImages[i] || CONFIG.ebookImage}
                  alt={p.titulo}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }}
                  className="group-hover:scale-105"
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(148,110,61,0.5) 0%, transparent 50%)' }} />
                <div style={{ position: 'absolute', bottom: 12, left: 12, right: 12 }}>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-white opacity-80" />
                    <span className="text-white text-xs font-semibold opacity-80" style={{ fontFamily: 'var(--font-sans)' }}>E-book</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 p-5 flex-1">
                <h3 className="font-bold text-sm leading-snug" style={{ color: '#565455', fontFamily: 'var(--font-sans)' }}>{p.titulo}</h3>
                <p className="text-sm leading-relaxed flex-1" style={{ color: '#565455', opacity: 0.65, fontFamily: 'var(--font-sans)' }}>{p.descricao}</p>
                <div className="flex items-center gap-1 mt-2" style={{ color: '#946e3d' }}>
                  <span className="text-xs font-bold tracking-wider uppercase" style={{ fontFamily: 'var(--font-sans)' }}>Acessar</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
