import React from 'react'
import PropTypes from 'prop-types'

const Cover = ({ title, desc, decorations }) => {
  return (
    <section id="cover">
      <div className="cover-left">
        <div className="center">
          <h1>{ title }</h1>
          <h2>{ desc }</h2>
        </div>
      </div>

      { decorations }
    </section>
  )
}

Cover.propTypes = {
  title : PropTypes.string.isRequired,
  desc  : PropTypes.string.isRequired,
  decorations : PropTypes.element,
}

export default Cover
