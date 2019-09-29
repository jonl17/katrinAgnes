import React from "react"

import { connect } from "react-redux"
import { generateRandomPixels } from "../../methods"
import { fillXcordArray, fillYcordArray } from "../../state/actions"

import ImageContainer from "./Views/ImageContainer"
import Image from "../Image"

class StickyImages extends React.Component {
  componentDidMount() {
    const len = this.props.artworks.edges.length
    const wideLimit = window.innerWidth / 2.5
    const innerWidth = window.innerWidth
    this.props.dispatch(
      fillXcordArray(generateRandomPixels(innerWidth - wideLimit, len, false))
    )
    this.props.dispatch(fillYcordArray(generateRandomPixels(200, len, true)))
  }
  // COME ON
  render() {
    const { edges } = this.props.artworks
    const { randomWidth, randomHeight, focusedImageIndex } = this.props
    console.log(focusedImageIndex)
    return randomWidth.length > 0 ? (
      <ImageContainer>
        {edges.map((artwork, index) => (
          <Image
            index={index}
            focus={focusedImageIndex === index ? "set" : null}
            alt={artwork.node.acf.titill}
            key={artwork.node.id}
            style={{
              transform: `translate(${randomWidth[index]}px, ${
                randomHeight[index]
              }px)`,
            }}
            images={artwork.node.acf.myndir}
            featuredImage={artwork.node.acf.forsidu_mynd}
            technique={artwork.node.acf.material}
            year={artwork.node.acf.year}
          />
        ))}
      </ImageContainer>
    ) : (
      <></>
    )
  }
}

const mapStateToProps = state => ({
  randomWidth: state.reducer.randomWidth,
  randomHeight: state.reducer.randomHeight,
  focusedImageIndex: state.reducer.focusedImageIndex,
})

export default connect(mapStateToProps)(StickyImages)
