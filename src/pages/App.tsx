import React from 'react';
import '../styles/pages/App.scss';
import { Header } from '../components/header';
import { Search } from '../components/search';
import { Categories } from '../components/carousel';
import { Carousel } from '../components/carousel/Carousel';
import { CarouselItem } from '../components/carousel/CarouselItem';
import { Footer } from '../components/footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <Search />
      <Categories title='Mi lista'>
        <Carousel>
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </Categories>
      <Categories title='Tendencias'>
        <Carousel>
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </Categories>
      <Categories title='Originales'>
        <Carousel>
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </Categories>
      <Footer />
    </div>
  );
}

export default App;
