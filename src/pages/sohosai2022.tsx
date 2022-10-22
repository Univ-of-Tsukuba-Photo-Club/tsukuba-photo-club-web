import React from "react"
import PageContainer from "../components/page-container"
import Meta from "../components/meta"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Button, Card, CardGroup, Header } from "semantic-ui-react"
import css from "@emotion/css"

const Sohosai2022: React.FC = () => (
  <>
    <Meta title="雙峰祭2022" />
    <PageContainer title="雙峰祭2022">
      <p>
        このたびは、筑波大学写真部の展示にお越しいただき誠にありがとうございます。<br/>
        今年は写真部として3年ぶりに雙峰祭に展示を出すことができ、大変うれしく思っております。
      </p>
      <p>
        今回は、部員それぞれの自信作を集めた自由展と、「輝き」を題材としたテーマ展の2種類の展示を行っております。<br/>
        大学に入りはじめてカメラに触った部員から、たくさんの写真を撮り続けてきた部員まで、一人一人が心を込めて撮った写真の数々です。
      </p>
      <p>
        それでは、どうぞごゆっくりとお楽しみください。
      </p>
      <Card.Group>
        <Card
          fluid
          header='自由展'
          as={Link}
          to="/sohosai2022/free"
        />
        <Card
          fluid
          header='テーマ展「輝き」'
          as={Link}
          to="/sohosai2022/theme"
        />
      </Card.Group>
      <hr css={css({ marginTop: "24px" })} />
      <h2>
        対面企画のご案内
      </h2>
      <p>
        1E502・503教室において、写真やフォトブックの展示を行っています。ぜひお越しください。<br/>
        なお、ご来場には事前予約が必要です。詳しくは<a href="https://sohosai.com/prebooking" target="_blank">雙峰祭公式サイト</a>をご覧ください。
      </p>
      <ul
        style={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `center`,
          listStyle: `none`,
          padding: 0,
        }}
      >
        <li>
          <Button
            basic
            color='black'
            as={Link}
            to="https://sohosai.com"
            target="_blank"
            style={{
              margin: "4px",
            }}
          >
            雙峰祭トップページ
          </Button>
        </li>
      </ul>
    </PageContainer>
  </>
)

export default Sohosai2022
