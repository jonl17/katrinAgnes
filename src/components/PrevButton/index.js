import React from "react"
import "./index.css"

const style = {
  position: `fixed`,
  left: 100,
  top: `50%`,
  border: `1px solid black`,
  padding: `5px`,
  color: `white`,
  backgroundColor: `black`,
}

export default ({ onClick }) => {
  return (
    <div className="left-btn btn" onClick={() => onClick()} style={style}>
      Previous
    </div>
  )
}
