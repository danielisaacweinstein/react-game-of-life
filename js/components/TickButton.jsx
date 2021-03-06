"use strict"

import React from 'react'

export class TickButton extends React.Component {
  handleClick() {
    this.props.onTickClick();
  }

  render() {
    return (
      <div
        className='button'
        onClick={this.handleClick.bind(this)}>
          Tick
      </div>
    );
  }
}

