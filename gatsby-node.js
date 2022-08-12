const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.tsx`)
  const staticPage = path.resolve(`./src/templates/static-page.tsx`)
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  const pages = result.data.allMarkdownRemark.edges
  const isPost = (page) => page.node.fields.slug.startsWith("/blogs/" || "/events/")
  pages
    .filter((page) => isPost(page))
    .forEach((post, index, posts) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: post.node.fields.slug,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })

  pages
    .filter((page) => !isPost(page))
    .forEach((post) => {
      createPage({
        path: post.node.fields.slug,
        component: staticPage,
        context: {
          slug: post.node.fields.slug,
        },
      })
    })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    let slug = createFilePath({ node, getNode })
    if (node.fileAbsolutePath.includes("content/blog")) {
      slug = `/blogs${slug}`
    }
    if (node.fileAbsolutePath.includes("content/event")) {
      slug = `/event${slug}`
    }

    createNodeField({
      node,
      name: "slug",
      value: slug,
    })

    const parent = getNode(node.parent)

    createNodeField({
      node,
      name: "collection",
      value: parent.sourceInstanceName,
    })
  }
}
