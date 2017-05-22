import React from 'react'
import PropTypes from 'prop-types'
import MediaQuery from 'react-responsive'
import { PAD_WIDTH } from '../../../constants/deviceTypes'

const Solutions = ({ solutions }) => {
  return (
    <section id="solutions">
      <div className="section-title">
        <h1>我們的方法</h1>
      </div>
      
      <ul>
        {
          solutions.map((solution, index) => (
            <li key={ index }>
              <div className="solution-container">
                <div className="solution-title">
                  <div className="circle" />
                  <MediaQuery minWidth={ PAD_WIDTH + 1 } component="h2">
                    { solution.title }
                  </MediaQuery>
                </div>

                <div className="solution-text">
                  <MediaQuery maxWidth={ PAD_WIDTH } component="h2">
                    { solution.title }
                  </MediaQuery>
                  <span>{ solution.text }</span>
                </div>

                <div className="solution-img">
                  <img src={ solution.img } />
                </div>
              </div>
            </li>
          ))
        }
      </ul>
    </section>
  )
}

Solutions.propTypes = {
  solutions : PropTypes.array.isRequired,
}

export default Solutions
