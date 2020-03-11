module.exports = {
  siteMetadata: {
    title: `Morro-BJJ`,
    description: `PWA Morro Jiu-Jitsu Alta Gracia Oss!`,
    author: `Santi`,
    menuLinks:[
      {
        name:"Historia",
        link:"/about"
      },
      {
        name:"Equipo",
        link:"/team"
      },
      {
        name:"Noticias y Eventos",
        link:"/news"
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    {
      resolve:`gatsby-source-firestore`,
      options:{
        credential:require("./firebaseKey.json"),
        types:[
          {
            type:'Contacto',
            collection:'contacto',
            map:doc =>({
               imgHeader:doc.imgHeader,
               title:doc.title,
               subTitle:doc.subTitle,
               phone:doc.phone,
               email:doc.email,
               address:doc.address,
            }),
          },
          {
            type:'Home',
            collection:'home',
            map:doc =>({
               imgHeader:doc.imgHeader,
               title:doc.title,
               subTitle:doc.subTitle,
               photos:doc.photos,
            }),
          },
          {
            type:'Post',
            collection:'posts',
            map:doc => ({
              body:doc.body,
              title:doc.title,
              photos:doc.photos,
              categories:doc.categories,
              excerpt:doc.excerpt,
              date:doc.date,
              slug:doc.slug,
              featuredImage:doc.featuredImage,
              video:doc.video
            })
          },
          {
            type:'News',
            collection:'news',
            map:doc=>({
              title:doc.title,
              subTitle:doc.subTitle,
              imgHeader:doc.imgHeader,
            })
          },
          {
            type:'About',
            collection:'about',
            map:doc=>({
              title:doc.title,
              subTitle:doc.subTitle,
              imgHeader:doc.imgHeader,
            })
          },
          {
            type:'Team',
            collection:'team',
            map:doc=>({
              title:doc.title,
              subTitle:doc.subTitle,
              imgHeader:doc.imgHeader,
              profe:doc.profe,
              wally:doc.wally,
              alambre:doc.alambre,
              carceglia:doc.carceglia,
              acjjb:doc.acjjb,
              ibjjf:doc.ibjjf
            })
          }
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/morro.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
