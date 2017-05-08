import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import HardwareKeyboardArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right'

const card_list = [{
  title   : 'Line / Facebook 行銷方案',
  content : '遠離百萬殭屍大軍！活化百萬粉絲團，提升用戶轉換率，有效運用粉絲價值',
  link    : '/',
}, {
  title   : '企業自媒體經營方案',
  content : '不要再把流量送給對手了！掌握自己的流量、分析客群、精準銷售',
  link    : '/',
}, {
  title   : '客戶關係管理方案',
  content : '你的KPI就是我的KPI！預測用戶行為、掌握最佳時機，上門就下單',
  link    : '/',
}]

const Solutions = () => {
  return (
    <section id="solutions">
      <div className="section-title">
        <h1>為您量身打造解決方案</h1>
      </div>

      <ul className="solutions-container">
        {
          card_list.map((card, index) => (
            <li key={ index }>
              <div className="card-img">
                <div className="icon-container">
                  <div />
                  <div />
                </div>
                <div className="big-img" />
              </div>

              <h3>{ card.title }</h3>
              <p>{ card.content }</p>
              <Link to={ card.link  }>
                <span>暸解更多</span>
                <HardwareKeyboardArrowRight />
              </Link>
            </li>
          ))
        }
      </ul>
    </section>
  )
}

export default Solutions
