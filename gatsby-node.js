exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const markdownPageTemplate = require.resolve(`./src/templates/markdown-page-template.js`);
  const result = await graphql(`
    {
      allMdx {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: markdownPageTemplate,
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })
}
