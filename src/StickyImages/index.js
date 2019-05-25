import React from "react"
import "./index.css"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

class StickyImages extends React.Component {
  constructor(props) {
    super(props)
    this.handleHover = this.handleHover.bind(this)
  }
  handleHover() {
    console.log("HOVERING IMAGE NOW")
  }
  render() {
    const style = {
      height: `100vh`,
      position: `sticky !important`,
      top: 0,
      maxHeight: 500,
      backgroundSize: `contain`,
    }
    const imageStyle = {
      width: 400,
      maxHeight: 500,
      objectFit: `contain`,
    }
    const tops = [100, 50, 25, 75, 125]
    const lefts = [`50%`, `25%`, `-25%`, `2%`, `-40%`, `5%`]
    const { edges } = this.props.data.allFile
    return (
      <div className="Image-container">
        {edges.map((image, index) => (
          <a>
            <Img
              key={image.node.id}
              style={{ ...style, overflow: `visable` }}
              imgStyle={{
                ...imageStyle,
                transform: `translate(${lefts[index]}, ${tops[index]}px)`,
                height: `auto`,
              }}
              fluid={image.node.childImageSharp.fluid}
            />
          </a>
          //   <BackgroundImage
          //     style={{
          //       ...style,
          //       transform: `translate(${lefts[index]}, ${tops[index]}px)`,
          //     }}
          //     fluid={image.node.childImageSharp.fluid}
          //   />
        ))}
      </div>
    )
  }
}

export default StickyImages
