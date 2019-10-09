import React from "react"
import styled, { css } from "styled-components"
import { Text } from "../Views/Styled"
import PDFtexts from "../Views/PDFtexts"
import { graphql, StaticQuery } from "gatsby"

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

const Container = styled.div`
  padding-top: 20px;
`

const GetRipe = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressAcfInformation {
          edges {
            node {
              acf {
                about_texti
              }
            }
          }
        }
        allWordpressAcfText {
          edges {
            node {
              acf {
                titill
                hofundur
                year
                utgefandi
                pdf {
                  localFile {
                    url
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Text heiti>
          {data.allWordpressAcfInformation.edges[0].node.acf.about_texti}
        </Text>
        <Container>
          <Text heiti>Texts</Text>
          {data.allWordpressAcfText.edges.map((item, index) => (
            <PDFtexts
              key={index}
              titill={item.node.acf.titill}
              hofundur={item.node.acf.hofundur}
              year={item.node.acf.year}
              utgefandi={item.node.acf.utgefandi}
              pdf={item.node.acf.pdf}
            />
          ))}
        </Container>
      </>
    )}
  />
)

/* Info page Center */
export default ({ device }) => <Center device={device}>{GetRipe()}</Center>
