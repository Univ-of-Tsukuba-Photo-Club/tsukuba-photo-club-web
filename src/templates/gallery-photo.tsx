import React from "react"
import PhotoContainer from "../components/photo-container"
import Meta from "../components/meta"
import { graphql, Link } from "gatsby"
import css from "@emotion/css"
import { Button, Header, Icon } from "semantic-ui-react"
import ShareButtons from "../components/share-buttons"

type Props = {
  data: any
  pageContext: any
  location: any
}

const GalleryPhotoTemplate: React.FC<Props> = (props) => {
  const post = props.data.markdownRemark
  const { previous, next } = props.pageContext

  return (
    <>
      <Meta
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.image?.publicURL}
      />
      <PhotoContainer>
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
        <Header
          as="h3"
          css={css({
            fontFamily: "sans-serif !important;",
            textAlign: "center"
          })}
        >
          {post.frontmatter.title}
        </Header>
        <p
          css={css({
            color: "grey",
            textAlign: "center"
          })}
        >
          {post.frontmatter.date}
        </p>
        <p>
          {post.frontmatter.description}
        </p>
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
                basic
                color='grey'
                icon
                labelPosition="left"
                as={Link}
                to={previous.fields.slug}
                style={{
                  margin: "4px",
                }}
              >
                <Icon name="arrow left" />
                Backああああああああ
              </Button>
            )}
          </li>
          <li css={css({ marginLeft: "auto" })}>
            {next && (
              <Button
                basic
                color='black'
                icon
                labelPosition="right"
                as={Link}
                to={next.fields.slug}
                style={{
                  margin: "4px",
                }}
              >
                <Icon name="arrow right" />
                Nextああああああああ
              </Button>
            )}
          </li>
        </ul>
      </PhotoContainer>
    </>
  )
}

export default GalleryPhotoTemplate

export const pageQuery = graphql`
  query GalleryPhotoBySlug($slug: String!) {
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
        date(formatString: "MMMM DD, YYYY")
        description
        image {
          publicURL
        }
      }
    }
  }
`
