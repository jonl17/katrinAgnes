import React from "react"
import { Container, ArtBlock, ArtImage, ArtTitle } from "./Styled"
import { connect } from "react-redux"
import {
  setArtWorkImages,
  showDetailPage,
  chooseArtwork,
} from "../../../../state/actions"

class ArtWorkDealer extends React.Component {
  constructor(props) {
    super(props)
    this.callBack = this.callBack.bind(this)
  }
  callBack(item) {
    this.props.dispatch(
      chooseArtwork({
        title: item.titill,
        year: item.year,
        material: item.material,
      })
    )
    this.props.dispatch(setArtWorkImages(item.myndir))
    this.props.dispatch(showDetailPage(!this.props.detailPageVisable))
  }
  render() {
    const {
      artworks: { edges: art },
    } = this.props
    return (
      <Container>
        {art.map((item, index) => (
          <ArtBlock onClick={() => this.callBack(item.node.acf)} key={index}>
            <ArtImage
              fluid={item.node.acf.forsidu_mynd.localFile.childImageSharp.fluid}
            />
            <ArtTitle>{item.node.acf.titill}</ArtTitle>
          </ArtBlock>
        ))}
      </Container>
    )
  }
}

const mapStateToprops = state => ({
  detailPageVisable: state.reducer.detailPageVisable,
})

export default connect(mapStateToprops)(ArtWorkDealer)
