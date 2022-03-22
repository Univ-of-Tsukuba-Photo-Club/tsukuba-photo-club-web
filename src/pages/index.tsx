import React from "react"
import "./index.css"
import "semantic-ui-css/semantic.min.css"
import Header from "../components/header"
import Meta from "../components/meta"

if (typeof window !== "undefined") {
  if (window.innerWidth < window.innerHeight) {
    document.location = "https://tsukuba-photoclub.com/about/";
  }else{
    document.location = "https://tsukuba-photoclub.com/contact/";
}

const IndexPage: React.FC = () => (
  <>
    <Meta />
    <Header fixed />
  </>
)

export default IndexPage
