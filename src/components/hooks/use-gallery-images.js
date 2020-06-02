import { graphql, useStaticQuery } from "gatsby";

const useGalleryImages = () => {

  const data = useStaticQuery(graphql`
   query {
      allFile(filter: {sourceInstanceName: {eq: "images"}}) {
        nodes {
          id
          name
          publicURL
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

  let imgObj = {};
  let min = 0;
  let max = imgArray.length;
  let rand1 = Math.floor(Math.random() * (max - min) + min);
  let rand2 = Math.floor(Math.random() * (max - min) + min);

  return imgArray.map((node, idx) => {
    imgObj = {
      img: node.image,
      id: node.id,
      URL: node.publicURL,
      name: node.name,
    }
    imgObj.top = (idx === rand1 ? true : false);
    imgObj.bot = (idx === rand2 ? true : false);
    return imgObj;
  })

}

export default useGalleryImages;
