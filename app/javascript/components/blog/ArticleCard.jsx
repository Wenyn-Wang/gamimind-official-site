import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { POST } from '../../constants/url'

const ArticleCard = ({ title, slug, thumbnail, brief, date, history }) => {
  const goPost = () => {
    history.push(`${POST}/${slug}`)
  }
  return (
    <li className="article-card">
      <div className="card-img" style={{ backgroundImage: `url(${thumbnail})` }} />
      <div className="card-info">
        <div className="date upper">{ date }</div>
        <h2>{ title }</h2>
        <p className="brief">{ brief }</p>
        <div className="reading" onClick={ goPost }>繼續閱讀</div>
        <div className="date downer">{ date }</div>
      </div>
    </li>
  )
}

ArticleCard.defaultProps = {
  title     : PropTypes.string,
  slug      : PropTypes.string,
  thumbnail : PropTypes.string,
  brief     : PropTypes.string,
  date      : PropTypes.string,
}

export default withRouter(ArticleCard)
