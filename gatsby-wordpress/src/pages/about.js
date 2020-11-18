import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import classes from './About.module.scss'

export default ({ data }) => {
    console.log('about-page:', data)
  return (
    <Layout>
      <SEO title="About Me" />
        <div className={classes.About}
            dangerouslySetInnerHTML={{__html: data.allWordpressPage.edges[0].node.content}}></div>
    </Layout>
  )
}

export const AboutPagequery = graphql`
query AboutQuery {
    allWordpressPage(filter: {slug: {eq: "about-me"}}) {
      edges {
        node {
          content
        }
      }
    }
  }  
`

