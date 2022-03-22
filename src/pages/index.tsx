import React from "react"
import Meta from "../components/meta"

if (window.innerWidth < window.innerHeight) {
  document.location = "/About";
}else{
  document.location = "/Contact";
}

const IndexPage: React.FC = () => (
  <>
    <Meta />
  </>
)

export default IndexPage
