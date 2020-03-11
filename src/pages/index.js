import React from "react"
import Header from '../components/header'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Table from '../components/Table'
//import BackgroundVideo from '../components/BackgroundVideo'
import { graphql } from 'gatsby'
import Galeria from "../components/Gallery"

export const data = graphql`
{
 homePage: home {
    title
    subTitle
    imgHeader
    photos {
      height
      sizes
      src
      srcSet
      title
      width
    }
  }
}
`

const IndexPage = ({ data }) => {
  const { homePage } = data
  const title = homePage.title
  const subTitle = homePage.subTitle
  const imgData = homePage.imgHeader
  const photos = homePage.photos

return(
  <Layout>
       <SEO title="Home" />

        <Header 
          large
          title={title}
          subtitle={subTitle}
          backgroundImage={imgData}
        />

        <section className="section">
          <div className="container">
            <h2>Vení a conocer la academia</h2>
                <Galeria photos={photos}/>
          </div>
        </section>

          <section className="section">
            <div className="container">
              
            </div>
          </section>

        {/*<section className="BackgroundVideo-section section">
          <BackgroundVideo poster={videoPoster} videoTitle={videoTitle}>
              {video && <source src={video} type="video/mp4" />}
          </BackgroundVideo>
        </section>*/}

     <section className="section">
         <div className="container">
           <h1>Horarios y actividades</h1>
           <p>Buscá el horario que mas te convenga, elegí la actividad que te guste, y sumate al <strong> Morro Jiu-Jitsu Alta Gracia,</strong> te esperamos! </p>
           <Table /> 
        </div>
     </section>
  </Layout>

 )
}

export default IndexPage
