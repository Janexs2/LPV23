"use client"

import { motion } from "framer-motion"
import { CONFIG } from "@/lib/config"
import { Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer style={{ background: '#2e2c2d' }}>
      {/* CTA block */}
      <div className="py-14 md:py-28 relative overflow-hidden" style={{ background: '#946e3d' }}>
        {/* Grain */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "256px",
          }}
        />
        {/* Decorative circles */}
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full pointer-events-none" style={{ border: '1px solid rgba(255,255,255,0.1)' }} />
        <div className="absolute -bottom-16 -left-16 w-60 h-60 rounded-full pointer-events-none" style={{ border: '1px solid rgba(255,255,255,0.08)' }} />

        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[11px] font-bold tracking-[0.4em] uppercase mb-5 text-white" style={{ opacity: 0.5, fontFamily: 'var(--font-sans)' }}>
              Dê o próximo passo
            </p>
            <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.92] mb-7 text-white">
              SEU FILHO MERECE<br />
              UM ACOMPANHAMENTO<br />
              <span style={{ color: '#edd896' }}>ESPECIALIZADO</span>
            </h3>
            <p className="text-lg mb-10 max-w-lg mx-auto text-white" style={{ opacity: 0.7, fontFamily: 'var(--font-sans)' }}>
              Você não precisa testar tudo sozinha(o). Receba orientação segura, individualizada e acolhedora.
            </p>
            <a
              href={CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden inline-flex items-center justify-center px-10 py-4 font-bold text-sm tracking-widest uppercase rounded-full transition-shadow duration-300"
              style={{ background: 'white', color: '#946e3d', boxShadow: '0 8px 32px rgba(0,0,0,0.2)', fontFamily: 'var(--font-sans)' }}
            >
              Agende Sua Consulta Agora
              <span className="absolute inset-0 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-out opacity-10" style={{ background: '#946e3d' }} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="py-10 px-6 md:px-12 lg:px-16 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div>
            <p className="font-serif text-xl font-light tracking-widest uppercase text-white" style={{ letterSpacing: '0.25em' }}>
              Joice L Mazzini
            </p>
            <p className="text-xs mt-1 text-white" style={{ opacity: 0.4, fontFamily: 'var(--font-sans)', letterSpacing: '0.2em' }}>
              {CONFIG.profissao} · {CONFIG.crn}
            </p>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href={CONFIG.instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{ border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.5)' }}
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={CONFIG.youtubeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{ border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.5)' }}
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>

          {/* Legal */}
          <p className="text-xs text-center md:text-right" style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'var(--font-sans)' }}>
            © {new Date().getFullYear()} Joice Mazzini. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
