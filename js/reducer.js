import * as Immutable from 'immutable'
import { tick } from './gameOfLifeLogic.js'

// Create new object which maps gridState to 2D Immutable array,
// and merge the results back into the prior state.
function setInitialState(state, incomingData) {
  let width = incomingData.gridWidth;
  let outerArray = [];

  for (let i = 0; i < width; i++) {
    let innerArray = [];
    for (let j = 0; j < width; j++) {
      innerArray.push(
        { index: [i, j],
          alive: false })
    }
    outerArray.push(innerArray);
  }

  return state.merge({gridState: Immutable.fromJS(outerArray), isPaused: true});
}

// Take the index supplied in incomingData, and use it to highlight
// the cell located at that index.
function highlightCell(state, incomingData) {
  let index = incomingData.index;
  return state.updateIn(['gridState', index[0], index[1], 'alive'],
                                (value) => {return true});
}

function unhighlightCell(state, incomingData) {
  let index = incomingData.index;
  return state.updateIn(['gridState', index[0], index[1], 'alive'],
                                (value) => {return false});
}

function pause(state, incomingData) {
  return state.updateIn(['isPaused'], () => {return true})
}

function unpause(state, incomingData) {
  return state.updateIn(['isPaused'], () => {return false})
}

function reducer(state = Immutable.Map(), action) {
  console.log(action.type);
  switch (action.type) {
    case 'SET_INITIAL_STATE':
      return setInitialState(state, action.data);
    case 'HIGHLIGHT_CELL':
      return highlightCell(state, action.data);
    case 'UNHIGHLIGHT_CELL':
      return unhighlightCell(state, action.data);
    case 'TICK':
      return tick(state, action.data);
    case 'PAUSE':
      return pause(state, action.data);
    case 'UNPAUSE':
      return unpause(state, action.data);
  }
  return state;
}

export default reducer
