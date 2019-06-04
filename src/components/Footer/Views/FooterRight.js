import React from "react"
import "../index.css"
const style = {
  textAlign: `right`,
}
/* Footer Right */
export default ({ display, onClick, info }) => {
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
