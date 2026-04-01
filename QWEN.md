# rblez.com - Contexto del Proyecto

## Resumen del Proyecto

**rblez.com** es un blog personal y portafolio desarrollado por Ray (rblez) - Vibecoder. Es un sitio web estático moderno construido con Next.js 16 y React 19, que utiliza MDX para la gestión de contenido de blog.

### Propósito
- Blog personal con artículos sobre tecnología y desarrollo
- Portafolio de proyectos
- Sistema de contenido basado en MDX con Velite
- Comunidad y newsletter

## Stack Tecnológico

### Core
| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| Next.js | 16.2.1 | Framework React con App Router |
| React | 19.2.4 | Librería UI |
| TypeScript | 6.x | Type safety |
| Tailwind CSS | 4.x | Estilos utility-first |

### Contenido & MDX
| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| Velite | 0.3.1 | Colecciones de contenido (MDX) |
| @mdx-js/react | 3.1.1 | Renderizado MDX |
| @next/mdx | 16.2.1 | Integración MDX con Next.js |

### Plugins Rehype (MDX)
- `rehype-slug` - Agrega IDs a encabezados
- `rehype-pretty-code` - Syntax highlighting (tema: github-dark)
- `rehype-autolink-headings` - Enlaces automáticos en encabezados

### Utilidades
- `clsx` + `tailwind-merge` - Gestión de clases CSS (función `cn`)
- `@icons-pack/react-simple-icons` - Iconos de marcas
- `remixicon` - Iconos generales
- `motion` - Animaciones
- `three` - Gráficos 3D
- `lucide-react` - Iconos
- `@paper-design/shaders-react` - Efectos de shader

### Herramientas de Desarrollo
- ESLint 10 + eslint-config-next
- Prettier
- pnpm (package manager)

## Estructura del Proyecto

```
rblez.com/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── blog/
│   │   │   ├── page.tsx          # Listado de blog posts
│   │   │   └── [slug]/           # Posts individuales (ruta dinámica)
│   │   │       └── page.tsx
│   │   ├── stack/
│   │   │   └── page.tsx          # Tech stack showcase
│   │   ├── projects/
│   │   │   └── page.tsx          # Portafolio de proyectos
│   │   ├── branding/
│   │   │   └── page.tsx          # Identidad visual y marca
│   │   ├── community/
│   │   │   └── page.tsx          # Página de comunidad
│   │   ├── rblezclub/
│   │   │   └── page.tsx          # Club exclusivo
│   │   ├── newsletter/
│   │   │   └── page.tsx          # Suscripción al newsletter
│   │   ├── discord/
│   │   │   └── page.tsx          # Servidor de Discord
│   │   ├── github/
│   │   │   └── page.tsx          # Redirect a GitHub
│   │   ├── legal/
│   │   │   ├── terms/
│   │   │   │   └── page.tsx      # Términos de servicio
│   │   │   ├── privacy/
│   │   │   │   └── page.tsx      # Política de privacidad
│   │   │   ├── disclaimer/
│   │   │   │   └── page.tsx      # Disclaimer
│   │   │   └── cookies/
│   │   │       └── page.tsx      # Política de cookies
│   │   ├── demo-footer/
│   │   ├── demo-shader/
│   │   │   └── page.tsx          # Demo de shader con dithering
│   │   ├── layout.tsx            # Root layout con metadata
│   │   ├── page.tsx              # Página raíz (home)
│   │   ├── not-found.tsx         # Página 404 personalizada
│   │   └── globals.css           # Estilos globales (Tailwind v4)
│   ├── components/
│   │   ├── ui/                   # Componentes UI reutilizables
│   │   │   ├── hero-dithering-card.tsx
│   │   │   ├── flickering-footer.tsx
│   │   │   ├── shader-animation.tsx
│   │   │   └── stacked-logos.tsx
│   │   ├── email-button.tsx      # Botón de contacto por email
│   │   ├── footer.tsx            # Footer del sitio
│   │   ├── header.tsx            # Header/navegación
│   │   ├── mdx-components.tsx    # Componentes personalizados para MDX
│   │   ├── mdx-content.tsx       # Wrapper para contenido MDX
│   │   └── stacked-logos.tsx     # Componente de logos apilados
│   └── lib/
│       └── utils.ts              # Utilidad `cn()` para clases
├── content/
│   └── blog/                     # Posts del blog en MDX
├── public/
│   ├── fonts/                    # Fuentes GT Cinetype
│   └── static/                   # Assets generados por Velite
├── .velite/                      # Output generado por Velite (auto)
├── .next/                        # Output de Next.js (auto)
├── package.json
├── tsconfig.json
├── next.config.ts
├── velite.config.ts
├── eslint.config.mjs
└── components.json               # Configuración shadcn/ui
```

