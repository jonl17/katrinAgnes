import React from "react"

const style = {
  height: `100vh`,
  position: `fixed`,
  width: `100%`,
  top: 0,
  left: 0,
  boxSizing: `border-box`,
  padding: `25px 25px 100px 25px`,
  backgroundColor: `white`,
  display: `none`,
  gridTemplateColumns: `repeat(2, 0.5fr 1fr)`,
  gridTemplateAreas: `"... leftImg rightImg ..."`,
}

export default ({ children, display }) => {
  return (
    <div
      style={{ ...style, display: display }}
      className="WorkDetails-container"
    >
      {children}
    </div>
  )
}
