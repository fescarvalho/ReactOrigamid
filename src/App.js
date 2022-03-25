import React from 'react'
import Header from './components/Header'
import Home from './Home'
import Produtos from './Produtos'
import Testes from './Testes'
import Modal from './Modal'
import ButtonModal from './ButtonModal'

const App = () => {
  const {pathname} = window.location;

  let Pagina;

  if(pathname === '/Produtos.js'){
    Pagina = Produtos;
  } else {
    Pagina = Home
  }
  
  const [modal, setModal] = React.useState(false)
    
  return (
    <section>
      <Header />
      <Pagina />
      <Testes />
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal} />

    </section>
  )
}

export default App
