import React from "react"
import styled, { css } from "styled-components"
import { Text } from "../Views/Styled"
import PDFtexts from "../Views/PDFtexts"

const Center = styled.div`
  box-sizing: border-box;
  ${props =>
    props.device === `mobile` &&
    css`
      width: 100%;
    `}
  ${props =>
    props.device === `browser` &&
    css`
      width: 600px;
      line-height: 1.3;
    `}
`

/* Info page Center */
export default ({ biography, device, texts }) => (
  <Center device={device}>
    <Text heiti>{biography}</Text>
    {texts.edges.map(item => (
      <PDFtexts
        titill={item.node.acf.titill}
        hofundur={item.node.acf.hofundur}
        year={item.node.acf.year}
        utgefandi={item.node.acf.utgefandi}
        pdf={item.node.acf.pdf}
      />
    ))}
  </Center>
)
