# Estructura de Carpetas - Paula Nails

## 📁 Organización del Proyecto

```
src/
├── components/
│   ├── sections/          # Secciones grandes de la página
│   │   ├── HeroSection.astro        # Hero con parallax y slider
│   │   ├── LogosSection.astro       # Logos de marcas
│   │   ├── ServicesSection.astro    # Sección de servicios
│   │   └── TestimonialsSection.astro # Testimonios de clientes
│   │
│   ├── ui/                # Componentes UI reutilizables
│   │   └── Separator.astro          # Separador con gradiente (spacing: sm/md/lg)
│   │
│   ├── react/             # Componentes React
│   │   ├── SkillsList.tsx           # Lista de servicios (Manicura, Pedicura, etc.)
│   │   ├── LikeButton.tsx           # Botón de like
│   │   └── LetterGlitch.tsx         # Efecto glitch en letras
│   │
│   ├── contact.astro      # Formulario de contacto
│   ├── footer.astro       # Footer global
│   ├── home.astro         # Orquestador de secciones (simplificado)
│   ├── logoWall.astro     # Pared de logos
│   ├── nav.astro          # Navegación principal
│   └── testimonials.astro # Lógica de testimonios
│
├── layouts/
│   └── Layout.astro       # Layout base con estilos globales
│
├── pages/
│   ├── index.astro        # Página principal
│   └── bento.astro        # Página bento
│
├── styles/
│   └── global.css         # Variables CSS globales
│
├── firebase.ts            # Configuración Firebase
└── env.d.ts              # Tipos TypeScript

public/
├── nails/                # Imágenes de la tienda
├── page_svg/             # SVGs de páginas
└── svg/                  # Iconos SVG
```

## 🎯 Principios de Organización

### 1. **Separación por Responsabilidad**
- **sections/** - Secciones completas con lógica específica de página
- **ui/** - Componentes pequeños y reutilizables en múltiples contextos
- **react/** - Componentes React para interactividad client-side

### 2. **Componentes Modulares**
Cada sección es independiente y puede ser:
- Movida a diferentes páginas
- Reordenada fácilmente
- Modificada sin afectar otras secciones

### 3. **Reutilización**
- `Separator.astro` acepta props para diferentes espaciados
- Las secciones importan sus propias dependencias
- Los estilos están encapsulados en cada componente

### 4. **Mantenibilidad**
- `home.astro` ahora es simple y limpio (40 líneas)
- Los estilos y scripts están en los componentes que los usan
- Fácil de entender qué hace cada archivo

## 🔧 Cómo Usar

### Agregar una nueva sección
1. Crear archivo en `src/components/sections/NuevaSeccion.astro`
2. Importar en `home.astro`:
```astro
import NuevaSeccion from "./sections/NuevaSeccion.astro";
```
3. Agregar entre separadores:
```astro
<Separator spacing="md" />
<NuevaSeccion />
```

### Crear un componente UI reutilizable
1. Crear en `src/components/ui/MiComponente.astro`
2. Definir props para personalización:
```astro
---
interface Props {
  variant?: "primary" | "secondary";
}
const { variant = "primary" } = Astro.props;
---
```

### Trabajar con componentes React
- Los componentes React están en `src/components/react/`
- Usar `client:load` para hidratación inmediata
- Usar `client:visible` para carga lazy

## 📝 Ventajas de esta Estructura

✅ **Código más limpio** - Archivos pequeños y enfocados  
✅ **Fácil de navegar** - Estructura lógica y predecible  
✅ **Mejor colaboración** - Cada desarrollador puede trabajar en secciones separadas  
✅ **Reutilización** - Componentes UI disponibles en toda la app  
✅ **Escalable** - Fácil agregar nuevas páginas y secciones  
✅ **Mantenible** - Cambios localizados no afectan el resto

## 🗂️ Archivos Eliminados

- ❌ `projects.astro` - Estaba completamente comentado
- ❌ `src/React/` - Movido a `src/components/react/` para mejor organización

## 🔄 Migraciones Realizadas

1. **home.astro**: De 350 líneas → 40 líneas
2. **Secciones extraídas**: Hero, Logos, Services, Testimonials
3. **Componente UI creado**: Separator con props configurables
4. **React movido**: De `src/React/` → `src/components/react/`
5. **Separadores unificados**: Usando componente en lugar de código repetido
