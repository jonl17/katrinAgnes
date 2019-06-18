import React from "react"
import { connect } from "react-redux"

import Text from "../Footer/Views/Styled/FooterText"

const HeaderInfo = ({ device, info, handleClick }) => {
  return (
    <Text device={device} onClick={() => handleClick()} right>
      {info}
    </Text>
  )
}

const mapStateToProps = state => ({
  device: state.responsiveReducer.device,
})

export default connect(mapStateToProps)(HeaderInfo)
