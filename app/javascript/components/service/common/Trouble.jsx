import React from 'react'
import PropTypes from 'prop-types'

const Trouble = ({ title, text }) => {
  return (
    <section id="trouble">
      <div className="section-title">
        <h1>{ title }</h1>
      </div>
      
      <div className="trouble-text">
        { text }
      </div>
    </section>
  )
}

Trouble.propTypes = {
  title : PropTypes.string,
  text  : PropTypes.element,
}

export default Trouble
