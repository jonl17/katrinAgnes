import React from "react"
import { Container, ArtBlock, ArtImage, ArtTitle, ArtLink } from "./Styled"
import { connect } from "react-redux"

const slugify = require(`slugify`)

class ArtWorkDealer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {
      artworks: { edges: art },
    } = this.props
    return (
      <Container>
        {art.map((item, index) => (
          <ArtLink key={index} to={"/" + slugify(item.node.acf.titill)}>
            <ArtBlock>
              <ArtImage
                fluid={
                  item.node.acf.forsidu_mynd.localFile.childImageSharp.fluid
                }
              />
              <ArtTitle>{item.node.acf.titill}</ArtTitle>
            </ArtBlock>
          </ArtLink>
        ))}
      </Container>
    )
  }
}

const mapStateToprops = state => ({
  detailPageVisable: state.reducer.detailPageVisable,
})

export default connect(mapStateToprops)(ArtWorkDealer)
