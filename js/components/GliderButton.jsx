"use strict"

import React from 'react'

export class GliderButton extends React.Component {
  handleClick() {
    this.props.onGliderClick();
  }

  render() {
    return (
      <div
        className='button'
        onClick={this.handleClick.bind(this)}>
          Glider
      </div>
    );
  }
}

