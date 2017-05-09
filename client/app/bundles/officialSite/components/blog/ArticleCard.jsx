import React from 'react'
import PropTypes from 'prop-types'

const ArticleCard = ({ title }) => {
  return (
    <div className="article-card">
      { title }
    </div>
  )
}

ArticleCard.defaultProps = {
  title: PropTypes.string,
}

export default ArticleCard
