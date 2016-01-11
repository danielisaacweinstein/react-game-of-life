"use strict"

import React from 'react'
import { Cell } from './Cell.jsx'

let gridStyle = {
  backgroundColor: '#e6e6e6',
  width: '160px',
  height: '160px'
}

export class LifeGrid extends React.Component {
  collectCells(gridState) {
    let currentState = gridState.toJS() // Extract state from Immutable List into 2D array

    let cellRows = currentState.map((row, rowIndex) => {
      let cells = row.map((cell, cellIndex) => {
        return (<Cell
                 index={[rowIndex, cellIndex]}
                 alive={currentState[rowIndex][cellIndex].alive} />
        )
      })

      return cells
    })

  return cellRows
  }

  render() {
    return (
      <div style={gridStyle}>
        {this.collectCells(this.props.gridState)}
      </div>
    );
  }
}