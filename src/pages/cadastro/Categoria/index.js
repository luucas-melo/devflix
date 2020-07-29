import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import { Label ,Button } from './styles';
function CadastroCategoria() {
  return (
    <PageDefault>

      <h1 className="title">Nova categoria</h1>
      <form>
        <Label>
          <input
            type="text"
            placeholder="Nome"
          />
        </Label>
        <Label>
          <textarea
            type="text"
            placeholder="Teste"
          />
        </Label>
        <Label>
          <input
            type="text"
            placeholder="Cor"
          />
        </Label>
        <Label>
          <input
            type="text"
            placeholder="Código de segurança"
          />
        </Label>
        <Button>
          Salvar
        </Button>
        <Button>
          Limpar
        </Button>

      </form>


      <Link to="/">
        Ir para home
      </Link>

    </PageDefault>
  )
}

export default CadastroCategoria;