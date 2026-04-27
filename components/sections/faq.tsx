"use client"

import { motion } from "framer-motion"
import { CONFIG } from "@/lib/config"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQ() {
  return (
    <section className="relative overflow-hidden" style={{ background: '#f4efec', paddingTop: 'clamp(64px, 8vw, 120px)', paddingBottom: 'clamp(64px, 8vw, 120px)' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left */}
          <motion.div
            className="lg:w-[340px] flex-shrink-0"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-px" style={{ background: '#946e3d' }} />
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase" style={{ color: '#946e3d', fontFamily: 'var(--font-sans)' }}>Dúvidas</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl uppercase leading-[0.92] mb-6" style={{ color: '#565455' }}>
              PERGUNTAS<br />
              <span style={{ color: '#946e3d' }}>FREQUENTES</span>
            </h2>
            <p className="text-base leading-relaxed mb-10" style={{ color: '#565455', opacity: 0.7, fontFamily: 'var(--font-sans)' }}>
              Se você ainda tem dúvidas, provavelmente alguém já perguntou a mesma coisa. Veja as respostas mais comuns abaixo.
            </p>

            {/* Decorative image */}
            <div className="rounded-2xl overflow-hidden hidden lg:block" style={{ aspectRatio: '4/3', boxShadow: '0 8px 32px rgba(148,110,61,0.15)', border: '4px solid white' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={CONFIG.fotoComFilho}
                alt="Joice Mazzini"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </motion.div>

          {/* Accordion */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Accordion type="single" collapsible>
              {CONFIG.faq.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} style={{ borderBottom: '1px solid rgba(148,110,61,0.15)' }}>
                  <AccordionTrigger
                    className="text-left hover:no-underline py-5 gap-4"
                    style={{ fontFamily: 'var(--font-sans)', color: '#565455', fontWeight: 600 }}
                  >
                    <span className="flex items-start gap-4">
                      <span className="font-serif text-sm mt-0.5 flex-shrink-0" style={{ color: 'rgba(148,110,61,0.4)' }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {item.pergunta}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 pl-8" style={{ color: '#565455', opacity: 0.75, fontFamily: 'var(--font-sans)', lineHeight: 1.7 }}>
                    {item.resposta}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-10 pt-8" style={{ borderTop: '1px solid rgba(148,110,61,0.15)' }}>
              <p className="text-sm mb-4" style={{ color: '#565455', opacity: 0.65, fontFamily: 'var(--font-sans)' }}>
                Ainda tem dúvidas? Entre em contato pelo WhatsApp.
              </p>
              <a
                href={CONFIG.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden inline-flex items-center justify-center px-8 py-3.5 font-bold text-sm tracking-widest uppercase rounded-full text-white transition-shadow duration-300"
                style={{ background: '#946e3d', boxShadow: '0 6px 24px rgba(148,110,61,0.3)', fontFamily: 'var(--font-sans)' }}
              >
                Falar com a Joice
                <span className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-out opacity-10" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
