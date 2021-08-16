import React, { useState } from 'react'
// import { cpf } from 'cpf-cnpj-validator'
import * as S from './styled'

export default function Formulario() {
  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [nascimento, setNascimento] = useState('')
  const [endereço, setEndereço] = useState('')
  const [cep, setCep] = useState('')
  const [bairro, setBairro] = useState('')
  const [cidade, setCidade] = useState('')
  const [estado, setEstado] = useState('')
  const [telefoneFixo1, setTelefoneFixo1] = useState('')
  const [telefoneFixo2, setTelefoneFixo2] = useState('')
  const [celular, setCelular] = useState('')
  const [contato, setContato] = useState('')
  const [email, setEmail] = useState('')
  const [identidade, setIdentidade] = useState('')
  const [cpf, setCpf] = useState('')

  function handleEnviar() {}

  return (
    <S.Container>
      <form>
        <S.Title>Dados pessoais</S.Title>
        <S.Content>
          <S.InputContent>
            <S.Label htmlFor="nomeInput">Nome Completo*</S.Label>
            <S.InputGrande
              className="nomeInput"
              value={nome}
              required="*"
              onChange={e => setNome(e.target.value)}
            />
          </S.InputContent>
          <S.InputContent>
            <S.Label htmlFor="cargoInput">Cargo Pretendido*</S.Label>
            <S.InputGrande
              className="cargoInput"
              value={cargo}
              required="*"
              onChange={e => setCargo(e.target.value)}
            />
          </S.InputContent>
        </S.Content>
        <S.Content>
          <S.InputContent>
            <S.Label htmlFor="nascimentoInput">Data de Nascimento*</S.Label>
            <S.Input
              className="nascimentoInput"
              placeholder="ex: xx/xx/xxxx"
              value={nascimento}
              required="*"
              onChange={e => setNascimento(e.target.value)}
            />
          </S.InputContent>
          <S.InputContent>
            <S.Label htmlFor="estadocivilSelect">Estado Civil</S.Label>
            <S.Select>
              <option value="solteiro">Solteiro</option>
              <option value="casado">Casado</option>
              <option value="separado">Separado</option>
              <option value="divorciado">Divorciado</option>
              <option value="viuvo">Viúvo</option>
            </S.Select>
          </S.InputContent>
          <S.InputContent>
            <S.Label htmlFor="sexoSelect">Sexo</S.Label>
            <S.Select>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
            </S.Select>
          </S.InputContent>
        </S.Content>
        <S.Content>
          <S.InputContent>
            <S.Label htmlFor="enderecoInput">Endereço*</S.Label>
            <S.InputGrande
              className="enderecoInput"
              placeholder="ex: Nome da Rua, 56. Bloco 2, Ap 301"
              value={endereço}
              required="*"
              onChange={e => setEndereço(e.target.value)}
            />
          </S.InputContent>
          <S.InputContent>
            <S.Label htmlFor="cepInput">CEP*</S.Label>
            <S.Input
              className="cepInput"
              value={cep}
              required="*"
              onChange={e => setCep(e.target.value)}
            />
          </S.InputContent>
        </S.Content>
        <S.Content>
          <S.InputContent>
            <S.Label htmlFor="bairroInput">Bairro*</S.Label>
            <S.Input
              className="bairroInput"
              value={bairro}
              required="*"
              onChange={e => setBairro(e.target.value)}
            />
          </S.InputContent>
          <S.InputContent>
            <S.Label htmlFor="cidadeInput">Cidade*</S.Label>
            <S.Input
              className="cidadeInput"
              value={cidade}
              required="*"
              onChange={e => setCidade(e.target.value)}
            />
          </S.InputContent>
          <S.InputContent>
            <S.Label htmlFor="estadoInput">Estado*</S.Label>
            <S.Input
              className="estadoInput"
              value={estado}
              required="*"
              onChange={e => setEstado(e.target.value)}
            />
          </S.InputContent>
        </S.Content>
        <S.Content>
          <S.InputContent>
            <S.Label htmlFor="telefoneFixo1Input">Telefone Fixo 1</S.Label>
            <S.Input
              className="telefoneFixo1Input"
              value={telefoneFixo1}
              onChange={e => setTelefoneFixo1(e.target.value)}
            />
          </S.InputContent>
          <S.InputContent>
            <S.Label htmlFor="telefoneFixo2Input">Telefone Fixo 2</S.Label>
            <S.Input
              className="telefoneFixo2Input"
              value={telefoneFixo2}
              onChange={e => setTelefoneFixo2(e.target.value)}
            />
          </S.InputContent>
          <S.InputContent>
            <S.Label htmlFor="celularInput">Celular*</S.Label>
            <S.Input
              className="celularInput"
              value={celular}
              required="*"
              onChange={e => setCelular(e.target.value)}
            />
          </S.InputContent>
        </S.Content>
        <S.Content>
          <S.InputContent>
            <S.Label htmlFor="contatoInput">Contato</S.Label>
            <S.Input
              className="contatoInput"
              value={contato}
              onChange={e => setContato(e.target.value)}
            />
          </S.InputContent>
          <S.InputContent>
            <S.Label htmlFor="emailInput">Email*</S.Label>
            <S.Input
              className="emailInput"
              placeholder="ex:myname@example.com"
              value={email}
              required="*"
              onChange={e => setEmail(e.target.value)}
            />
          </S.InputContent>
        </S.Content>
        <S.Content>
          <S.InputContent>
            <S.Label htmlFor="identidadeInput">Identidade</S.Label>
            <S.Input
              className="identidadeInput"
              value={identidade}
              onChange={e => setIdentidade(e.target.value)}
            />
          </S.InputContent>
          <S.InputContent>
            <S.Label htmlFor="cpfInput">CPF*</S.Label>
            <S.Input
              className="cpfInput"
              value={cpf}
              required="*"
              onChange={e => setCpf(e.target.value)}
            />
          </S.InputContent>
          <S.InputContent>
            <S.Label htmlFor="veiculoSelect">Possui veículo</S.Label>
            <S.Select>
              <option value="sim">Sim</option>
              <option value="não">Não</option>
            </S.Select>
          </S.InputContent>
          <S.InputContent>
            <S.Label htmlFor="habilitacaoSelect">Habilitação</S.Label>
            <S.Select>
              <option value="categoriaA">Categoria A</option>
              <option value="categoriaB">Categoria B</option>
              <option value="categoriaC">Categoria C</option>
              <option value="categoriaD">Categoria D</option>
              <option value="categoriaE">Categoria E</option>
              <option value="outra">Outra Categoria</option>
            </S.Select>
          </S.InputContent>
        </S.Content>
        <S.ContentButton>
          <S.Button type="submit" onClick={handleEnviar}>
            Enviar
          </S.Button>
        </S.ContentButton>
      </form>
    </S.Container>
  )
}
