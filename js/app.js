"use strict"

import React from 'react'
import ReactDOM from 'react-dom'
import reducer from './reducer.js'
import { Life } from './components/Life.jsx'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { setInitialState } from './actions.js'

const store = createStore(reducer)

store.dispatch(setInitialState())

ReactDOM.render(
  <Provider>
    <Life />
  <Provider />,
  document.getElementById('react')
)
