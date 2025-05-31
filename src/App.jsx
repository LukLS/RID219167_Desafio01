import { useState } from 'react'
import './App.css'
import MenuSuperior from './assets/Components/MenuSuperior'
import MenuInferior from './assets/Components/MenuInferior'
import FaleConosco from './assets/Components/FaleConosco'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <MenuSuperior/>
    <MenuInferior/>
    <FaleConosco/>
   </div>
  )
}

export default App
