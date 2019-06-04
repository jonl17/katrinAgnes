import React from "react"
import "./index.css"
import Image from "../Image"

class StickyImages extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      windowWidth: 0,
      negative: true /* this is a helper so we get a  spread from negative to positive y values */,
      randomWidth: [],
      randomHeight: [],
    }
    this.generateRandomPixels = this.generateRandomPixels.bind(this)
  }
  componentDidMount() {
    const wideLimit = window.innerWidth / 2.5
    const innerWidth = window.innerWidth
    if (innerWidth <= 750) {
      /* tablet */
      this.setState({
        windowWidth: innerWidth - wideLimit,
      })
    } else {
      this.setState({
        windowWidth: innerWidth - wideLimit,
      })
    }
    const rndW = this.generateRandomPixels(innerWidth - wideLimit)
    const rndH = this.generateRandomPixels(200)
    /* here we need to set some absolute height numbers */
    rndH[rndH.length - 1] = -100
    rndH[rndH.length - 3] = 400
    this.setState({
      randomWidth: rndW,
      randomHeight: rndH,
    })
  }

  generateRandomPixels(limit) {
    var pixels = []
    for (let i = 0; i < this.props.data.allFile.edges.length; i++) {
      pixels.push(this.randInt(limit))
    }

    return pixels
  }

  randInt(limit) {
    return Math.floor(Math.random() * (limit - +0))
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
    // const edges = this.shuffle(this.props.data.allFile.edges)
    const { edges } = this.props.data.allFile
    const { randomWidth, randomHeight } = this.state
    console.log(randomHeight)
    return (
      <div className="Image-container">
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
      </div>
    )
  }
}

export default StickyImages
