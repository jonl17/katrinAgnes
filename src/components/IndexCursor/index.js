import React from "react"

export default ({ hoveredImageIndex, length, display, mouse }) => (
  <p
    style={{
      position: `absolute`,
      display: display,
      left: `${mouse.x}px`,
      top: `${mouse.y}px`,
      color: `white`,
    }}
    className="number-of"
  >
    {hoveredImageIndex}/{length}
  </p>
)
