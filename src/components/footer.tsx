import React from "react"
import css from "@emotion/css"
import { Icon } from "semantic-ui-react"

const Footer: React.FC = () => (
  <div
    css={css({
      alignSelf: "center",
      width: "100vw",
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      marginTop: "16px",
      marginBottom: "4px",
      alignItems: "flex-end",
    })}
  >
    <div>
      <p>
        ©︎ 2020 筑波大学写真部
        <div css={css({ fontSize: "10px", marginBottom: "20px !important" })}>
          当サイトでは、Google Analyticsを使用して<br>アクセス情報の収集、処理を行っています。<br>
          詳しくは
          <a
            href="https://policies.google.com/technologies/partner-sites?hl=ja"
            target="_blank"
            rel="noopener noreferrer"
          >
            こちら
          </a>
          をご覧ください。
        </div>
      </p>
    </div>
  </div>
)

export default Footer
