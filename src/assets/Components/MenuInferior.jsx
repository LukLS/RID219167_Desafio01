import './MenuInferior.css'
import imgMeio from './../../assets/imagemFront1.png'

const MenuInferior = () => {
  return (
    <div className='inferior'>
      <div className="texto">
        <h1>Arquitetos com História e Experiência.</h1>
        <h2>
          Nós realizamos desde 2002 projetos e gerenciamento de obras. Com mais de 800 projetos e 2.000.000 de m² 
          construídos, tendo como principal proposta transformar em realidade os sonhos de seus clientes, criando projetos personalizados, unindo a tradição e a modernidade em nossos projetos.
        </h2>
      </div>
      <img src={imgMeio} alt="Imagem" />
    </div>
  )
}

export default MenuInferior
