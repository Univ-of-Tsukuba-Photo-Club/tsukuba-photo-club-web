import React from "react"
import css from "@emotion/css"
import { Header, Menu } from "semantic-ui-react"
import { graphql, StaticQuery, Link } from "gatsby"
import Img from "gatsby-image"

type Props = {
  fixed?: boolean
}

const GalleryHeaderMiddle: React.FC<Props> = (props) => (
  <StaticQuery
    query={query}
    render={(data) => (
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
    )}
  />
)

export default GalleryHeaderMiddle

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
