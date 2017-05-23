import React from 'react'
import PropTypes from 'prop-types'
import MediaQuery from 'react-responsive'
import { PAD_WIDTH } from '../../../constants/deviceTypes'

const Solutions = ({ steps, upper }) => {
  return (
    <section id="solutions">
      <div className="section-title">
        <h1>我們的方法</h1>
      </div>

      {
        upper && 
          <ul className="solution-upper section-arrow-down">
            {
              upper.map((content, index) => (
                <li key={ index }>
                  <div className="upper-img">
                    <img src={ content.img }/>
                  </div>

                  <div className="upper-text">
                    <h3>{ content.title }</h3>
                    <div>{ content.text }</div>
                  </div>
                </li>
              ))
            }
          </ul>
      }
      
      <ul className="solution-steps">
        {
          steps.map((solution, index) => (
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
  steps : PropTypes.PropTypes.arrayOf(
    PropTypes.shape({
      img   : PropTypes.string.isRequired,
      title : PropTypes.string.isRequired,
      text  : PropTypes.string.isRequired,
    })
  ).isRequired,
  upper : PropTypes.arrayOf(
    PropTypes.shape({
      img   : PropTypes.string.isRequired,
      title : PropTypes.string.isRequired,
      text  : PropTypes.oneOfType(
        [PropTypes.element, PropTypes.string]
      ).isRequired,
    })
  ),
}

export default Solutions
