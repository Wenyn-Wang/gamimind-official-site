import React, { Component } from 'react'
import { getPost } from '../../apis/postApis'

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
    return (
      <main id="post">
      </main>
    )
  }
}
