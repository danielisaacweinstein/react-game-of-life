"use strict"

import React from 'react'
import { connect } from 'react-redux'
import { LifeGrid } from './LifeGrid.jsx'
import { TickButton } from './TickButton.jsx'
import { highlightCell, tick } from '../actions.js'

export class Life extends React.Component {
  render() {
    const { dispatch, gridWidth, gridState } = this.props

    return (
      <div>
        <TickButton
          onButtonClick={ () => { dispatch(tick()) } }
        />
        <LifeGrid
          width={this.props.gridWidth}
          gridState={this.props.gridState}
          onCellClick={ (i) => { dispatch(highlightCell(i)) } }
        />
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