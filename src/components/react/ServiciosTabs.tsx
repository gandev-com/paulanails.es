import { useState, useRef, useEffect, useCallback } from "react";

interface ServiceItem {
  nombre: string;
  desc: string;
  precio: number;
  nota?: string;
  recomendado?: boolean;
  info?: string[];
}

interface Servicio {
  id: string;
  nombre: string;
  tagline: string;
  descripcion: string;
  icono: string;
  items: ServiceItem[];
  notaDecoraciones?: string;
}

const servicios: Servicio[] = [
  {
    id: "manicura",
    nombre: "Manicura",
    tagline: "El arte en la punta de tus dedos",
    descripcion:
      "Técnicas profesionales y productos de alta gama para unas manos impecables. Desde lo clásico hasta el nail art más atrevido.",
    icono: "/svg/manicura.svg",
    notaDecoraciones: "Las decoraciones, nail art y gemas se presupuestan aparte según el diseño elegido.",
    items: [
      {
        nombre: "Manicura Clásica",
        desc: "Limado, cutículas y esmaltado tradicional con acabado perfecto",
        precio: 12,
        info: ["Uña natural", "Uña corta", "Mantenimiento básico"],
      },
      {
        nombre: "Semipermanente",
        desc: "Esmaltado de larga duración sin dañar la uña natural",
        precio: 22,
        recomendado: true,
        info: ["Uña natural", "Dura 3–4 semanas", "Sin daño"],
      },
      {
        nombre: "Uñas de Gel",
        desc: "Estructura duradera, brillo natural y acabado impecable",
        precio: 30,
        recomendado: true,
        info: ["Uña natural o débil", "Con o sin extensión", "Dura 4–5 semanas"],
      },
      {
        nombre: "Uñas Acrílicas",
        desc: "Extensiones y reconstrucción para el largo que siempre quisiste",
        precio: 35,
        info: ["Uña corta o mordida", "Extensión de largo", "Alta resistencia"],
      },
      {
        nombre: "Francesa",
        desc: "El clásico intemporal en cualquier longitud o forma",
        precio: 15,
        info: ["Cualquier tipo de uña", "Look natural", "Clásico atemporal"],
      },
      {
        nombre: "Nail Art",
        desc: "Diseños personalizados, gemas y decoración exclusiva",
        precio: 8,
        nota: "desde",
        info: ["Sobre cualquier base", "Precio según diseño"],
      },
    ],
  },
  {
    id: "pedicura",
    nombre: "Pedicura",
    tagline: "Bienestar desde la base",
    descripcion:
      "Ritual completo para tus pies: exfoliación, hidratación y acabado impecable. Mereces caminar sobre nubes.",
    icono: "/svg/pedicura.svg",
    notaDecoraciones: "Los diseños decorativos para pies se presupuestan aparte según el trabajo.",
    items: [
      {
        nombre: "Pedicura Express",
        desc: "Puesta a punto rápida: limado y color",
        precio: 12,
        info: ["Mantenimiento rápido", "Sin tratamiento profundo"],
      },
      {
        nombre: "Pedicura Clásica",
        desc: "Limpieza completa, cutículas, limado y esmaltado a elegir",
        precio: 18,
        info: ["Pies sanos", "Cuidado completo", "Con o sin color"],
      },
      {
        nombre: "Semipermanente en Pies",
        desc: "Color de larga duración sin manchas ni descascarillado",
        precio: 22,
        info: ["Uña del pie natural", "Dura 4–5 semanas", "Resistente al agua"],
      },
      {
        nombre: "Pedicura Spa",
        desc: "Ritual completo con exfoliación e hidratación profunda",
        precio: 28,
        recomendado: true,
        info: ["Pies secos o cansados", "Ritual completo de bienestar"],
      },
      {
        nombre: "Tratamiento Callosidades",
        desc: "Suavizado y eliminación profesional de durezas",
        precio: 15,
        recomendado: true,
        info: ["Pies con durezas", "Talones agrietados", "Zona plantar"],
      },
      {
        nombre: "Diseños para Pies",
        desc: "Nail art decorativo adaptado a la uña del pie",
        precio: 8,
        nota: "desde",
        info: ["Sobre cualquier base", "Precio según diseño"],
      },
    ],
  },
  {
    id: "masajes",
    nombre: "Masajes",
    tagline: "Equilibrio para cuerpo y mente",
    descripcion:
      "Libera tensiones, reconecta contigo. Terapias manuales adaptadas a lo que tu cuerpo necesita hoy.",
    icono: "/svg/terapias.svg",
    items: [
      {
        nombre: "Masaje Relajante",
        desc: "Alivio de tensiones y calma profunda en cuerpo completo",
        precio: 35,
        recomendado: true,
        info: ["Estrés y ansiedad", "Cuerpo completo", "Primera visita ideal"],
      },
      {
        nombre: "Reflexología Podal",
        desc: "Equilibrio sistémico a través de los puntos del pie",
        precio: 30,
        info: ["Fatiga crónica", "Problemas circulatorios", "Zona pies"],
      },
      {
        nombre: "Masaje Descontracturante",
        desc: "Trabajo profundo en zonas de carga y contracturas",
        precio: 40,
        info: ["Contracturas musculares", "Cuello y espalda", "Tensión acumulada"],
      },
      {
        nombre: "Masaje Deportivo",
        desc: "Recuperación muscular activa antes o después del entreno",
        precio: 45,
        info: ["Deportistas", "Pre o post entreno", "Piernas y espalda"],
      },
      {
        nombre: "Drenaje Linfático",
        desc: "Activación circulatoria y reducción de retención de líquidos",
        precio: 45,
        info: ["Retención de líquidos", "Piernas pesadas", "Post cirugía (consultar)"],
      },
      {
        nombre: "Piedras Calientes",
        desc: "Calor terapéutico que penetra en tejidos profundos",
        precio: 55,
        info: ["Tensión muscular profunda", "Estrés severo", "No apto: varices activas"],
      },
    ],
  },
  {
    id: "laser",
    nombre: "Depilación Láser",
    tagline: "Adiós al vello, hola a la libertad",
    descripcion:
      "Tecnología de última generación para resultados duraderos. Tratamiento preciso, rápido y adaptado a todo tipo de piel.",
    icono: "/svg/laser.svg",
    items: [
      {
        nombre: "Labio Superior",
        desc: "Tratamiento de precisión en zona facial sensible",
        precio: 15,
        info: ["Piel clara u oscura", "Zona facial", "15 min aprox."],
      },
      {
        nombre: "Axilas",
        desc: "Sesión rápida y eficaz para resultados duraderos",
        precio: 25,
        recomendado: true,
        info: ["Todo tipo de piel", "Sesión rápida", "Resultados desde 1ª vez"],
      },
      {
        nombre: "Bikini Normal",
        desc: "Zona de bañador clásica con máxima comodidad",
        precio: 30,
        info: ["Línea del bañador", "Piel sensible: consultar"],
      },
      {
        nombre: "Bikini Brasileño",
        desc: "Máxima limpieza en zona íntima",
        precio: 45,
        info: ["Zona íntima completa", "Piel sensible: consultar"],
      },
      {
        nombre: "Espalda / Pecho",
        desc: "Grandes zonas corporales con resultados muy visibles",
        precio: 60,
        info: ["Zona amplia", "Vello grueso o fino", "45 min aprox."],
      },
      {
        nombre: "Piernas Completas",
        desc: "Muslos, piernas y pies en una única sesión",
        precio: 80,
        info: ["Media + muslo + pie", "Vello claro: más sesiones", "60 min aprox."],
      },
    ],
  },
  {
    id: "peluqueria",
    nombre: "Peluquería",
    tagline: "Tu cabello, nuestra inspiración",
    descripcion:
      "Cortes, color, peinados y tratamientos. Cada melena es única, cada look cuenta tu historia.",
    icono: "/svg/peluqueria.svg",
    items: [
      {
        nombre: "Corte Caballero",
        desc: "Definición y pulido del look masculino con estilo",
        precio: 12,
        info: ["Cabello corto", "Con o sin barba", "Todo tipo de pelo"],
      },
      {
        nombre: "Corte & Secado Mujer",
        desc: "Corte personalizado y moldeado con técnica profesional",
        precio: 18,
        info: ["Cabello corto, medio o largo", "Incluye moldeado"],
      },
      {
        nombre: "Peinado para Evento",
        desc: "Recogidos, ondas y estilos de ocasión que duran",
        precio: 35,
        info: ["Bodas y eventos", "Cabello medio-largo", "Reserva con antelación"],
      },
      {
        nombre: "Coloración Completa",
        desc: "Cobertura de canas o cambio de tono completo",
        precio: 45,
        info: ["Canas o cambio de tono", "Varía según longitud", "Consulta previa recomendada"],
      },
      {
        nombre: "Mechas & Balayage",
        desc: "Degradados de luz para melenas naturales y actuales",
        precio: 60,
        recomendado: true,
        info: ["Cabello oscuro o castaño", "Técnica a mano alzada", "Precio según cabello"],
      },
      {
        nombre: "Keratina & Alisado",
        desc: "Frizz cero, brillo extremo y nutrición duradera",
        precio: 65,
        info: ["Cabello rizado o encrespado", "Efecto dura 3–5 meses", "No apto: embarazadas"],
      },
    ],
  },
  {
    id: "terapias",
    nombre: "Terapias",
    tagline: "Rituales para tu piel y alma",
    descripcion:
      "Tratamientos faciales y corporales que despiertan tu luminosidad natural. Porque cuidarte es un acto de amor.",
    icono: "/svg/terapias.svg",
    items: [
      {
        nombre: "Limpieza Facial Profunda",
        desc: "Extracción, purificación y brillo inmediato renovado",
        precio: 30,
        recomendado: true,
        info: ["Piel mixta u oleosa", "Puntos negros", "1ª visita ideal"],
      },
      {
        nombre: "Hidratación Intensiva",
        desc: "Nutrición activa para pieles secas, opacas o sensibles",
        precio: 35,
        info: ["Piel seca o sensible", "Pérdida de luminosidad", "Apto embarazadas"],
      },
      {
        nombre: "Aromaterapia",
        desc: "Ritual sensorial con aceites esenciales 100% naturales",
        precio: 40,
        info: ["Estrés y agotamiento", "Todo tipo de piel", "Experiencia sensorial"],
      },
      {
        nombre: "Peeling Químico",
        desc: "Renovación celular y unificación del tono de piel",
        precio: 40,
        info: ["Manchas o tono irregular", "No apto: piel muy sensible", "Evitar sol 48h"],
      },
      {
        nombre: "Tratamiento Anti-edad",
        desc: "Firmeza, volumen y rejuvenecimiento visible desde la primera sesión",
        precio: 50,
        info: ["Piel madura", "Pérdida de firmeza", "Arrugas finas"],
      },
      {
        nombre: "Ritual Corporal",
        desc: "Exfoliación + envoltura nutritiva + hidratación completa",
        precio: 55,
        info: ["Piel seca o deshidratada", "Cuerpo completo", "Experiencia premium"],
      },
    ],
  },
];

