import React, { Component } from 'react'
import MediaQuery from 'react-responsive'
import ArticleCard from './ArticleCard'
import { MOBILE_WIDTH } from '../../constants/device'
import { getPosts } from '../../apis/postApis'

export default class Blog extends Component {
  constructor(props) {
    super(props)
    this.state = { articles: [] }
    getPosts().then(articles => {
      this.setState({ articles })
    })
  }
  render() {
    const { articles } = this.state
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
}
