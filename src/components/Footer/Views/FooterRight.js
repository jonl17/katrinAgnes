import React from "react"

import Text from "./Styled/FooterText"

/* Footer Right */
export default ({ onClick, info, detailPageVisable }) => {
  if (!detailPageVisable) {
    return (
      <Text onClick={() => onClick()} information right>
        {info}
      </Text>
    )
  } else {
    return <div />
  }
}
