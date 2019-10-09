import styled, { css } from "styled-components"

export const Text = styled.p`
  margin: 0;
  ${props =>
    props.heiti
      ? "text-transform: inherit !important"
      : "text-transform: lowercase"};
`
export const InfoPageLeftBox = styled.div`
  line-height: 1.5;
  ${props =>
    props.device === `mobile` &&
    css`
      width: 65%;
      height: 200px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
    `}
`

export const Instagram = styled.a`
  text-decoration: underline !important;
`
