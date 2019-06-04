import React from "react"

const style = {
  boxSizing: `border-box`,
  width: `70%`,
}
/* Info page Center */
export default ({ biography }) => (
  <div style={style} className="Infopage-center">
    <p className="Infopage-bio">{biography}</p>
  </div>
)