export default function ServiciosTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [displayTab, setDisplayTab] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(
    servicios[0].items[0].nombre
  );
  const railRef = useRef<HTMLDivElement>(null);

  const active = servicios[displayTab];
  const minPrice = Math.min(...active.items.map((i) => i.precio));

  const checkScroll = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    setCanScrollLeft(rail.scrollLeft > 4);
    setCanScrollRight(rail.scrollLeft + rail.clientWidth < rail.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    checkScroll();
    rail.addEventListener("scroll", checkScroll, { passive: true });
    const ro = new ResizeObserver(checkScroll);
    ro.observe(rail);
    return () => {
      rail.removeEventListener("scroll", checkScroll);
      ro.disconnect();
    };
  }, [checkScroll]);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    const activeBtn = rail.querySelector<HTMLButtonElement>('[aria-selected="true"]');
    if (activeBtn) {
      activeBtn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  }, [activeTab]);

  function scrollRail(dir: "left" | "right") {
    const rail = railRef.current;
    if (!rail) return;
    rail.scrollBy({ left: dir === "left" ? -160 : 160, behavior: "smooth" });
  }

  function switchTab(index: number) {
    if (index === activeTab || animating) return;
    setAnimating(true);
    setActiveTab(index);
    setTimeout(() => {
      setDisplayTab(index);
      // Open first item of new tab
      setExpandedItem(servicios[index].items[0].nombre);
      setAnimating(false);
    }, 180);
  }

  function toggleItem(nombre: string) {
    setExpandedItem((prev) => (prev === nombre ? null : nombre));
  }

  return (
    <div className="srv-card">
      {/* ── TAB NAVIGATION ── */}
      <div className="srv-tab-nav">
        <button
          className={`srv-scroll-btn srv-scroll-btn--left ${canScrollLeft ? "srv-scroll-btn--visible" : ""}`}
          onClick={() => scrollRail("left")}
          aria-label="Ver servicios anteriores"
          tabIndex={canScrollLeft ? 0 : -1}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div ref={railRef} className="srv-tab-rail" role="tablist" aria-label="Categorías de servicios">
          {servicios.map((s, i) => (
            <button
              key={s.id}
              role="tab"
              aria-selected={i === activeTab}
              aria-controls={`panel-${s.id}`}
              onClick={() => switchTab(i)}
              className={`srv-tab ${i === activeTab ? "srv-tab--active" : ""}`}
            >
              <img src={s.icono} alt="" aria-hidden="true" className="srv-tab-icon" />
              <span className="srv-tab-label">{s.nombre}</span>
            </button>
          ))}
        </div>

        <button
          className={`srv-scroll-btn srv-scroll-btn--right ${canScrollRight ? "srv-scroll-btn--visible" : ""}`}
          onClick={() => scrollRail("right")}
          aria-label="Ver más servicios"
          tabIndex={canScrollRight ? 0 : -1}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* ── PANEL ── */}
      <div
        key={active.id}
        id={`panel-${active.id}`}
        role="tabpanel"
        className={`srv-panel ${animating ? "srv-panel--out" : "srv-panel--in"}`}
      >
        {/* Panel header */}
        <div className="srv-panel-header">
          <div className="srv-panel-meta">
            <img src={active.icono} alt={active.nombre} className="srv-panel-icon" />
            <div>
              <h2 className="srv-panel-title">{active.nombre}</h2>
              <p className="srv-panel-tagline">{active.tagline}</p>
            </div>
          </div>
          <div className="srv-panel-desde">
            <span className="srv-desde-label">desde</span>
            <span className="srv-desde-price">{minPrice} €</span>
          </div>
        </div>

        <p className="srv-panel-desc">{active.descripcion}</p>

        {/* Service count + hint */}
        <div className="srv-items-meta">
          <span className="srv-items-count">{active.items.length} servicios</span>
          <span className="srv-items-hint">Toca para ver detalles</span>
        </div>

        {/* Separator */}
        <div className="srv-separator" aria-hidden="true" />

        {/* Items accordion */}
        <ul className="srv-items-grid" role="list">
          {active.items.map((item, i) => {
            const isOpen = expandedItem === item.nombre;
            return (
              <li
                key={item.nombre}
                className={`srv-item${item.recomendado ? " srv-item--recommended" : ""}${isOpen ? " srv-item--open" : ""}`}
                style={{ animationDelay: `${i * 0.07}s` }}
              >
                {/* Always visible: clickable header */}
                <button
                  className="srv-item-header"
                  onClick={() => toggleItem(item.nombre)}
                  aria-expanded={isOpen}
                  aria-controls={`item-body-${active.id}-${i}`}
                >
                  <div className="srv-item-header-left">
                    <div className="srv-item-dot" aria-hidden="true" />
                    <span className="srv-item-nombre">
                      {item.nombre}
                      {item.recomendado && (
                        <span className="srv-badge" aria-label="Recomendado por la esteticista">
                          <svg width="9" height="9" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
                            <path d="M6 0l1.5 4.5H12L8.25 7.3l1.5 4.5L6 9l-3.75 2.8 1.5-4.5L0 4.5h4.5z"/>
                          </svg>
                          Recomendado
                        </span>
                      )}
                    </span>
                  </div>
                  <div className="srv-item-header-right">
                    <span className="srv-item-precio">
                      desde {item.precio} €
                      {item.nota && <span className="srv-item-nota"> {item.nota}</span>}
                    </span>
                    <svg
                      className={`srv-item-chevron ${isOpen ? "srv-item-chevron--open" : ""}`}
                      width="14" height="14" viewBox="0 0 16 16" fill="none"
                      aria-hidden="true"
                    >
                      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </button>

                {/* Collapsible body */}
                <div
                  id={`item-body-${active.id}-${i}`}
                  className={`srv-item-collapsible ${isOpen ? "srv-item-collapsible--open" : ""}`}
                >
                  <div className="srv-item-collapsible-inner">
                    <p className="srv-item-desc">{item.desc}</p>
                    {item.info && item.info.length > 0 && (
                      <ul className="srv-item-chips" aria-label="Características">
                        {item.info.map((chip) => (
                          <li key={chip} className="srv-chip">{chip}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        {/* Nota decoraciones */}
        {active.notaDecoraciones && (
          <p className="srv-nota-decoraciones">
            <svg width="11" height="11" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true" style={{ display: "inline", marginRight: "0.3rem", verticalAlign: "middle", opacity: 0.6 }}>
              <circle cx="6" cy="6" r="5.5" stroke="currentColor" strokeWidth="1" fill="none"/>
              <text x="6" y="9" textAnchor="middle" fontSize="8" fontWeight="700">i</text>
            </svg>
            {active.notaDecoraciones}
          </p>
        )}

        {/* Nota precios */}
        <p className="srv-nota-precios">
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true" style={{ display: "inline", marginRight: "0.3rem", verticalAlign: "middle", flexShrink: 0 }}>
            <circle cx="6" cy="6" r="5.25" stroke="currentColor" strokeWidth="1.2"/>
            <line x1="6" y1="4.5" x2="6" y2="7.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
            <circle cx="6" cy="3.2" r="0.6" fill="currentColor"/>
          </svg>
          Los precios pueden variar según el estado de la uña y el trabajo a realizar. Consulta sin compromiso.
        </p>

        {/* CTA */}
        <div className="srv-panel-cta">
          <a href="/#contact" className="srv-btn-reservar">
            Reservar {active.nombre.toLowerCase()}
          </a>
        </div>
      </div>
    </div>
  );
}
