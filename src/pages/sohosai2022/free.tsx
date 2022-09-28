import React from "react"
import PageContainer from "../../components/page-container"
import Meta from "../../components/meta"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Button, Card, CardGroup, Header } from "semantic-ui-react"
import css from "@emotion/css"
import Img from "gatsby-image"

const Gallery: React.FC = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          sort: { fields: [frontmatter___order], order: ASC }
          filter: { fields: { collection: { eq: "gallery-sohosai2022-free" } } }
        ) {
          edges {
            node {
              excerpt
              fields {
                slug
              }
              frontmatter {
                title
                name
                image {
                  childImageSharp {
                    fluid(maxWidth: 400, maxHeight: 400) {
                      ...GatsbyImageSharpFluid_noBase64
                    }
                  }
                }
                description
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
      <Meta title="雙峰祭2022　自由展" />
      <PageContainer title="雙峰祭2022　自由展" text={false}>
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
                <Card.Content>
                  <Card.Header css={css({ textAlign: "center" })}>{node.frontmatter.title}</Card.Header>
                  <Card.Meta css={css({ fontSize: "0.9em !important", textAlign: "center" })}>{node.frontmatter.name}</Card.Meta>
                  <Card.Description css={css` @media (min-width: 750px) { display: none; } `}>{node.frontmatter.description}</Card.Description>
                </Card.Content>
              </Card>
            )
          })}
        </Card.Group>
        <Button
          basic
          color='black'
          as={Link}
          to="/sohosai2022"
          style={{
            margin: "4px",
            align: "center",
          }}
        >
          雙峰祭2022
        </Button>
      </PageContainer>
    </>
  )
}

export default Gallery
