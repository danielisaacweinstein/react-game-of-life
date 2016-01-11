"use strict"

import React from 'react'
import { connect } from 'react-redux'
import { LifeGrid } from './LifeGrid.jsx'
import { TickButton } from './TickButton.jsx'
import { highlight, unhighlight, tick } from '../actions.js'

export class Life extends React.Component {
  onCellClick(index, currentlyLive) {
    currentlyLive ? this.props.dispatch(unhighlight(index)):
                    this.props.dispatch(highlight(index))
  }

  onButtonClick() {
    this.props.dispatch(tick())
  }

  render() {
    const { dispatch, gridWidth, gridState } = this.props
    return (
      <div>
        <TickButton
          onButtonClick={this.onButtonClick.bind(this)}
        />
        <LifeGrid
          width={this.props.gridWidth}
          gridState={this.props.gridState}
          onCellClick={this.onCellClick.bind(this)}
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