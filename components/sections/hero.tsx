"use client"

import { CONFIG } from "@/lib/config"

export function Hero() {
  return (
    <>
      <style>{`

        /* ═══════════════════════════════════════════════
           HERO  —  mobile-first, sem posicionamentos frágeis
           Mobile : foto topo (object-fit cover, foca no rosto)
                    texto empilha abaixo
           Desktop: flex row — texto esq | foto dir altura total
        ═══════════════════════════════════════════════ */

        /* Reset base */
        .h-section {
          background: #f0ebe5;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          min-height: 100svh;
        }

        /* Grain */
        .h-section::before {
          content: '';
          position: absolute; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
          background-size: 160px;
          pointer-events: none; z-index: 0;
        }

        /* Glows */
        .h-glow-tl {
          position: absolute; top: -20%; left: -10%;
          width: 55%; height: 70%;
          background: radial-gradient(ellipse, rgba(205,181,120,0.11) 0%, transparent 65%);
          pointer-events: none; z-index: 0;
        }
        .h-glow-br {
          position: absolute; bottom: -10%; right: -5%;
          width: 50%; height: 60%;
          background: radial-gradient(ellipse, rgba(205,119,120,0.07) 0%, transparent 65%);
          pointer-events: none; z-index: 0;
        }

        /* ─── Corpo principal ─── */
        .h-body {
          position: relative; z-index: 1;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           FOTO  —  mobile
           Container com altura generosa e fixa.
           img usa object-fit:cover + object-position:top
           → mostra rosto e busto, nunca corta a cabeça.
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
        .h-photo-col {
          position: relative;
          width: 100%;
          /* altura = 85vw garante espaço suficiente em qualquer mobile */
          height: 85vw;
          min-height: 300px;
          max-height: 520px;
          overflow: hidden;
          flex-shrink: 0;
          background: transparent;
        }

        .h-photo-col img {
          width: 100%;
          height: 100%;
          display: block;
          /*
            cover preenche o container sem distorção.
            top center prioriza a cabeça — nunca corta.
          */
          object-fit: cover;
          object-position: top center;
        }

        /* Fade suave na base da foto */
        .h-photo-fade {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 45%;
          background: linear-gradient(to bottom,
            transparent 0%,
            rgba(240,235,229,0.7) 55%,
            rgba(240,235,229,1) 100%
          );
          pointer-events: none;
        }

        /* Decorativos sobre a foto */
        .h-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(148,110,61,0.2);
          pointer-events: none;
          animation: spinSlow 22s linear infinite;
        }
        .h-ring::after {
          content: '';
          position: absolute;
          top: -3px; left: 50%;
          transform: translateX(-50%);
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #946e3d; opacity: 0.5;
        }
        .h-ring-a { width: 96px; height: 96px; top: 8%; right: 5%; }
        .h-ring-b {
          width: 54px; height: 54px; top: 5%; right: 23%;
          border-color: rgba(148,110,61,0.11);
          animation-duration: 16s;
          animation-direction: reverse;
        }
        .h-blob {
          position: absolute;
          bottom: 26%; left: 5%;
          width: 30px; height: 30px;
          border-radius: 50%;
          background: rgba(237,216,120,0.52);
          filter: blur(4px);
          pointer-events: none;
          animation: floatUp 4.5s ease-in-out infinite;
        }
        .h-dot {
          position: absolute;
          top: 32%; right: 16%;
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #946e3d; opacity: 0.28;
          pointer-events: none;
        }

        /* ━━━━━━━━━━━━━━━━━━━━━━━━
           TEXTO  —  mobile
        ━━━━━━━━━━━━━━━━━━━━━━━━ */
        .h-text-col {
          position: relative; z-index: 2;
          padding: 20px 24px 52px;
          display: flex;
          flex-direction: column;
        }

        .h-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(148,110,61,0.09);
          border: 1px solid rgba(148,110,61,0.22);
          color: #946e3d;
          padding: 5px 14px; border-radius: 100px;
          width: fit-content; margin-bottom: 14px;
          animation: fadeUp 0.7s 0.08s both;
        }
        .h-badge-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #946e3d; animation: pulseDot 2s infinite;
        }
        .h-badge-lbl {
          font-size: 10px; font-weight: 700;
          letter-spacing: 0.22em; text-transform: uppercase;
          font-family: var(--font-sans), sans-serif;
        }

        .h-eyebrow {
          display: flex; align-items: center; gap: 10px;
          margin-bottom: 11px;
          animation: fadeUp 0.7s 0.13s both;
        }
        .h-eyebrow-line { width: 22px; height: 1px; background: #946e3d; flex-shrink: 0; }
        .h-eyebrow-txt {
          font-size: 10px; font-weight: 700;
          letter-spacing: 0.3em; text-transform: uppercase;
          color: #946e3d; font-family: var(--font-sans), sans-serif;
        }

        .h-title {
          font-family: var(--font-serif), Georgia, serif;
          font-size: clamp(2.5rem, 10.5vw, 4.2rem);
          font-weight: 600; line-height: 0.87;
          text-transform: uppercase;
          color: #7a5828; letter-spacing: -0.02em;
          margin: 0 0 6px;
          animation: fadeUp 0.8s 0.18s both;
        }
        .h-title-rosa { color: #c96c6e; }
        .h-title-sub {
          display: block;
          font-family: var(--font-sans), sans-serif;
          font-size: clamp(0.48rem, 1.9vw, 0.63rem);
          font-weight: 400; letter-spacing: 0.42em;
          text-transform: uppercase; color: #5a5255;
          margin-top: 11px; opacity: 0.62;
        }

        .h-name {
          display: block;
          font-family: var(--font-sans), sans-serif;
          font-size: clamp(0.44rem, 1.7vw, 0.58rem);
          font-weight: 300; letter-spacing: 0.42em;
          text-transform: uppercase; color: #946e3d;
          margin: 14px 0 15px;
          animation: fadeUp 0.8s 0.23s both;
        }

        .h-desc {
          font-family: var(--font-sans), sans-serif;
          font-size: 0.9rem; line-height: 1.78;
          color: #5a5255; opacity: 0.85;
          max-width: 380px; margin-bottom: 26px;
          animation: fadeUp 0.8s 0.28s both;
        }

        .h-ctas {
          display: flex; gap: 10px; flex-wrap: wrap;
          animation: fadeUp 0.8s 0.35s both;
        }
        .h-btn-main {
          display: inline-flex; align-items: center;
          background: #946e3d; color: #fff;
          padding: 13px 28px; border-radius: 100px;
          font-family: var(--font-sans), sans-serif;
          font-size: 11px; font-weight: 700;
          letter-spacing: 0.2em; text-transform: uppercase;
          text-decoration: none;
          box-shadow: 0 6px 20px rgba(148,110,61,0.38);
          transition: background 0.2s, transform 0.18s, box-shadow 0.2s;
        }
        .h-btn-main:hover {
          background: #7a5828; transform: translateY(-2px);
          box-shadow: 0 10px 32px rgba(148,110,61,0.5);
        }
        .h-btn-sec {
          display: inline-flex; align-items: center;
          background: transparent; color: #946e3d;
          padding: 13px 24px; border-radius: 100px;
          font-family: var(--font-sans), sans-serif;
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.2em; text-transform: uppercase;
          text-decoration: none;
          border: 1.5px solid rgba(148,110,61,0.3);
          transition: border-color 0.2s, background 0.2s;
        }
        .h-btn-sec:hover { border-color: #946e3d; background: rgba(148,110,61,0.06); }

        .h-stats {
          display: flex; gap: 20px;
          margin-top: 26px; padding-top: 20px;
          border-top: 1px solid rgba(148,110,61,0.13);
          animation: fadeUp 0.8s 0.42s both;
        }
        .h-stat-val {
          font-family: var(--font-serif), serif;
          font-size: 1.45rem; font-weight: 600;
          color: #946e3d; line-height: 1;
        }
        .h-stat-lbl {
          font-family: var(--font-sans), sans-serif;
          font-size: 9px; font-weight: 500;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: #5a5255; opacity: 0.58; margin-top: 4px;
        }

        /* ─── Keyframes ─── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseDot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.35; transform: scale(0.72); }
        }
        @keyframes spinSlow { to { transform: rotate(360deg); } }
        @keyframes floatUp {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-9px); }
        }

        /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           === NOVA HERO DESKTOP ===
           Layout assimétrico: Texto 55% esq | Foto 45% dir
           Tipografia grande, grade decorativa, glassmorphism,
           prova social integrada, glow animado no CTA.
           APENAS para ≥ 1024px — mobile intocado.
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
        @media (min-width: 1024px) {

          /* === HERO SECTION === */
          .h-section {
            min-height: 100svh;
            background: linear-gradient(135deg, #f5efe8 0%, #ede4d8 40%, #f0ebe5 100%);
          }

          /* Grade decorativa no fundo — elemento puramente visual */
          .h-section::after {
            content: '';
            position: absolute;
            inset: 0;
            background-image:
              linear-gradient(rgba(148,110,61,0.045) 1px, transparent 1px),
              linear-gradient(90deg, rgba(148,110,61,0.045) 1px, transparent 1px);
            background-size: 60px 60px;
            pointer-events: none;
            z-index: 0;
            mask-image: linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 30%, rgba(0,0,0,0.5) 60%, transparent 100%);
          }

          /* Glows redimensionados para desktop */
          .h-glow-tl {
            width: 70%;
            height: 85%;
            background: radial-gradient(ellipse, rgba(205,181,120,0.18) 0%, transparent 60%);
          }
          .h-glow-br {
            width: 60%;
            height: 70%;
            background: radial-gradient(ellipse, rgba(201,108,110,0.1) 0%, transparent 60%);
          }

          /* === BODY === */
          .h-body {
            flex-direction: row;
            align-items: stretch;
            min-height: 100svh;
            max-width: 1440px;
            margin: 0 auto;
            width: 100%;
          }

          /* === COLUNA DE TEXTO — 55% === */
          .h-text-col {
            flex: 0 0 55%;
            padding: 0 52px 80px 80px;
            justify-content: center;
            position: relative;
          }

          /* Linha diagonal decorativa — elemento puramente visual */
          .h-text-col::before {
            content: '';
            position: absolute;
            top: 0; bottom: 0;
            right: -1px;
            width: 1px;
            background: linear-gradient(to bottom,
              transparent 0%,
              rgba(148,110,61,0.2) 20%,
              rgba(148,110,61,0.35) 50%,
              rgba(148,110,61,0.2) 80%,
              transparent 100%
            );
            z-index: 2;
          }

          /* Badge animado */
          .h-badge {
            background: rgba(148,110,61,0.11);
            border: 1px solid rgba(148,110,61,0.28);
            backdrop-filter: blur(8px);
            padding: 6px 18px;
            margin-bottom: 22px;
          }
          .h-badge-lbl { font-size: 11px; letter-spacing: 0.26em; }

          /* Eyebrow */
          .h-eyebrow { margin-bottom: 16px; }
          .h-eyebrow-line { width: 36px; }
          .h-eyebrow-txt { font-size: 11px; letter-spacing: 0.34em; }

          /* Headline impactante */
          .h-title {
            font-size: clamp(3.4rem, 5.2vw, 6.2rem);
            line-height: 0.85;
            letter-spacing: -0.03em;
            margin-bottom: 8px;
          }
          .h-title-sub {
            font-size: clamp(0.52rem, 0.75vw, 0.68rem);
            letter-spacing: 0.48em;
            margin-top: 16px;
            opacity: 0.55;
          }

          .h-name {
            font-size: clamp(0.48rem, 0.65vw, 0.62rem);
            letter-spacing: 0.44em;
            margin: 20px 0 20px;
          }

          .h-desc {
            font-size: 1rem;
            line-height: 1.82;
            max-width: 440px;
            margin-bottom: 32px;
            opacity: 0.82;
          }

          /* CTA com glow animado no botão principal */
          .h-ctas { gap: 14px; }

          .h-btn-main {
            padding: 15px 36px;
            font-size: 12px;
            letter-spacing: 0.22em;
            position: relative;
            box-shadow:
              0 6px 24px rgba(148,110,61,0.42),
              0 0 0 0 rgba(148,110,61,0);
            animation: ctaGlow 3s ease-in-out infinite;
          }
          .h-btn-main:hover {
            transform: translateY(-3px);
            box-shadow:
              0 12px 40px rgba(148,110,61,0.58),
              0 0 28px rgba(148,110,61,0.25);
          }

          .h-btn-sec {
            padding: 15px 30px;
            font-size: 12px;
            letter-spacing: 0.22em;
          }

          /* === STATS com glassmorphism === */
          .h-stats {
            margin-top: 36px;
            padding-top: 28px;
            gap: 0;
            border-top: none;
            position: relative;
          }
          /* Glassmorphism card nos stats */
          .h-stats::before {
            content: '';
            position: absolute;
            inset: 0;
            background: rgba(255,255,255,0.45);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(148,110,61,0.15);
            border-radius: 16px;
            z-index: 0;
            box-shadow: 0 4px 24px rgba(148,110,61,0.08);
          }
          .h-stats > div {
            position: relative;
            z-index: 1;
            flex: 1;
            padding: 18px 24px;
            text-align: center;
          }
          .h-stats > div + div {
            border-left: 1px solid rgba(148,110,61,0.13);
          }
          .h-stat-val {
            font-size: 1.75rem;
            font-weight: 700;
            display: block;
          }
          .h-stat-lbl {
            font-size: 9.5px;
            letter-spacing: 0.14em;
            margin-top: 5px;
            display: block;
          }

          /* === PROVA SOCIAL — desktop only === */
          /* Ocultada em mobile via classe desktop-only */
          .h-social-proof {
            display: flex;
            align-items: center;
            gap: 14px;
            margin-top: 24px;
            animation: fadeUp 0.8s 0.5s both;
          }
          .h-social-proof-stars {
            display: flex;
            gap: 3px;
          }
          .h-social-proof-star {
            color: #e8b84b;
            font-size: 14px;
          }
          .h-social-proof-txt {
            font-family: var(--font-sans), sans-serif;
            font-size: 11px;
            color: #5a5255;
            opacity: 0.72;
            line-height: 1.5;
          }
          .h-social-proof-txt strong {
            color: #946e3d;
            font-weight: 700;
          }
          .h-social-proof-divider {
            width: 1px; height: 28px;
            background: rgba(148,110,61,0.2);
            flex-shrink: 0;
          }
          .h-social-proof-quote {
            font-family: var(--font-sans), sans-serif;
            font-size: 11px;
            color: #5a5255;
            opacity: 0.65;
            font-style: italic;
            line-height: 1.5;
            max-width: 260px;
          }

          /* Ativa elementos desktop-only (ocultos via inline style no mobile) */
          .h-social-proof { display: flex !important; }
          .h-photo-tag    { display: flex !important; }

          /* === COLUNA DE FOTO — 45% === */
          .h-photo-col {
            flex: 0 0 45%;
            height: 100svh;
            min-height: 100svh;
            max-height: 100svh;
            overflow: hidden;
            position: relative;
          }

          /* Moldura com sombra dupla e contorno de cor */
          .h-photo-col::before {
            content: '';
            position: absolute;
            inset: 32px 24px 32px 0;
            border: 1px solid rgba(148,110,61,0.22);
            border-radius: 24px;
            z-index: 3;
            pointer-events: none;
            box-shadow:
              inset 0 0 0 1px rgba(255,255,255,0.15),
              0 24px 64px rgba(148,110,61,0.15),
              0 4px 16px rgba(0,0,0,0.08);
          }

          /* Overlay gradiente na foto */
          .h-photo-col::after {
            content: '';
            position: absolute;
            inset: 32px 24px 32px 0;
            background: linear-gradient(
              160deg,
              rgba(148,110,61,0.12) 0%,
              transparent 40%,
              transparent 60%,
              rgba(201,108,110,0.08) 100%
            );
            border-radius: 24px;
            z-index: 2;
            pointer-events: none;
          }

          .h-photo-col img {
            position: absolute;
            top: 32px; left: 0;
            right: 24px; bottom: 32px;
            width: calc(100% - 24px);
            height: calc(100% - 64px);
            object-fit: cover;
            object-position: top center;
            border-radius: 24px;
            /* Flutuação suave — microanimação */
            animation: photoFloat 7s ease-in-out infinite;
            filter: drop-shadow(0 20px 48px rgba(90,50,20,0.18));
          }

          .h-photo-fade { display: none; }

          /* Decorativos desktop reposicionados */
          .h-ring-a { width: 120px; height: 120px; top: 12%; right: 2%; z-index: 4; }
          .h-ring-b { width: 70px;  height: 70px;  top: 8%;  right: 22%; z-index: 4; }
          .h-blob   { bottom: 28%; left: 3%; z-index: 4; width: 40px; height: 40px; }
          .h-dot    { top: 28%; right: 14%; z-index: 4; }

          /* Tag CRN flutuante no topo da foto */
          .h-photo-tag {
            display: flex;
            position: absolute;
            top: 52px;
            right: 36px;
            z-index: 5;
            background: rgba(148,110,61,0.9);
            backdrop-filter: blur(12px);
            border-radius: 100px;
            padding: 7px 16px;
            align-items: center;
            gap: 7px;
            animation: fadeUp 0.9s 0.6s both;
          }
          .h-photo-tag-dot {
            width: 6px; height: 6px;
            border-radius: 50%;
            background: #f5efe8;
            animation: pulseDot 2s infinite;
          }
          .h-photo-tag-txt {
            font-family: var(--font-sans), sans-serif;
            font-size: 10px; font-weight: 700;
            letter-spacing: 0.2em; text-transform: uppercase;
            color: #f5efe8;
          }

          /* === KEYFRAMES NOVOS === */
          @keyframes ctaGlow {
            0%, 100% { box-shadow: 0 6px 24px rgba(148,110,61,0.42), 0 0 0 0 rgba(148,110,61,0); }
            50%       { box-shadow: 0 6px 28px rgba(148,110,61,0.52), 0 0 18px rgba(148,110,61,0.2); }
          }
          @keyframes photoFloat {
            0%, 100% { transform: translateY(0px); }
            50%       { transform: translateY(-6px); }
          }

        } /* fim @media (min-width: 1024px) */

        /* Tablet 768–1023px */
        @media (min-width: 768px) and (max-width: 1023px) {
          .h-photo-col {
            height: 56vw;
            max-height: 520px;
          }
        }

      `}</style>

      <section id="hero" className="h-section">
        <div className="h-glow-tl" />
        <div className="h-glow-br" />

        <div className="h-body">

          {/* ══ Foto ══ */}
          <div className="h-photo-col">
            <div className="h-ring h-ring-a" />
            <div className="h-ring h-ring-b" />
            <div className="h-blob" />
            <div className="h-dot" />

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://i.imgur.com/PKkhMU3.png"
              alt={`${CONFIG.nome} — Nutricionista especialista em TEA e TDAH`}
            />

            <div className="h-photo-fade" />

            {/* === Tag CRN flutuante — desktop only === */}
            <div className="h-photo-tag" style={{ display: 'none' }}>
              <span className="h-photo-tag-dot" />
              <span className="h-photo-tag-txt">{CONFIG.crn}</span>
            </div>


          </div>

          {/* ══ Texto ══ */}
          <div className="h-text-col">
            <div className="h-badge">
              <span className="h-badge-dot" />
              <span className="h-badge-lbl">Vagas Abertas</span>
            </div>

            <div className="h-eyebrow">
              <span className="h-eyebrow-line" />
              <span className="h-eyebrow-txt">Especialista em TEA &amp; TDAH</span>
            </div>

            <h1 className="h-title">
              Autismo<br />
              <span className="h-title-rosa">&amp; Nutrição</span>
              <span className="h-title-sub">Da Teoria à Prática</span>
            </h1>

            <span className="h-name">Joice L Mazzini · Nutricionista</span>

            <p className="h-desc">
              Atendimento especializado em Autismo, TDAH, seletividade alimentar
              e suplementação individualizada para famílias atípicas.
            </p>

            <div className="h-ctas">
              <a
                href={CONFIG.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="h-btn-main"
              >
                Agendar Consulta
              </a>
              <a href="#sobre" className="h-btn-sec">Saiba mais</a>
            </div>

            {/* === PROVA SOCIAL — desktop only === */}
            <div className="h-social-proof" style={{ display: 'none' }}>
              <div className="h-social-proof-stars">
                {[1,2,3,4,5].map(i => <span key={i} className="h-social-proof-star">★</span>)}
              </div>
              <div>
                <div className="h-social-proof-txt"><strong>500+ famílias</strong> atendidas</div>
                <div className="h-social-proof-txt">13 anos de experiência clínica</div>
              </div>
              <div className="h-social-proof-divider" />
              <p className="h-social-proof-quote">
                "Evolução na fala — está todo mundo elogiando!"<br />
                <strong style={{ color: '#946e3d' }}>— Pâmela, mãe da Helena</strong>
              </p>
            </div>

            <div className="h-stats">
              <div>
                <div className="h-stat-val">13+</div>
                <div className="h-stat-lbl">Anos de Exp.</div>
              </div>
              <div>
                <div className="h-stat-val">500+</div>
                <div className="h-stat-lbl">Famílias</div>
              </div>
              <div>
                <div className="h-stat-val">100%</div>
                <div className="h-stat-lbl">Online</div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
