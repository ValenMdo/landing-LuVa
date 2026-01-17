import React from 'react'

// Footer global y compacto para toda la web
const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-black/10 bg-[#CAD5DF] backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-3 flex flex-col gap-2 md:flex-row md:items-center md:justify-between text-xs md:text-sm">
        {/* Información principal de marca */}
        <div className="text-black/80">
          <span className="font-semibold">Luva Sublimados</span>{' '}
          <span className="mx-1">•</span>
          <span>Camperas personalizadas y diseño textil</span>
        </div>

        {/* Línea inferior: derechos + lugar para info legal o contacto corto */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] md:text-xs text-black/60">
          <span>© {currentYear} Todos los derechos reservados.</span>
          {/* Podés cambiar este texto por datos breves: CUIT, ciudad, o mail de contacto */}
          <span className="hidden sm:inline-block">Hecho en Argentina.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer


