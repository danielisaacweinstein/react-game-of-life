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

export function tick() {
  return {
    type: 'TICK'
  }
}

export function highlight(cellIndex) {
  return {
    type: 'HIGHLIGHT_CELL',
    data: {
      index: cellIndex
    }
  }
}

export function unhighlight(cellIndex) {
  return {
    type: 'UNHIGHLIGHT_CELL',
    data: {
      index: cellIndex
    }
  }
}
