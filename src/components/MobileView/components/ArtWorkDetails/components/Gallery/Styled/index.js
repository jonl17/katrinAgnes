import styled from "styled-components"
import { styles } from "../../../../../../../constants/styles"
import Img from "gatsby-image"

export const Grid = styled.div`
  display: grid;
  grid-template-rows: repeat(1, 1fr);
  grid-template-columns: 1fr;
  grid-gap: 75px;
  margin: 0 ${styles.mobileMargin} ${styles.mobileMargin} ${styles.mobileMargin};
`
export const Image = styled(Img)``
