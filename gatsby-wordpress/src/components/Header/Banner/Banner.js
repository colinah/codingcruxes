import React from 'react';
import {useStaticQuery, graphql} from 'gatsby'
import classes from './Banner.module.scss'

export default () => {
    const data = useStaticQuery(graphql`
    query BannerQuery {
        wordpressWpMedia(wordpress_id: {eq: 33}) {
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
    console.log('Banner', data)
    return (
        <div className={classes.Banner} style={{backgroundImage: 'url(' + data.wordpressWpMedia.localFile.childImageSharp.fluid.src + ')' }}>
            <div className={classes.Cover}>
                <div>
                    <h1>Coding Cruxes</h1>
                    <h2>Solutions to coding challenges</h2>
                </div>
            </div>
        </div>
    )
}