/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable spaced-comment */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import { Button } from './styles';
import FormField from '../../../components/FormField';

function CategoryRegister() {
  const InitialValues = {
    name: '',
    description: '',
    color: '',
  };

  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(InitialValues);

  function setValue(key, value) {
    //key: name, description, color
    setValues({
      ...values,
      [key]: value, //name: 'value'
    });
  }

  function handleOnChange(event) {
    setValue(
      event.target.getAttribute('name'),
      event.target.value,
    );
  }
  useEffect(() => {
    const URL = 'http://localhost:3001/categorias';
    fetch(URL)
      .then(async (serverAnswer) => {
        const answer = await serverAnswer.json();
        setCategories([
          ...answer,
        ]);
      });
    //setCategories([
    //  ...categories,
    //  {
    //    id: 1,
    //    name: 'Front End',
    //    description: 'Uma categoria',
    //    color: '#cbd1ff',
    //  },
    //]);
    //console.log('teste teste');
    //setTimeout(() => {
    //}, 4000);
  }, []);
  return (
    <PageDefault>

      <h1>Cadastro de Categoria: {values.name}</h1>

      <form onSubmit={function handleSubmit(event) {
        event.preventDefault();
        setCategories([
          ...categories,
          values,
        ]);
        setValues(InitialValues);
      }}
      >

        <FormField
          label="Nome da Categoria"
          type="text"
          name="name"
          value={values.name}
          onChange={handleOnChange}
        />

        <FormField
          label="Descricao"
          type="textarea"
          name="description"
          value={values.description}
          onChange={handleOnChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="color"
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

      {categories.lenght === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categories.map((category, index) => (
          <li key={`${category}${index}`}>
            {category.name}
          </li>
        ))}
      </ul>
      <Link to="/">
        Ir para home
      </Link>

    </PageDefault>
  );
}

export default CategoryRegister;
