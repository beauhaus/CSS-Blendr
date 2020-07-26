import React from 'react';
import { graphql } from 'gatsby';
import {Link} from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

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

const ModeTemplate = ({ data: { mdx: mode } }) => {
  return (
    <div className="mode-dir-container">
      <h1 className="title">{mode.frontmatter.title} mode</h1>
      <hr />
      <Link to="/page-b">BACK</Link>
      <MDXRenderer>{mode.body}</MDXRenderer>
    </div>
  )
}

export default ModeTemplate;