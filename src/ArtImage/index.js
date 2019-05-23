import React from "react"
// import ReactDOM from "react-dom"
import "./index.css"
import Image from "../Image"
import { Stickyroll } from "@stickyroll/stickyroll"

class ArtImage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images: this.props.images.allFile.edges,
      maxScroll: window.innerHeight - 100,
    }
  }

  render() {
    return (
      <Stickyroll pages={this.state.images} factor={5}>
        {({ page, pageIndex, pages, progress }) => {
          let y = progress * 1000
          let x = page * 10
          if (y >= this.state.maxScroll) {
            y = this.state.maxScroll
          }
          return (
            <Image
              x={x}
              y={y}
              fluid={this.state.images[pageIndex].node.childImageSharp.fluid}
            />
          )
        }}
      </Stickyroll>
      // <>
      //   {this.state.images.map((item, index) => (
      //     <Image
      //       key={item.node.id}
      //       className="ArtImage-item"
      //       style={this.styler(index * 150)}
      //       moverInfo={this.state.y}
      //       fluid={item.node.childImageSharp.fluid}
      //     />
      //   ))}
      // </>
    )
  }
}

export default ArtImage
