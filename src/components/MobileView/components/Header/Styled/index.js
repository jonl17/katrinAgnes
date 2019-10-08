import styled from "styled-components"

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "left right";
  z-index: 4;
`

/** Information */
export const InfoTextContainer = styled.div`
  grid-area: right;
  display: flex;
  align-content: center;
  justify-content: center;
`
export const Text = styled.p`
  margin: auto;
`

/** Art Information in the detail page */
export const ArtInfoContainer = styled.div`
  display: ${props => props.display};
  grid-area: left;
`
export const ArtInfoText = styled.p`
  grid-area: left;
`
