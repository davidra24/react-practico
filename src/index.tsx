import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from './reducer';
import { state } from './data/state';

import { initialState as initial } from './api/initialState.json';

const user = {};
const playing = {};
const initalState: state = { ...initial, user, playing };

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initalState,
  composeEnhancers(applyMiddleware(reduxThunk))
);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
