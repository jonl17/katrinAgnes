import React from "react"
import "./index.css"

const Information = props => {
  return (
    <div className="Information-container">
      <h1 className="Information-text Information-text-one">
        {props.workTitle}
      </h1>
      <h1 className="Information-text Information-text-two">{props.info}</h1>
    </div>
  )
}

export default Information
