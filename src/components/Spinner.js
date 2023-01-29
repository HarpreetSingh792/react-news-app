import React, { Component } from 'react'
import Loading from './sp.gif'
export class Spinner extends Component {
  render() {
    return (
      <div >
        <img id="center-spinner" src={Loading} alt="loading-spinner" />
      </div>
    )
  }
}

export default Spinner
