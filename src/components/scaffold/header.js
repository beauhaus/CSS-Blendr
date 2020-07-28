import React from 'react';
import './header.scss'
import TopNavBtn from './topnavbtn'
import Link from 'gatsby-link';
import { graphql, useStaticQuery } from 'gatsby';



//   const glitchAnimImage = data.file.image.fixed;
//   xlinkHref={glitchAnimImage.src} 

const Header = () => {
    const data = useStaticQuery(graphql`
  {
 file: allFile(filter: {sourceInstanceName: {eq: "images"}, relativeDirectory: {eq: "images_util"}, name: {eq: "blendricon"}}) {
    nodes {
        image: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }  
      }
    }
  }
}

    `)
    // const blenderFavicon = data.file.nodes[0].image.fluid;
    const blenderFavicon2 = data.file.nodes[0].image.fluid;
// console.log("blenderF2: ", blenderFavicon2)
    return (
        <header className="header-wrapper">
            {/* <Link className="home-link" to="/"><button><img id="blender-fav" alt="blendr-mark" src={blenderFavicon.src}/></button></Link> */}
            <TopNavBtn />
            <img id="blender-fav2" alt="blender-mark" src={blenderFavicon2.base64}/>
            {/* <Link className="b-link" to="/page-b">PAGE B</Link> */}
            {/* <Link className="d-link" to="/page-d">PAGED</Link> */}
        </header>
    )
};


export default Header;