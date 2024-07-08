import './App.css'
import Contacto from './secciones/Contacto/Contacto'
import Home from './secciones/Home/Home'
import Maquinas from './secciones/Maquinas/Maquinas'
import NavBar from './secciones/NavBar/NavBar'
import QueHacemos from './secciones/QueHacemos/QueHacemos'
import QuienesSomos from './secciones/QuienesSomos/QuienesSomos'
import 'swiper/css'

function App() {
  return (
    <>
      <NavBar/>
      <Home/>
      <div className='container1'>
      <QuienesSomos/>
      <QueHacemos/>
      <Maquinas/>
        <Contacto/>
      </div>
    </>
  )
}

export default App
