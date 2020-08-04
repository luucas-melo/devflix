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
    <PageDefault paddingAll={0}>
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

      {/*
      <BannerMain
        videoTitle={initialData.categories[0].videos[0].title}
        url={initialData.categories[0].videos[0].url}
        videoDescription="Aprenda de uma maneira simples a fazer um bom ravioli com a vencedora do mastercheff profisional, Deise Paparoto."
      />

      <Carousel
        ignoreFirstVideo
        category={initialData.categories[0]}
      />

      <Carousel
        category={initialData.categories[1]}
      />

      <Carousel
        category={initialData.categories[2]}
      />

      <Carousel
        category={initialData.categories[3]}
      />

      <Carousel
        category={initialData.categories[4]}
      />
    */}
    </PageDefault>

  );
}

export default Home;
