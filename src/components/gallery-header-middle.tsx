import React from "react"
import css from "@emotion/css"
import { Menu } from "semantic-ui-react"
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
        <Menu
          text
          css={css`
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            margin-right: -0.5em !important;
            margin-top: 0 !important;
            margin-bottom: -16px !important;
            }
          `}
        >
          <Menu.Item name="雙峰祭2022　自由展" as={Link} to="/gallery" />
        </Menu>
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