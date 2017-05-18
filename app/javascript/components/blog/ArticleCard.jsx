import React from 'react'
import PropTypes from 'prop-types'

const ArticleCard = ({ title, slug, thumbnail, brief, date }) => {
  return (
    <li className="article-card">
      <div className="card-img" style={{ backgroundImage: `url(${thumbnail})` }} />
      <div className="card-info">
        <div className="date upper">{ date }</div>
        <h2>{ title }</h2>
        <p className="brief">{ brief }</p>
        <div className="reading">繼續閱讀</div>
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

export default ArticleCard
