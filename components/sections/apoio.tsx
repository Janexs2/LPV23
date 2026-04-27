"use client"

import { motion } from "framer-motion"
import { CONFIG } from "@/lib/config"

export function Apoio() {
  return (
    <section className="relative overflow-hidden" style={{ background: '#f4efec', paddingTop: 'clamp(64px, 8vw, 120px)', paddingBottom: 'clamp(64px, 8vw, 120px)' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Section label */}
        <motion.div
          className="flex items-center gap-3 mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="w-10 h-px" style={{ background: '#946e3d' }} />
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase" style={{ color: '#946e3d', fontFamily: 'var(--font-sans)' }}>
            Uma história real
          </span>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Images column */}
          <motion.div
            className="relative flex-shrink-0 w-full lg:w-[420px]"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Main photo */}
            <div
              className="relative overflow-hidden mx-auto"
              style={{
                width: 'min(300px, 80vw)',
                aspectRatio: '4/5',
                borderRadius: '60% 40% 55% 45% / 50% 60% 40% 50%',
                boxShadow: '0 20px 50px rgba(148,110,61,0.2), 8px 16px 32px rgba(0,0,0,0.1)',
                border: '5px solid white',
                transform: 'rotate(1.5deg)',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={CONFIG.fotoComFilho}
                alt={`${CONFIG.nome} e ${CONFIG.filhoNome}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }}
              />
            </div>

            {/* Secondary photo — overlapping */}
            <motion.div
              className="absolute"
              style={{
                bottom: -20,
                right: 0,
                width: 'min(160px, 44vw)',
                aspectRatio: '1/1',
                borderRadius: '45% 55% 40% 60% / 55% 40% 60% 45%',
                overflow: 'hidden',
                boxShadow: '-6px 10px 24px rgba(237,216,150,0.3)',
                border: '4px solid white',
                transform: 'rotate(-2deg)',
              }}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={CONFIG.fotoFilho}
                alt={CONFIG.filhoNome}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }}
              />
            </motion.div>

            {/* Decorative dot */}
            <div className="absolute top-4 left-0 w-12 h-12 rounded-full" style={{ background: '#edd896', opacity: 0.5, zIndex: -1 }} />
          </motion.div>

          {/* Text column */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl uppercase leading-[0.92] mb-8" style={{ color: '#565455' }}>
              VOCÊ NÃO{" "}
              <span style={{ color: '#946e3d' }}>PRECISA</span><br />
              LIDAR SOZINHO
            </h2>

            <div className="space-y-5 mb-8">
              <p className="text-base md:text-lg leading-relaxed" style={{ color: '#565455', fontFamily: 'var(--font-sans)' }}>
                Meu filho {CONFIG.filhoNome} tem TEA. Vivi na pele o que você enfrenta: as noites sem dormir, a seletividade que aperta o coração, a busca incessante por respostas.
              </p>
              <p className="text-base md:text-lg leading-relaxed" style={{ color: '#565455', fontFamily: 'var(--font-sans)' }}>
                Foi essa experiência que transformou minha prática como nutricionista. Hoje, atendo famílias com o mesmo cuidado que gostaria de ter recebido — com empatia, ciência e olhar individualizado.
              </p>
            </div>

            {/* Video section */}
            <motion.div
              className="rounded-2xl overflow-hidden mb-8"
              style={{ boxShadow: '0 8px 32px rgba(148,110,61,0.15)' }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <video
                src={CONFIG.videoDepoimento}
                controls
                playsInline
                style={{ width: '100%', display: 'block', maxHeight: '320px', objectFit: 'cover' }}
                poster={CONFIG.fotoComFilho}
              />
            </motion.div>

            <a
              href={CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden inline-flex items-center justify-center px-8 py-3.5 font-bold text-sm tracking-widest uppercase rounded-full text-white transition-shadow duration-300"
              style={{ background: '#946e3d', boxShadow: '0 6px 24px rgba(148,110,61,0.3)', fontFamily: 'var(--font-sans)' }}
            >
              Quero Esse Apoio
              <span className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-out opacity-10" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
