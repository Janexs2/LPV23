"use client"

import { motion } from "framer-motion"
import { CONFIG } from "@/lib/config"
import { Brain, Heart, Leaf } from "lucide-react"

const categorias = [
  {
    icon: Brain,
    titulo: "Neuro & Comportamento",
    itens: [
      "Eixo intestino-cérebro desregulado",
      "Irritabilidade e agitação",
      "Dificuldade de foco e atenção",
      "Sono ruim ou despertares noturnos",
    ],
  },
  {
    icon: Leaf,
    titulo: "Digestão & Intestino",
    itens: [
      "Constipação ou diarreia frequente",
      "Dores abdominais recorrentes",
      "Baixa imunidade",
    ],
  },
  {
    icon: Heart,
    titulo: "Alimentação & Nutrição",
    itens: [
      "Seletividade alimentar intensa",
      "Recusa de frutas, verduras e proteínas",
      "Dificuldade de crescimento ou baixo peso",
      "Necessidade de suplementação correta",
    ],
  },
]

export function Abordagem() {
  return (
    <section id="abordagem" className="relative overflow-hidden" style={{ background: '#f4efec', paddingTop: 'clamp(64px, 8vw, 120px)', paddingBottom: 'clamp(64px, 8vw, 120px)' }}>
      {/* Subtle watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="font-serif font-bold select-none" style={{ fontSize: 'clamp(6rem,18vw,16rem)', color: 'rgba(148,110,61,0.04)', lineHeight: 1 }}>
          NUTRIÇÃO
        </span>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        {/* Header */}
        <motion.div
          className="max-w-2xl mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-px" style={{ background: '#946e3d' }} />
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase" style={{ color: '#946e3d', fontFamily: 'var(--font-sans)' }}>
              Para quem é
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl uppercase leading-[0.95] mb-5" style={{ color: '#565455' }}>
            PARA QUEM É<br />
            ESSE{" "}
            <span style={{ color: '#946e3d' }}>ATENDIMENTO?</span>
          </h2>
          <p className="text-lg" style={{ color: '#565455', opacity: 0.7, fontFamily: 'var(--font-sans)' }}>
            Se você é mãe ou pai atípico e seu filho apresenta algum desses sinais, esse acompanhamento foi feito para você.
          </p>
        </motion.div>

        {/* Category cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {categorias.map((cat, ci) => {
            const Icon = cat.icon
            return (
              <motion.div
                key={cat.titulo}
                className="rounded-2xl p-7 md:p-8 flex flex-col gap-5"
                style={{ background: 'white', boxShadow: '0 4px 24px rgba(148,110,61,0.08)', border: '1px solid rgba(148,110,61,0.1)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * ci }}
                whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(148,110,61,0.14)' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl" style={{ background: 'rgba(148,110,61,0.1)' }}>
                    <Icon className="w-5 h-5" style={{ color: '#946e3d' }} />
                  </div>
                  <h3 className="font-bold text-sm tracking-widest uppercase" style={{ color: '#946e3d', fontFamily: 'var(--font-sans)' }}>
                    {cat.titulo}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {cat.itens.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-snug" style={{ color: '#565455', fontFamily: 'var(--font-sans)' }}>
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#edd896' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>

        {/* CTA row */}
        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-base max-w-sm" style={{ color: '#565455', opacity: 0.7, fontFamily: 'var(--font-sans)' }}>
            Se algum desses sinais descreve o seu filho, estou aqui para ajudar.
          </p>
          <a
            href={CONFIG.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden inline-flex items-center justify-center px-8 py-3.5 font-bold text-sm tracking-widest uppercase rounded-full text-white flex-shrink-0 transition-shadow duration-300"
            style={{ background: '#946e3d', boxShadow: '0 6px 24px rgba(148,110,61,0.3)', fontFamily: 'var(--font-sans)' }}
          >
            Quero Agendar Agora
            <span className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-out opacity-10" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
