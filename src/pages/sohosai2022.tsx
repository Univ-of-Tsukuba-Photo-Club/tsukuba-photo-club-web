import React from "react"
import PageContainer from "../components/page-container"
import Meta from "../components/meta"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Card, CardGroup, Header } from "semantic-ui-react"
import css from "@emotion/css"

const Sohosai2022: React.FC = () => {
  return (
    <>
      <Meta title="Sohosai2022" />
      <PageContainer title="Sohosai2022">
        <p>
          雙峰祭「筑波大学写真部展示会」のオンライン企画ページです。
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
        <p>
          対面企画として、1E502・503教室においても写真やフォトブックの展示を行っています。ぜひお越しください。<br>
          なお、ご来場には制限があります。詳しくは<a href="">雙峰祭公式サイト</a>をご覧ください。
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
}

export default Sohosai2022
