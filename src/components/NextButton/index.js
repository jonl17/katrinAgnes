import React from "react"
import "./index.css"

const style = {
  position: `fixed`,
  right: 100,
  top: `50%`,
  border: `1px solid black`,
  padding: `5px`,
  color: `white`,
  backgroundColor: `black`,
}

export default ({ onClick }) => {
  return (
    <div className="next-btn" onClick={() => onClick()} style={style}>
      Next
    </div>
  )
}
