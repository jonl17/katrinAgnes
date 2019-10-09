import styled from "styled-components"
import { styles } from "../../../../../../../constants/styles"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: ${styles.mobileMargin};
`
export const Text = styled.p`
  margin: 0;
  max-width: 75%;
`
