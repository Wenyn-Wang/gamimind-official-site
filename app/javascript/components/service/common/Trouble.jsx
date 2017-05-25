import React from 'react'
import PropTypes from 'prop-types'

const Trouble = ({ title, text, className }) => {
  return (
    <section id="trouble" className={ className }>
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
  className : PropTypes.string,
  title     : PropTypes.string,
  text      : PropTypes.element,
}

export default Trouble
