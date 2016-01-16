"use strict"

import React from 'react'

export class TickCounter extends React.Component {

  render() {
    return (
      <div className='counter'>
        {this.props.tickCount}
      </div>
    );
  }
}

