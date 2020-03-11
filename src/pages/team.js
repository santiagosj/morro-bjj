import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from '../components/header'
import { graphql } from 'gatsby'
import { Card, ImageHeader, CardBody, CardFooter } from 'react-simple-card';

export const data =graphql`
{
  teamPage: team {
    title
    subTitle
    imgHeader 
    alambre 
    wally 
    profe 
    ibjjf 
    acjjb 
    carceglia 
  }
  
}
`
//seccion tipo post ---- generar componentes

const Team = ({data})=> {
      
     const {teamPage} = data

     const title = teamPage.title
     const subTitle = teamPage.subTitle
     const imgData = teamPage.imgHeader
     const profe = teamPage.profe
     const wally = teamPage.wally
     const alambre = teamPage.alambre
     const carceglia = teamPage.carceglia
     const acjjb = teamPage.acjjb
     const ibjjf = teamPage.ibjjf
     
     const cardStyle = {
       width: 250,
       borderRadius:0,
       border:'none',
       display:'inline-block',
       margin:30
     }
     
     const flex = {
       display:'flex',
       justifyContent: 'center',
       alignItems: 'center',
       flexWrap: 'wrap',
       margin: 'auto',
       position: 'relative'
     }

     const img = {
      borderRadius: '50%',
      overflow: 'hidden'
     }
     
        return (
            <Layout>
                
                <SEO title="Nosotros" />

                <Header 
                    title={title}
                    subtitle={subTitle}
                    backgroundImage={imgData}
                />

                <section className="section">
                    <div className='container'>
                        <h2>El Equipo</h2>
                    </div>
                    
                    <div className="container" style={flex}>
                        
                        <Card style={cardStyle}>
                           <ImageHeader imageSrc={profe} style={img}/>
                           <CardBody>Prof Lucas Sabbadin</CardBody>
                           <CardFooter>
                               Instructor en Morro Brazilian Jiu-Jitsu
                               Faixa Preta Brazilian Jiu-Jitsu
                            </CardFooter>
                        </Card>

                        <Card style={cardStyle}>
                           <ImageHeader imageSrc={wally} style={img} />
                           <CardBody>
                              Manuel Exposito 
                            </CardBody>
                           <CardFooter>
                              Peleador profesional de MMA y Kickboxing
                              Faixa azul Brazilian Jiu-Jitsu
                            </CardFooter>
                        </Card>

                        <Card style={cardStyle}>
                           <ImageHeader imageSrc={alambre} style={img}/>
                           <CardBody>Lucas Murua</CardBody>
                           <CardFooter>
                              Peleador profesional de MMA y Kickboxing Faixa azul Brazilian Jiu-Jitsu
                           </CardFooter>
                        </Card>
                        
                    </div>

                </section>
                <section className="section">
                  
                    <div className='container'>
                        <h2>Afiliaciones</h2>
                    </div>
                   
                    <div className="container" style={flex}>
                     
                       <Card style={cardStyle}>
                           <ImageHeader imageSrc={carceglia} />
                           <CardBody>Carceglia team Internacional</CardBody>
                        </Card>

                        <Card style={cardStyle}>
                           <ImageHeader imageSrc={acjjb} />
                           <CardBody>
                              Asociación Cordobesa de Jiu-Jitsu Brasilero
                            </CardBody>
                        </Card>

                        <Card style={cardStyle}>
                           <ImageHeader imageSrc={ibjjf}/>
                           <CardBody>
                              International Brazilian Jiu-Jitsu Federation
                           </CardBody>
                        </Card>
                  </div>
                </section>

          </Layout>
        )
}

export default Team
