import React from "react"
import "../index.css"

const style = {
  display: `flex`,
  flexDirection: `column`,
  marginTop: `auto`,
  marginBottom: `auto`,
  paddingLeft: `35px`,
}
/* Footer Left */
export default ({ title, technique, year }) => (
  <div style={style}>
    <p className="Footer-text Footer-text-one">{title}</p>
    <p className="Footer-text Footer-text-two">{technique}</p>
    <p className="Footer-text Footer-text-three">{year}</p>
  </div>
)
