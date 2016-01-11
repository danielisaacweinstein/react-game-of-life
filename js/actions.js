// Action creators

export function setInitialState() {
  return {
    type: 'SET_INITIAL_STATE',
    data: {
      gridWidth: 5,
      gridState: []
    }
  }
}
