import React from "react"
import "./index.css"
import { connect } from "react-redux"
import { showInfoPage } from "../state/app"

class Information extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visable: this.props.infoPageVisable,
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.props.dispatch(showInfoPage(!this.props.infoPageVisable))
  }
  render() {
    return (
      <div className="Information-container">
        <p className="Information-text Information-text-one">
          {this.props.displayTitle}
        </p>
        <p
          onClick={() => this.handleClick()}
          className="Information-text Information-text-two"
        >
          {this.props.info}
        </p>
      </div>
    )
  }
}

export default connect(
  state => ({
    displayTitle: state.app.displayTitle,
    infoPageVisable: state.app.infoPageVisable,
  }),
  null
)(Information)
