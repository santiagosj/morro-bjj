import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from '../components/header'
import { graphql } from 'gatsby'

export const data =graphql`
{
  aboutPage: about {
    imgHeader
    title
    subTitle
  }
}
`
const About = ({ data }) => {
  
  const {aboutPage} = data

  const title = aboutPage.title
  const subTitle = aboutPage.subTitle
  const imgData = aboutPage.imgHeader

  console.log(data)
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
                <h2>Un poco de los origenes del Jiu-Jitsu Brasileño</h2>
                <p>El origen del Jiu Jitsu Brasileño se remonta a principios del siglo XX con la llegada de Mitsuyo Maeda a Belem, norte de Brasil, para ayudar a establecer una colonia japonesa en 1914.</p>
                <h2>Los Gracie</h2>
                <p>
                Mitsuyo Maeda, ya instalado en Belem, conoce a un hombre con gran influencia política, hijo de una familia inmigrante escocesa y empresario circense llamado Gastao Gracie. Su amistad creció con el tiempo y Gastao estaba fascinado con la habilidad de Mitsuyo Maeda en el arte del combate y la defensa personal, hasta que un día le pidió que le enseñe a su hijo Carlos Gracie. En contra de la tradición japonesa y de manera voluntaria, Maeda comenzó a instruir al joven Carlos, el mayor de cinco hermanos de la familia Gracie.
                </p>
                <p>
                Carlos quedó tan fascinado con las técnicas de Maeda que en 1925 abrió la primera academia de Jiu-Jitsu en Río de Janeiro, Brasil. Con el objetivo de probar la superioridad del Jiu-Jitsu y formar una tradición familiar, Carlos adaptó el Jiu-Jitsu japonés a la realidad de las calles de Brasil. Desafió a grandes luchadores de la época y pasó todos sus conocimientos a sus hermanos. Luchando contra adversarios 20, 30 y 40 kilos más pesados, los Gracie lograron conseguir fama y notoriedad nacional.
                </p>
                <p>
                Durante estos años pasó a destacarse Helio Gracie, el menor de los hermanos. A los 17 años, Helio Gracie subió al ring por primera vez en Río de Janeiro contra un boxeador profesional llamado Antonio Portugal. Helio ganó utilizando la llave de brazo en tan solo 30 segundos. Esta pelea fue la primera de muchas victorias que Helio tuvo contra oponentes de todo el mundo.
                </p>
                <h2>Luiz França y Oswaldo Fadda</h2>
                <p>
                Pero los Gracie no fueron los únicos instruidos por Mitsuyo Maeda; Luiz Franca fue otro estudiante de Maeda, y enseñó el arte a Oswaldo Fadda, quien se dedico a establecerse en la periferia de Río, adentro de las favelas para enseñar el Jiu Jitsu a los pobres de la ciudad. Fadda, es considerado uno de los más grandes practicantes de jiu-jitsu brasileño de la historia. Uno de los pocos cinturones rojos en dicho arte fuera de la familia Gracie, se hizo famoso por su serie de victorias contra esta familia y por su voluntad a enseñar jiu-jitsu a habitantes de los barrios pobres de Río de Janeiro en un tiempo en que la práctica de este arte se destacaba por su elitismo.
                </p>
              </div>
          </section>

          <section className="section">
              <div className="container">
                <h2>Nuestros primeros pasos</h2>
                <p>Nuestra academia es fundada por el Profesor Lucas Sabbadin en el año 2012 quien imparte clases en la ciudad de Alta Gracia desde entonces, este comenzó la práctica de brazilian jiu jitsu bajo la instrucción de su profesor Cesar Carceglia y desde sus inicios en el Brazilian Jiu-Jitsu, participó en torneos a nivel provincial, nacional e internacional consiguiendo en el año 2017 el segundo puesto en el internacional máster de río de janeiro en categoría faixa marron peso leve y siendo graduado a faixa preta el mismo año.</p>
              </div>
          </section>

          </Layout>
    )

}

export default About
