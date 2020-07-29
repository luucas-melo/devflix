import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import { Label, Button } from './styles';
function CadastroCategoria() {
  const [categorias, setCategorias] = useState(['Teste']);
  const [nomeDaCategoria, setNomeDaCategoria] = useState('Valor Inicial');

  return (
    <PageDefault>

      <h1 >Cadastro de Categoria: {nomeDaCategoria}</h1>
      <form  onSubmit={function handleSubmit(event) {
        event.preventDefault()
        setCategorias([
          ...categorias,
          nomeDaCategoria
        ]);
      }}>
        <div>
          <label>
            <input
              type="text"
              placeholder="Nome"
              value={nomeDaCategoria}
              onChange={function handleOnCHange(info) {
                setNomeDaCategoria(info.target.value)
              }}
            />
          </label>
        </div>

        <div>
          <label>
            <textarea
              type="text"
              placeholder="Teste"
            />
          </label>
        </div>

        <div>
          <label>
            <input
              type="color"
              placeholder="Cor"
            />
          </label>
        </div>

        <div>
        <label>
          <input
            type="text"
            placeholder="Código de segurança"
          />
        </label>
        </div>

        <div>
        <Button>
          Salvar
        </Button>
        <Button>
          Limpar
        </Button>
        </div>
      </form>
    <ul>
      {categorias.map((categoria, index) => {
        return (
          <li key={`${categoria}${index}`}>
            {categoria}
          </li>
        );
      })}
    </ul>
    <Link to="/">
      Ir para home
      </Link>

    </PageDefault >
  )
}

export default CadastroCategoria;