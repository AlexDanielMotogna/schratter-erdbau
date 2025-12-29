MASTER DOC — Schratter Erdbau GmbH Website (Design System + Build Spec)
Nota, la pagina web tiene que poder traducirse, osea la hacemos para 2 idiomas de momento aleman es el predeterminado e ingles.

0. Objetivo del sitio

Transmitir confianza, robustez, seriedad y capacidad operativa.

Convertir visitas en:

Llamadas (mobile-first)

Solicitudes de oferta (form)

Candidatos (Jobs)

Tono visual: industrial limpio, premium sobrio, no “tech startup”, no “template genérico”.

1. Brand & Visual System
   1.1 Colores (usar EXACTAMENTE estos HEX)

Base

--bg: #0B0F14 (carbon black, para secciones oscuras opcionales / footer)

--surface: #111823 (cards sobre oscuro)

--white: #FFFFFF

--text: #0E1217 (texto principal sobre blanco)

--muted: #667085 (texto secundario sobre blanco)

--border: #E6E8EC (bordes suaves)

--bg-soft: #F6F7F9 (fondo alternativo para secciones)

Brand red (inspirado en el logo, pero controlado)

--brand: #C1121F (rojo principal)

--brand-dark: #8F0E18 (hover/pressed)

--brand-soft: #FCE8EA (chips/labels suaves)

Accents / Estados

--success: #12B76A

--warning: #F79009

--error: #F04438

--focus: #2E90FA

Regla de uso

Rojo solo para: CTAs, links importantes, highlights (máx 10–15% del layout).

Mucho blanco/gris claro para look profesional.

2. Tipografía (exacta)
   2.1 Fuente

Usar Google Fonts:

Headings: Montserrat (600–800)

Body: Inter (400–600)

Fallback:

system-ui, -apple-system, Segoe UI, Roboto, Arial

2.2 Escala tipográfica (desktop)

H1: 52px / 60px, weight 800, letter-spacing -0.02em

H2: 36px / 44px, weight 700, letter-spacing -0.01em

H3: 24px / 32px, weight 700

H4: 18px / 26px, weight 700

Body L: 18px / 28px, weight 400

Body: 16px / 26px, weight 400

Small: 14px / 22px, weight 400

Micro: 12px / 18px, weight 500

2.3 Mobile scaling

H1: 34px / 40px

H2: 28px / 34px

Body: 16px / 26px

3. Layout, Grid, Spacing
   3.1 Container

Max width: 1200px

Side padding:

Mobile: 16px

Tablet: 24px

Desktop: 32px

3.2 Breakpoints

sm: 640px

md: 768px

lg: 1024px

xl: 1280px

3.3 Spacing Scale (8pt system)

Usar SOLO: 4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96.

3.4 Corner radius

Buttons: 12px

Cards: 16px

Images: 16px

Inputs: 12px

3.5 Shadows (muy sutil)

Card: 0 10px 30px rgba(16, 24, 40, 0.08)

Hover: 0 18px 40px rgba(16, 24, 40, 0.12)

4. UI Components (specs exactas)
   4.1 Header (sticky)

Height: 72px desktop, 64px mobile

Left: logo

Center/right: nav links (Leistungen, Fuhrpark, Galerie, Jobs, Kontakt)

Right: CTA button “Angebot anfordern”

Sticky with subtle border bottom --border and background blur (optional).

Mobile:

Hamburger menu

CTA “Anrufen” como botón secundario visible.

4.2 Buttons

Primary

Background: --brand

Text: white

Hover: --brand-dark

Padding: 14px 18px

Radius: 12px

Font: Inter 600, 16px

Secondary

Background: transparent

Border: 1px solid --border

Text: --text

Hover: background --bg-soft

Icon button

44x44 min for touch targets

4.3 Link style

Color: --brand

Hover underline

No “neon blue” default links.

4.4 Cards (Services / Fleet / Jobs)

Background: white

Border: 1px solid --border

Radius: 16px

Padding: 24px desktop, 16px mobile

Header: H4

Body: Small/Body, muted

Hover:

translateY(-2px)

shadow hover

4.5 Forms

Inputs:

Height 48px

Border: 1px solid --border

Focus ring: 2px --focus

Error state: border --error + helper text

Form fields:

Name, Email, Phone, Message

Required: Name + Phone OR Email + Message

4.6 Gallery (lightbox)

Grid:

mobile: 1 col

tablet: 2 col

desktop: 3 col

Lightbox con teclado (ESC) y swipe mobile.

4.7 Footer

Fondo oscuro --bg

Texto: #D0D5DD

Links: #F2F4F7 hover --brand

Columnas: Kontakt, Navigation, Rechtliches, Social

5. Content & Copy Rules (para no sonar “AI”)
   5.1 Estilo de copy (alemán)

