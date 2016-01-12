"use strict"

import React from 'react'
import { connect } from 'react-redux'
import { LifeGrid } from './LifeGrid.jsx'
import { TickButton } from './TickButton.jsx'
import { PauseButton } from './PauseButton.jsx'
import { highlight, unhighlight, tick, pause, unpause } from '../actions.js'

export class Life extends React.Component {
  onCellClick(index, currentlyLive) {
    currentlyLive ? this.props.dispatch(unhighlight(index)):
                    this.props.dispatch(highlight(index))
  }

  onButtonClick() {
    this.props.dispatch(tick());
  }

  onPauseClick(isPaused) {
    isPaused ? this.props.dispatch(unpause()):
               this.props.dispatch(pause())
  }

  tickCycle() {
    if (!this.props.isPaused) {
      this.props.dispatch(tick());
    }

    requestAnimationFrame(this.tickCycle);
  }

  componentDidMount() {
    this.tickCycle();
  }

  render() {
    const { dispatch, gridWidth, gridState, isPaused } = this.props;

    return (
      <div>
        <TickButton
          onButtonClick={this.onButtonClick.bind(this)}
        />
        <PauseButton
          isPaused={this.props.isPaused}
          onPauseClick={this.onPauseClick.bind(this)}
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
    gridState: state.get('gridState'),
    isPaused: state.get('isPaused')
  }
}

export const LifeContainer = connect(mapStateToProps)(Life);