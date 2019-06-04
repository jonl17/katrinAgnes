import React from "react"

const style = {
  position: `fixed`,
  width: `100%`,
  left: `0`,
  bottom: `0`,
  display: `grid`,
  gridTemplateColumns: `50% 50%`,
  height: 100,
}
/* Footer Container */
export default ({ children }) => (
  <div style={style} className="Footer-container">
    {children}
  </div>
)
