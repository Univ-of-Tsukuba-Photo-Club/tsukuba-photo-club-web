import React, { ReactNode } from "react"
import GalleryHeader from "./gallery-header"
import GalleryHeaderMiddle from "./gallery-header-middle"
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
      <GalleryHeader />
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
      <GalleryHeaderMiddle />
    </div>
    <div
      css={css({
        alignSelf: "center",
        width: "100vw",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        marginTop: "-8px",
        marginBottom: "4px",
        alignItems: "flex-end",
      })}
    >
      <div>
        <p>
          ©︎ 2020 筑波大学写真部
          <div css={css({ fontSize: "10px", marginBottom: "20px !important" })}>
            <span css={css({ display: "inline-block" })}>
              <span css={css({ display: "inline-block" })}>当サイトでは、Google Analyticsを使用して</span>
              <span css={css({ display: "inline-block" })}>アクセス情報の収集・処理を行っています。</span>
            </span>
            <span css={css({ display: "inline-block" })}>
              詳しくは
              <a
                href="https://policies.google.com/technologies/partner-sites?hl=ja"
                target="_blank"
                rel="noopener noreferrer"
              >
                こちら
              </a>
              をご覧ください。
            </span>
          </div>
        </p>
      </div>
    </div>
  </div>
)

export default PageContainer
