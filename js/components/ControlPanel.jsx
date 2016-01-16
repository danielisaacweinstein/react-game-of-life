"use strict"

import React from 'react'
import classNames from 'classnames'
import { TickButton } from './TickButton.jsx'
import { PauseButton } from './PauseButton.jsx'
import { ResetButton } from './ResetButton.jsx'
import { TickCounter } from './TickCounter.jsx'

export class ControlPanel extends React.Component {
  render() {
    var panelClass = classNames({
      'buttonPanel': true
    });

    return (
      <div className={panelClass}>
        <TickButton
          onTickClick={this.props.onTickClick}
        />
        <PauseButton
          isPaused={this.props.isPaused}
          onPauseClick={this.props.onPauseClick}
        />
        <ResetButton
          onResetClick={this.props.onResetClick}
        />
        <TickCounter
          tickCount={this.props.tickCount}
        />
      </div>
    );
  }
}
