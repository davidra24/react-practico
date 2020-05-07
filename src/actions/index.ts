import { SET_FAVORITE, DELETE_FAVORITE, LOGIN_REQUEST } from '../types';
import { Dispatch } from 'redux';
import { video } from '../data/state';

export const setFavorite = (payload: any) => (
  dispatch: Dispatch,
  getState: any
) => {
  const { id } = payload;

  const { mylist } = getState();

  let existe = false;
  mylist.forEach((element: video) => {
    if (element.id === id) existe = true;
    return;
  });

  if (!existe) {
    dispatch({
      type: SET_FAVORITE,
      payload,
    });
  }
};

export const deleteFavorite = (payload: any) => ({
  type: DELETE_FAVORITE,
  payload,
});

export const loginRequest = (payload: any) => ({
  type: LOGIN_REQUEST,
  payload,
});
