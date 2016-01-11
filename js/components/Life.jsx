"use strict"

import React from 'react'
import { LifeGrid } from './LifeGrid.jsx'

export class Life extends React.Component {
  render() {
    let width = 10

    return (
      <div>
        <LifeGrid width={width}/>
      </div>
    );
  }
}
