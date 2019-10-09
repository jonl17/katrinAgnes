import React from "react"
import ArtWorkDealer from "./components/ArtWorkDealer"
import Header from "./components/Header"
import InfoPage from "../InfoPage"

const MobileView = ({ artworks }) => {
  return (
    <>
      <Header />
      <ArtWorkDealer artworks={artworks} />
      <InfoPage />
    </>
  )
}

export default MobileView
