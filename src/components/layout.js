/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {Fragment} from "react"
import { StaticQuery, graphql } from "gatsby"
import Nav from './Nav'
import Footer from './Footer'
import Helmet from 'react-helmet'
import "./layout.css"


export default({children}) =>{
    return(
      <StaticQuery
         query={graphql`
         query SiteTitleQuery {
          site {
            siteMetadata {
              title
              menuLinks {
                name
                link
              }
            }
          }
        }
         `}
         render={data => {

           const menuLinks = data.site.siteMetadata.menuLinks.map(link => link)
           
         return(
            <Fragment>

                <Helmet
                  title={'Morro Jiu-Jitsu'}
                  meta={[
                    {name:'description', content:'Sample'},
                    {name:'keywords',content:'sample, something'}
                  ]}
                >
                </Helmet>
                 
                 <Nav subNav={menuLinks} />

                 <Fragment>{children}</Fragment>

                <Footer />

           </Fragment>
         )}}
      />
    )
}

