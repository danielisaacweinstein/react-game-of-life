"use strict"

import React from 'react'
import { Button } from 'belle'

export class PauseButton extends React.Component {
  handleClick() {
    this.props.onPauseClick(this.props.isPaused);
  }

  render() {
    let buttonText = this.props.isPaused ? "Play" : "Pause";

    return (
      <div>
        <Button
          primary
          onClick={this.handleClick.bind(this)}>
          {buttonText}
        </Button>
      </div>
    );
  }
}
