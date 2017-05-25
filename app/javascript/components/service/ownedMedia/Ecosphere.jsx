import React, { Component } from 'react'
import MediaQuery from 'react-responsive'
import { PAD_WIDTH } from '../../../constants/deviceTypes'
import SemiCircular from './SemiCircular'

const items = [{
  letter : 'A',
  text   : '減少對 Line / Facebook 等社群媒體的依賴，建立自己的品牌自媒體，透過“文字、多媒體”的力量經營忠實客戶',
  img    : require('images/service/ownedMedia/ecosphere/icon1.png'),
}, {
  letter : 'B',
  text   : '將流量導入“品牌自媒體”，拒絕為對手累積流量',
  img    : require('images/service/ownedMedia/ecosphere/icon2.png'),
}, {
  letter : 'C',
  text   : '將品牌自落實於手機、APP 或官網部落格中',
  img    : require('images/service/ownedMedia/ecosphere/icon3.png'),
}, {
  letter : 'D',
  text   : '導入遊戲化，增進用戶與品牌的互動',
  img    : require('images/service/ownedMedia/ecosphere/icon4.png'),
}, {
  letter : 'E',
  text   : '運用人工智慧，標定用戶喜好、預測用戶未來行為，打造品牌生態圈，達成在 Facebook / Line 無法成就的商業目標',
  img    : require('images/service/ownedMedia/ecosphere/icon5.png'),
}, {
  letter : 'F',
  text   : '定期數據追蹤、隨時調整參數，最大化成效',
  img    : require('images/service/ownedMedia/ecosphere/icon6.png'),
}]

const Ecosphere = () => (
  <section id="ecosphere" className="section-arrow-down">
    <div className="section-title">
      <h1>如何打造品牌生態圈</h1>
    </div>
    
    <div className="ecosphere-container">
      <MediaQuery minWidth={ PAD_WIDTH + 1 }>
        <SemiCircular items={ items } />
      </MediaQuery>

      <MediaQuery maxWidth={ PAD_WIDTH } component="ul">
        {
          items.map((item, index) => (
            <li key={ index }>
              {item.text}
            </li>
          ))
        }
      </MediaQuery>
    </div>
  </section>
)

export default Ecosphere
