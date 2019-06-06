import React from "react"
import "../index.css"

const style = {
  height: `100vh`,
  position: `fixed`,
  width: `100%`,
  top: 0,
  left: 0,
  boxSizing: `border-box`,
  padding: `35px 200px 100px 200px`,
  backgroundColor: `white`,
  display: `none`,
  alignContent: `center`,
  justifyContent: `space-evenly`,
  gridGap: `50px`,
  gridTemplateColumns: `1fr 1fr`,
  gridTemplateRows: `10% 80% 10%`,
  gridTemplateAreas: `"... ..."
                      "left right" 
                      "... ..."`,
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
