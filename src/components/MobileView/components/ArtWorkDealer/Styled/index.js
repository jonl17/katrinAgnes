import styled from "styled-components"
import Img from "gatsby-image"
import { styles } from "../../../../../constants/styles"

export const Container = styled.div`
  margin-top: 50vh;
  height: 100%;
`

/** stuff for each artwork */
export const ArtBlock = styled.div`
  height: 100vh;
  margin-left: ${styles.mobileMargin};
  margin-right: ${styles.mobileMargin};
`
export const ArtImage = styled(Img)``
export const ArtTitle = styled.p``
