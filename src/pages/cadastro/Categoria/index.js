/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable spaced-comment */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import { Button } from '../styles';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import categoriesRepository from '../../../repositories/categories';

function CategoryRegister() {
  const InitialValues = {
    title: '',
    description: '',
    color: '#000000',
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

      <form onSubmit={function handleSubmit(e) {
        e.preventDefault();
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
        <Button.Div>
          <Button type="submit">
            Cadastrar
          </Button>
          <Button type="button">
            Limpar
          </Button>
        </Button.Div>
      </form>

      {categories.lenght === 0 && (
        <div>
          Loading...
        </div>
      )}

      <table border="1">
        {categories.map((category) => (
          <tr key={`${category.title}`}>
            <td>{category.title}</td>
            <td>{category.description}</td>
            <td>{category.color}</td>
          </tr>
        ))}
      </table>
      <Button.Div>
        <Button.Send type="submit">
          Enviar
        </Button.Send>
      </Button.Div>
      <Link to="/">
        Ir para home
      </Link>

    </PageDefault>
  );
}

export default CategoryRegister;
