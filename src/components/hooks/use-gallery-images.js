import { graphql, useStaticQuery } from "gatsby";

const useGaleryImages = () => {
  const data = useStaticQuery(graphql`
   query {
      allFile(filter: {sourceInstanceName: {eq: "images"}}) {
        nodes {
          id
          image: childImageSharp {
            fluid  {
              #...GatsbyImageSharpFluid_withWebp
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
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