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
          height: "67vw",
          maxHeight: "90vh",
          flex: "1 0 auto",
        })}
      >
        <Slideshow
          imageUrls={[
            "/blackboard.jpg",
            "https://pbs.twimg.com/media/FS89b-oaAAECgwp?format=jpg&name=large",
            "https://pbs.twimg.com/media/DN3xyoOUIAEb0sE?format=jpg&name=4096x4096",
            "https://raw.githubusercontent.com/Univ-of-Tsukuba-Photo-Club/tsukuba-photo-club-web/master/content/img/%E3%80%8C%E8%A6%8B%E3%82%8B%E3%80%8D%E5%86%99%E7%9C%9F%E3%81%8B%E3%82%89%E3%80%8C%E8%AA%AD%E3%82%80%E3%80%8D%E5%86%99%E7%9C%9F%E3%81%B8-1-.jpg"
          ]}
          linkUrl="/blogs/2022-06-21-2022年度新人展/"
        />
      </div>
      <Footer />
    </div>
  </>
)

export default IndexPage
