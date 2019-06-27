import React from "react"
import styled from "styled-components"
import { Text } from "../Views/Styled"

const Container = styled.div`
  padding: 0 0 25px 0;
`

const PDFtexts = ({ titill, hofundur, year, utgefandi, pdf }) => {
  return (
    <Container>
      <div>
        <a
          download
          style={{ textDecoration: "underline" }}
          href={pdf.localFile.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Text heiti>{titill}</Text>
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
