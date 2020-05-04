import React from 'react';
import {graphql} from 'gatsby';
// import {Link} from 'gatsby';
import {MDXRenderer } from 'gatsby-plugin-mdx';

import './mode.scss';

export const query = graphql`
query($slug: String!){
    mdx (frontmatter: {slug: {eq: $slug}})
    {
      frontmatter {
        title
      }
      body
    }
  }
  `

const ModeTemplate =({data: {mdx: mode}}) => {
// console.log("props: ", pageContext.slug)
    return (
        <>
        <h1 className="title">mode Title: {mode.frontmatter.title}</h1>
        <hr/>

        <MDXRenderer>{mode.body}</MDXRenderer>


        </>
    )
}

export default ModeTemplate;