## Rutas del Sitio

### Principales
| Ruta | Descripción |
|------|-------------|
| `/` | Página raíz con perfil y enlaces principales |
| `/blog` | Listado de posts del blog |
| `/blog/[slug]` | Posts individuales |
| `/stack` | Tech stack showcase con filtrado |
| `/projects` | Portafolio de proyectos |
| `/branding` | Identidad visual y assets de marca |
| `/community` | Página de comunidad con enlaces |

### Comunidad
| Ruta | Descripción |
|------|-------------|
| `/rblezclub` | Club exclusivo para miembros |
| `/newsletter` | Suscripción al newsletter |
| `/discord` | Servidor de Discord |
| `/github` | Redirect a GitHub |

### Legal
| Ruta | Descripción |
|------|-------------|
| `/legal/terms` | Términos de servicio |
| `/legal/privacy` | Política de privacidad |
| `/legal/disclaimer` | Disclaimer |
| `/legal/cookies` | Política de cookies |

### Demo
| Ruta | Descripción |
|------|-------------|
| `/demo-footer` | Demo de footer |
| `/demo-shader` | Demo de shader con dithering |

### 404
| Ruta | Descripción |
|------|-------------|
| `404` | Página personalizada de no encontrado |

## Comandos de Desarrollo

```bash
# Instalar dependencias
pnpm install

# Servidor de desarrollo (con hot reload)
pnpm dev

# Build de producción (primero genera contenido con Velite)
pnpm build

# Iniciar servidor de producción
pnpm start

# Ejecutar linter
pnpm lint
```

### Flujo de Build
1. `velite` procesa los archivos `.mdx` de `content/blog/`
2. Genera tipos TypeScript en `.velite/`
3. `next build` compila la aplicación

## Convenciones de Desarrollo

### TypeScript
- `strict: true` - Modo estricto habilitado
- `moduleResolution: "bundler"` - Resolución de módulos moderna
- Paths configurados:
  - `@/*` → `./src/*`
  - `#site/content` → `./.velite`

### Estructura de Posts (MDX)

Cada post en `content/blog/` debe incluir frontmatter:

```mdx
---
title: "Título del Post"
description: "Descripción corta (máx 999 caracteres)"
date: "2026-01-01"
author: "Nombre del autor"  # Opcional
tags: ["tag1", "tag2"]      # Opcional
published: true             # Por defecto: true
body: s.mdx()               # Contenido MDX (generado automáticamente)
---
```

### Sistema de Diseño

