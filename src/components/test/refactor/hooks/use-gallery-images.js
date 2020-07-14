import { graphql, useStaticQuery } from "gatsby";
import {fiveDigitRand} from './app-utils'

const useGalleryImages = () => {

  const data = useStaticQuery(graphql`
   query {
    allFile(filter: {sourceInstanceName: {eq: "images"}, relativeDirectory: {eq: "gallery-images"}}) {
      nodes {
        name
        URL: publicURL
        image: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  }
`)

  let imgArray = data.allFile.nodes;


  // "src:" is a direct, unprocessed link to image
  // "img:" is for gatsby-image -> fluid=(img.fluid)
  // TODO: add alt description for each image
  return imgArray.map((node, idx) => ({
    id: fiveDigitRand(), //fiveDigitRand() TODO: call fiveDigitRand()
    name: node.name,
    img: node.image, //gatsby-image fluid
    tag: `default_image`,
    url: node.URL // base: 64
  }))
}

export default useGalleryImages;
