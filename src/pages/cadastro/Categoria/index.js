/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable spaced-comment */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import { Button } from '../styles';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import config from '../../../config';
import categoriesRepository from '../../../repositories/categories';
import ListComponent from '../../../components/ListItem';


function CategoryRegister() {
  const InitialValues = {
    title: '',
    description: '',
    color: '#000000',
  };
  const { handleOnChange, values, clearForm } = useForm(InitialValues);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    categoriesRepository.getAll()
      .then((response) => {
        setCategories([
          ...response,
        ]);
      });
  }, []);

  function handleRemove(id) {
    const newList = categories.filter((category) => category.id !== id);
    setCategories(newList);
  }
  return (
    <PageDefault>

      <h1>Cadastro de Categoria: {values.title}</h1>

      <form onSubmit={function handleSubmit(e) {
        e.preventDefault();
        categoriesRepository.createCategories({
          title: values.title,
          color: values.color,
        });
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
          <Button type="button" onClick={clearForm}>
            Limpar
          </Button>
        </Button.Div>
      </form>

      {categories.lenght === 0 && (
        <div>
          Loading...
        </div>
      )}
      <ListComponent categories={categories} onRemove={handleRemove} />
      <Link to="/">
        Ir para home
      </Link>

    </PageDefault>
  );
}

export default CategoryRegister;
