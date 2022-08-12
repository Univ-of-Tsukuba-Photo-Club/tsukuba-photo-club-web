import React from "react"
import PageContainer from "../components/page-container"
import Meta from "../components/meta"
import { useStaticQuery, graphql } from "gatsby"
import { Card, Icon, Button } from "semantic-ui-react"
import css from "@emotion/css"
import Img from "gatsby-image"

const GRADE_MAPPING: { [n: number]: string } = {
  1: "学群1年",
  2: "学群2年",
  3: "学群3年",
  4: "学群4年",
  5: "修士1年",
  6: "修士2年",
  7: "博士1年",
  8: "博士2年",
  9: "博士3年",
}

const Members: React.FC = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          sort: { fields: [frontmatter___grade], order: ASC }
          filter: { fields: { collection: { eq: "members" } } }
        ) {
          edges {
            node {
              excerpt
              fields {
                slug
              }
              frontmatter {
                name
                image {
                  childImageSharp {
                    fluid(maxWidth: 400, maxHeight: 400) {
                      ...GatsbyImageSharpFluid_noBase64
                    }
                  }
                }
                grade
                department
                equipment
                twitter
                instagram
                comment
              }
            }
          }
        }
      }
    `
  )

  const members = allMarkdownRemark.edges as any[]

  return (
    <>
      <Meta title="Members" />
      <PageContainer title="Members" text={false}>
        <p css={css({ textAlign: "center", paddingBottom: "12px" })}>
          現在、追加中です。
        </p>
        <div
          css={css({
            maxWidth: "80vw",
            alignItems: "center",
          })}
        >
        <Card.Group itemsPerRow={5} doubling stackable>
          {members.map(({ node }) => {
            return (
              <Card key={node.fields.slug}>
                {node.frontmatter.image && (
                  <Img fluid={node.frontmatter.image.childImageSharp.fluid} />
                )}
                <Card.Content>
                  <Card.Header>{node.frontmatter.name}</Card.Header>
                  <Card.Meta css={css({ fontSize: "0.9em !important" })}>
                    <span>{node.frontmatter.department}</span>
                    <span>{GRADE_MAPPING[node.frontmatter.grade]}</span>
                  </Card.Meta>
                  <Card.Description>
                    <div>
                      <Icon name="comment" />
                      {node.frontmatter.comment}
                    </div>
                    {node.frontmatter.equipment ? (
                      <div>
                        <Icon name="camera" />
                        {node.frontmatter.equipment}
                      </div>
                    ) : (
                      <></>
                    )}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div className="ui two buttons">
                    <Button
                      basic
                      disabled={!node.frontmatter.twitter}
                      color="blue"
                      as="a"
                      icon
                      href={`https://twitter.com/${node.frontmatter.twitter}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon name="twitter" />
                    </Button>
                    <Button
                      basic
                      disabled={!node.frontmatter.instagram}
                      color="pink"
                      as="a"
                      icon
                      href={`https://www.instagram.com/${node.frontmatter.instagram}/`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon name="instagram" />
                    </Button>
                  </div>
                </Card.Content>
              </Card>
            )
          })}
        </Card.Group>
        </div>
      </PageContainer>
    </>
  )
}

export default Members
