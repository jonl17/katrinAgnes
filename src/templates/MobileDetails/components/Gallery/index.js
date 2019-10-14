import React from "react"
import { Grid, Image } from "./Styled"

const Gallery = ({ images }) => {
  return (
    <Grid>
      {images.map((item, index) => (
        <Image key={index} fluid={item.mynd.localFile.childImageSharp.fluid} />
      ))}
    </Grid>
  )
}

export default Gallery
