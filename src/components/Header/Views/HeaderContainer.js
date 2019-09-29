import styled, { css } from "styled-components"

export default styled.div`
  height: 100px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas: "... area";
  ${props =>
    props.show &&
    css`
      z-index: 100;
    `}
`
