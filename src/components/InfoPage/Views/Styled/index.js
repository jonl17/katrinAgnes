import styled from "styled-components"

export const Text = styled.p`
  margin: 0;
  ${props =>
    props.heiti
      ? "text-transform: inherit !important"
      : "text-transform: lowercase"};
`
