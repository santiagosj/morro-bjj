import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from '../components/header'
import { graphql } from 'gatsby'
import NewsSection from '../components/NewsSection'
import Galeria from '../components/Gallery'
//import NewsCategoriesNav from '../components/NewsCategoriesNav'
/**
 * Próximos requerimientos
 */
/**
 * Filter posts by date. Feature dates will be fitered
 * When used, make sure you run a cronejob each day to show schaduled content. See docs
 *
 * @param {posts} object
 *
export const byDate = posts => {
  const now = Date.now()
  return posts.filter(post => Date.parse(post.date) <= now)
}
*/
/**
 * filter posts by category.
 *
 * @param {posts} object
 * @param {title} string
 * @param {contentType} string
 *
export const byCategory = (posts, title, contentType) => {
  const isCategory = contentType === 'postCategories'
  const byCategory = post =>
    post.categories &&
    post.categories.filter(cat => cat.category === title).length
  return isCategory ? posts.filter(byCategory) : posts
}
*/

const styles = {
  display: "flex",
  justifyContent: "center"
}

export const data =graphql`
{
  newsPage: news {
    imgHeader
    subTitle
    title
  }
  allPosts:  allPost {
    edges {
      node {
        body
        categories
        date
        excerpt
        featuredImage
        slug
        title
      }
    }
  }
}
`

//seccion tipo list--post

const News = ({data})=> {
      
     const {newsPage} = data
    /* const flyer = newsPage.flyer.map( f =>({
       ...f
     }))*/
     const title = newsPage.title
     const subTitle = newsPage.subTitle
     const imgData = newsPage.imgHeader
     const posts = data.allPosts.edges.map(post => ({
       ...post.node,
       //featuredImage: post.node.featuredImage,
       categories:post.node.categories
     }))


        return (
            <Layout>
                
                <SEO title="Nosotros" />

                <Header 
                    title={title}
                    subtitle={subTitle}
                    backgroundImage={imgData}
                />

                <section className="section">
                    <div className="container">
                        <h2>Noticias</h2>
                        <NewsSection posts={posts}/>
                    </div>
                </section>

          </Layout>
        )
}

export default News
