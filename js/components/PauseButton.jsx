"use strict"

import React from 'react'
import classNames from 'classnames'

export class PauseButton extends React.Component {
  handleClick() {
    this.props.onPauseClick(this.props.isPaused);
  }

  render() {
    let buttonText = this.props.isPaused ? "Play" : "Pause";

    let cssStyling = classNames({
      'button': true,
      'unpaused': !this.props.isPaused
    })

    return (
      <div
        className={cssStyling}
        onClick={this.handleClick.bind(this)}>
          {buttonText}
      </div>
    );
  }
}
