import React from "react"
// import ReactDOM from "react-dom"
import "./index.css"
import Image from "../Image"
import { Stickyroll } from "@stickyroll/stickyroll"
import Img from "gatsby-image"

class ArtImage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images: this.props.images.allFile.edges,
      maxScroll: window.innerHeight - 100,
      posX: 0,
      index: 0,
    }
  }

  render() {
    return (
      <>
        <Img
          style={{
            height: "100%",
            width: "100%",
            maxHeight: 400,
            maxWidth: 400,
            position: "fixed",
            top: window.innerHeight,
            left: `${this.state.posX}%`,
            transform: `translateY(-${this.state.maxScroll}px)`,
          }}
          className="test-img"
          fluid={this.state.images[this.state.index].node.childImageSharp.fluid}
        />
        <Stickyroll pages={this.state.images} factor={5}>
          {({ page, pageIndex, pages, progress }) => {
            let y = progress * 1000
            let x = page * 10
            if (this.state.posX !== x) {
              this.setState({
                posX: x,
              })
            }
            if (y >= this.state.maxScroll) {
              y = this.state.maxScroll
              if (pageIndex !== this.state.index) {
                this.setState({
                  index: pageIndex,
                })
              }
              if (this.state.posX !== x) {
                this.setState({
                  posX: x,
                })
              }
            }
            return (
              <>
                <Image
                  x={x}
                  y={y}
                  fluid={
                    this.state.images[pageIndex].node.childImageSharp.fluid
                  }
                />
              </>
            )
          }}
        </Stickyroll>
      </>
    )
  }
}

export default ArtImage
