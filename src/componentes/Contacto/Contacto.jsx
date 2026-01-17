import React from 'react'

// Sección "Contacto": espacio para información de contacto y redes
const Contacto = () => {
  return (
    <section className="pt-32 md:pt-40 pb-24 min-h-[70vh]">
      {/* Contenedor centrado principal */}
      <div className="max-w-5xl mx-auto px-6 font-sans">
        {/* Encabezado de la sección */}
        <header className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black tracking-tight mb-4">
            Hablemos de tu próxima <span className="text-purple-600">campera</span>
          </h1>
          {/*}
          <p className="text-gray-800 text-base md:text-lg leading-relaxed max-w-3xl mx-auto drop-shadow-sm">
            Este espacio está pensado para que expliques cómo pueden contactarte: tiempos de
            respuesta, formas de hacer pedidos y cualquier detalle importante antes de escribirte.
          </p> */}
        </header>

        {/* Bloque de texto principal sobre el contacto (editable) */}
        <section className="space-y-6 mb-12">
          <p className="text-gray-800 text-base md:text-lg leading-loose font-normal max-w-4xl mx-auto drop-shadow-sm">
            Trabajamos únicamente por pedido, ya que cada campera se realiza de forma totalmente personalizada. Una vez definido el diseño y confirmada la cantidad total de unidades, 
            se procede a la toma de medidas individuales o a la elección de talles según nuestra tabla de referencia.
          </p>
          <p className="text-gray-800 text-base md:text-lg leading-loose font-normal max-w-4xl mx-auto drop-shadow-sm">
            Para dar inicio a la confección, se abona una seña del 50% del valor total del pedido. A partir del comienzo de la producción, el plazo estimado de entrega es de aproximadamente un mes.
            El 50% restante se abona al momento de la entrega del total de las camperas. Cabe aclarar que no se realizan pagos por unidad: 
            los pedidos se gestionan y abonan siempre sobre la totalidad del grupo, garantizando así una correcta organización y cumplimiento del proceso.
          </p>
        </section>

        {/* Bloque de info rápida + redes sociales */}
        <section className="grid gap-8 md:grid-cols-2 items-start mb-12">
          {/* Columna 1: Info rápida / datos de contacto en texto */}
          <div className="space-y-3">
            <h2 className="text-purple-800 font-semibold text-xl mb-1">
              Atencion personalizada por WhatsApp
            </h2>
            <p className="text-gray-800 text-base md:text-lg leading-loose font-normal drop-shadow-sm">
              Los encargos se realizan exclusivamente por WhatsApp, donde brindamos atención personalizada para definir el diseño, 
              la cantidad de unidades y resolver todas las dudas del grupo. Y desde allí, se manejan todas las comunicaciones y confirmaciones de plazos y pagos.
            </p>

            {/* Ícono de whatsapp */}
            <div className="flex items-center justify-center gap-6">
              {/* Link a whatsapp (actualizar href cuando tengas la página) */}
              <a
                href="https://wa.me/5492234480279?text=Hola, me interesa hacer un pedido de camperas"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-transform duration-300 transform hover:scale-110"
              >
                <i className="bi bi-whatsapp text-3xl text-black hover:text-purple-600 transition-all duration-300 hover:scale-125" />
              </a>

            </div>

          </div>

          {/* Columna 2: Botones de redes con iconos ( Instagram) */}
          <div className="bg-[#CAD5DF] rounded-2xl shadow-md p-6 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:shadow-xl hover:scale-105">
            {/* Título del bloque de redes */}
            <h2 className="text-purple-800 font-semibold text-lg mb-1 text-center">
              Escribinos por redes
            </h2>
            <p className="text-gray-800 text-sm md:text-base text-center leading-relaxed mb-2 drop-shadow-sm">
              Visita nuestra pagina de instagram para ver nuestros trabajos y diseños.
            </p>

            {/* Íconos de redes reutilizando los estilos del Navbar */}
            <div className="flex items-center justify-center gap-6">

              {/* Link a Instagram (mismo enlace que en el navbar) */}
              <a
                href="https://www.instagram.com/luvasublimados/?hl=es"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-transform duration-300 transform hover:scale-110"
              >
                <i className="bi bi-instagram text-3xl text-black hover:text-purple-600 transition-all duration-300 hover:scale-125" />
              </a>
            </div>
          </div>
        </section>

        {/* Bloque final: pequeño texto de cierre (editable) */}
        <section className="text-center">
          <p className="text-gray-800 text-base md:text-lg leading-loose font-normal max-w-4xl mx-auto drop-shadow-sm">
            Elegir Luva Indumentaria es apostar por un trabajo responsable, personalizado y con experiencia comprobada. 
            Te acompañamos en cada etapa del proceso para que tu grupo tenga una campera que los represente, con calidad, diseño y cumplimiento de los tiempos acordados. 
            Estamos listos para empezar cuando ustedes quieran.
          </p>
        </section>
      </div>
    </section>
  )
}

export default Contacto
