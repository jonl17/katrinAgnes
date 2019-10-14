import React from "react"
import { Container } from "./Styled"
import Header from "./components/Header"
import Gallery from "./components/Gallery"

const mobileDetails = ({ pageContext: { acf } }) => {
  return (
    <Container>
      <Header />
      <Gallery images={acf.myndir} />
    </Container>
  )
}

export default mobileDetails
