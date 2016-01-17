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

  return state.merge({gridState: Immutable.fromJS(outerArray),
                      isPaused: true,
                      tickCount: 0});
}

function randomize(state, incomingData) {
  let width = state.getIn(['gridState']).size;
  let outerArray = [];

  for (let i = 0; i < width; i++) {
    let innerArray = [];
    for (let j = 0; j < width; j++) {
      let cellState = Math.random() > (.5) ? true : false;
      innerArray.push(
        { index: [i, j],
          alive: cellState })
    }
    outerArray.push(innerArray);
  }

  let nextState = state.updateIn(
                    ['gridState'],
                    () => {return Immutable.fromJS(outerArray)})
  nextState = nextState.updateIn(
                    ['tickCount'],
                    () => {return 0}); // Reset tickCount

  return nextState;
}

function getGlider(state, incomingData) {
  let gliderCells = [[2,1], [3,2], [3,3], [2,3], [1,3]];
  let nextState = state.getIn(['gridState']);

  gliderCells.forEach((index) => {
    nextState = nextState.updateIn([index[0], index[1], 'alive'],
                                  () => {return true});
  })

  return state.merge({gridState: nextState});
}

// Take the index supplied in incomingData, and use it to highlight
// the cell located at that index.
function highlightCell(state, incomingData) {
  let index = incomingData.index;
  let nextState = state.updateIn(
                    ['gridState', index[0], index[1], 'alive'],
                    (value) => {return true});
  nextState = nextState.updateIn(
                    ['tickCount'],
                    () => {return 0}); // Reset tickCount
  return nextState;
}

function unhighlightCell(state, incomingData) {
  let index = incomingData.index;
  let nextState = state.updateIn(
                    ['gridState', index[0], index[1], 'alive'],
                    (value) => {return false});
  nextState = nextState.updateIn(
                    ['tickCount'],
                    () => {return 0}); // Reset tickCount
  return nextState;
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
    case 'RANDOMIZE':
      return randomize(state, action.data);
    case 'GET_GLIDER':
      return getGlider(state, action.data);
  }
  return state;
}

export default reducer
