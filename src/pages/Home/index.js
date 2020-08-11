import React from 'react';
import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import dadosIniciais from '../../data/dados_iniciais.json';

function Home() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />

      <BannerMain 
      videoTitle       = {dadosIniciais.categorias[0].videos[0].titulo}
      url              = {dadosIniciais.categorias[0].videos[0].url}
      videoDescription = {"Você já se imaginou como as pessoas que sofrem os mais variados tipos de preconceitos lidam com isso todos os dias? Desde ser barrado em algum lugar ou um olhar torto no meio da rua deflagram situações corriqueiras de sentir opressão. E só quem sente na pele sabe. Assim, como devemos combater o preconceito velado e explícito todos os dias?"}/>

      <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[0]}/>

      <Carousel
      category={dadosIniciais.categorias[1]}/>

      <Carousel
      category={dadosIniciais.categorias[2]}/>

      <Carousel
      category={dadosIniciais.categorias[3]}/>

      <Carousel
      category={dadosIniciais.categorias[4]}/>

      <Carousel
      category={dadosIniciais.categorias[5]}/>

      <Carousel
      category={dadosIniciais.categorias[6]}/>

      <Footer/>  
    </div>
  );
}

export default Home;
