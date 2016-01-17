"use strict"

import React from 'react'

export class RandomizeButton extends React.Component {
  handleClick() {
    this.props.onRandomizeClick();
  }

  render() {
    return (
      <div
        className='button'
        onClick={this.handleClick.bind(this)}>
          Randomize
      </div>
    );
  }
}

