import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import classes from './post.module.scss'

export default ({ data }) => {
  const post = data.allWordpressPost.edges[0].node
  console.log(post)
  return (
    <Layout>
      <div className={classes.Post}>
        <h1 className={classes.Title}>{post.title}</h1>
        <p className={classes.Date} >{post.date}</p>
        <div className={classes.Content} dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    allWordpressPost(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          content
          slug
          date(formatString: "MM-DD-YYYY")
        }
      }
    }
  }
`
