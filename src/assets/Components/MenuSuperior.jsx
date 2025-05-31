import React from 'react'
import './MenuSuperior.css'

//Menu superior da Página
const MenuSuperior = () => {
  return (
    <>
    <div className='superior'>
        <h1>Tradição em Projetos de Arquitetura</h1>
        <h2>Arquitetura residencial e comercial. </h2>
    </div>
    <div className='superior2'>
    <div className='info-bloco'>
        <strong>850</strong>
        <p>empreendimentos construídos</p>
    </div>
    <div className='info-bloco'>
        <strong>40</strong>
        <p>anos de mercado e experiência</p>
    </div>
    <div className='info-bloco'>
        <strong>2,000,000</strong>
        <p>m² em projetos construídos</p>
    </div>
</div>

    </>
  )
}

export default MenuSuperior;