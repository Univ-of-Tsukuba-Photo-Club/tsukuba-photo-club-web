import React from "react"
import "./index.css"
import "semantic-ui-css/semantic.min.css"
import Slideshow from "../components/slide-show"
import Header from "../components/header"
import Meta from "../components/meta"
import css from "@emotion/css"
import Footer from "../components/footer"

const IndexPage: React.FC = () => (
  <>
    <Meta />
    <div
      css={css({
        display: "flex",
        flexFlow: "column",
        minHeight: "100vh",
        height: "100%",
      })}
    >
      <Header />
      <div
        css={css({
          width: "100vw",
          height: "67vw",
          maxHeight: "90vh",
        })}
      >
        <Slideshow
          imageUrls={[
            "https://pbs.twimg.com/media/FS89b-oaAAECgwp?format=jpg&name=large",
            "https://pbs.twimg.com/media/DN3xyoOUIAEb0sE?format=jpg&name=4096x4096"
          ]}
          linkUrl="/blogs/2022-06-21-2022年度新人展/"
        />
      </div>
      <Footer />
    </div>
  </>
)

export default IndexPage
