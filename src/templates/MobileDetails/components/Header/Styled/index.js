import styled from "styled-components"
import { styles, distance } from "../../../../../constants/styles"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: ${styles.mobileMargin};
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: ${distance.footerDetailPage};
`
export const Text = styled.p`
  margin: 0;
  max-width: 75%;
`
