import { state } from '../data/state';
import { initialState as initial } from '../api/initialState.json';
import { SET_FAVORITE, DELETE_FAVORITE, LOGIN_REQUEST } from '../types';

const user = {};
const playing = {};
const initalState: state = { ...initial, user, playing };

interface Action<T, P> {
  readonly type: T;
  readonly payload?: P;
}

const reducer = (state: state, action: Action<string, any>): any => {
  switch (action.type) {
    case SET_FAVORITE:
      return { ...state, mylist: [...state.mylist, action.payload] };
    case DELETE_FAVORITE:
      return {
        ...state,
        mylist: state.mylist.filter((items) => items.id !== action.payload),
      };
    case LOGIN_REQUEST:
      const { email } = action.payload;
      return { ...state, user: { email } };
    default:
      return state;
  }
};

export default reducer;
