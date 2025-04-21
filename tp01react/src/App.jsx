import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className="app-container">
        {/* Componente Header */}
        <Header />

        {/* Componente Formulario (aunque aún no funcional) */}
        <Formulario />

        {/* Componente ListadoDeCitas */}
        <ListadoDeCitas citas={[cita]} />
      </div>
    </>
  )
}

export default App
