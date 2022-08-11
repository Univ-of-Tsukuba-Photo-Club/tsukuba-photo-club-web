import React from "react"
import "./index.css"
import "semantic-ui-css/semantic.min.css"
import Slideshow from "../components/slide-show"
import PageContainer from "../components/page-container"
import Meta from "../components/meta"
import css from "@emotion/css"

const IndexPage: React.FC = () => (
  <>
    <Meta />
    <PageContainer>
      <div
        css={css({
          height: "300px",
          width: "300px",
          backgroundcolor: "black"
        })}
      >
      </div>
    </PageContainer>
  </>
)

export default IndexPage
