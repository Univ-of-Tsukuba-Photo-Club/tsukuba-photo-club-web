import React from "react"
import css from "@emotion/css"
import { Menu } from "semantic-ui-react"
import { graphql, StaticQuery, Link } from "gatsby"
import Img from "gatsby-image"

type Props = {
  fixed?: boolean
}

const Header: React.FC<Props> = (props) => (
  <StaticQuery
    query={query}
    render={(data) => (
      <div
        css={css({
          backgroundColor: props.fixed
            ? "rgba(255, 255, 255, 0.85)"
            : "rgba(238, 238, 238, 0.25)",
          position: props.fixed ? "fixed" : undefined,
          width: "100%",
          zIndex: 1,
          boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
        })}
      >
        <div
          css={css`
            width: 100%;
            display: flex;
            @media (max-width: 800px) {
              align-items: center;
              flex-direction: column;
            }
          `}
        >
          <Link
            to="/"
            css={css`
              margin-right: auto;
              margin-left: 20px;
              @media (max-width: 800px) {
                margin-right: 0;
                margin-left: 0;
              }
            `}
          >
            <Img fixed={data.file.childImageSharp.fixed} loading="eager" fadeIn={false} />
          </Link>
          <Menu
            text
            css={css`
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              margin-right: 20px !important;
              @media (max-width: 800px) {
                margin-right: -0.5em !important;
                margin-top: 0 !important;
                margin-bottom: 8px !important;
              }
            `}
          >
            <Menu.Item name="about" as={Link} to="/about" />
            <Menu.Item name="blogs" as={Link} to="/blogs" />
            <Menu.Item name="members" as={Link} to="/members" />
            <Menu.Item name="join" as={Link} to="/join" />
            <Menu.Item name="twitter" as={Link} to="https://twitter.com/tsukuba_photo" target="blank" rel="noopener noreferrer" />
{/*
コメントアウト　静的ページを探し出しリンクを生成する機能
            {(data.allMarkdownRemark.edges as any[]).map(({ node }) => (
              <Menu.Item
                name={node.frontmatter.title}
                as={Link}
                to={node.fields.slug}
              />
            ))}
*/}
          </Menu>
        </div>
      </div>
    )}
  />
)

export default Header

const query = graphql`
  query {
    file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fixed(width: 300, height: 80) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
    allMarkdownRemark(filter: { fields: { collection: { eq: "static" } } }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
