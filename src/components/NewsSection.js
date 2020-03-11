import React from 'react'

import NewsCard from '../components/NewsCard'
import './NewsSection.css'

class NewsSection extends React.Component {
    
    static defaultProps = {
        posts: [],
        title: '',
      }

    render(){
        const {posts, title} = this.props
         
        return(
           <div className="PostSection">
              {title && <h2 className="PostSection--Title">{title}</h2>}
              {!!posts.length && (
                  <div className="PostSection--Grid">
                     {posts.map((post)=>(
                         <NewsCard 
                             categories={post.categories}
                             key={post.slug} 
                             {...post}
                        />
                     ))}
                  </div>
              )}
            
           </div>
        )
    }
}

export default NewsSection