import React from 'react'
import MediaQuery from 'react-responsive'
import { PAD_WIDTH } from '../../../constants/device'

const arrow_target = require('images/service/socialMedia/expectedResult/arrow-target.png')
const arrow_target_m = require('images/service/socialMedia/expectedResult/arrow-target-m.png')

const ExpectedResult = () => {
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
          <li>擴大追蹤用戶數</li>
          <li>提升活躍用戶數</li>
          <li>增加品牌認同感</li>
          <li>提高目標轉換率，增加分享、按讚及留言數</li>
        </ul>

      </div>
    </section>
  )
}

export default ExpectedResult

