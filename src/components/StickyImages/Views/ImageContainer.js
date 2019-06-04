import React from "react"
import "../index.css"

const style = {
  overflow: `visable`,
  display: `grid`,
  gridGap: `50vh`,
  gridTemplateRows: `repeat(1, 1fr)`,
}

export default ({ children }) => (
  <div className="Image-container" style={style}>
    {children}
  </div>
)
