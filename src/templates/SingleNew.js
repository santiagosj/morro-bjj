import React, { Fragment } from 'react'
import { Link, graphql } from 'gatsby'
import { ChevronLeft } from 'react-feather'
import _get from 'lodash/get'
import Layout from '../components/Layout'
import './SingleNew.css'
import Header from '../components/header'
import Galeria from "../components/Gallery"

export const SingleNewTemplate = ({
      title,
      date,
      body,
      excerpt,
      nextPostURL,
      prevPostURL,
      categories=[],
      featuredImage,
      photos=[],
      video,
   }) => (
      <main>
         <article className="SinglePost section light">
            <div className="container skinny">
                <Link className="SinglePost--BackButton" to="/news/">
                   <ChevronLeft />  VOLVER
                </Link>
            <div className="SinglePost--Content relative">
               <div className="SinglePost--Meta">
                  {date && (
                      <time 
                        className="SinglePost--Meta--Date"
                        itemProp="dateCreated pubdate datePublished"
                        date={date}>
                          {date}
                      </time>
                  )}
                  {categories && (
                      <Fragment>
                          <span>|</span>
                          {categories.map((cat, index)=>(
                              <span
                              key={index}
                              className="SinglePost--Meta--Category"
                              >
                                  {cat}
                                  {index !== categories.length - 1 ? ',' : ''}
                              </span>
                          ))}
                      </Fragment>
                  )}
              </div>
              {title && (
                  <h1 className="SinglePost--Title" itemProp={`${title}`}>
                      {title}
                  </h1>
              )}
              {featuredImage && (
                  <Header 
                    title={title}
                    subtitle={excerpt}
                    backgroundImage={featuredImage}/>
              )}
               <div className="SinglePost--InnerContent">
                   {body}                  
               </div>
               <div className="SinglePost--InnerContent">
                  <section className="section">
                     <div className="container">
                         <h2>Fotos del evento</h2>
                         <Galeria photos={photos} alt="fotos" direction={"column"}/>
                     </div>
                  </section>
               </div>
                
                 { video && (<section className="BackgroundVideo-section section flexVideo">
                      <iframe width="760" height="415" src={video} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="Video Promo"></iframe>
                 </section>)}
               <div className="SinglePost--Pagination">
                    {prevPostURL && (
                        <Link
                          className="SinglePost--Pagination--Link prev"
                          to={prevPostURL}
                        >
                           Anterior
                        </Link>
                    )}
                    {nextPostURL && (
                        <Link
                            className="SinglePost--Pagination--Link next"
                            to={nextPostURL}
                        >
                            Siguiente
                        </Link>
                     )}
               </div>
            </div>
          </div>
       </article>
   </main>
)


const SingleNew = ({ data:{ post, allPosts }}) => {
    
    const thisEdge = allPosts.edges.find(edge => edge.node.slug === post.slug)
    
    const photos = post.photos.map( photo => ({ 
      ...photo
    }))

    const video = post.video
    
    console.log(video)

   return(
       <Layout>
           <SingleNewTemplate
              {...post}
              categories={post.categories}
              featuredImage={post.featuredImage}
              body={post.body}
              photos={photos}
              nextPostURL={_get(thisEdge, 'next.slug')}
              prevPostURL={_get(thisEdge, 'previous.slug')}
           />
       </Layout>
   )
}

export default SingleNew

export const pageQuery = graphql`
  query SinglePost($slug:String){
      post: post(slug:{eq:$slug}){
        body
        categories
        date
        title
        id
        slug
        excerpt
        video
        featuredImage 
        photos{
            src
            srcSet
            title
            width
            height
            sizes
        }
      }
    
     allPosts: allPost {
        edges {
          previous {
            slug
          }
          node {
            featuredImage 
            title
            excerpt
            date
            categories
            body
            slug
          }
          next {
            slug
          }
        }
      }
  }
`