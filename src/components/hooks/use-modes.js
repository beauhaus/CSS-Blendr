import {graphql, useStaticQuery } from "gatsby";

const useModes =() => {
    const data = useStaticQuery(graphql`
    query {
        allMdx {
          nodes {
            frontmatter {
              title
              slug
              author
            }
            excerpt
          }
        }
      }
`)

return data.allMdx.nodes.map(mode =>({
    title: mode.frontmatter.title,
    author: mode.frontmatter.author,
    slug: mode.frontmatter.slug,
    excerpt: mode.excerpt
}))

}

export default useModes;