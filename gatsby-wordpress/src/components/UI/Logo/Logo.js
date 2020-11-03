import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default () => {
    const data = useStaticQuery(graphql`
    query LogoQuery {
        wordpressWpMedia(wordpress_id: {eq: 5}) {
          localFile {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
      }
      `)
    return <img style={{width:'auto', height: '100%'}} src={data.wordpressWpMedia.localFile.childImageSharp.fluid.src} />
}
