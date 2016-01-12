"use strict"

import React from 'react'
import classNames from 'classnames'
import { Cell } from './Cell.jsx'

export class LifeGrid extends React.Component {
  collectCells(gridState) {
    let currentState = gridState.toJS() // Extract state from Immutable List into 2D array

    let cellRows = currentState.map((row, rowIndex) => {
      let cells = row.map((cell, cellIndex) => {
        return (
          <Cell
            index={[rowIndex, cellIndex]}
            alive={currentState[rowIndex][cellIndex].alive}
            onCellClick={ this.props.onCellClick } />
        )
      })

      return cells
    })

  return cellRows
  }

  render() {
    var gridClass = classNames({
      'grid': true
    });

    return (
      <div className={gridClass}>
        {this.collectCells(this.props.gridState)}
      </div>
    );
  }
}