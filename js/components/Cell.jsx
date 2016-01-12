"use strict"

import React from 'react'
import classNames from 'classnames'

export class Cell extends React.Component {
  handleClick() {
    this.props.onCellClick(this.props.index, this.props.alive)
  }

  render() {
    var cellClass = classNames({
      'cell': true,
      'cell--dead': !this.props.alive,
      'cell--alive': this.props.alive
    });

    return (
      <td
        className={cellClass}
        onClick={this.handleClick.bind(this)} />
    )

  }
}

