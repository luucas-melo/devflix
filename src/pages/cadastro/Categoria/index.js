/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable spaced-comment */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import { Button } from '../styles';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';

function CategoryRegister() {
  const InitialValues = {
    title: '',
    description: '',
    color: '',
  };

  const { handleOnChange, values, clearForm } = useForm(InitialValues);
  const [categories, setCategories] = useState([]);

  /*
   useEffect(() => {
     const URL = window.location.hostname.includes('localhost')
       ? 'http://localhost:3001/categorias'
       : baseUrl + 'categorias';
       fetch(URL)
         .then(async (response) => {
           if (response.ok) {
             const answer = await response.json();
             setCategories(answer);
             return;
           }
           throw new Error('Não foi possível pegar os dados');
         });

   }, []);
 */

  return (
    <PageDefault>

      <h1>Cadastro de Categoria: {values.title}</h1>

      <form onSubmit={function handleSubmit(event) {
        event.preventDefault();
        setCategories([
          ...categories,
          values,
        ]);
        clearForm();
      }}
      >

        <FormField
          label="Nome da Categoria"
          type="text"
          name="title"
          value={values.title}
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
          <Button type="submit">
            Cadastrar
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
        {categories.map((category) => (
          <li key={`${category.title}`}>
            {category.title}
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
