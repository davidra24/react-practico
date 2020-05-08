import React from 'react';
import { video, state } from '../../data/state';
import { connect } from 'react-redux';
import '../../styles/pages/App.scss';
import { Search } from '../../components/search';
import { Categories } from '../../components/carousel';
import { Carousel } from '../../components/carousel/Carousel';
import CarouselItem from '../../components/carousel/CarouselItem';
import { Loading } from '../../components/loading';
import { useInitialState } from '../../hooks/useInitialState';
import reducer from '../../reducer';

//const API = 'http://localhost:3000/initialState';

const Home = ({ mylist, trends, originals, email }: any) => {
  return (
    <>
      <Search isHome />
      {mylist.length > 0 && (
        <Categories title='Mi lista'>
          <Carousel>
            {mylist.map((item: video) => (
              <CarouselItem key={item.id} {...item} isFavorite />
            ))}
          </Carousel>
        </Categories>
      )}
      {!trends || trends.length === 0 ? (
        <Loading />
      ) : (
        <Categories title='Tendencias'>
          <Carousel>
            {trends.map((item: video) => (
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
      )}
      {!originals || originals.length === 0 ? (
        <Loading></Loading>
      ) : (
        <Categories title='Originales'>
          <Carousel>
            {originals.map((item: video) => (
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
      )}
    </>
  );
};

const mapStateToProps = (state: state) => {
  return {
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Home);
