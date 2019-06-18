import styled, { css } from "styled-components"

export default styled.div`
  a {
    text-decoration: none;
    color: inherit;
  }
  p {
    font-size: 20px;
    text-transform: lowercase;
    ${props =>
      props.device === `mobile` &&
      css`
        margin: 0 0 20px 0;
      `}
  }

  html,
  body {
    margin: 0;
  }
`
