import React from 'react'

// Sección "Nosotros": espacio para contar la historia y valores de la empresa
const Nosotros = () => {
  return (
    <section className="pt-32 md:pt-40 pb-24 min-h-[70vh]">
      {/* Contenedor centrado y ancho máximo para el contenido */}
      <div className="max-w-5xl mx-auto px-6 font-sans">
        {/* Encabezado principal de la sección */}
        <header className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black tracking-tight mb-4">
            Sobre nuestra <span className="text-purple-600">marca</span>
          </h1>
          {/* }
          <p className="text-gray-800 text-base md:text-lg leading-relaxed max-w-3xl mx-auto drop-shadow-sm">
            Este espacio está pensado para que puedas contar, con calma, la historia de la empresa:
            cómo empezó el proyecto, qué los inspira y qué buscan transmitir con cada campera.
          </p>
          */}
        </header>

        {/* Bloque de párrafos principales sobre la empresa (editable) */}
        <section className="space-y-6 mb-12 max-w-4xl mx-auto">
          <p className="text-gray-800 text-base md:text-lg leading-loose font-normal drop-shadow-sm">
            Somos Luva Indumentaria, una marca establecida en <span className="text-purple-600">Mar del Plata </span> y alrededores, con más de 8 años de experiencia dedicada a la confección de camperas personalizadas.
            Nuestro principal enfoque son las camperas de egresados, aunque también desarrollamos prendas a medida para distintos grupos, como equipos deportivos, instituciones y organizaciones.
          </p>
          <p className="text-gray-800 text-base md:text-lg leading-loose font-normal drop-shadow-sm">
            Trabajamos principalmente con sublimación y bordado, combinando diseño, calidad y atención al detalle en cada proyecto.
            A lo largo de nuestra trayectoria hemos realizado más de 140 cursos de forma satisfactoria, respaldados por la confianza y las excelentes devoluciones de nuestros clientes, que nos eligen por el compromiso, la prolijidad y el resultado final.
          </p>
        </section>

        {/* Bloque de columnas: valores / enfoque / experiencia (estilo distinto al de Diseños) */}
        <section className="grid gap-8 md:grid-cols-3 mb-12">
          {/* Columna 1: Valores de la marca */}
          <div className="flex flex-col gap-2 p-4 rounded-xl hover:bg-purple-50/50 transition-all duration-300 hover:shadow-md">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-purple-600 text-white text-sm font-semibold mb-1 hover:scale-110 transition-transform duration-300">
              01
            </span>
            <h2 className="text-purple-800 font-semibold text-lg">
              Nuestros valores
            </h2>
            <ul className="text-black text-sm leading-relaxed list-disc list-inside space-y-1">
              <li>Compromiso con cada curso</li>
              <li>Cumplimiento de plazos</li>
              <li>Atención personalizada</li>
              <li>Responsabilidad y transparencia</li>
              <li>Calidad en cada detalle</li>
            </ul>
          </div>

          {/* Columna 2: Forma de trabajar */}
          <div className="flex flex-col gap-2 p-4 rounded-xl hover:bg-purple-50/50 transition-all duration-300 hover:shadow-md">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-purple-600 text-white text-sm font-semibold mb-1 hover:scale-110 transition-transform duration-300">
              02
            </span>
            <h2 className="text-purple-800 font-semibold text-lg">
              Cómo trabajamos
            </h2>

            <ul className="text-black text-sm leading-relaxed list-disc list-inside space-y-1">
              <li>Trabajo 100% por encargo</li>
              <li>Definición y aprobación del diseño</li>
              <li>Organización de talles y cantidades</li>
              <li>Producción cuidada y controlada</li>
              <li>Entrega coordinada</li>
            </ul>

          </div>

          {/* Columna 3: Experiencia / trayectoria */}
          <div className="flex flex-col gap-2 p-4 rounded-xl hover:bg-purple-50/50 transition-all duration-300 hover:shadow-md">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-purple-600 text-white text-sm font-semibold mb-1 hover:scale-110 transition-transform duration-300">
              03
            </span>
            <h2 className="text-purple-800 font-semibold text-lg">
              Trayectoria
            </h2>
            <ul className="text-black text-sm leading-relaxed list-disc list-inside space-y-1">
              <li>Más de 8 años de experiencia</li>
              <li>Más de 140 cursos realizados</li>
              <li>Más de 4000 camperas entregadas</li>
              <li>Clientes satisfechos y recomendaciones</li>
            </ul>
          </div>
        </section>

        {/* Bloque final: texto para cierre o mensaje importante */}
        <section className="text-center">
          <p className="text-gray-800 text-base md:text-lg leading-loose font-normal max-w-4xl mx-auto drop-shadow-sm">
            En Luva Indumentaria trabajamos para que cada campera represente una etapa única. Nos comprometemos a acompañar a cada grupo con responsabilidad, diseño y calidad, 
            para que quienes nos eligen reciban una prenda cuidada en cada detalle, pensada para usarse, disfrutarse y conservarse como recuerdo en el tiempo.
          </p>
        </section>
      </div>
    </section>
  )
}

export default Nosotros