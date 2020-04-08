import React, { ReactNode } from "react"
import AppHeader from "./header"
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
    <AppHeader />
    <Container
      text={text}
      css={css({
        paddingTop: "64px",
        flex: "1 0 auto",
      })}
    >
      {title ? (
        <>
          <Header as="h1" textAlign="center">
            {title}
          </Header>
          <Divider />
        </>
      ) : (
        <></>
      )}
      <div
        css={css({
          paddingTop: "16px",
        })}
      >
        {children}
      </div>
    </Container>
    <Footer />
  </div>
)

export default PageContainer
