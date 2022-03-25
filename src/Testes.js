import React from 'react'

const Testes = () => {
  const [ativoValor, setAtivo] = React.useState(false)

  function handleClick() {
    setAtivo(!ativoValor)
  }
  return (
    <button onClick={handleClick}>{ativoValor ? 'Ativo': 'Inativo'}</button>
  )
}

export default Testes