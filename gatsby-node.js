exports.createPages = async ({actions, graphql,reporter}) => {
   const result = await graphql(`
    {
      allPost {
        edges {
          node {
            slug
          }
        }
      }
    }
    `)

    if(result.error){
      reporter.panic('algo malió sal')
      return;
  }

    const posts = result.data.allPost.edges

    posts.forEach(({node:{slug}}) => {
        actions.createPage({
            path:`/${slug}/`,
            component: require.resolve('./src/templates/SingleNew.js'),
            context:{
                slug
            }
        })
    })

}