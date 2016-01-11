"use strict"

import React from 'react'
import { connect } from 'react-redux'
import { LifeGrid } from './LifeGrid.jsx'

export class Life extends React.Component {
  render() {
    return (
      <div>
        <LifeGrid
         width={this.props.gridWidth}
         gridState={this.props.gridState} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gridWidth: state.get('gridWidth'),
    gridState: state.get('gridState')
  }
}

export const LifeContainer = connect(mapStateToProps)(Life)