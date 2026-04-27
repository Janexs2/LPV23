"use client"

import { CONFIG } from "@/lib/config"
import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  return (
    <a
      href={CONFIG.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      style={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        zIndex: 50,
        width: 56,
        height: 56,
        borderRadius: '50%',
        background: '#25D366',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 20px rgba(37,211,102,0.4)',
        transition: 'transform 0.2s, box-shadow 0.2s',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLAnchorElement
        el.style.transform = 'scale(1.1)'
        el.style.boxShadow = '0 6px 28px rgba(37,211,102,0.5)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLAnchorElement
        el.style.transform = 'scale(1)'
        el.style.boxShadow = '0 4px 20px rgba(37,211,102,0.4)'
      }}
    >
      <MessageCircle className="w-6 h-6 text-white" fill="white" />
    </a>
  )
}
