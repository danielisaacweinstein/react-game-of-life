"use strict"

import React from 'react'
import classNames from 'classnames'
import { Cell } from './Cell.jsx'

export class LifeGrid extends React.Component {

  render() {
    var gridClass = classNames({
      'grid': true
    });

    let currentState = this.props.gridState.toJS();

    let table = (
      <table className={gridClass}>
        <tbody>
        {
          currentState.map((row, rowIndex) => {
            return (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => {
                  return (
                    <Cell
                      key={cellIndex}
                      index={[rowIndex, cellIndex]}
                      alive={currentState[rowIndex][cellIndex].alive}
                      onCellClick={this.props.onCellClick}
                    />
                  );
                })}
              </tr>
            );
          })
        }
        </tbody>
      </table>
    )
    return table
  }
}