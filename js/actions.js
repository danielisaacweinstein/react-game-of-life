// Action creators

export function setInitialState() {
  return {
    type: 'SET_INITIAL_STATE',
    data: {
      gridWidth: 40,
      gridState: [],
      isPaused: true
    } 
  }
}

export function tick() {
  return {
    type: 'TICK',
    data: {

    }
  }
}

export function pause() {
  return {
    type: 'PAUSE',
    data: {

    }
  }
}

export function unpause() {
  return {
    type: 'UNPAUSE',
    data: {

    }
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
