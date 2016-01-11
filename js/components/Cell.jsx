"use strict"

import React from 'react'

let style = {
  base: {
    width: '20px',
    height: '20px',
    margin: '5px',
    display: 'inline-block'    
  },
  dead: {
    backgroundColor: '#b3b3b3'    
  },
  alive: {
    backgroundColor: '#1a1a1a'
  }
}

export class Cell extends React.Component {
  render() {
    let currentStyle =
      Object.assign({},
                    style.base,
                    this.props.alive ? style.alive : style.dead)

    return (
      <div
      style={currentStyle}
      onClick={() => {this.props.onCellClick(this.props.index)}} />
    );
  }
}

