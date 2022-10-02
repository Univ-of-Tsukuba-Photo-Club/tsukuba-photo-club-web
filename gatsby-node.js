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
                slug,
                static
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
  const isPost = (page) => page.node.fields.slug.startsWith(("/blogs/", "/events/"))
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

  const isSohosai2022Free = (page) => page.node.fields.slug.startsWith("/sohosai2022/free/")
  pages
    .filter((page) => isSohosai2022Free(page))
    .forEach((post, index, posts) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: post.node.fields.slug,
        component: galleryPhoto,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
          gallerypath: "/sohosai2022/free",
          galleryname: "雙峰祭2022　自由展",
        },
      })
    })

  const isSohosai2022Theme = (page) => page.node.fields.slug.startsWith("/sohosai2022/theme/")
  pages
    .filter((page) => isSohosai2022Theme(page))
    .forEach((post, index, posts) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: post.node.fields.slug,
        component: galleryPhoto,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
          gallerypath: "/sohosai2022/theme",
          galleryname: "雙峰祭2022　テーマ展",
        },
      })
    })

  const isStatic = (page) => page.node.fields.static.startsWith("true")
  pages
    .filter((page) => isStatic(page))
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
      slug = `/events${slug}`
    }
    if (node.fileAbsolutePath.includes("content/gallery-sohosai2022-free")) {
      slug = `/sohosai2022/free${slug}`
    }
    if (node.fileAbsolutePath.includes("content/gallery-sohosai2022-theme")) {
      slug = `/sohosai2022/theme${slug}`
    }

    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
    
    let static = "false"
    if (node.fileAbsolutePath.includes("content/static")) {
      static = "true"
    }

    createNodeField({
      node,
      name: "static",
      value: static,
    })

    const parent = getNode(node.parent)

    createNodeField({
      node,
      name: "collection",
      value: parent.sourceInstanceName,
    })
  }
}
