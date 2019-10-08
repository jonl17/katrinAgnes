import styled, { css } from "styled-components"

export default styled.p`
  position: ${props => (props.information ? "absolute" : "inherit")};
  margin: 0 auto;
  right: 0;
  bottom: 0;
  ${props =>
    props.heiti
      ? "text-transform: inherit !important"
      : "text-transform: lowercase"};
  margin: 0;
  padding: ${props => (props.right ? "20px" : "auto")};
  text-align: ${props => (props.right ? "right" : "inherit")};

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
      top: 0;
      padding: 35px 10px 0 10px;
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
