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
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { fields: { collection: { eq: "gallery" } } }
        ) {
          edges {
            node {
              excerpt
              fields {
                slug
              }
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                description
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
      <Meta title="Gallery" />
      <PageContainer title="Gallery" text={false}>
        <Card.Group itemsPerRow={5} doubling stackable>
          {posts.map(({ node }) => {
            return (
              <Card
                key={node.fields.slug}
                as={Link}
                to={node.fields.slug}
              >
                {node.frontmatter.image && (
                  <Img fluid={node.frontmatter.image.childImageSharp.fluid} />
                )}
                <Card.Content>
                  <Card.Header css={css({ textAlign: "center" })}>{node.frontmatter.name}</Card.Header>
                  <Card.Meta css={css({ fontSize: "0.9em !important", textAlign: "center" })}>{node.frontmatter.date}</Card.Meta>
                </Card.Content>
              </Card>
            )
          })}
        </Card.Group>
      </PageContainer>
    </>
  )
}

export default Gallery
