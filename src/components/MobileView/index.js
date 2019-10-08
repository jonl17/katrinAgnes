import React from "react"
import ArtWorkDealer from "./components/ArtWorkDealer"
import Header from "./components/Header"

const MobileView = ({ artworks }) => {
  return (
    <>
      <Header />
      <ArtWorkDealer artworks={artworks} />
    </>
  )
}

export default MobileView
