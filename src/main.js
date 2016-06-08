import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'

import Gallery from './Gallery'

import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer'

import {Provider} from 'react-redux';

import {watchForLoadImages} from './sagas';

const store = createStore(
  reducer,
  applyMiddleware(createSagaMiddleware(watchForLoadImages))
);

ReactDOM.render(
  <Provider store={store}>
    <Gallery />
  </Provider>,
  document.getElementById('root')
);