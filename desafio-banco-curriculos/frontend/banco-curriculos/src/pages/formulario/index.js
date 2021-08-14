import React, { useState } from 'react'
import * as S from './styled'

export default function Formulario() {
  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [endereço, setEndereço] = useState('')
  const [bairro, setBairro] = useState('')
  const [cidade, setCidade] = useState('')
  const [cep, setCep] = useState('')
  const [telefoneFixo1, setTelefoneFixo1] = useState('')
  const [telefoneFixo2, setTelefoneFixo2] = useState('')
  const [celular, setCelular] = useState('')
  const [contato, setContato] = useState('')
  const [email, setEmail] = useState('')
  const [identidade, setIdentidade] = useState('')
  const [cpf, setCpf] = useState('')

  return (
    <S.HomeContainer>
      <S.Content>
        <S.Input
          className="nomeInput"
          placeholder="Nome Completo"
          value={nome}
          onChange={e => setNome(e.target.value)}
        />
        <S.Input
          className="cargoInput"
          placeholder="Cargo Pretendido"
          value={cargo}
          onChange={e => setCargo(e.target.value)}
        />
        <S.Input
          className="enderecoInput"
          placeholder="Endereço"
          value={endereço}
          onChange={e => setEndereço(e.target.value)}
        />
        <S.Input
          className="bairroInput"
          placeholder="Bairro"
          value={bairro}
          onChange={e => setBairro(e.target.value)}
        />
        <S.Input
          className="cidadeInput"
          placeholder="Cidade"
          value={cidade}
          onChange={e => setCidade(e.target.value)}
        />
        <S.Input
          className="cepInput"
          placeholder="Cep"
          value={cep}
          onChange={e => setCep(e.target.value)}
        />
        <S.Input
          className="telefoneFixo1Input"
          placeholder="Telefone Fixo 1"
          value={telefoneFixo1}
          onChange={e => setTelefoneFixo1(e.target.value)}
        />
        <S.Input
          className="telefoneFixo2Input"
          placeholder="Telefone Fixo 2"
          value={telefoneFixo2}
          onChange={e => setTelefoneFixo2(e.target.value)}
        />
        <S.Input
          className="celularInput"
          placeholder="Celular"
          value={celular}
          onChange={e => setCelular(e.target.value)}
        />
        <S.Input
          className="contatoInput"
          placeholder="Contato"
          value={contato}
          onChange={e => setContato(e.target.value)}
        />
        <S.Input
          className="emailInput"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <S.Input
          className="identidadeInput"
          placeholder="Identidade"
          value={identidade}
          onChange={e => setIdentidade(e.target.value)}
        />
        <S.Input
          className="cpfInput"
          placeholder="CPF"
          value={cpf}
          onChange={e => setCpf(e.target.value)}
        />
      </S.Content>
    </S.HomeContainer>
  )
}
