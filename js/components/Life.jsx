"use strict"

import React from 'react'
import { connect } from 'react-redux'
import { LifeGrid } from './LifeGrid.jsx'
import { highlightCell } from '../actions.js'

export class Life extends React.Component {
  render() {
    const { dispatch, gridWidth, gridState } = this.props

    return (
      <div>
        <LifeGrid
        width={this.props.gridWidth}
        gridState={this.props.gridState}
        onCellClick={
         (i) => { dispatch(highlightCell(i)) }
        } />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gridWidth: state.get('gridWidth'),
    gridState: state.get('gridState')
  }
}

export const LifeContainer = connect(mapStateToProps)(Life)