import React from "react"
import Meta from "../components/meta"

if (typeof window !== "undefined") {
  if (window.innerWidth < window.innerHeight) {
    document.location = "https://tsukuba-photoclub.com/about/";
  }else{
    document.location = "https://tsukuba-photoclub.com/contact/";
  }
}

const IndexPage: React.FC = () => (
  <>
    <Meta />
  </>
)

export default IndexPage