#### Colores
- **Esquema**: Blanco y negro únicamente (sin otros colores)
- **Modo claro**: Fondo blanco (#ffffff), texto negro
- **Modo oscuro**: Fondo negro (#000000), texto blanco
- Detección automática vía `prefers-color-scheme`

#### Tipografía
- **Primaria**: GT Cinetype (Regular, Bold, Light, Italic)
- **Monoespaciada**: GT Cinetype Mono

#### Efectos
- Soporte para modo oscuro automático
- Enlaces en encabezados con anclaje
- Syntax highlighting con tema github-dark
- Shader de dithering para efectos visuales

### Componentes MDX Personalizados

El proyecto incluye componentes personalizados para MDX en `mdx-components.tsx`:

| Componente | Descripción |
|------------|-------------|
| `Button` | Botones con variantes (primary, secondary, outline) y tamaños (sm, md, lg) |
| `Callout` | Cajas de información (info, warning, error, success, tip) |
| `CodeBlock` | Bloques de código con título y nombre de archivo opcionales |
| `Step` | Pasos numerados con iconos |
| `Card` | Tarjetas con título y enlace opcional |

### Componentes UI

| Componente | Descripción |
|------------|-------------|
| `HeroDitheringCard` | Hero con efecto de dithering shader |
| `FlickeringFooter` | Footer con efecto flickering |
| `ShaderAnimation` | Componente para animaciones shader |
| `StackedLogos` | Logos apilados |

### Componentes shadcn/ui

El proyecto usa configuración `new-york` de shadcn/ui:
- RSC habilitado
- TypeScript habilitado
- Base color: `neutral`
- CSS variables: deshabilitadas
- Icon library: `lucide`

### ESLint

Configuración basada en `eslint-config-next`:
- Incluye reglas de Core Web Vitals
- Soporte TypeScript
- Ignora: `.next/`, `out/`, `build/`, `next-env.d.ts`

## Configuración de Imágenes

El `next.config.ts` permite imágenes remotas de:
- `pbs.twimg.com` - Imágenes de Twitter/X
- `abs.twimg.com` - Assets de Twitter
- `m.media-amazon.com` - Imágenes de Amazon
- `images-na.ssl-images-amazon.com` - Amazon imágenes

Cache mínimo: 2,678,400 segundos (~31 días)

## Enlaces Sociales

- **X/Twitter**: [@rblezX](https://x.com/rblezX)
- **GitHub**: [rblez](https://github.com/rblez)
- **Dev.to**: [rblez](https://dev.to/rblez)
- **Telegram**: [rblez](https://t.me/rblez)
- **Instagram**: [@rblez.build](https://instagram.com/rblez.build)
- **Bluesky**: [@rblez.bsky.social](https://bsky.app/profile/rblez.bsky.social)
- **Threads**: [@rblez.build](https://threads.net/@rblez.build)
- **Reddit**: [u/rblez](https://reddit.com/user/rblez)
- **Email**: rblez@proton.me

## Deployment

- **Plataforma**: Vercel
- **CI/CD**: Automatizado con Vercel
- **Build command**: `velite && next build`

## Notas Importantes

1. **Contenido generado**: La carpeta `.velite/` se genera automáticamente y contiene los tipos TypeScript para el contenido MDX
2. **Path alias**: Usar `#site/content` para importar contenido desde Velite
3. **Fuentes**: GT Cinetype se carga desde `/public/fonts/` (archivos .otf locales)
4. **MDX**: Los componentes personalizados se definen en `mdx-components.tsx`
5. **Tailwind v4**: Usa la nueva sintaxis de importación `@import "tailwindcss"`
6. **PostCSS**: Configurado con `@tailwindcss/postcss` plugin
7. **Header**: Navegación responsive con menú móvil
8. **Footer**: Enlaces a todas las secciones del sitio
9. **Esquema de colores**: Solo blanco y negro (sin otros colores)

## Archivos de Configuración Clave

| Archivo | Propósito |
|---------|-----------|
| `velite.config.ts` | Configuración de colecciones MDX y plugins rehype |
| `next.config.ts` | Configuración de Next.js con soporte MDX |
| `tsconfig.json` | Configuración TypeScript con paths |
| `components.json` | Configuración shadcn/ui |
| `eslint.config.mjs` | Configuración ESLint |
| `postcss.config.mjs` | Configuración PostCSS con Tailwind v4 |
| `src/app/globals.css` | Estilos globales con fuentes GT Cinetype |