Frases cortas, directas, “austriacas” (no marketing exagerado).

Evitar: “innovativ”, “führend”, “state-of-the-art” si no hay pruebas.

Preferir: “verlässlich”, “termintreu”, “praxisnah”, “aus einer Hand”.

5.2 Estructura de textos

Cada sección: 1 headline + 1 subheadline + bullets.

Bullets con verbos: “Transportieren”, “Liefern”, “Aushub”, “Kranarbeiten”.

6. Site Map (páginas obligatorias)

/ Home

/leistungen (Servicios)

/fuhrpark (Fleet / Maschinenpark)

/galerie (Fotos)

/jobs (Stellenangebote)

/kontakt

/impressum

/datenschutz

7. Page Blueprints (secciones exactas)
   7.1 Home

Hero (imagen real full-width, overlay leve)

H1: “Transport & Erdbau aus Kapfenberg”

Sub: “Baustellen- und Tieflader-Transporte, Kran- und Baggerarbeiten.”

CTA1: Angebot anfordern

CTA2: Jetzt anrufen

Trust strip (3–4 badges)

“Termintreu”

“Regional in der Obersteiermark”

“Moderner Fuhrpark”

“Schotter & Humus Lieferungen”

Services grid (6–8 cards)

Fuhrpark preview

3 cards + link “Fuhrpark ansehen”

Gallery preview (6 fotos)

CTA band (oscuro)

“Schnell ein Angebot?”

Botón + mini form

Contact summary (tel/email/map mini)

7.2 Leistungen

Hero pequeño + intro

Secciones por servicio (cards o accordion)

CTA al final

Servicios (texto base):

Baustellen-Transporte

Tieflader-Transporte

Kran- & Ladekranarbeiten

Baggerarbeiten

Kelleraushub

Außenanlagen

Schotter- & Humuslieferung

7.3 Fuhrpark

Intro + “Zahlen”

Lista por categorías:

LKW (Kipper, Tieflader, Rampenwagen)

Bagger (Mini/Mobil/Ketten)

Zubehör (Walze, Dumper, Rüttelplatte, Stamper, Anhänger)

Cada item en card con: nombre, capacidad, 1–2 bullets.

Si no hay foto por item, usar icono consistente + 1 foto general por categoría.

7.4 Galerie

Grid + filtros: Transport / Erdbau / Kran / Maschinen

Lightbox

7.5 Jobs

Intro humano + “Jetzt bewerben”

Cards por puesto:

LKW-Fahrer/in mit Ladekran

Bagger-Fahrer/in (si aplica)

Cada card: requisitos + beneficios + CTA “Anrufen” y “E-Mail senden”

Mini form de postulación (nombre, tel, puesto, mensaje)

7.6 Kontakt

Datos grandes:

Tel (click-to-call)

Email

Dirección

Mapa

Formulario “Anfrage”

Horarios (si existen)

8. Interactions (microdetalles)

Hover states en cards y botones (sin animaciones exageradas).

Scroll reveal suave (opcional), duración 220–280ms.

Navbar: highlight de página actual.

Sticky mobile “Call bar” (opcional):

botón llamar + botón oferta

9. Accesibilidad (obligatorio)

Contraste AA (texto gris con buen contraste)

Focus visible en links/inputs/botones

Botones min 44px alto

Imágenes con alt real (no genérico)

Navegación por teclado en menú y lightbox

10. SEO & Performance checklist

Titles únicos por página (DE)

Meta description por página

OpenGraph + Twitter cards

Schema LocalBusiness (nombre, dirección, teléfono)

Imágenes optimizadas (WebP/AVIF) + lazy loading

LCP optimizado: hero con preload si aplica

Sitemap.xml + robots.txt

11. Tech Spec (para Claude, sin improvisar)

Framework: (elige uno)

Next.js (App Router) + Tailwind + TypeScript

o Astro + Tailwind (si todo es estático)

Estructura:

components/ (Header, Footer, Button, Card, Section, GalleryLightbox, ContactForm)

content/ (JSON o TS file para servicios, flota, jobs, fotos)

Contenido debe venir de arrays/objects, no hardcode repetido.

Estilos: Tailwind con tailwind.config extendiendo colores y fonts con variables arriba.

12. Assets (requisitos)

Usar fotos reales de Schratter (ya las tienen).

Si faltan fotos para Fuhrpark: usar 1 foto general por categoría.

Iconos: Lucide/Feather (estilo consistente, stroke 2).

13. “No AI vibe” Rules (importantísimo)

No usar secciones genéricas tipo “We are creative agency”.

No poner frases vacías (“best solutions”, “unmatched quality”).

Mantener copy corto y específico al rubro.

Evitar demasiadas animaciones.

Layout asimétrico suave (no todo centrado).

Usar fotos reales y recortes coherentes, no stock obvio.
