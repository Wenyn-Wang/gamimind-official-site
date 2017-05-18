import React, { Component } from 'react'
import { HASH } from '../../constants/url'
import { Link as ScrollLink } from 'react-scroll'

export default class Cover extends Component {
  render() {
    return (
      <section id="cover">
        <div className="cover-left">
          <div className="center">
            <h1>人工智慧，為你解析數據下的商機</h1>
            <h2>我們相信「企業做到精準才有未來」 <br />融入遊戲思維，成為有溫度的人工智慧。<br />精準掌握客戶行為與喜好，為你找出數據下的商機！</h2>
            <ScrollLink
              smooth
              to        = { HASH.SERVICES } 
              duration  = { 500 }
              className = "btn primary"
            >
              我們的服務
            </ScrollLink>
          </div>
        </div>

        <div className="cover-right">
          <p />
        </div>
      </section>
    )
  }
}
