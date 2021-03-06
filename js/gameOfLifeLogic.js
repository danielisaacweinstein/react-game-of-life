"use strict"

// Rules
// 1) A live cell with < 2 live neighbor dies.
// 2) A live cell with 2 or 3 live neighbor survives.
// 3) A live cell with > 3 live neighbor dies.
// 4) A dead cell with 3 live neighbors comes back to life.

function getLiveNeighborCount(gridState) {  
  let [x, y] = this.getIn(['index']).toJS();
  
  let directions = [[-1, 0],    // West
                    [-1, 1],    // Northwest
                    [0, 1],     // North
                    [1, 1],     // Northeast
                    [1, 0],     // East
                    [1, -1],    // Southeast
                    [0, -1],    // South
                    [-1, -1]]   // Southwest
 
  let liveNeighborCount = 0;
 
  directions.forEach((d) => {
    let neighborX = x + d[0];
    let neighborY = y + d[1];

    // Check that neighbor is adjacent to current square. Otherwise,
    // Immutable will access the wrong side of the List.
    let neighborOnGrid = (neighborX > 0 && neighborY > 0 &&
                           neighborX < gridState.size &&
                           neighborY < gridState.size)

    if (neighborOnGrid) {
      liveNeighborCount += gridState.getIn([x + d[0], y + d[1], 'alive']) ? 1 : 0;
    }
  });

  return liveNeighborCount;
}

function updateCell(count) {
  let currentlyAlive = this.getIn(['alive']);

  return this.updateIn(['alive'], () => {
    switch (true) {
    case (currentlyAlive && count < 2):
      return false;
    case (currentlyAlive && (count == 2 || count == 3)):
      return true;
    case (currentlyAlive && count > 3):
      return false;
    case (!currentlyAlive && count == 3):
      return true;
    default:
      return false;
    }
  });
}

export function tick(state, incomingData) {
  let gridState = state.getIn(['gridState']);

  let nextGrid = gridState.map(
    ((row, i, gridContext) => {
      return row.map(
        ((cell, j, rowContext) => {
          let count = getLiveNeighborCount.call(cell, gridState);
          return updateCell.call(cell, count);
        }), gridState
      );
    }), gridState
  );

  let nextState = state.updateIn(['gridState'], () => {return nextGrid});
  nextState = nextState.updateIn(['tickCount'], (count) => {return (count + 1)})

  return nextState;
}
