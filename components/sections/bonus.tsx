"use client"

import { motion } from "framer-motion"
import { CONFIG } from "@/lib/config"
import { Gift } from "lucide-react"

export function Bonus() {
  return (
    <section className="relative overflow-hidden" style={{ background: '#946e3d', paddingTop: 'clamp(64px, 8vw, 120px)', paddingBottom: 'clamp(64px, 8vw, 120px)' }}>
      {/* Grain */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "256px",
        }}
      />
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full pointer-events-none" style={{ border: '1.5px solid rgba(255,255,255,0.1)' }} />

      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        {/* Label */}
        <motion.div
          className="flex items-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="w-8 h-8 flex items-center justify-center rounded-full flex-shrink-0" style={{ background: 'rgba(255,255,255,0.15)' }}>
            <Gift className="w-4 h-4 text-white" />
          </div>
          <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.15)' }} />
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase flex-shrink-0 text-white" style={{ fontFamily: 'var(--font-sans)' }}>Bônus exclusivo</span>
          <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.15)' }} />
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Book */}
          <motion.div
            className="w-40 sm:w-52 lg:w-60 flex-shrink-0 mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 24, rotate: -4 }}
            whileInView={{ opacity: 1, y: 0, rotate: -2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ rotate: 0, scale: 1.03 }}
          >
            <div className="relative">
              <div className="absolute -top-3 -left-3 w-full h-full pointer-events-none" style={{ border: '2px solid rgba(255,255,255,0.2)' }} />
              <div className="overflow-hidden shadow-2xl" style={{ aspectRatio: '3/4' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={CONFIG.ebookImage}
                  alt="E-book Receitas para Crianças Atípicas"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
              {/* Price badge */}
              <div
                className="absolute -top-4 -right-4 w-14 h-14 rounded-full flex items-center justify-center text-xs font-bold text-center leading-tight"
                style={{ background: '#edd896', color: '#565455', fontFamily: 'var(--font-sans)', boxShadow: '0 4px 16px rgba(0,0,0,0.2)' }}
              >
                <span>GRÁTIS</span>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl uppercase leading-[0.95] mb-6 text-white">
              LEITES VEGETAIS<br />
              PARA CRIANÇAS<br />
              <span style={{ color: '#edd896' }}>ATÍPICAS</span>
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-3 text-white" style={{ opacity: 0.8, fontFamily: 'var(--font-sans)' }}>
              Um e-book especialmente desenvolvido para crianças com alergias alimentares ou intolerância à lactose.
            </p>
            <p className="text-base md:text-lg leading-relaxed mb-8 text-white" style={{ opacity: 0.8, fontFamily: 'var(--font-sans)' }}>
              Receitas práticas, nutritivas e adaptadas para a realidade de famílias atípicas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={CONFIG.bonusLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden inline-flex items-center justify-center px-8 py-3.5 font-bold text-sm tracking-widest uppercase rounded-full transition-shadow duration-300"
                style={{ background: 'white', color: '#946e3d', boxShadow: '0 6px 24px rgba(0,0,0,0.2)', fontFamily: 'var(--font-sans)' }}
              >
                Quero o E-book Grátis
                <span className="absolute inset-0 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-out opacity-10" style={{ background: '#946e3d' }} />
              </a>
              <a
                href={CONFIG.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 font-bold text-sm tracking-widest uppercase rounded-full text-white transition-all duration-300"
                style={{ border: '1.5px solid rgba(255,255,255,0.4)', fontFamily: 'var(--font-sans)' }}
              >
                Agendar Consulta
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
