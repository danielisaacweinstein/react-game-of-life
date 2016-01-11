import { Map } from 'immutable'

function setInitialState(state, incomingData) {
  let width = newData.gridWidth
  let futureGridState = new Array(width)

  for (let i = 0; i < width; i++) {
    for (let j = 0; j < width; j++) {
      futureGridState.push(
        { index: [i, j],
          alive: false })
    }
  }

  incomingData.gridState = Immutable.fromJS(futureGridState)

  return state.merge(futureGridState)

}

function reducer(state = Map(), action) {
  console.log(action.type)
  switch (action.type) {
    case 'SET_INITIAL_STATE':
      return setInitialState(state, action.data)
  }
  return state
}

export default reducer
