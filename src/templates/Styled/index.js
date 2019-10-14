import styled from "styled-components";
import { distance, styles } from "../../../constants/styles";

export const Container = styled.div`
  display: ${props => props.display};
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: white;
  overflow-y: scroll;
  box-sizing: border-box;
  padding: ${styles.mobileMargin};
  z-index: ${distance.detailPage};
`;
