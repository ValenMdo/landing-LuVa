import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '@/assets/logo.png'




//minuto 25:00
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navbarLinks = [
    {
      id: 1,
      title: 'Inicio',
      link: '/'
    },
    {
      id: 2,
      title: 'Diseños',
      link: '/diseños'
    },
    {
      id: 3,
      title: 'Nosotros',
      link: '/nosotros'
    },
    {
      id: 4,
      title: 'Contacto',
      link: '/contacto'
    }
  ]

  const navbarRedes = [
    {
      id: 1,
      title: 'Whatsapp',
      link: 'https://wa.me/5492234480279?text=Hola, me interesa hacer un pedido de camperas',
      icon: 'bi bi-whatsapp'
    },
    {
      id: 2,
      title: 'Instagram',
      link: 'https://www.instagram.com/luvasublimados/?hl=es',
      icon: 'bi bi-instagram'
    }
  ]

  return (
    <nav className='fixed top-0 left-0 h-[110px] w-full bg-opacity-30 backdrop-blur-md z-50 transition-all duration-300'>
      <div className='flex justify-between items-center sm:px-12 sm:py-6 px-4 py-3'>
        {/*logo navbar*/}
        <div className='flex items-center gap-2'>
          <img src={Logo} alt="logo" className='w-[100px] hover:scale-105 transition-transform duration-300 cursor-pointer' />

        </div>


        {/*boton hamburguesa*/}
        <button
          className="md:hidden text-black p-2"
          onClick={toggleMenu}
        >

          <svg className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'>

            {isOpen ? (
              <path strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/*navegacion desktop*/}
        <div className='hidden md:block'>
          <ul className='flex sm:space-x-8 space-x-4'>
            {navbarLinks.map((link) => (
              <li key={link.id}>
                <Link
                  className='text-black sm:text-lg text-sm font-medium hover:text-purple-600 transition-all duration-300 hover:scale-105 transform inline-block relative group'
                  to={link.link}>
                  {link.title}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>


        {/*navegacion redes desktop*/}
        <div className='hidden md:block' >
          <ul className='flex sm:space-x-8 space-x-4'>
            {navbarRedes.map((link) => (
              <li key={link.id}>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-blok transition-transform duration-300 transform hover:scale-125'
                  href={link.link}>
                  <i className={`${link.icon} sm:text-2xl text-lg text-black hover:text-purple-600 transition-all duration-300 hover:scale-125 transform inline-block`}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/*menu mobile */}
      <div className={`md:hidden absolute w-full bg-purple-200 transition-all duration-300 ${
                    isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}>
        <ul className='flex flex-col px-4 py-2 '>
          {navbarLinks.map((link) => (
            <li key={link.id} className='py-2 text-center'>
              <a
                className='text-black hover:text-sky-200'
                href={link.link}
                onClick={()=> setIsOpen(false)}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <ul className='flex space-x-4 px-4 py-2 border-t border-purple-700 justify-center'>
            {navbarRedes.map((link) => (
              <li key={link.id}>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-block'
                  href={link.link}
                  onClick={() => setIsOpen(false)}>
                  <i className={`${link.icon}  text-lg text-white hover:text-sky-200`}></i>
                </a>
              </li>
            ))}
          </ul>

      </div>

    </nav>
  )
}

export default Navbar