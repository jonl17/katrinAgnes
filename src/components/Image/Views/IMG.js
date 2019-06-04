import React from "react"
import "../index.css"
/* IMG */
export default ({ handleClick, handleHover, handleOut, style, src }) => (
  <img
    className="Sticky-image"
    onClick={() => handleClick()}
    onMouseOver={() => handleHover()}
    onMouseOut={() => handleOut()}
    alt={""}
    style={style}
    src={src}
  />
)
