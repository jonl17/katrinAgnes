import styled from "styled-components"

export default styled.p`
  position: ${props => (props.information ? "absolute" : "inherit")};
  margin: 0 auto;
  right: 0;

  text-transform: lowercase;
  margin: 0;
  text-align: ${props => (props.right ? "right" : "inherit")};
  padding: ${props => (props.right ? "35px" : "auto")};
  &:hover {
    cursor: ${props => (props.information ? "pointer" : "inherit")};
  }
`
