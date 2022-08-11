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
      <Slideshow
        imageUrls={[
          "https://pbs.twimg.com/media/D3mc_PZV4AED70c?format=jpg&name=4096x4096",
          "https://pbs.twimg.com/media/EIWfG8JXkAAV-KD?format=jpg&name=large",
          "https://pbs.twimg.com/media/EIaE8zCXkAYsvlL?format=jpg&name=large",
          "https://pbs.twimg.com/media/DN3xyoOUIAEb0sE?format=jpg&name=4096x4096"
        ]}
      />
    </PageContainer>
  </>
)

export default IndexPage
