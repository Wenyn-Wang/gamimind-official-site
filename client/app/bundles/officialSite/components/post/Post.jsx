import React, { Component } from 'react'
import { getPost } from '../../apis/postApis'
import SocialShare from './SocialShare'

export default class Post extends Component {
  constructor(props) {
    super(props)
    const { slug } = props.match.params
    this.state = {
      slug,
      title   : "",
      content : "",
      img     : "",
    }
    getPost({ slug }).then(data => {
      this.setState({ ...data })
    })
  }
  render() {
    const { title, content, img, slug } = this.state
    return (
      <main id="post">
        <div className="banner" style={{ backgroundImage: `url(${img})` }} />
        <article>
          <h1>{ title }</h1>
          <SocialShare slug={ slug } />
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: content }} />
            <SocialShare slug={ slug } />
        </article>
      </main>
    )
  }
}
