import React from 'react'
import Titulo from './components/Titulo'
import Produto from './components/Produto'

const Produtos = () => {
  const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
  ];
  
  return (
    <section>
      <Titulo texto="Produtos" />
    {produtos.map((produto)=> 
      <Produto key={produtos.nome} {...produto} />
    )}
    </section>
  )
}

export default Produtos
