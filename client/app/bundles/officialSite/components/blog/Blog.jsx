import React from 'react'
import PropTypes from 'prop-types'
import ArticleCard from './ArticleCard'

const Blog = ({ articles }) => {
  return (
    <main id="blog">
      <h1 className="hidden-title">遊戲思維 - 部落格</h1>
      <div className="header-img" />
      <ul className="articles">
        {
          articles.map((article, idx) => (
            <ArticleCard
              key={ idx }
              { ...article } />
          ))
        }
      </ul>
    </main>
  )
}

Blog.defaultProps = {
  articles: [
    { title: "Article1" },
    { title: "Article2" },
    { title: "Article3" },
    { title: "Article4" },
    { title: "Article5" },
  ],
}

export default Blog
