import React, { ReactNode } from "react"
import Meta from "../components/meta"
import AppHeader from "./header"
import { Button, Container, Header, Icon, Divider } from "semantic-ui-react"
import css from "@emotion/css"
import ShareButtons from "../components/share-buttons"
import Footer from "./footer"
import { graphql, Link } from "gatsby"

type Props = {
  title?: string
  children: ReactNode
  text?: boolean
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
      <div
        css={css({
          display: "flex",
          flexFlow: "column",
          minHeight: "100vh",
          height: "100%",
        })}
      >
        <AppHeader />
        <Container
          text=true
          css={css`
            @media (max-width: 800px) {
              padding-top: 32px;
            }
            padding-top: 64px;
            flex: 1 0 auto;
          `}
        >
          {title ? (
            <>
              <Header as="h1" textAlign="center">
                {title}
              </Header>
              <Divider />
            </>
          ) : (
            <></>
          )}
          <div
            css={css({
              paddingTop: "12px",
            })}
          >
            <Header
              as="h1"
              css={css({
                fontFamily: "sans-serif !important;",
              })}
            >
              {post.frontmatter.title}
            </Header>
            <div
              css={css({
                color: "grey",
                marginBottom: "20px",
              })}
            >
              {post.frontmatter.date}
            </div>
            <ShareButtons href={props.location.href} />
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
          </div>
        </Container>
        <Footer />
      </div>
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
