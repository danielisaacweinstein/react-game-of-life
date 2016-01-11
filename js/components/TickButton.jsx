"use strict"

import React from 'react'

export class TickButton extends React.Component {
  handleClick() {
    this.props.onButtonClick()
  }

  render() {
    return (
      <div >
        <button
          onClick={this.handleClick}>
          Tick.
        </button>
      </div>
    );
  }
}