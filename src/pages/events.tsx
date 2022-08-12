import React from "react"
import PageContainer from "../components/page-container"
import Meta from "../components/meta"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Card, CardGroup, Header } from "semantic-ui-react"
import css from "@emotion/css"

const Events: React.FC = () => {
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
      <Meta title="Events" />
      <PageContainer title="Events">
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

export default Events
