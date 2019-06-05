import React from "react"

const style = {
  height: `100vh`,
  position: `fixed`,
  width: `100%`,
  top: 0,
  left: 0,
  boxSizing: `border-box`,
  padding: `25px 200px 100px 200px`,
  backgroundColor: `white`,
  display: `none`,
  alignContent: `center`,
  justifyContent: `space-evenly`,
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
