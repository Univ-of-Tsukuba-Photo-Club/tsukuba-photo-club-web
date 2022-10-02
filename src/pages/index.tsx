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
            "/slideshow-blackboard.jpg",
            "/slideshow-exhibits.jpg",
            "/slideshow-photobooks.jpg",
            "/slideshow-groupphoto.jpg"
          ]}
          linkUrl=""
        />
{/*
imageUrls：スライドショーの写真　スライドショー用のみ直下の/staticに保存のこと
linkUrl：URL（/aboutなどでもよい（というかむしろ推奨））を入れると1枚目の時にスライドショーがそこへのリンクに変わる　イベント告知などでの使用を想定
*/}
      </div>
      <Footer />
    </div>
  </>
)

export default IndexPage
