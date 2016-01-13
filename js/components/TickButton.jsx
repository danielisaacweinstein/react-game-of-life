"use strict"

import React from 'react'

export class TickButton extends React.Component {
  handleClick() {
    this.props.onTickClick();
  }

  render() {
    return (
      <div>
        <button
          onClick={this.handleClick.bind(this)}>
          Tick.
        </button>
      </div>
    );
  }
}