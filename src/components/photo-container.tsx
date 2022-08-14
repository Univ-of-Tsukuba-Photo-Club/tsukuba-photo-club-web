import React, { ReactNode } from "react"
import GalleryLogo from "./gallery-logo"
import { Container, Header, Divider } from "semantic-ui-react"
import css from "@emotion/css"
import Footer from "./footer"

type Props = {
  title?: string
  children: ReactNode
  text?: boolean
}

const PageContainer: React.FC<Props> = ({ title, children, text = true }) => (
  <div
    css={css({
      display: "flex",
      flexFlow: "column",
      minHeight: "100vh",
      height: "100%",
    })}
  >
    <div
      css={css` 
        @media (min-aspect-ratio: 1/1) {
          height: 0px;
          display: none;
        }
      `}
    >
      <GalleryLogo />
    </div>
    <Container
      text={text}
      css={css`
        padding-top: 32px;
        flex: 1 0 auto;
      `}
    >
      {children}
    </Container>
    <div
      css={css` 
        @media (max-aspect-ratio: 1/1) {
          height: 0px;
          display: none;
        }
      `}
    >
      <GalleryLogo />
    </div>
    <Footer />
  </div>
)

export default PageContainer
