import React from "react"
import PageContainer from "../components/page-container"
import Meta from "../components/meta"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Card, CardGroup, Header } from "semantic-ui-react"
import css from "@emotion/css"
import Img from "gatsby-image"

const Gallery: React.FC = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: ASC }
          filter: { fields: { collection: { eq: "gallery-sohosai2022-theme" } } }
        ) {
          edges {
            node {
              excerpt
              fields {
                slug
              }
              frontmatter {
                image {
                  childImageSharp {
                    fluid(maxWidth: 400, maxHeight: 400) {
                      ...GatsbyImageSharpFluid_noBase64
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )

  const posts = allMarkdownRemark.edges as any[]

  return (
    <>
      <Meta title="雙峰祭2022　テーマ展" />
      <PageContainer title="雙峰祭2022　テーマ展" text={false}>
        <Card.Group itemsPerRow={5} doubling stackable>
          {posts.map(({ node }) => {
            return (
              <Card
                css={css`
                  @media (max-width: 750px) {
                    pointer-events: none;
                  }
                `}
                key={node.fields.slug}
                as={Link}
                to={node.fields.slug}
              >
                {node.frontmatter.image && (
                  <Img fluid={node.frontmatter.image.childImageSharp.fluid} />
                )}
              </Card>
            )
          })}
        </Card.Group>
      </PageContainer>
    </>
  )
}

export default Gallery
