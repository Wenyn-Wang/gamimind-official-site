import React from 'react'
import PropTypes from 'prop-types'
import MediaQuery from 'react-responsive'
import ArticleCard from './ArticleCard'
import { MOBILE_WIDTH } from '../../constants/device'

const Blog = ({ articles }) => {
  return (
    <main id="blog">
      <h1 className="hidden-title">遊戲思維 - 部落格</h1>
      <div className="banner">
        <MediaQuery minWidth={ MOBILE_WIDTH + 1 }>
          <img src={ require("images/blog/banner.png") } />
        </MediaQuery>
        <MediaQuery maxWidth={ MOBILE_WIDTH }>
          <img src={ require("images/blog/banner-m.png") } />
        </MediaQuery>
      </div>
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
    { title: "Article1", img: require('images/home/problems/p-1.png'), brief: "briefbriefbrief1", date: "2017/01/01", slug: "slugA" },
    { title: "Article2", img: require('images/home/problems/p-1.png'), brief: "briefbriefbrief2", date: "2017/01/01", slug: "slugB" },
    { title: "Article3", img: require('images/home/problems/p-1.png'), brief: "briefbriefbrief3", date: "2017/01/01", slug: "slugC" },
    { title: "Article4", img: require('images/home/problems/p-1.png'), brief: "briefbriefbrief4", date: "2017/01/01", slug: "slugD" },
    { title: "Article5", img: require('images/home/problems/p-1.png'), brief: "briefbriefbrief5", date: "2017/01/01", slug: "slugE" },
  ],
}

export default Blog
