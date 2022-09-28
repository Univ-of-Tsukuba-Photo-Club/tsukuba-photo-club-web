import React from "react"
import PageContainer from "../components/page-container"
import Meta from "../components/meta"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Button, Card, CardGroup, Header } from "semantic-ui-react"
import css from "@emotion/css"

const Sohosai2022: React.FC = () => (
  <>
    <Meta title="Sohosai2022" />
    <PageContainer title="雙峰祭2022">
      <p>
        筑波大学写真部による雙峰祭企画「筑波大学写真部展示会」のオンラインページです。<br/>
        自由展とテーマ展「輝き」の2つの展示がございます。
      </p>
      <Card.Group>
        <Card
          fluid
          color='black'
          header='自由展'
          as={Link}
          to="/sohosai2022/free"
        />
        <Card
          fluid
          color='black'
          header='テーマ展「輝き」'
          as={Link}
          to="/sohosai2022/theme"
        />
      </Card.Group>
      <br/>
      <h2>
        対面企画のご案内
      </h2>
      <p>
        1E502・503教室において、写真やフォトブックの展示を行っています。ぜひお越しください。<br/>
        なお、ご来場には制限がございます。詳しくは<a href="https://sohosai.com">雙峰祭公式サイト</a>をご覧ください。
      </p>
      <Button
        basic
        color='black'
        as={Link}
        to="https://sohosai.com"
        style={{
          margin: "4px",
          align: "center",
        }}
      >
        雙峰祭トップページ
      </Button>
    </PageContainer>
  </>
)

export default Sohosai2022
