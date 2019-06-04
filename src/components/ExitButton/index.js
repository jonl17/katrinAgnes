import React from "react"
import icon from "../../../static/icons/x.png"

const style = {
  margin: 0,
  top: 0,
  right: 0,
  padding: 25,
  height: 25,
  width: 25,
}
/* Exit btn */
export default ({ handleClick }) => (
  <img
    style={{ ...style, position: `absolute` }}
    alt={""}
    src={icon}
    className="Exit-infopage-btn"
    onClick={() => handleClick()}
  />
)
