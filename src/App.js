import React from 'react'
import Header from './components/Header'
import Home from './Home'
import Produtos from './Produtos'

const App = () => {
  const {pathname} = window.location;

  let Pagina;

  if(pathname === '/Produtos.js'){
    Pagina = Produtos;
  } else {
    Pagina = Home
  }
    
  return (
    <section>
      <Header />
      <Pagina />
    </section>
  )
}

export default App
