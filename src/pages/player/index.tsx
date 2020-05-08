import React, { useEffect, useState } from 'react';
import '../../styles/pages/Player.scss';
import { connect } from 'react-redux';
import { state } from '../../data/state';
import { getVideoSrc } from '../../actions';
import { Redirect } from 'react-router-dom';
import { Loading } from '../../components/loading';

const Player = (props: any) => {
  const {
    match: {
      params: { id },
    },
    history,
    getVideoSrc,
    playing,
  } = props;

  const hasPlaying = Object.keys(playing).length > 0;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getVideoSrc(id);
    setLoading(false);
  }, []);

  if (loading) return <Loading />;

  return hasPlaying ? (
    <div className='Player'>
      <video controls autoPlay>
        <source src={playing.source} type='video/mp4' />
      </video>
      <div className='Player-back'>
        <button type='button' onClick={() => history.goBack()}>
          Regresar
        </button>
      </div>
    </div>
  ) : (
    <Redirect to='/404' />
  );
};

const mapStateToProps = (state: state) => {
  const { playing } = state;
  return {
    playing,
  };
};

const mapDispatchToProps = {
  getVideoSrc,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
