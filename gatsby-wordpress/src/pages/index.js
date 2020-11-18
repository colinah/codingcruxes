import React from "react"
import classes from './index.module.scss'
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "../components/PostCard/PostCard" 

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Home" />
      <div className={classes.Posts}>
      {data.allWordpressPost.edges.map(({ node }) => (
          <PostCard key={node.wordpress_id} title={node.title} excerpt={node.excerpt} slug={node.slug} img={node.featured_media.localFile.publicURL}/>
      ))}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
query PostCardQuery {
  allWordpressPost {
    edges {
      node {
        excerpt
        title
        date
        featured_media {
          localFile {
            publicURL
          }
        }
        slug
      }
    }
  }
}
`