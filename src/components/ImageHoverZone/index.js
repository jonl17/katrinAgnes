import React from "react"

const style = {
  position: `absolute`,
  height: `100%`,
  width: `100%`,
  top: 0,
}

export default ({ index, setImageIndex, activateIndexPointer }) => (
  <>
    <div
      onMouseOut={() => activateIndexPointer(false)}
      onMouseOver={() => setImageIndex(index)}
      style={{ ...style }}
      className={"WorkDetails-hover-zone"}
    />
  </>
)
