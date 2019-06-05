import React from "react"

const style = {
  height: `100vh`,
  position: `fixed`,
  width: `100%`,
  top: 0,
  left: 0,
  boxSizing: `border-box`,
  padding: `25px 100px 100px 100px`,
  backgroundColor: `white`,
  display: `none`,
  gridTemplateColumns: `1fr 1fr`,
  gridTemplateAreas: `"... leftImg rightImg ..."`,
  gridGap: `50px`,
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
