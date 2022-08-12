import React from "react"
import "./index.css"
import "semantic-ui-css/semantic.min.css"
import Gallery from "../components/gallery"
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
          width: "80vw",
          maxWidth: "80vh",
          height: "80vw",
          maxHeight: "80vh"
        })}
      >
        <Gallery
          imageUrls={[
            ".../content/img/201226_kn_015295-2-kazuki-nakamura.jpg",
            ".../content/img/1f1a0070-宮澤有伸.jpg"
          ]}
        />
      </div>
      <Footer />
    </div>
  </>
)

export default Gallery
