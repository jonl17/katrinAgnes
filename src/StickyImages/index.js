import React from "react"
import "./index.css"
import Image from "../Image"

class StickyImages extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      windowWidth: 0,
      negative: false /* this is a helper so we get a  spread from negative to positive y values */,
    }
    this.negativePositive = this.negativePositive.bind(this)
  }
  componentDidMount() {
    if (window.innerWidth <= 750) {
      /* tablet */
      this.setState({
        windowWidth: window.innerWidth - window.innerWidth / 2,
      })
    } else {
      let temp =
        window.innerWidth / 3 /* here it is vital to scale for other screens */
      this.setState({
        windowWidth: window.innerWidth - temp,
      })
    }
  }

  negativePositive(num) {
    if (this.state.negative) {
      this.setState({
        negative: true,
      })
      this.setState({
        negative: false,
      })
      return num * -1
    }
    return num
  }
  render() {
    const style = {
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
    const { edges } = this.props.data.allFile
    return (
      <div className="Image-container">
        {edges.map(image => (
          <Image
            alt={image.node.name}
            key={image.node.id}
            style={{
              ...style,
              ...imageStyle,
              transform: `translate(${Math.floor(
                Math.random() * (this.state.windowWidth - +0)
              ) + +0}px, ${this.negativePositive(
                Math.floor(Math.random() * (200 - +0)) + +0
              )}px)`,
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
