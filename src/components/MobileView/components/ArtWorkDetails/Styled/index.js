import styled from "styled-components"
import { distance } from "../../../../../constants/styles"

export const Container = styled.div`
  display: ${props => props.display};
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: white;
  overflow: scroll;
  z-index: ${distance.detailPage};
`
