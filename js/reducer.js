import * as Immutable from 'immutable'

// Return new state as an Immutable two-dimentional array
function setInitialState(state, incomingData) {
  let width = incomingData.gridWidth
  let outerArray = []

  for (let i = 0; i < width; i++) {
    let innerArray = []
    for (let j = 0; j < width; j++) {
      innerArray.push(
        { index: [i, j],
          alive: false })
    }
    outerArray.push(innerArray)
  }
  
  return state.merge({gridState: Immutable.fromJS(outerArray)})
}

function highlightCell(state, incomingData) {
  let index = incomingData.index;
  return state.updateIn(['gridState', index[0], index[1], 'alive'],
                                (value) => {return true})
}

function reducer(state = Immutable.Map(), action) {
  console.log(action.type)
  switch (action.type) {
    case 'SET_INITIAL_STATE':
      return setInitialState(state, action.data)
    case 'HIGHLIGHT_CELL':
      return highlightCell(state, action.data)
  }
  return state
}

export default reducer
