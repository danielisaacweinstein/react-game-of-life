"use strict"

// Rules
// 1) A live cell with < 2 live neighbor dies.
// 2) A live cell with 2 or 3 live neighbor survives.
// 3) A live cell with > 3 live neighbor dies.
// 4) A dead cell with 3 live neighbors comes back to life.

// [-1, 0]  // West
// [-1, 1]  // Northwest
// [0, 1]   // North
// [1, 1]   // Northeast
// [1, 0]   // East
// [1, -1]  // Southeast
// [0, -1]  // South
// [-1, -1] // Southwest

// function countLiveNeighbords(cell, gridState) {

// }

export function tick(state, incomingData) {
  debugger;
  let gridState = state.getIn(['gridState'])
  let that = this;
  nextState = gridState.map((list) => {
    debugger;
    return list.map((cell) => {
      let index = cell.getIn(['index']).toJS()
      
      // gridState.getIn([index[0], index[1], 'alive'])

      // cell.getIn(['index', ])

      // debugger;
      return "1"
    })}
  )
}
