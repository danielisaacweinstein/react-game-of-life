"use strict"

import React from 'react'

let style = {
  gridCell: {
    backgroundColor: 'black',
    width: '20px',
    height: '20px',
    margin: '5px',
    display: 'inline-block'
  },
  grid: {
    width: '160px',
    height: '160px'
  }
}

export class LifeGrid extends React.Component {
  render() {
    return (
      <div style={style.grid}>
        {this.getGrid(5)}
      </div>
    );
  }
}

