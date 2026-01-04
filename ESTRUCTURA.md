# Estructura del Proyecto Paula Nails

## 📁 Estructura de Carpetas

```
src/
├── components/
│   ├── sections/          # Secciones de la página
│   │   ├── HeroSection.astro              [✓ EN USO]
│   │   ├── TrustSection.astro             [✓ EN USO]
│   │   ├── ServicesSection.astro          [✓ EN USO]
│   │   ├── HowWeWorkSection.astro         [✓ EN USO]
│   │   ├── BrandsSection.astro            [✓ EN USO]
│   │   ├── AboutMeSection.astro           [✓ EN USO]
│   │   ├── MapSection.astro               [✓ EN USO]
│   │   ├── TestimonialsSection.astro      [✓ EN USO]
│   │   └── FinalCTASection.astro          [✓ EN USO]
│   │
│   ├── ui/                # Componentes UI reutilizables
│   │   ├── LoginModal.astro               [✓ EN USO]
│   │   └── Separator.astro                [✓ EN USO]
│   │
│   ├── react/             # Componentes React
│   │   ├── LetterGlitch.tsx               [✓ EN USO - Footer]
│   │   ├── LikeButton.tsx                 [Ejemplo]
│   │   └── SkillsList.tsx                 [Referencia]
│   │
│   ├── footer.astro       [✓ EN USO]
│   ├── home.astro         [✓ EN USO - Orquestador principal]
│   └── nav.astro          [✓ EN USO]
│
├── layouts/
│   └── Layout.astro       [✓ EN USO - Layout base]
│
├── pages/
│   ├── index.astro        [✓ EN USO - Página principal]
│   └── bento.astro        [Ejemplo/Demo]
│
└── styles/
    └── global.css         [✓ EN USO - Estilos globales]
```

---

## 🏠 Flujo de la Home (en orden)

```
index.astro
  └── Layout.astro
      ├── Nav.astro
      ├── Home.astro
      │   ├── 1. HeroSection           (Slider + Narrativa)
      │   ├── 2. TrustSection          (+8 años, +100 clientas)
      │   ├── 3. ServicesSection       (6 servicios bento-card)
      │   ├── 4. HowWeWorkSection      (4 pasos del proceso)
      │   ├── 5. BrandsSection         (18 marcas - logo wall)
      │   ├── 6. AboutMeSection        (Historia personal)
      │   ├── 7. MapSection            (Google Maps)
      │   ├── 8. TestimonialsSection   (Reseñas Google)
      │   ├── 9. FinalCTASection       (CTA reserva)
      │   └── 10. LoginModal           (Modal login/reserva)
      ├── Separator
      └── Footer.astro
```

---

## 📝 Descripción de Secciones

### 1. **HeroSection.astro**

- **Función**: Hero principal con slider de imágenes
- **Características**:
  - Slider automático (4 imágenes, 5s)
  - Texto rotativo (4 mensajes, 3.5s)
  - Parallax sutil en scroll
  - Sakura petals decorativos
  - Social icons (Instagram, WhatsApp)
  - CTA "Reservar / Iniciar sesión" → abre LoginModal

### 2. **TrustSection.astro**

- **Función**: Por qué confiar en Paula Nails
- **Características**:
  - 4 trust cards con iconos
  - "+8 años de experiencia"
  - "+100 clientas satisfechas"
  - Grid responsive (auto-fit)

### 3. **ServicesSection.astro**

- **Función**: Servicios con diseño bento-card
- **Características**:
  - 6 servicios expandibles
  - Gradiente con clip-path minimalista
  - Iconos SVG en negro
  - Texto en negro sobre gradiente rosa
  - Expandible con detalles, precios y CTA

### 4. **HowWeWorkSection.astro**

- **Función**: Proceso de trabajo en 4 pasos
- **Características**:
  - 4 steps numerados (01-04)
  - Consulta → Tratamiento → Seguimiento → Resultados
  - Grid responsive

### 5. **BrandsSection.astro**

- **Función**: Marcas profesionales con logo wall
- **Características**:
  - 18 marcas profesionales
  - Scroll infinito horizontal
  - Logos en escala de grises → color en hover
  - Pausa al hover
  - Gradientes laterales para fade effect

