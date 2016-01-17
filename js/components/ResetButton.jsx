"use strict"

import React from 'react'
import classNames from 'classnames'

export class ResetButton extends React.Component {
  handleClick() {
    this.props.onResetClick();
  }

  render() {
    let cssStyling = classNames({
      'button': true
    })

    return (
      <div
        className={cssStyling}
        onClick={this.handleClick.bind(this)}>
          Reset
      </div>
    );
  }
}
