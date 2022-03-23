import React from "react"
import "./index.css"
import "semantic-ui-css/semantic.min.css"
import Slideshow from "../components/slide-show"
import Header from "../components/header"
import Meta from "../components/meta"

if (typeof window !== "undefined") {
  if (window.innerWidth < window.innerHeight) {
    import Slideshow from "../components/slide-show"
  }else{
    import Slideshow from "../components/slide-show-sp"
  }
}

const IndexPage: React.FC = () => (
  <>
    <Meta />
    <Header fixed />
    <Slideshow
      imageUrls={[
        "https://pbs.twimg.com/media/D3mc_PZV4AED70c?format=jpg&name=4096x4096",
        "https://pbs.twimg.com/media/EIWfG8JXkAAV-KD?format=jpg&name=large",
        "https://pbs.twimg.com/media/EIaE8zCXkAYsvlL?format=jpg&name=large",
        "https://pbs.twimg.com/media/DN3xyoOUIAEb0sE?format=jpg&name=4096x4096"
      ]}
    />
  </>
)

export default IndexPage
