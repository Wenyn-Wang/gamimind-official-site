import React from 'react'
import PropTypes from 'prop-types'

const WhoSuits = ({ conditions }) => {
  return (
    <section id="who-suits">
      <div className="section-title">
        <h1>誰適合這個方案？</h1>
      </div>

      {
        conditions.map((cond, idx) => (
          <div key={ idx } className="condition">
            <div className="img"><img src={ cond.img } /></div>
            <div className="bar" />
            <p>{ cond.desc }</p>
          </div>
        ))
      }
    </section>
  )
}

WhoSuits.propTypes = {
  conditions : PropTypes.array.isRequired,
}

export default WhoSuits
