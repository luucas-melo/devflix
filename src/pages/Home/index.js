import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriesRepository from '../../repositories/categories';
import PageDefault from '../../components/PageDefault';

function Home() {
  const [initialData, setInitialData] = useState([]);

  useEffect(() => {
    categoriesRepository.getAllWithVideos()
      .then((categoriesWithvideos) => {
        setInitialData(categoriesWithvideos);
      })
      .catch((err) => {
        alert('falha ao buscar dados');
        console.log(err.message);
      });
  }, []);
  return (
    <PageDefault paddingAll={0} buttonName="Novo vídeo" buttonRoute="/cadastro/video">
      {initialData.length === 0 && (<div> Loading... </div>)}
      {initialData.map((category, indice) => {
        if (indice === 0) {
          return (
            <div key={category.id}>
              <BannerMain
                titleVideo={initialData[0].videos.title}
                url={initialData[0].videos[0].url}
                videoDescription={initialData[0].videos[0].description}
              />

              <Carousel
                ignoreFirstVideo
                category={initialData[0]}
              />
            </div>
          );
        }
        return (
          <Carousel
            key={category.id}
            category={category}
          />
        );
      })}

    </PageDefault>

  );
}

export default Home;
