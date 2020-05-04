exports.createPages = async ({actions, graphql, reporter}) => {

    const result = await graphql(`
    query {
        allMdx {
            nodes {
                frontmatter {
                    slug
                }
            }
        }
    }
    `)

    if (result.errors) {
        reporter.panic('failed from gatsby-node.js graphql query', errors)
    }
    const modes = result.data.allMdx.nodes;
    modes.forEach(mode => {
        actions.createPage({
            path: mode.frontmatter.slug,
            component: require.resolve('./src/autogen-template/mode.js'),
            context: {
                slug: `/${mode.frontmatter.slug}`
            }
        })
    });
}