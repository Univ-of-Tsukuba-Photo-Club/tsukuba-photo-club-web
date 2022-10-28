import React from "react"
import PageContainer from "../components/page-container"
import Meta from "../components/meta"
import { graphql } from "gatsby"

type Props = {
  data: any
  location: any
}

const BlogPostTemplate: React.FC<Props> = (props) => {
  const post = props.data.markdownRemark

  return (
    <>
      <Meta
        title={post.frontmatter.title}
        description={post.frontmatter.description}
      />
      <PageContainer title={post.frontmatter.title}>
        <span dangerouslySetInnerHTML={{ __html: post.html }} />
      </PageContainer>
    </>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query StaticPageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        description
      }
    }
  }
`
