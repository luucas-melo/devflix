import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import { Button } from '../styles';
import videoRepository from '../../../repositories/videos';
import categoriesRepository from '../../../repositories/categories';

function CadastroVideo() {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const categoryTitles = categories.map(({ title }) => title);
  const { handleOnChange, values } = useForm({});

  useEffect(() => {
    categoriesRepository
      .getAll()
      .then((categoriesFromServer) => {
        setCategories(categoriesFromServer);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        // const ChosenCategory = categories.find((category) => category.title === values.category);
        // console.log('categoria escolhida', ChosenCategory);
        // alert('Video Cadastrado com sucesso!!!');
        videoRepository.create({
          title: values.title,
          url: values.url,
          categoriaId: values.categoriaId,
        })
          .then(() => {
            history.push('/');
          });
      }}
      >
        <FormField
          label="Titulo do Video"
          name="title"
          value={values.title}
          onChange={handleOnChange}
        />
        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleOnChange}
        />
        <FormField
          label="Categoria"
          name="category"
          value={values.category}
          onChange={handleOnChange}
          suggestions={categoryTitles}

        />

        <div>
          <Button type="submit">
            Cadastrar
          </Button>
          <Button type="button">
            Limpar
          </Button>
        </div>

      </form>
      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
