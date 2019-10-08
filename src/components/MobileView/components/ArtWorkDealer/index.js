import React from "react"
import { Container, ArtBlock, ArtImage, ArtTitle } from "./Styled"

const ArtWorkDealer = ({ artworks: { edges: art } }) => {
  return (
    <Container>
      {art.map((item, index) => (
        <ArtBlock key={index}>
          <ArtImage
            fluid={item.node.acf.forsidu_mynd.localFile.childImageSharp.fluid}
          />
          <ArtTitle>{item.node.acf.titill}</ArtTitle>
        </ArtBlock>
      ))}
    </Container>
  )
}

export default ArtWorkDealer
