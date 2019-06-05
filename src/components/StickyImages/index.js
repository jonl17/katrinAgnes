import React from "react"
import "./index.css"

import { connect } from "react-redux"
import { generateRandomPixels } from "../../methods"
import { fillXcordArray, fillYcordArray } from "../../state/app"

import ImageContainer from "./Views/ImageContainer"
import Image from "../Image"

class StickyImages extends React.Component {
  componentDidMount() {
    const len = this.props.data.allFile.edges.length
    const wideLimit = window.innerWidth / 2.5
    const innerWidth = window.innerWidth
    this.props.dispatch(
      fillXcordArray(generateRandomPixels(innerWidth - wideLimit, len, false))
    )
    this.props.dispatch(fillYcordArray(generateRandomPixels(200, len, true)))
  }

  render() {
    const style = {
      position: `sticky !important`,
      top: 0,
      maxHeight: 500,
      backgroundSize: `contain`,
    }
    const imageStyle = {
      width: `25vw`,
      maxHeight: 500,
      objectFit: `contain`,
    }
    const { edges } = this.props.data.allFile
    const { randomWidth, randomHeight } = this.props
    return (
      <ImageContainer>
        {edges.map((image, index) => (
          <Image
            alt={image.node.name}
            key={image.node.id}
            style={{
              ...style,
              ...imageStyle,
              transform: `translate(${randomWidth[index]}px, ${
                randomHeight[index]
              }px)`,
              height: `auto`,
            }}
            src={image.node.childImageSharp.fluid.src}
          />
        ))}
      </ImageContainer>
    )
  }
}

const mapStateToProps = state => ({
  randomWidth: state.app.randomWidth,
  randomHeight: state.app.randomHeight,
})

export default connect(mapStateToProps)(StickyImages)
