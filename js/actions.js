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

export function highlightCell(cellIndex) {
  return {
    type: 'HIGHLIGHT_CELL',
    data: {
      index: cellIndex
    }
  }
}
