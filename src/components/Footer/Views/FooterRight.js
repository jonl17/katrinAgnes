import React from "react"

import Text from "./Styled/FooterText"

/* Footer Right */
export default ({
  onClick,
  info,
  detailPageVisable,
  chosenImageIndex,
  len,
}) => {
  if (detailPageVisable) {
    return (
      <Text right>
        {chosenImageIndex + 1}/{len}
      </Text>
    )
  } else {
    return (
      <Text information right onClick={() => onClick()}>
        {info}
      </Text>
    )
  }
}
