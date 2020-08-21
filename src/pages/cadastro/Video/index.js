import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import { Button } from '../styles';
import videosRepository from '../../../repositories/videos';
import categoriesRepository from '../../../repositories/categories';
import ListComponent from '../../../components/ListItem';

function CadastroVideo() {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const [videos, setVideos] = useState([]);
  const categoryTitles = categories.map(({ title }) => title);
  const { handleOnChange, values } = useForm({});

  useEffect(() => {
    categoriesRepository
      .getAll()
      .then((categoriesFromServer) => {
        setCategories(categoriesFromServer);
      });
    videosRepository.getAllVideos()
      .then((videosFromServer) => {
        setVideos(videosFromServer);
      });
  }, []);
  function handleRemove(id) {
    const newList = videos.filter((video) => video.id !== id);
    setVideos(newList);
  }
  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        // const ChosenCategory = categories.find((category) => category.title === values.category);
        // console.log('categoria escolhida', ChosenCategory);
        // alert('Video Cadastrado com sucesso!!!');

        if (categoryTitles.find((categoryName) => categoryName === values.category)) {
          const chosenCategory = categories
            .find((category) => category.title === values.category);

          videosRepository.create({
            title: values.title,
            url: values.url,
            categoriaId: chosenCategory.id,
          })
            .then(() => {
              history.push('/');
            });
        } else {
          alert('Categoria inexistente, a mesma deve ser criada antes de cadastrar o vídeo');
          history.push('/cadastro/categoria');
        }
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

        <Button.Div>
          <Button type="submit">
            Cadastrar
          </Button>
          <Button type="button">
            Limpar
          </Button>
        </Button.Div>

      </form>
      <ListComponent
        dataTypeDeleted={videos}
        onRemove={handleRemove}
        deleteFromRepository={videosRepository.deleteVideos}
      />
      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
