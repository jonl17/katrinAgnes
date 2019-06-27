import React from "react"
import styled from "styled-components"
import { Text } from "../Views/Styled"

const Container = styled.div`
  padding: 15px 0 15px 0;
`

const PDFtexts = ({ titill, hofundur, year, utgefandi, pdf }) => {
  return (
    <Container>
      <Text heiti>Texts</Text>
      <div>
        <a style={{ textDecoration: "underline" }} href={pdf.localFile.url}>
          {" "}
          <Text heiti>{titill}</Text>{" "}
        </a>
        <Text heiti>
          {hofundur}, {year}
        </Text>
        <Text heiti>{utgefandi}</Text>
      </div>
    </Container>
  )
}

export default PDFtexts
