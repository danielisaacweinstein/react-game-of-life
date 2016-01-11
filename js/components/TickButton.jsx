"use strict"

import React from 'react'

export class TickButton extends React.Component {
  render() {
    return (
      <div >
        <button
          onClick={ () => { this.props.onButtonClick() } }>
          Tick.
        </button>
      </div>
    );
  }
}