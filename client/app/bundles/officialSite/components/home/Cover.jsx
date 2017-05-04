import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class Home extends React.Component {
  render() {
    return (
      <section id="cover">
        <div className="cover-left">
          <div className="center">
            <h1>人工智慧，為你解析數據下的商機</h1>
            <h2>我們相信 “企業做到精準才有未來” <br />融入遊戲思維，成為有溫度的人工智慧。<br />精準掌握客戶行為與喜好，為你找出數據下的商機！</h2>
            <div className="btn primary">我們的服務</div>
          </div>
        </div>

        <div className="cover-right">
          <p />
        </div>

      </section>
    )
  }
}
