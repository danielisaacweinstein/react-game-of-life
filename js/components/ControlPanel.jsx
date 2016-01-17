"use strict"

import React from 'react'
import { TickButton } from './TickButton.jsx'
import { PauseButton } from './PauseButton.jsx'
import { ResetButton } from './ResetButton.jsx'
import { RandomizeButton } from './RandomizeButton.jsx'
import { GliderButton } from './GliderButton.jsx'
import { TickCounter } from './TickCounter.jsx'

export class ControlPanel extends React.Component {
  render() {
    return (
      <div>
        <div className='leftButton'>
          <div>CONFIGURE</div>
          <RandomizeButton
            onRandomizeClick={this.props.onRandomizeClick}
          />
          <GliderButton
            onGliderClick={this.props.onGliderClick}
          />
        </div>
        <div className='centerButton'>
          <div>CONTROL</div>
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
        </div>
        <div className='rightButton'>
          <div>COUNT</div>
          <TickCounter
            tickCount={this.props.tickCount}
          />
        </div>
      </div>
    );
  }
}
