import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import { Label, Button } from './styles';
import FormField from '../../../components/FormField'
function CategoryRegister() {
  const InitialValues = {
    name: '',
    description: '',
    color: '',
  }

  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(InitialValues);

  function setValue(key, value) {
    //key: name, description, color
    setValues({
      ...values,
      [key]: value, //name: 'value'
    })
  }

  function handleOnChange(event) {
    setValue(
      event.target.getAttribute('name'),
      event.target.value
    );
  }
  return (
    <PageDefault>

      <h1 >Cadastro de Categoria: {values.name}</h1>
      <form onSubmit={function handleSubmit(event) {
        event.preventDefault()
        setCategories([
          ...categories,
          values,
        ]);
        setValues(InitialValues)
      }}>

        <FormField
          label="Nome da Categoria"
          type="text"
          name="name"
          placeholder="Name"
          value={values.name}
          onChange={handleOnChange}
        />

        <FormField
          label="Descricao"
          type="text"
          name="description"
          placeholder="Descricão"
          value={values.description}
          onChange={handleOnChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="color"
          placeholder="Cor"
          value={values.color}
          onChange={handleOnChange}
        />
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
        {categories.map((category, index) => {
          return (
            <li key={`${category}${index}`}>
              {category.name}
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

export default CategoryRegister;