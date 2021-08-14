import React from 'react'
import * as S from './styled'
import { useHistory } from 'react-router-dom'

function App(props) {
  const history = useHistory()

  function handleFormulario() {
    history.push('/formulario')
  }

  return (
    <S.Button type="button" onClick={handleFormulario}>
      Formulario
    </S.Button>
  )
}

export default App
