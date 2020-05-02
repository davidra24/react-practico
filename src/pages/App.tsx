import React, { useEffect, useState } from 'react';
import { state, video } from '../model/state';
import '../styles/pages/App.scss';
import { Header } from '../components/header';
import { Search } from '../components/search';
import { Categories } from '../components/carousel';
import { Carousel } from '../components/carousel/Carousel';
import { CarouselItem } from '../components/carousel/CarouselItem';
import { Footer } from '../components/footer';
import { Loading } from '../components/loading';
import { useInitialState } from '../hooks/useInitialState';

const API = 'http://localhost:3000/initialState';

const App = () => {
  const videos = useInitialState(API);
  return (
    <div className='App'>
      <Header />
      <Search />
      {videos.mylist.length > 0 && (
        <Categories title='Mi lista'>
          <Carousel>
            {videos.mylist.map((item: video) => (
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
      )}
      {videos.trends.length === 0 ? (
        <Loading />
      ) : (
        <Categories title='Tendencias'>
          <Carousel>
            {videos.trends.map((item: video) => (
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
      )}
      {videos.originals.length === 0 ? (
        <Loading></Loading>
      ) : (
        <Categories title='Originales'>
          <Carousel>
            {videos.originals.map((item: video) => (
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
      )}
      <Footer />
    </div>
  );
};

export default App;
