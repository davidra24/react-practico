import React from 'react';
import play from '../../assets/play-icon.png';
import plus from '../../assets/plus-icon.png';
import remove from '../../assets/remove.png';
import { connect } from 'react-redux';
import { setFavorite, deleteFavorite } from '../../actions';
import { Link } from 'react-router-dom';

const CarouselItem = (props: any) => {
  const { id, cover, title, year, contentRating, duration, isFavorite } = props;

  const handleSetFavorite = () => {
    console.log('entra');
    props.setFavorite({ id, cover, title, year, contentRating, duration });
  };
  const handleDeleteFavorite = (id: any) => {
    props.deleteFavorite(id);
  };

  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt={title} />
      <div className='carousel-item__details'>
        <div>
          <Link to={`/player/${id}`}>
            <img
              className='carousel-item__details--img'
              src={play}
              alt='Play Icon'
            />
          </Link>
          {isFavorite ? (
            <img
              className='carousel-item__details--img'
              src={remove}
              alt='Remove Icon'
              onClick={() => handleDeleteFavorite(id)}
            />
          ) : (
            <img
              className='carousel-item__details--img'
              src={plus}
              alt='Plus Icon'
              onClick={handleSetFavorite}
            />
          )}
        </div>
        <p className='carousel-item__details--title'>{title}</p>
        <p className='carousel-item__details--subtitle'>{`${year} ${contentRating} ${duration}`}</p>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);
