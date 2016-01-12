"use strict"

import React from 'react'
import ReactDOM from 'react-dom'
import reducer from './reducer.js'
import { LifeContainer } from './components/Life.jsx'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { setInitialState } from './actions.js'

const store = createStore(reducer);

store.dispatch(setInitialState());

ReactDOM.render(
  <Provider store={store}>
    <LifeContainer />
  </Provider>,
  document.getElementById('react')
)
