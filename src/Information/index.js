import React from "react"
import "./index.css"
import { connect } from "react-redux"

const Information = props => {
  console.log(props)
  return (
    <div className="Information-container">
      <h1 className="Information-text Information-text-one">
        {props.displayTitle}
      </h1>
      <h1 className="Information-text Information-text-two">{props.info}</h1>
    </div>
  )
}

export default connect(
  state => ({
    displayTitle: state.app.displayTitle,
  }),
  null
)(Information)
