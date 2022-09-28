import React from "react"
import PhotoContainer from "../components/photo-container"
import Meta from "../components/meta"
import { graphql, Link } from "gatsby"
import css from "@emotion/css"
import { Button, Header, Icon } from "semantic-ui-react"

type Props = {
  data: any
  pageContext: any
  location: any
}

const GalleryPhotoTemplate: React.FC<Props> = (props) => {
  const post = props.data.markdownRemark
  const { previous, next, gallerypath, galleryname } = props.pageContext

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
        <p
          css={css({
            fontSize: "larger",
            fontWeight: "bold",
            textAlign: "center"
          })}
        >
          {post.frontmatter.title}
        </p>
        <p
          css={css({
            color: "grey",
            textAlign: "center"
          })}
        >
          {post.frontmatter.name}
        </p>
        <p>
          {post.frontmatter.description}
        </p>
        {post.frontmatter.title ? (
          <hr css={css({ marginTop: "24px" })} />
        ) : (
          <></>
        )}
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
            {previous ? (
              <Button
                basic
                color='black'
                icon
                as={Link}
                to={previous.fields.slug}
                style={{
                  margin: "4px",
                }}
              >
                <Icon name="arrow left" />
              </Button>
            ) : (
              <Button
                basic
                color='black'
                icon
                style={{
                  margin: "4px",
                  visibility: "hidden",
                }}
              >
                <Icon name="arrow left" />
              </Button>
            )}
          </li>
          <li>
            <Button
              basic
              color='black'
              as={Link}
              to={gallerypath}
              style={{
                margin: "4px",
              }}
            >
              {galleryname}
            </Button>
          </li>
          <li>
            {next ? (
              <Button
                basic
                color='black'
                icon
                as={Link}
                to={next.fields.slug}
                style={{
                  margin: "4px",
                }}
              >
                <Icon name="arrow right" />
              </Button>
            ) : (
              <Button
                basic
                color='black'
                icon
                style={{
                  margin: "4px",
                  visibility: "hidden",
                }}
              >
                <Icon name="arrow right" />
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
        name
        description
        image {
          publicURL
        }
      }
    }
  }
`
