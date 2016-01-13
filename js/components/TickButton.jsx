"use strict"

import React from 'react'
import { Button } from 'belle'

export class TickButton extends React.Component {
  handleClick() {
    this.props.onTickClick();
  }

  render() {
    return (
      <div>
        <Button
          primary
          onClick={this.handleClick.bind(this)}>
            Tick.
        </Button>
      </div>
    );
  }
}
