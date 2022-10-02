import React from "react"
import PageContainer from "../components/page-container"
import Meta from "../components/meta"
import { graphql, Link } from "gatsby"
import css from "@emotion/css"
import { Button, Header, Icon } from "semantic-ui-react"

type Props = {
  data: any
  pageContext: any
  location: any
}

const EventPostTemplate: React.FC<Props> = (props) => {
  const post = props.data.markdownRemark
  const { previous, next } = props.pageContext

  return (
    <>
      <Meta
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.image?.publicURL}
      />
      <PageContainer>
        <Header
          as="h1"
          css={css({
            fontFamily: "sans-serif !important;",
          })}
        >
          {post.frontmatter.title}
        </Header>
        <span
          css={css`
            img {
              max-width: 100%;
              object-fit: contain;
            }
            p {
              line-height: 32px !important;
            }
          `}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <hr css={css({ marginTop: "24px" })} />
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
            {previous && (
              <Button
                icon
                labelPosition="left"
                as={Link}
                to={previous.fields.slug}
                style={{
                  margin: "4px",
                }}
              >
                <Icon name="arrow left" />
                {previous.frontmatter.title}
              </Button>
            )}
          </li>
          <li>
            {next && (
              <Button
                icon
                labelPosition="right"
                as={Link}
                to={next.fields.slug}
                style={{
                  margin: "4px",
                }}
              >
                <Icon name="arrow right" />
                {next.frontmatter.title}
              </Button>
            )}
          </li>
        </ul>
      </PageContainer>
    </>
  )
}

export default EventPostTemplate

export const pageQuery = graphql`
  query EventPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        description
        image {
          publicURL
        }
      }
    }
  }
`
