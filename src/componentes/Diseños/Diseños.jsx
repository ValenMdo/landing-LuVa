import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"

// estilos de Swiper (OBLIGATORIO)
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

// IMPORTÁ TUS IMÁGENES
import Campera1 from "../../assets/camperas/campera1-png.png";
import Campera2 from "../../assets/camperas/campera2.png";
import Campera3 from "../../assets/camperas/campera3.png";
import Campera4 from "../../assets/camperas/campera4.png";
import Campera5 from "../../assets/camperas/campera5.png";
import Campera6 from "../../assets/camperas/campera6.png";
import Campera7 from "../../assets/camperas/campera7.png";
import Campera8 from "../../assets/camperas/campera8.png";
import Campera9 from "../../assets/camperas/campera9.png";
import Campera10 from "../../assets/camperas/campera10.png";
import Campera11 from "../../assets/camperas/campera11.png";
import Campera12 from "../../assets/camperas/campera12.png";
import Campera13 from "../../assets/camperas/campera13.png";
import Campera14 from "../../assets/camperas/campera14.png";
import Campera15 from "../../assets/camperas/campera15.png";
import Campera16 from "../../assets/camperas/campera16.png";
import Campera17 from "../../assets/camperas/campera17.png";
import Campera18 from "../../assets/camperas/campera18.png";
import Campera19 from "../../assets/camperas/campera19.png";
import Campera20 from "../../assets/camperas/campera20.png";

const designs = [
  {
    name: "Campera 1",
    image: Campera1,
    bgColor: "#111827", // gris oscuro
  },
  {
    name: "Campera 2",
    image: Campera2,
    bgColor: "#1f2933",
  },
  {
    name: "Campera 3",
    image: Campera3,
    bgColor: "#020617",
  },
  {
    name: "Campera 4",
    image: Campera4,
    bgColor: "#020617",
  },
  {
    name: "Campera 5",
    image: Campera5,
    bgColor: "#020617",
  },
  {
    name: "Campera 6",
    image: Campera6,
    bgColor: "#020617",
  },
  {
    name: "Campera 7",
    image: Campera7,
    bgColor: "#020617",
  },
  {
    name: "Campera 8",
    image: Campera8,
    bgColor: "#020617",
  },
  {
    name: "Campera 9",
    image: Campera9,
    bgColor: "#020617",
  },
  {
    name: "Campera 10",
    image: Campera10,
    bgColor: "#020617",
  },
  {
    name: "Campera 11",
    image: Campera11,
    bgColor: "#020617",
  },
  {
    name: "Campera 12",
    image: Campera12,
    bgColor: "#020617",
  },
  {
    name: "Campera 13",
    image: Campera13,
    bgColor: "#020617",
  },
  {
    name: "Campera 14",
    image: Campera14,
    bgColor: "#020617",
  },
  {
    name: "Campera 15",
    image: Campera15,
    bgColor: "#020617",
  },
  {
    name: "Campera 16",
    image: Campera16,
    bgColor: "#020617",
  },
  {
    name: "Campera 17",
    image: Campera17,
    bgColor: "#020617",
  },
  {
    name: "Campera 18",
    image: Campera18,
    bgColor: "#020617",
  },
  {
    name: "Campera 19",
    image: Campera19,
    bgColor: "#020617",
  },
  {
    name: "Campera 20",
    image: Campera20,
    bgColor: "#020617",
  },
];

