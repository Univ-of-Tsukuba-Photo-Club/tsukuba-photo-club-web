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
      <Meta title="雙峰祭2022　テーマ展「輝き」" />
      <PageContainer title="雙峰祭2022　テーマ展「輝き」" text={false}>
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
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
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
          </li>
        </ul>
      </PageContainer>
    </>
  )
}

export default Gallery
