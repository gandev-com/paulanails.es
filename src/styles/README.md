# Estilos del Proyecto Paula Nails

Esta carpeta contiene todos los estilos CSS organizados por tipo de componente.

## Estructura

```
src/styles/
├── global.css              # Estilos globales y variables CSS
├── sections/               # Estilos de secciones de página
│   ├── HeroSection.css
│   ├── LogosSection.css
│   ├── ServicesSection.css
│   └── TestimonialsSection.css
├── ui/                     # Estilos de componentes UI reutilizables
│   └── SakuraDivider.css
└── pages/                  # Estilos específicos de páginas (futuro)
```

## Convenciones

### Importación en Componentes Astro

Cada componente Astro importa su CSS correspondiente:

```astro
---
import "../../styles/sections/HeroSection.css";
---
```

### Nomenclatura de Clases

- **BEM modificado**: `.component-element--modifier`
- **Prefijos descriptivos**: `.hero-`, `.logos-`, `.services-`, `.testimonials-`
- **Estados**: `.active`, `.expanded`, `.visible`

### Variables CSS

Todas las variables CSS globales están definidas en `global.css` dentro del `:root`:

- **Colores**: `--pink`, `--pink-light`, `--pink-dark`, `--text-primary`, etc.
- **Espaciado**: Uso de `rem` para mantener consistencia
- **Sombras**: `--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--shadow-xl`
- **Gradientes**: `--gradient-pink`, `--gradient-pink-dark`, `--gradient-primary`

### Media Queries

Breakpoints estándar:

- **Mobile**: < 640px
- **Tablet**: 768px
- **Desktop**: 1024px+

### Animaciones

- Todas las animaciones respetan `prefers-reduced-motion: reduce`
- Uso de `@keyframes` descriptivos: `fadeInUp`, `sakuraDrift`, `petalBloom`, `shine`
- Transiciones suaves con `cubic-bezier(0.4, 0, 0.2, 1)`

## Notas Importantes

### Hero Section

- Contiene estilos para parallax, slider, overlay y pétalos sakura
- Animaciones condicionales según `prefers-reduced-motion`
- Variables locales: `--hero-overlay`, `--hero-fade`

### Sakura Elements

- **Opacidad ultra-baja**: 5-12% para mantener sutileza premium
- **Blur filters**: 0.5-1px para efecto etéreo
- **Animaciones suaves**: 14-18s para movimientos naturales

### Performance

- CSS externo permite mejor caching del navegador
- Animaciones CSS nativas (60 FPS garantizado)
- Sin dependencias externas
- Estilos mínimos y específicos

## Mantenimiento

Al crear nuevos componentes:

1. Crear archivo CSS en la carpeta correspondiente (`sections/`, `ui/`, `pages/`)
2. Importar el CSS en el componente Astro
3. Usar variables CSS existentes para mantener consistencia
4. Agregar `prefers-reduced-motion` para animaciones
5. Documentar clases nuevas si es necesario
