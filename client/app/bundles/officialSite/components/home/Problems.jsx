import PropTypes from 'prop-types'
import React, { Component } from 'react'

const problem_img1 = require('images/home/problems/p-1.png')
const problem_img2 = require('images/home/problems/p-2.png')
const problem_img3 = require('images/home/problems/p-3.png')
const radar_icon1 = require('images/home/problems/radar-icon-1.png')
const radar_icon2 = require('images/home/problems/radar-icon-2.png')
const radar_icon3 = require('images/home/problems/radar-icon-3.png')
const radar_icon4 = require('images/home/problems/radar-icon-4.png')
const radar_icon5 = require('images/home/problems/radar-icon-5.png')
const radar_icon6 = require('images/home/problems/radar-icon-6.png')

const Problems = () => {
  return (
    <section id="problems">
      <div className="section-title">
        <h1>我們了解您的問題</h1>
      </div>

      <div className="problem-container">
        <div className="radar-container">
          <div className="radar">
            <div className="icons">
              <img src={ radar_icon1 } />
              <img src={ radar_icon2 } />
              <img src={ radar_icon3 } />
              <img src={ radar_icon4 } />
              <img src={ radar_icon5 } />
              <img src={ radar_icon6 } />
              <img src={ radar_icon1 } />
              <img src={ radar_icon2 } />
              <img src={ radar_icon3 } />
              <img src={ radar_icon4 } />
              <img src={ radar_icon5 } />
              <img src={ radar_icon6 } />
            </div>

            <div className="radar-stem" />
          </div>
        </div>
        
        <div className="problems-container">
          <div className="problem">
            <img src={ problem_img1 } />
            <p>總是抓不住用戶的心，花大錢買廣告卻看不到業績起飛？</p>
          </div>
          <div className="problem">
            <img src={ problem_img2 } />
            <p>經營 Facebook/Line 社群許久，卻苦於無法將粉絲轉為忠實顧客？</p>
          </div>
          <div className="problem">
            <img src={ problem_img3 } />
            <p>有百萬粉絲，卻全是殭屍，想成為客戶肚子裡的蛔蟲，卻永遠只能當旁邊的蒼蠅？</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Problems
