import React from "react";

const services = [
  {
    icon: "/svg/manicura.svg",
    title: "Manicura",
    description: "Cuidado completo de manos con diseños personalizados",
  },
  {
    icon: "/svg/pedicura.svg",
    title: "Pedicura",
    description: "Tratamiento profesional para tus pies",
  },
  {
    icon: "/svg/terapias.svg",
    title: "Masajes",
    description: "Relajación y bienestar corporal",
  },
  {
    icon: "/svg/laser.svg",
    title: "Láser",
    description: "Depilación láser con tecnología avanzada",
  },
  {
    icon: "/svg/peluqueria.svg",
    title: "Peluquería",
    description: "Corte, peinado y tratamientos capilares",
  },
  {
    icon: "/svg/terapias.svg",
    title: "Terapias",
    description: "Tratamientos de belleza y bienestar",
  },
];

const SkillsList = () => {
  return (
    <div className="text-left">
     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {/* Primeros 5 servicios */}
        {services.slice(0, 5).map((service, index) => (
          <div
            key={index}
            className="rounded-[24px] h-[200px] md:h-[240px] shadow-lg relative overflow-hidden group cursor-pointer transition-transform hover:scale-[1.02]"
            style={{ backgroundColor: "var(--background)" }}
          >
            {/* Gradiente con clip-path minimalista */}
            <div
              className="absolute inset-0 rounded-[24px] z-0 transition-opacity group-hover:opacity-90"
              style={{
                background:
                  "linear-gradient(to bottom right, var(--bento-pink-light), var(--bento-pink))",
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 40% 100%, 0 60%)",
              }}
            />

            {/* Área de imagen placeholder (cuando tengas las fotos) */}
            <div
              className="absolute top-0 right-0 rounded-tr-[24px] overflow-hidden z-10 opacity-20 group-hover:opacity-30 transition-opacity"
              style={{ width: "60%", height: "60%" }}
            >
              <div className="w-full h-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <img src={service.icon} alt={service.title} className="w-16 h-16 object-contain" />
              </div>
            </div>

            {/* Contenido del servicio */}
            <div className="absolute bottom-3 left-3 z-20 flex flex-col gap-1">
              <h4 className="text-[var(--white)] text-xl md:text-2xl font-semibold">
                {service.title}
              </h4>
              <p className="text-[var(--white-icon)] text-sm">
                {service.description}
              </p>
            </div>

            {/* Icono en esquina superior izquierda */}
            <div className="absolute top-3 left-3 z-20 transition-transform group-hover:scale-110">
              <img src={service.icon} alt={service.title} className="w-8 h-8 object-contain" />
            </div>
          </div>
        ))}

        {/* Card 6: Ver todos los servicios - Estilo Nav Button */}
        <a
          href="/servicios"
          className="rounded-[24px] h-[200px] md:h-[240px] shadow-lg flex items-center justify-center text-center transition-all hover:shadow-xl"
          style={{ backgroundColor: "var(--bento-pink-light)" }}
        >
          <div className="px-6">
            <div className="text-5xl mb-4">✨</div>
            <span className="text-[var(--white)] font-semibold text-xl md:text-2xl block mb-2">
              Ver Todos los Servicios
            </span>
            <p className="text-[var(--white-icon)] text-sm">
              Descubre más opciones
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default SkillsList;
