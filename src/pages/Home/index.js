import React from 'react';
import Menu from '../../components/Menu';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

function Home() {
  return (
    <div style={{ background: '#141414' }}>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categories[0].videos[0].title}
        url={dadosIniciais.categories[0].videos[0].url}
        videoDescription="Acompanhe essa série sobre matemática básica, afinal, uma boa base possibilita construir um bom aprendizado."
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categories[0]}
      />

      <Carousel
        category={dadosIniciais.categories[1]}
      />

      <Carousel
        category={dadosIniciais.categories[2]}
      />

      <Carousel
        category={dadosIniciais.categories[3]}
      />

      <Carousel
        category={dadosIniciais.categories[4]}
      />

      <Footer />
    </div>
  );
}

export default Home;
