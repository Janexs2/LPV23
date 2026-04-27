import { Hero } from "@/components/sections/hero"
import { Dores } from "@/components/sections/dores"
import { Abordagem } from "@/components/sections/abordagem"
import { Neurosuplementacao } from "@/components/sections/neurosuplementacao"
import { Apoio } from "@/components/sections/apoio"
import { Conexao } from "@/components/sections/conexao"
import { Timeline } from "@/components/sections/timeline"
import { YouTubeSection } from "@/components/sections/youtube"
import { HotmartSection } from "@/components/sections/hotmart"
import { Bonus } from "@/components/sections/bonus"
import { Depoimentos } from "@/components/sections/depoimentos"
import { Sobre } from "@/components/sections/sobre"
import { FAQ } from "@/components/sections/faq"
import { Footer } from "@/components/sections/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden" style={{ background: '#f4efec' }}>
      {/* 1. Hero Section */}
      <Hero />
      
      {/* 2. Secao de Dores - Problemas que o publico enfrenta */}
      <Dores />
      
      {/* 3. Para Quem E - Checklist */}
      <Abordagem />
      
      {/* 4. Box Neurosuplementacao */}
      <Neurosuplementacao />
      
      {/* 5. Secao de Apoio - Voce nao precisa lidar sozinho */}
      <Apoio />
      
      {/* 6. Como Funciona o Acompanhamento */}
      <Conexao />
      
      {/* 7. Timeline da Consulta */}
      <Timeline />
      
      {/* 8. Bonus - E-book */}
      <Bonus />
      
      {/* 9. Prova Social - Depoimentos */}
      <Depoimentos />
      
      {/* 10. Sobre - Apresentacao profissional */}
      <Sobre />
      
      {/* 11. FAQ - Perguntas frequentes */}
      <FAQ />
      
      {/* 12. Bloco Hotmart - Produtos Digitais */}
      <HotmartSection />
      
      {/* 13. Bloco YouTube - ULTIMO antes do Footer */}
      <YouTubeSection />
      
      {/* 14. Rodape */}
      <Footer />
      
      {/* Botao flutuante do WhatsApp */}
      <WhatsAppButton />
    </main>
  )
}
