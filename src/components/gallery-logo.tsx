import React from "react"
import css from "@emotion/css"
import { Menu } from "semantic-ui-react"
import { graphql, StaticQuery, Link } from "gatsby"
import Img from "gatsby-image"

type Props = {
  fixed?: boolean
}

const GalleryLogo: React.FC<Props> = (props) => (
  <StaticQuery
    query={query}
      render={(data) => (
      <div
        css={css` 
          @media (min-aspect-ratio: 1/1) {
            height: 0px;
            display: none;
          }
        `}
      >
        <div
          css={css({
            backgroundColor: props.fixed
              ? "rgba(255, 255, 255, 0.85)"
              : "rgba(238, 238, 238, 0.25)",
            position: props.fixed ? "fixed" : undefined,
            width: "100vw",
            zIndex: 1,
            boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
          })}
        >
          <div
            css={css`
              width: 100%;
              display: flex;
              align-items: center;
              flex-direction: column;
            `}
          >
            <Link
              to="/"
              css={css`
                margin-right: 0;
                margin-left: 0;
              `}
            >
              <Img fixed={data.file.childImageSharp.fixed} />
            </Link>
          </div>
        </div>
      </div>
      <div
        css={css` 
          @media (max-aspect-ratio: 1/1) {
            height: 0px;
            display: none;
          }
        `}
      >
        <div
          css={css({
            backgroundColor: props.fixed
              ? "rgba(255, 255, 255, 0.85)"
              : "rgba(238, 238, 238, 0.25)",
            position: props.fixed ? "fixed" : undefined,
            width: "100vw",
            zIndex: 1,
            boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
          })}
        >
          <div
            css={css`
              width: 100%;
              display: flex;
              align-items: center;
              flex-direction: column;
            `}
          >
            <Link
              to="/"
              css={css`
                margin-right: 0;
                margin-left: 0;
              `}
            >
              <Img fixed={data.file.childImageSharp.fixed} />
            </Link>
          </div>
        </div>
      </div>
    )}
  />
)

export default GalleryLogo

const query = graphql`
  query {
    file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fixed(width: 300, height: 80) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
  }
`
