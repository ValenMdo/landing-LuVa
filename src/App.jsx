import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './componentes/Navbar/Navbar'
import Hero from './componentes/Hero/Hero'
import Diseños from './componentes/Diseños/Diseños'
import Nosotros from './componentes/Nosotros/Nosotros'
import Contacto from './componentes/Contacto/Contacto'
import Footer from './componentes/Footer/Footer'
import fondo from '@/assets/fondo.jpeg'

function App() {
  const bgImagen = {
    backgroundImage: `url(${fondo})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom',
    backgroundSize: 'cover',
    position: "relative"
  }

  return (
    <Router>
    <Navbar />

      {/* Layout con fondo */}
      <main
        style={bgImagen}
        className="min-h-screen flex flex-col"
      >
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/diseños" element={<Diseños />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>

      {/* Footer visible en todas las páginas */}
      <Footer />
    </Router>
    
    
    
    /*<main
      style={bgImagen}
       className="min-h-screen flex flex-col"
    >
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/diseños" element={<Diseños />} />
          <Route path="/nosotros" element={<Nosotros />} />
        </Routes>
      </Router>
    </main> */
    
  )
} {/* 1 hora */}

export default App
