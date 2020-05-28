import { graphql, useStaticQuery } from "gatsby";

const useGaleryImages = () => {
  const data = useStaticQuery(graphql`
   query {
      allFile(filter: {sourceInstanceName: {eq: "images"}}) {
        nodes {
          id
          image: childImageSharp {
            #fluid(maxHeight: 600, maxWidth: 600)  {
            #  ...GatsbyImageSharpFluid_withWebp
            #}
            fluid  {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
`)
  return data.allFile.nodes.map(node => (
    { img: node.image, id: node.id }
  ))
}

export default useGaleryImages;