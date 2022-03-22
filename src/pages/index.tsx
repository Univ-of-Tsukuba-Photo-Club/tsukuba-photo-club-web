import React from "react"

if (typeof window !== "undefined") {
  if (window.innerWidth < window.innerHeight) {
    document.location = "/About";
  }else{
    document.location = "/Contact";
  }
}

const IndexPage: React.FC = () => (
  <>
  </>
)

export default IndexPage
