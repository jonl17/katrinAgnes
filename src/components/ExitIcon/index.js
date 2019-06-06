import React from "react"
import "./index.css"

const style = {
  height: 25,
  width: 25,
}

export default () => {
  return (
    <div style={style} className="Burger-body">
      <span className="line line-one" />
      <span className="line line-two" />
    </div>
  )
}
