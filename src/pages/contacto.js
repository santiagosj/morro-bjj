import React from "react"
import Header from '../components/header'
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import { MapPin, Smartphone, Mail } from 'react-feather'
import SEO from "../components/seo"
import './ContactPage.css'
import Wapp from '../components/Wapp'
import Maps from '../components/Maps'

export const data = graphql`
{
  contact: contacto {
    imgHeader
    email
    address
    phone
    subTitle
    title
  }
}
`
const Contact = ({ data }) => {
  const { contact } = data
  const title = contact.title
  const subTitle = contact.subTitle
  const imgData = contact.imgHeader
  const phone = contact.phone
  const email = contact.email
  const address = contact.address
  
  return (
    <Layout>
        <SEO title="Contacto" />
        <Header 
          title={title}
          subtitle={subTitle}
          backgroundImage={imgData}
        />
       <section className="section">
           <div className="container">
               <h2>Contacto</h2>
           </div>
           <div className="container Contact--Section1--Container">
              <div>
                  <label>Nuestros datos de contacto</label>
                  <div className="Contact--Details">
                    {address && (
                      <a
                        className="Contact--Details--Item"
                        href={`https://www.google.com.au/maps/search/${encodeURI(
                          address
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MapPin /> {address}
                      </a>
                    )}
                    {phone && (
                      <div className="">
                           <a className="Contact--Details--Item" href={`tel:${phone}`}>
                              <Smartphone /> Llamar al {phone} 
                           </a>
                          
                           <Wapp number={'3513880418'} message={'Hola Profe, necesito hacerte una consulta, estas disponible en este momento?'}/> 
                        
                      </div>
                      )}
                      {email && (
                        <a className="Contact--Details--Item" href={`mailto:${email}`}>
                            <Mail /> {email}
                        </a>
                      )}
                 </div>
              </div> 
              <div className="Contact--Details">
                  <Maps/>
              </div>  
           </div>
           
       </section>
      
      </Layout>
  )

}
  
export default Contact
