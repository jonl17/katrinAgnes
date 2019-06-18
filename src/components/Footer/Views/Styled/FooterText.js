import styled, { css } from "styled-components"

export default styled.p`
  position: ${props => (props.information ? "absolute" : "inherit")};
  margin: 0 auto;
  right: 0;

  text-transform: lowercase;
  margin: 0;
  text-align: ${props => (props.right ? "right" : "inherit")};
  padding: ${props => (props.right ? "35px" : "auto")};
  ${props =>
    props.information &&
    css`
      &&:hover {
        cursor: pointer;
      }
    `}
  ${props =>
    props.device === `mobile` &&
    css`
      &&:hover {
        cursor: pointer;
      }
    `}
    ${props =>
      props.device === `browser` &&
      css`
        &&:hover {
          cursor: inherit;
        }
      `}
`
