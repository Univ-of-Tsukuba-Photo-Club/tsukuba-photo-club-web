const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.tsx`)
  const galleryPhoto = path.resolve(`./src/templates/gallery-photo.tsx`)
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
  const isPost = (page) => page.node.fields.slug.startsWith("/blogs/")
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
  
  const isPhoto = (page) => page.node.fields.slug.startsWith("/gallery")
  
  const isSohosai2022Free = (page) => page.node.fields.slug.startsWith("/gallery-sohosai2022-free/")
  pages
    .filter((page) => isSohosai2022Free(page))
    .forEach((post, index, posts) => {
      const previous = index === 0 ? null : posts[index - 1].node
      const next = index === posts.length - 1 ? null : posts[index + 1].node

      createPage({
        path: post.node.fields.slug,
        component: galleryPhoto,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
          gallerypath: "/gallery-sohosai2022-free",
          galleryname: "雙峰祭2022　自由展",
        },
      })
    })
  
  const isSohosai2022Theme = (page) => page.node.fields.slug.startsWith("/gallery-sohosai2022-theme/")
  pages
    .filter((page) => isSohosai2022Theme(page))
    .forEach((post, index, posts) => {
      const previous = index === 0 ? null : posts[index - 1].node
      const next = index === posts.length - 1 ? null : posts[index + 1].node

      createPage({
        path: post.node.fields.slug,
        component: galleryPhoto,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
          gallerypath: "/gallery-sohosai2022-theme",
          galleryname: "雙峰祭2022　テーマ展",
        },
      })
    })

  pages
    .filter((page) => !isPost(page) && !isPhoto(page))
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
    if (node.fileAbsolutePath.includes("content/gallery-sohosai2022-free")) {
      slug = `/gallery-sohosai2022-free${slug}`
    }
    if (node.fileAbsolutePath.includes("content/gallery-sohosai2022-theme")) {
      slug = `/gallery-sohosai2022-theme${slug}`
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
