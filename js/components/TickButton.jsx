"use strict"

import React from 'react'
import classNames from 'classnames'

export class TickButton extends React.Component {
  handleClick() {
    this.props.onTickClick();
  }

  render() {
    let cssStyling = classNames({
      'unselectable': true,
      'button': true,
    })

    return (
      <div
        className={cssStyling}
        onClick={this.handleClick.bind(this)}>
          Tick!
      </div>
    );
  }
}

