import React from "react"
import ArtWorkDealer from "./components/ArtWorkDealer"
import Header from "./components/Header"
import InfoPage from "../InfoPage"
import ArtworkDetails from "./components/ArtWorkDetails"

const MobileView = ({ artworks }) => {
  return (
    <>
      <Header />
      <ArtWorkDealer artworks={artworks} />
      <InfoPage />
      <ArtworkDetails />
    </>
  )
}

export default MobileView
