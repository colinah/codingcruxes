import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default () => {
    const data = useStaticQuery(graphql`
    query LogoQuery {
      allWordpressWpMedia(filter: {slug: {eq: "cropped-cc-logo-circle-png"}}) {
        nodes {
          alt_text
          slug
          localFile {
            publicURL
          }
        }
      }
    }`)
      console.log('data:',data)

    return <img style={{width:'auto', height: '100%'}} src={data.allWordpressWpMedia.nodes[0].localFile.publicURL} />
}
