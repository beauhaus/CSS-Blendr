import { graphql, useStaticQuery } from "gatsby";

const useGalleryImages = () => {

  const data = useStaticQuery(graphql`
   query {
      allFile(filter: {sourceInstanceName: {eq: "images"}}) {
        nodes {
          name
         # src: sourceInstanceName
         # imgpath: relativePath
          URL: publicURL
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

  let imgArray = data.allFile.nodes;

  // let imgObj = {};
  let min = 0;
  let max = imgArray.length;
  let rand1 = Math.floor(Math.random() * (max - min) + min);
  let rand2 = Math.floor(Math.random() * (max - min) + min);

  // "src:" is a direct, unprocessed link to image
  // "img:" is for gatsby-image -> fluid=(img.fluid)
  return imgArray.map((node, idx) => ({
    img: node.image,
    name: node.name,
    url: node.URL,
    top: (idx === rand1 ? true : false),
    bot: (idx === rand2 ? true : false),
  }))
  
  // src: `/${node.src}/${node.imgpath}`
}

export default useGalleryImages;
