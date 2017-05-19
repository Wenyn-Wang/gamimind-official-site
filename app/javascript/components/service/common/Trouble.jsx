import React from 'react'
import PropTypes from 'prop-types'

const Trouble = ({ text }) => {
  return (
    <section id="trouble">
      <div className="section-title">
        <h1>困擾</h1>
      </div>
      
      <div className="trouble-text">
        { text }
      </div>
    </section>
  )
}

Trouble.propTypes = {
  text : PropTypes.element,
}

export default Trouble