### 6. **AboutMeSection.astro**

- **Función**: Historia personal de Paula
- **Características**:
  - Grid (imagen + texto)
  - Texto emocional y cercano
  - CTA "Conoce mi historia"

### 7. **MapSection.astro**

- **Función**: Ubicación con Google Maps
- **Características**:
  - Google Maps iframe
  - 3 info cards (dirección, horario, teléfono)
  - Botón "Cómo llegar"

### 8. **TestimonialsSection.astro**

- **Función**: Reseñas reales de Google
- **Características**:
  - 3 testimonios reales
  - Mariana ANCA, Victoria Estables, Raquel
  - 5 estrellas cada uno
  - Grid responsive

### 9. **FinalCTASection.astro**

- **Función**: CTA final para reservar
- **Características**:
  - Card grande con gradiente
  - Mensaje emotivo
  - CTA "Agendar mi cita ahora"

### 10. **LoginModal.astro**

- **Función**: Modal de login y recuperación de contraseña
- **Características**:
  - 2 vistas: LOGIN / FORGOT PASSWORD
  - Validación de formularios
  - Cierre: X, overlay, ESC
  - Abre desde: botones con `data-open-login`

---

## 🎨 Sistema de Diseño

### Variables CSS (en Layout.astro)

```css
/* Colores */
--background: #ecd4e2;
--pink-light: #ffd4e5;
--pink: #ffb3d1;
--pink-dark: #ff91b8;
--pink-darker: #e8769a;
--bento-pink: #ffb3d1;
--bento-pink-light: #ffd4e5;

/* Texto */
--text-primary: #000000;
--text-secondary: #2d2d2d;
--text-muted: #4a4a4a;

/* Sombras */
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15);
```

### Tipografía

- **Script**: Edwardian Script ITC (títulos elegantes)
- **Body**: Lato (cuerpo de texto)
- **Sans**: Montserrat (headings, botones)

### Border Radius

- Cards: `24px` - `32px` (bento style)
- Botones: `20px` - `28px`
- Inputs: `16px`

---

## 🚀 Características Implementadas

✅ **Diseño Bento** en servicios con gradientes y clip-path
✅ **Scroll infinito** en logo wall de marcas
✅ **Modal funcional** con login y recuperación de contraseña
✅ **Reseñas reales** de Google Reviews
✅ **Google Maps** integrado con info cards
✅ **Slider automático** en hero con parallax
✅ **Sakura decorativo** (pétalos sutiles)
✅ **Responsive** completo en todas las secciones
✅ **Accesibilidad** (aria-labels, roles, keyboard navigation)
✅ **Animaciones** respetando prefers-reduced-motion

---

## 📦 Dependencias del Proyecto

```json
{
  "dependencies": {
    "astro": "^5.16.3",
    "react": "^18.x",
    "react-dom": "^18.x",
    "tailwindcss": "^3.x"
  }
}
```

---

## 🔧 Comandos

```bash
# Desarrollo
pnpm dev              # http://localhost:4321/

# Producción
pnpm build           # Build para producción
pnpm preview         # Preview del build
```

---

## 📱 Navegación Principal

```
Nav.astro
├── Inicio (#home)
├── Servicios (#servicios)
├── Sobre Mí (/sobre-mi)
├── Reservar → LoginModal
```

---

## 🎯 CTAs Principales

1. **Hero**: "Reservar / Iniciar sesión" → LoginModal
2. **Nav**: "Reservar" → LoginModal
3. **Servicios**: "Reservar" (cada servicio) → LoginModal
4. **Final CTA**: "Agendar mi cita ahora" → LoginModal

---

## ✨ Mejoras Futuras Sugeridas

- [ ] Integrar API real de reservas
- [ ] Añadir página "Sobre Mí" completa
- [ ] Crear página individual para cada servicio
- [ ] Implementar blog/noticias
- [ ] Añadir galería de trabajos
- [ ] Sistema de reviews integrado
- [ ] Optimizar imágenes con @astrojs/image
- [ ] Implementar PWA

---

**Última actualización**: 4 de enero de 2026
**Estado**: ✅ Producción ready
