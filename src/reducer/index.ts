import { state } from '../data/state';
import { initialState as initial } from '../api/initialState.json';
import {
  SET_FAVORITE,
  DELETE_FAVORITE,
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
  REGISTER_REQUEST,
  GET_VIDEO_SRC,
} from '../types';

const user = {};
const playing = {};
const initalState: state = { ...initial, user, playing };

interface Action<T, P> {
  readonly type: T;
  readonly payload?: P;
}

const reducer = (
  state: state = initalState,
  action: Action<string, any>
): any => {
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
    case LOGOUT_REQUEST:
      return { ...state, user: action.payload };
    case REGISTER_REQUEST:
      return { ...state, user: action.payload };
    case GET_VIDEO_SRC:
      return {
        ...state,
        playing:
          state.trends.find((item) => item.id === Number(action.payload)) ||
          state.originals.find((item) => item.id === Number(action.payload)),
      };
    default:
      return state;
  }
};

export default reducer;
