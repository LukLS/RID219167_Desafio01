import React, { useState } from 'react';
import './FaleConosco.css';

const FaleConosco = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { nome, email };

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbw4Gbodwit-y-454ES4I6-1V0XHeGE6vCiUNdTDWhAr9jHbGfLZP89vzBWVpWEMf7NC/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
      alert('Dados enviados com sucesso!');
    } catch (error) {
      alert('Erro ao enviar dados');
    }
  };

  return (
    <div className='contato'>
      <h1>Conheça mais sobre os nossos serviços</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder='Nome' value={nome} onChange={(e) => setNome(e.target.value)} />
        <input placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <button type='submit'>Fale Conosco</button>
      </form>
    </div>
  )
}

export default FaleConosco;
