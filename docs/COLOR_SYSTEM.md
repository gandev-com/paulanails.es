# 🎨 Sistema de Colores Global - Paula Nails

## Guía Completa de Variables CSS

### 📋 Tabla de Contenidos

1. [Colores Base](#colores-base)
2. [Componentes](#componentes)
3. [Colores de Acento](#colores-de-acento)
4. [Colores Pink/Rosa](#colores-pinkrosa)
5. [Colores de Texto](#colores-de-texto)
6. [Iconos](#iconos)
7. [Bordes y Separadores](#bordes-y-separadores)
8. [Sombras](#sombras)
9. [Estados](#estados)
10. [Gradientes](#gradientes)
11. [Efectos Especiales](#efectos-especiales)
12. [Ejemplos de Uso](#ejemplos-de-uso)

---

## Colores Base

Variables para fondos principales de la aplicación.

```css
--background: #ecd4e2; /* Fondo principal rosa claro */
--background-secondary: #f5e4ed; /* Fondo alternativo más claro */
--background-dark: #d9bfd0; /* Fondo oscuro para contraste */
```

**Uso:**

```astro
<div style="background-color: var(--background);">
  Contenido principal
</div>
```

---

## Componentes

Variables específicas para componentes UI.

```css
--component-bg: #edb5c1f2; /* Fondo de componentes (semi-transparente) */
--component-bg-hover: #e5a3b0; /* Fondo de componentes en hover */
```

**Uso:**

```astro
<div
  style="background-color: var(--component-bg);"
  onmouseover="this.style.backgroundColor='var(--component-bg-hover)'"
>
  Componente interactivo
</div>
```

---

## Colores de Acento

Colores primarios para elementos destacados.

```css
--primary: #fa97ac; /* Color primario (rosa medio) */
--primary-light: #ffc4d1; /* Versión clara del primario */
--primary-dark: #e8758c; /* Versión oscura del primario */
```

**Uso:**

- Links importantes
- Títulos destacados
- Call-to-actions secundarios

```astro
<h2 style="color: var(--primary);">Título Destacado</h2>
```

---

## Colores Pink/Rosa

Sistema de colores principales para botones, cards y elementos interactivos.

```css
--pink-light: #ffd4e5; /* Rosa claro - Hover states, backgrounds */
--pink: #ffb3d1; /* Rosa medio - Botones principales */
--pink-dark: #ff91b8; /* Rosa oscuro - Hover de botones */
--pink-darker: #e8769a; /* Rosa muy oscuro - Estados activos */
```

**Jerarquía Visual:**

- `--pink-light` → Fondos suaves, estados iniciales
- `--pink` → Botones CTA, elementos importantes
- `--pink-dark` → Hover de botones principales
- `--pink-darker` → Estados pressed/active

**Ejemplo de Botón:**

```astro
<button
  style="background-color: var(--pink);"
  onmouseover="this.style.backgroundColor='var(--pink-dark)'"
  onmouseout="this.style.backgroundColor='var(--pink)'"
>
  Agendar Cita
</button>
```

---

## Colores de Texto

Variables para todo el contenido textual.

```css
--text-primary: #000000; /* Texto principal (negro) */
--text-secondary: #2d2d2d; /* Texto secundario (gris oscuro) */
--text-muted: #4a4a4a; /* Texto desenfatizado (gris medio) */
--text-on-pink: #ffffff; /* Texto sobre fondos rosa (blanco) */
```

**Guía de Uso:**

- **`--text-primary`** → Títulos H1, H2, párrafos importantes
- **`--text-secondary`** → Subtítulos, H3, H4
- **`--text-muted`** → Descripciones, labels, texto auxiliar
- **`--text-on-pink`** → Cualquier texto sobre fondos `--pink-*`

```astro
<h1 style="color: var(--text-primary);">Título Principal</h1>
<p style="color: var(--text-muted);">Descripción secundaria</p>
```

---

## Iconos

Variables para iconos y sus contenedores.

```css
--icon-color: #000000; /* Color de iconos principal */
--icon-color-light: #4a4a4a; /* Color de iconos más suave */
--icon-bg: #edb5c1f2; /* Fondo de contenedores de iconos */
--icon-bg-hover: #e5a3b0; /* Fondo hover de iconos */
```

**Ejemplo Social Icons:**

```astro
<a
  style="color: var(--icon-color); background-color: var(--pink-light);"
  onmouseover="this.style.backgroundColor='var(--pink)'"
>
  <svg>...</svg>
</a>
```

---

## Bordes y Separadores

Variables para líneas divisorias y bordes.

```css
--border-color: rgba(0, 0, 0, 0.1); /* Borde estándar */
--border-light: rgba(255, 255, 255, 0.1); /* Borde claro */
--separator: rgba(0, 0, 0, 0.2); /* Separadores horizontales */
```

**Uso en Separadores:**

```astro
<div style="
  height: 1px;
  background: linear-gradient(to right, transparent, var(--separator), transparent);
"></div>
```

---

## Sombras

Sistema de elevación con 4 niveles.

```css
--shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.1); /* Sombra pequeña */
--shadow-md: 0 4px 8px rgba(0, 0, 0, 0.12); /* Sombra media */
--shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.15); /* Sombra grande */
--shadow-xl: 0 12px 24px rgba(0, 0, 0, 0.18); /* Sombra extra grande */
```

**Guía de Elevación:**

- `sm` → Cards en reposo, elementos planos
- `md` → Cards hover, modales pequeños
- `lg` → Dropdowns, tooltips, modales
- `xl` → Elementos flotantes, navegación fija

```tsx
<div style={{ boxShadow: "var(--shadow-md)" }}>Card con elevación media</div>
```

---

## Estados

Variables para overlays y estados interactivos.

```css
--hover-overlay: rgba(255, 255, 255, 0.1); /* Overlay en hover */
--active-overlay: rgba(0, 0, 0, 0.05); /* Overlay en active */
```

**Uso en Cards:**

```tsx
<div
  style={{ background: "var(--hover-overlay)" }}
  className="transition-opacity hover:opacity-100"
>
  Overlay hover
</div>
```

---

## Gradientes

Gradientes predefinidos listos para usar.

```css
--gradient-pink: linear-gradient(135deg, var(--pink-light), var(--pink));
--gradient-pink-dark: linear-gradient(135deg, var(--pink), var(--pink-dark));
--gradient-primary: linear-gradient(
  135deg,
  var(--primary-light),
  var(--primary)
);
```

**Uso en Cards de Servicios:**

```tsx
<div style={{ background: "var(--gradient-pink)" }}>
  Contenido con gradiente
</div>
```

---

## Efectos Especiales

### Shine Gradient (Texto Animado)

```css
--shine-gradient: linear-gradient(
  90deg,
  #ff1744 0%,
  #ff6b9d 25%,
  #ffffff 50%,
  #ff6b9d 75%,
  #ff1744 100%
);
```

**Uso:**

```css
.shiny-text {
  background: var(--shine-gradient);
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: shine 2s linear infinite;
}
```

### Overlays

```css
--overlay-dark: rgba(0, 0, 0, 0.5); /* Overlay oscuro para hero */
--overlay-light: rgba(255, 255, 255, 0.5); /* Overlay claro */
```

---

## Variables Legacy (Compatibilidad)

Para mantener compatibilidad con código antiguo:

```css
--sec: var(--primary);
--white: var(--text-primary);
--white-icon: var(--icon-color);
--white-icon-tr: var(--border-light);
--bg-icon: var(--icon-bg);
--bento-pink-light: var(--pink-light);
--bento-pink: var(--pink);
--bento-pink-dark: var(--pink-dark);
```

⚠️ **Nota:** Se recomienda usar las nuevas variables en código nuevo.

---

## 📚 Ejemplos de Uso

### Botón Principal

```astro
<button
  style="
    color: var(--text-on-pink);
    background-color: var(--pink);
    box-shadow: var(--shadow-md);
  "
  class="px-6 py-3 rounded-full font-semibold transition-all"
  onmouseover="
    this.style.backgroundColor='var(--pink-dark)';
    this.style.boxShadow='var(--shadow-lg)';
  "
  onmouseout="
    this.style.backgroundColor='var(--pink)';
    this.style.boxShadow='var(--shadow-md)';
  "
>
  Llamar a la Acción
</button>
```

### Card de Servicio

```tsx
<div
  style={{
    backgroundColor: "var(--background)",
    boxShadow: "var(--shadow-md)",
  }}
  className="rounded-3xl p-6 hover:scale-105 transition-all"
>
  <div style={{ background: "var(--gradient-pink)" }}>
    <h3 style={{ color: "var(--text-on-pink)" }}>Servicio</h3>
    <p style={{ color: "var(--text-on-pink)", opacity: 0.9 }}>Descripción</p>
  </div>
</div>
```

### Link con Icono

```astro
<a
  href="#"
  style="
    color: var(--icon-color-light);
    background-color: var(--pink-light);
  "
  class="p-3 rounded-xl transition-all"
  onmouseover="
    this.style.backgroundColor='var(--pink)';
    this.style.color='var(--text-on-pink)';
  "
>
  <svg>...</svg>
</a>
```

### Separador

```astro
<div class="flex justify-center my-12">
  <div
    class="w-1/2 h-[1px]"
    style="
      background: linear-gradient(
        to right,
        transparent,
        var(--separator),
        transparent
      );
    "
  ></div>
</div>
```

---

## 🎯 Buenas Prácticas

### ✅ Hacer

- Usar siempre variables CSS en lugar de colores hardcodeados
- Usar `--shadow-*` para elevación consistente
- Usar `--gradient-*` para gradientes predefinidos
- Usar transiciones CSS para cambios de color suaves

### ❌ No Hacer

- No usar colores hex directamente (#ff0000)
- No usar rgba() directamente sin variable
- No crear gradientes inline sin reutilización
- No mezclar variables legacy con nuevas en el mismo componente

---

## 🔄 Migración de Código Legacy

### Antes (❌)

```astro
<div style="background-color: var(--bento-pink-light);">
  <p class="text-[var(--white)]">Texto</p>
</div>
```

### Después (✅)

```astro
<div style="background-color: var(--pink-light);">
  <p style="color: var(--text-on-pink);">Texto</p>
</div>
```

---

## 📱 Responsive Design

Todas las variables se mantienen consistentes en todos los breakpoints. Los componentes deben usar las mismas variables en mobile y desktop.

---

## 🎨 Paleta Visual de Referencia

```
BACKGROUNDS
██ --background           #ecd4e2 (Rosa muy claro)
██ --background-secondary #f5e4ed (Rosa ultra claro)
██ --background-dark      #d9bfd0 (Rosa medio)

PINK SYSTEM
██ --pink-light    #ffd4e5 (Rosa pastel)
██ --pink          #ffb3d1 (Rosa vibrante)
██ --pink-dark     #ff91b8 (Rosa intenso)
██ --pink-darker   #e8769a (Rosa oscuro)

TEXT COLORS
██ --text-primary   #000000 (Negro)
██ --text-secondary #2d2d2d (Gris oscuro)
██ --text-muted     #4a4a4a (Gris medio)
██ --text-on-pink   #ffffff (Blanco)
```

---

**Última actualización:** Enero 2026  
**Versión:** 2.0.0  
**Autor:** Sistema de Diseño Paula Nails
