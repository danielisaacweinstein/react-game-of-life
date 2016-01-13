"use strict"

import React from 'react'

export class PauseButton extends React.Component {
  handleClick() {
    this.props.onPauseClick(this.props.isPaused);
  }

  render() {
    return (
      <div>
        <button
          onClick={this.handleClick.bind(this)}>
          Pause/Unpause.
        </button>
      </div>
    );
  }
}
