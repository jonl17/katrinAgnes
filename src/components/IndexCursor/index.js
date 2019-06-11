import React from "react"

export default ({ hoveredImageIndex, length, display }) => (
  <p
    style={{
      position: `absolute`,
      display: display,
      color: `white`,
    }}
    className="number-of"
  >
    {hoveredImageIndex}/{length}
  </p>
)
