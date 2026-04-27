"use client"

import { motion } from "framer-motion"
import { CONFIG } from "@/lib/config"
import { Youtube, Check } from "lucide-react"

const conteudos = [
  "Vídeos educativos sobre autismo e TDAH",
  "Dicas práticas de alimentação e nutrição",
  "Receitas adaptadas para crianças atípicas",
  "Depoimentos de famílias atendidas",
  "Orientações sobre suplementação",
  "Respostas para suas dúvidas frequentes",
]

export function YouTubeSection() {
  return (
    <section className="relative overflow-hidden" style={{ background: '#565455', paddingTop: 'clamp(64px, 8vw, 120px)', paddingBottom: 'clamp(64px, 8vw, 120px)' }}>
      {/* Grain */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "256px",
        }}
      />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(237,216,150,0.06) 0%, transparent 70%)' }} />

      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Header — centered */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-10 h-px" style={{ background: '#edd896' }} />
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase" style={{ color: '#edd896', fontFamily: 'var(--font-sans)' }}>Conteúdo gratuito</span>
            <div className="w-10 h-px" style={{ background: '#edd896' }} />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl uppercase leading-[0.92] mb-4" style={{ color: '#f4efec' }}>
            CONTEÚDO EXCLUSIVO<br />
            NO{" "}
            <span style={{ color: '#FF0000' }}>YOUTUBE</span>
          </h2>
          <p className="text-base max-w-sm mx-auto" style={{ color: 'rgba(244,239,236,0.5)', fontFamily: 'var(--font-sans)', lineHeight: 1.75 }}>
            Acesso gratuito a conteúdo especializado para famílias atípicas.
          </p>
        </motion.div>

        {/* Video embed — full width, centered */}
        <motion.div
          className="rounded-2xl overflow-hidden mb-10"
          style={{ aspectRatio: '16/9', boxShadow: '0 20px 60px rgba(0,0,0,0.35)', border: '1px solid rgba(255,255,255,0.06)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${CONFIG.youtubeVideoId}?rel=0&modestbranding=1`}
            title="Canal Joice Mazzini — Nutrição e Autismo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ display: 'block', border: 'none', width: '100%', height: '100%', minHeight: 220 }}
          />
        </motion.div>

        {/* Content list + CTA — horizontal on desktop */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 items-start justify-between"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 flex-1">
            {conteudos.map((c) => (
              <div key={c} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(237,216,150,0.15)', border: '1px solid rgba(237,216,150,0.25)' }}>
                  <Check className="w-3 h-3" style={{ color: '#edd896' }} />
                </div>
                <span className="text-sm" style={{ color: 'rgba(244,239,236,0.7)', fontFamily: 'var(--font-sans)' }}>{c}</span>
              </div>
            ))}
          </div>

          <div className="flex-shrink-0">
            <a
              href={CONFIG.youtubeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden inline-flex items-center justify-center gap-2 px-7 py-4 font-bold text-sm tracking-widest uppercase rounded-full transition-shadow duration-300 whitespace-nowrap"
              style={{ background: '#FF0000', color: 'white', boxShadow: '0 6px 24px rgba(255,0,0,0.3)', fontFamily: 'var(--font-sans)' }}
            >
              <Youtube className="w-4 h-4" />
              Inscrever no Canal
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
