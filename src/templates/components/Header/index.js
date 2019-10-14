import React from "react";
import { Container, Text } from "./Styled";
import ExitButton from "../../../../components/ExitButton";
import { connect } from "react-redux";
import { showDetailPage } from "../../../../state/actions";

const Header = ({ detailPageVisable, dispatch, chosenArtwork }) => {
  return (
    <Container>
      <Text>{chosenArtwork.title}</Text>
      <Text>{chosenArtwork.material}</Text>
      <Text>{chosenArtwork.year}</Text>
      <ExitButton
        display={detailPageVisable ? "block" : "none"}
        handleClick={() => dispatch(showDetailPage(!detailPageVisable))}
      />
    </Container>
  );
};

const mapStateToProps = state => ({
  detailPageVisable: state.reducer.detailPageVisable,
  chosenArtwork: state.reducer.chosenArtwork
});

export default connect(mapStateToProps)(Header);
