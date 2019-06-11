import React from "react"
import "../index.css"

const style = {
  textAlign: `right`,
  padding: 35,
}
/* Footer Right */
export default ({
  onClick,
  info,
  detailPageVisable,
  chosenImageIndex,
  display,
  len,
}) => {
  if (detailPageVisable) {
    return (
      <p style={{ ...style }} className="Footer-text Footer-text-two">
        {chosenImageIndex + 1}/{len}
      </p>
    )
  } else {
    return (
      <p
        style={{ ...style, display: display }}
        onClick={() => onClick()}
        className="Footer-text Footer-text-two"
      >
        {info}
      </p>
    )
  }
}
