"use strict"

import React from 'react'
import { TickButton } from './TickButton.jsx'
import { PauseButton } from './PauseButton.jsx'

export class ButtonPanel extends React.Component {
  render() {
    return (
      <div>
        <TickButton
          onTickClick={this.props.onTickClick}
        />
        <PauseButton
          isPaused={this.props.isPaused}
          onPauseClick={this.props.onPauseClick}
        />
      </div>
    );
  }
}
