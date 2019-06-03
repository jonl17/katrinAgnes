import React from "react"
import "./index.css"
import { connect } from "react-redux"
import { showInfoPage } from "../state/app"
import X from "../../static/icons/x.png"

const InfoPage = props => {
  return (
    <div
      style={{ display: props.infoPageVisable ? "grid" : "none" }}
      className="Infopage-container"
    >
      <div className="Infopage-left">
        <p className="Infopage-name">katrín agnes klar</p>
        <p className="Infopage-email">email</p>
        <p className="Infopage-instagram">instagram</p>
      </div>
      <div className="Infopage-center">
        <p className="Infopage-bio">
          german-icelandic artist based in munich and reykjavík. studied media
          art at the universtity of arts and design karlsruhe from 2007 to 2011
          as well as graphics at the academy of fine arts munich. currently
          assistant teacher at the academy of fine arts munich with prof. peter
          kogler. projects include exhibitions distant matter at the living art
          museum, reykavík in 2018 (with lukas kindermann), birting at
          gerðarsafn art museum, reykavík in 2015 or complementary spectrum, a
          comissioned work for the federal office for materials research and
          testing in berlin in 2013. texts collection of moments katharina
          wendler, 2016 way over, icelandic art center, crymogea, reykjavík
          democratic moment aernout mik, 2014 democratic moment, revolver
          publishing, berlin self-portraits in the sublime ragnar kjartansson,
          2014 democratic moment, revolver publishing, berlin
        </p>
      </div>
      <img
        alt={""}
        src={X}
        className="Exit-infopage-btn"
        onClick={() => props.dispatch(showInfoPage(!props.infoPageVisable))}
      />
    </div>
  )
}

export default connect(
  state => ({
    infoPageVisable: state.app.infoPageVisable,
  }),
  null
)(InfoPage)
