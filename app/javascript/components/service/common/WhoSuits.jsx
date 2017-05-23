import React from 'react'
import PropTypes from 'prop-types'

const WhoSuits = ({ conditions }) => {
  return (
    <section id="who-suits">
      <div className="section-title">
        <h1>誰適合這個方案？</h1>
      </div>

      <div className="conditions">
        {
          conditions.map((cond, idx) => (
            <div key={ idx } className="condition">
              <div
                className="img"
                style={ { backgroundImage: `url(${cond.img})` } }
              />
              <div className="bar" />
              <p>{ cond.desc }</p>
            </div>
          ))
        }
      </div>
    </section>
  )
}

WhoSuits.propTypes = {
  conditions : PropTypes.array.isRequired,
}

export default WhoSuits
