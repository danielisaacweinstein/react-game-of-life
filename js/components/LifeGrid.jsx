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
  getGrid(width) {
    let outer = (new Array(width)).fill("")
    return outer.map((outerValue, outerIndex) => {
      let inner = (new Array(width)).fill("")
      return inner.map((innerValue, innerIndex) => {
        return (<div style={style.gridCell}></div>)
      })
    })
  }

  render() {
    return (
      <div style={style.grid}>
        {this.getGrid(5)}
      </div>
    );
  }
}

