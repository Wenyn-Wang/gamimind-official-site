import React from 'react'
import PropTypes from 'prop-types'
import MediaQuery from 'react-responsive'
import { PAD_WIDTH } from '../../../constants/device'

const arrow_target = require('images/service/common/expectedResult/arrow-target.png')
const arrow_target_m = require('images/service/common/expectedResult/arrow-target-m.png')

const ExpectedResult = ({ results }) => {
  return (
    <section id="expected-result">
      <div className="section-title">
        <h1>預期成效</h1>
      </div>

      <div className="expected-result-content">

        <MediaQuery minWidth={ PAD_WIDTH + 1}>
          <img src={ arrow_target } />
        </MediaQuery>
        <MediaQuery maxWidth={ PAD_WIDTH }>
          <img src={ arrow_target_m } />
        </MediaQuery>
        
        <ul>
          {
            results.map((text, index)=> (
              <li key={ index }>{ text }</li>
            ))
          }
        </ul>

      </div>
    </section>
  )
}

ExpectedResult.propTypes = {
  results : PropTypes.array.isRequired,
}

export default ExpectedResult

