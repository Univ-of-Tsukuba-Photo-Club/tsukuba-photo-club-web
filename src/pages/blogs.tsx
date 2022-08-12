import React from "react"
import PageContainer from "../components/page-container"
import Meta from "../components/meta"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Card, CardGroup, Header } from "semantic-ui-react"
import css from "@emotion/css"
import Img from "gatsby-image"

const Blogs: React.FC = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { fields: { collection: { eq: "blog" } } }
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
                    fluid(maxWidth: 400, maxHeight: 200) {
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
      <Meta title="Blogs" />
      <PageContainer title="Blogs">
        <Card.Group>
          {posts.map(({ node }) => {
            return (
              <Card
                key={node.fields.slug}
                fluid
                as={Link}
                to={node.fields.slug}
                css={css({ padding: "12px !important" })}
              >
                {node.frontmatter.image && (
                  <Img fluid={node.frontmatter.image.childImageSharp.fluid} />
                )}
                <Card.Content>
                  <Header as="h2">{node.frontmatter.title}</Header>
                  <div
                    css={css({
                      fontSize: "14px",
                      color: "grey",
                    })}
                  >
                    {node.frontmatter.date}
                  </div>
                  <p
                    css={css({ marginTop: "16px !important", color: "black" })}
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                </Card.Content>
              </Card>
            )
          })}
        </Card.Group>
      </PageContainer>
    </>
  )
}

export default Blogs
