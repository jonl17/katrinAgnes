import React from "react"
const style = {
  height: `100%`,
  width: `100%`,
  position: `fixed`,
  top: 0,
  left: 0,
  boxSizing: `border-box`,
  padding: 25,
  zIndex: `8`,
  backgroundColor: `white`,
  /* grid options */
  gridTemplateColumns: `30% 60% 10%`,
}
/* Info page Container */
export default ({ children, display }) => (
  <div style={{ ...style, display: display }}>{children}</div>
)
