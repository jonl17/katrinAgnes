import React from "react"

class Bergmann extends React.Component {
  constructor() {
    this.onMouseMove = this.onMouseMove.bind(this)
  }
  onMouseMove(e) {
    console.log(e)
  }
  render() {
    return (
      <p onMouseOver={event => this.onMouseMove()}>
        <span>1</span>
        <span>/</span>
        <span>2</span>
      </p>
    )
  }
}

export default Bergmann
