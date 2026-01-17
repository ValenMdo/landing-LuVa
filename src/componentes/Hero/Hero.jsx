import React, { useEffect, useState } from 'react';
import Logo from "../../assets/logo.png";
import Campera1 from "../../assets/camperas/campera1-png.png";

// Sección principal de héroe de la landing
const Hero = () => {
  // Estado para contadores animados
  const [camperasCount, setCamperasCount] = useState(0);
  const [cursosCount, setCursosCount] = useState(0);

  // Animación de contadores al montar el componente
  useEffect(() => {
    const animateCounter = (endValue, duration, setter) => {
      const startTime = performance.now();

      const step = (currentTime) => {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const value = Math.floor(progress * endValue);
        setter(value);

        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    };

    animateCounter(20273, 1500, setCamperasCount); // Ejemplo: 3000 camperas realizadas
    animateCounter(538, 1500, setCursosCount); // Ejemplo: 500 cursos realizados
  }, []);

  return (
    <section className="min-h-[80vh] flex items-center pt-28 md:pt-32 pb-16">
      {/* Contenedor centrado */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Columna de texto */}
        <div>
          {/* Logo de la marca */}
          <img
            src={Logo}
            alt="Logo de la marca"
            className="w-36 md:w-44 mb-6 drop-shadow-md hover:scale-105 transition-transform duration-300"
          />

          {/* Encabezado principal (título grande) */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black tracking-tight mb-4">
          LuVa —  <span className="text-purple-600">Campera, diseño y recuerdo</span>
          </h1>

          {/* Texto descriptivo principal */}
          <div className="space-y-5 mb-6">
            <p className="text-gray-800 text-lg md:text-xl leading-loose font-normal drop-shadow-sm">
              Diseñamos camperas de egresados sublimadas pensadas para reflejar la identidad de cada curso. Cada prenda es el resultado de un proceso cuidado, donde el diseño, la calidad y la personalización se combinan para crear una campera única, que no solo se usa, sino que se guarda como recuerdo de una etapa inolvidable.
            </p>
            <p className="text-gray-800 text-lg md:text-xl leading-loose font-normal drop-shadow-sm">
              Trabajamos junto a cada grupo para que el diseño final exprese su historia, sus colores y su estilo, logrando un producto que acompaña tanto el último año como los años que siguen.
            </p>
          </div>

          {/* Texto secundario, ideal para detalles extra 
          <p className="text-gray-800 text-sm md:text-base leading-relaxed mb-6 drop-shadow-sm">
            Más adelante acá podés agregar información sobre materiales, procesos,
            plazos de entrega o cualquier detalle que quieras destacar de forma sencilla
            y clara para tus clientes.
          </p> */}

          {/* Lista breve de puntos fuertes / beneficios */}
          <ul className="text-black text-sm md:text-base space-y-2 mb-8">
            <li className="flex items-center gap-2 hover:text-purple-700 transition-colors duration-200">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-400 flex-shrink-0" />
              Diseños personalizados y adaptados a tu estilo.
            </li>
            <li className="flex items-center gap-2 hover:text-purple-700 transition-colors duration-200">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-400 flex-shrink-0" />
              Enfoque en comodidad, durabilidad y detalles.
            </li>
            <li className="flex items-center gap-2 hover:text-purple-700 transition-colors duration-200">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-400 flex-shrink-0" />
              Ideal para equipos, marcas personales o uso diario.
            </li>
          </ul>

          {/* Botones de acción principales */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Botón principal: ir a diseños */}
            <a
              href="/diseños"
              className="bg-purple-600 py-2.5 px-10 rounded-full text-white text-sm md:text-base font-medium hover:bg-purple-700 hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2"
            >
              Ver diseños
              <i className="bi bi-bag-heart text-lg" />
            </a>

            {/* Botón secundario: pensado para otra acción futura 
            <a
              href="/nosotros"
              className="border border-purple-300/70 text-black py-2.5 px-6 rounded-full text-sm md:text-base font-medium hover:bg-purple-50/10 hover:border-purple-600 transition-all duration-300"
            >
              {/* Texto editable para otro CTA 
              Ver cómo trabajamos
            </a> 
            */}
          </div>

          {/* Bloque de estadísticas con contadores animados */}
          <div className="mt-8 grid grid-cols-2 gap-6 max-w-xs md:max-w-sm">
            {/* Contador de camperas */}
            <div className="border border-purple-200 rounded-2xl px-4 py-3 bg-opacity-30 backdrop-blur-md shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300">
              <p className="text-[11px] md:text-xs uppercase tracking-wide text-purple-700 font-semibold mb-1">
                Camperas realizadas
              </p>
              <p className="text-2xl md:text-3xl font-semibold text-gray-800 drop-shadow-sm">
                {camperasCount.toLocaleString('es-AR')}
                <span className="text-sm md:text-base font-normal text-gray-600 ml-1">
                  +
                </span>
              </p>
            </div>

            {/* Contador de cursos */}
            <div className="border border-purple-200 rounded-2xl px-4 py-3 bg-opacity-30 backdrop-blur-md shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300">
              <p className="text-[11px] md:text-xs uppercase tracking-wide text-purple-700 font-semibold mb-1">
                Cursos realizados
              </p>
              <p className="text-2xl md:text-3xl font-semibold text-gray-800 drop-shadow-sm">
                {cursosCount.toLocaleString('es-AR')}
                <span className="text-sm md:text-base font-normal text-gray-600 ml-1">
                  +
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Columna de imagen principal */}
        <div className="flex justify-center md:justify-end">
          {/* Contenedor de la imagen para control de tamaño y sombra */}
          <div className="relative max-w-xs md:max-w-sm lg:max-w-md">
            {/* Imagen de la campera */}
            <img
              src={Campera1}
              alt="Campera personalizada"
              className="w-full rounded-3xl shadow-2xl border border-white/10 transition-transform duration-500 hover:scale-105"
            />

            {/* Etiqueta decorativa sobre la imagen (opcional y editable) 
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-gray-100 text-xs md:text-sm px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
              Zona para un pequeño texto destacado (colección, promo, etc.)
            </div>
            */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;