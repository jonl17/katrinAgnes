import React from "react"
import Img from "gatsby-image"
import "./index.css"

const Image = props => {
    const style = {
        position: "fixed",
        top: props.maxHeight + 100,
        transform: `translateY(-${props.y}px)`,
        left: `${props.x}%`,
    }
    return (
        <div className="Art-image-container">
            <Img style={style} className="Art-image" fluid={props.fluid} />
        </div>
    )
}

export default Image
