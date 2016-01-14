"use strict"

import React from 'react'
import { Button } from 'belle'

export class ResetButton extends React.Component {
  handleClick() {
    this.props.onResetClick();
  }

  render() {
    return (
      <span className='button'>
        <Button
          primary
          onClick={this.handleClick.bind(this)}>
            Reset.
        </Button>
      </span>
    );
  }
}
