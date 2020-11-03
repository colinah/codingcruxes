import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "../components/PostCard/PostCard" 

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="home" />
      <h1>My WordPress Blog</h1>
      <h4>Posts</h4>
      {data.allWordpressPost.edges.map(({ node }) => (
        <div key={node.title}>
          <PostCard key={node.wordpress_id} title={node.title} excerpt={node.excerpt} slug={node.slug} img={node.featured_media.localFile.publicURL}/>
        </div>
      ))}
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