const Diseños = () => {
  return (
    <section className="pt-32 md:pt-40 pb-24">
      {/* Encabezado principal de la sección de diseños */}
      <h2 className="text-3xl md:text-4xl text-center font-semibold text-black tracking-tight mb-4">
        Diseños <span className="text-purple-600">destacados</span>
      </h2>

      {/* Texto introductorio sobre los diseños (editable) */}
      <div className="max-w-4xl mx-auto px-6 mb-12 text-left space-y-6">
        <p className="text-gray-800 text-lg md:text-xl leading-loose font-normal drop-shadow-sm">
          Cada campera de Luva Indumentaria está pensada para representar la identidad de cada curso.
          Combinamos diseño, personalización y tecnología de sublimación para lograr prendas únicas, 
          con colores definidos, detalles precisos y un estilo que se adapta a cada grupo.
        </p>
        <p className="text-gray-800 text-lg md:text-xl leading-loose font-normal drop-shadow-sm">
          Nuestro trabajo se realiza exclusivamente por encargo. Cada pedido se produce a medida, definiendo previamente el diseño, 
          la cantidad de unidades y las medidas de cada integrante. Este enfoque nos permite garantizar un calce cómodo, coherencia en el conjunto y 
          un resultado final cuidado, pensado para usarse durante el egreso y conservarse en el tiempo.
        </p>
      </div>

      {/* Bloque de características / materiales de las camperas (editable) */}
      <div className="max-w-5xl mx-auto px-6 mb-12 grid gap-6 md:grid-cols-3">
        <div className="bg-[#CAD5DF] rounded-2xl shadow-md p-5 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-purple-100/50 ease-in-out cursor-pointer">
          <h3 className="text-purple-700 font-semibold text-lg mb-2">
            Materiales y calidad
          </h3>
          <p className="text-gray-800 text-sm md:text-base leading-relaxed font-normal drop-shadow-sm">
            Confeccionadas en deportivo frizado, con puños de poliéster, cierres de calidad y sublimación full color, nuestras camperas ofrecen abrigo, 
            comodidad y colores duraderos que se mantienen intactos con el uso.
          </p>
        </div>

        <div className="bg-[#CAD5DF] rounded-2xl shadow-md p-5 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-purple-100/50 ease-in-out cursor-pointer">
          <h3 className="text-purple-700 font-semibold text-lg mb-2">
            Proceso de diseño
          </h3>
          <p className="text-gray-800 text-sm md:text-base leading-relaxed font-normal drop-shadow-sm">
            El diseño es elegido por el cliente y se personaliza de forma total, adaptando colores, tipografías 
            y detalles para crear una campera única que represente la identidad del grupo.
          </p>
        </div>

        <div className="bg-[#CAD5DF] rounded-2xl shadow-md p-5 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-purple-100/50 ease-in-out cursor-pointer">
          <h3 className="text-purple-700 font-semibold text-lg mb-2">
            Talles y medidas
          </h3>
          <p className="text-gray-800 text-sm md:text-base leading-relaxed font-normal drop-shadow-sm">
            Las medidas se toman de forma individual, asegurando un calce cómodo y hecho a medida para cada persona. 
            Además, contamos con una tabla de talles que sirve como guía segura para facilitar la elección.
          </p>
        </div>
      </div>

      <style>{`
        .swiper-slide {
          height: auto !important;
          display: flex !important;
          overflow: visible !important;
        }
        .swiper-slide > div {
          width: 100%;
          height: 100%;
          min-height: 420px;
        }
        .swiper-wrapper {
          align-items: stretch !important;
        }` 
      }</style>

      {/* Carrusel de diseños (mantener tal cual, solo contenido de imágenes/camperas) */}
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={40}
        slidesPerView={1.2}
        centeredSlides
        navigation
        pagination={{ clickable: true }}
        watchSlidesProgress={true}
        breakpoints={{
          768: {
            slidesPerView: 3,
            centeredSlides: false,
          },
        }}
        className="max-w-6xl mx-auto px-6"
      >
        {designs.map((design, index) => (
          <SwiperSlide key={index}>
            <div
              className={`h-[420px] rounded-xl flex flex-col justify-between ${design.bgColor}`}
              style={{ minHeight: '420px' }}
            >
              {/* imagen */}
              <div className="flex-1 flex items-center justify-center p-6 overflow-hidden">
                <img
                  src={design.image}
                  alt={design.name}
                  className="max-h-full object-contain"
                />
              </div>

              {/* nombre */}
              <div className="text-white text-center py-4 text-sm bg-black/30 rounded-b-xl">
                {design.name}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>

    /*
         <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800">
              Nuestros Diseños
            </h1>
            <p className="text-lg text-gray-600">Página de diseños</p>
          </div>
        </div>*/

  )
}

export default Diseños

