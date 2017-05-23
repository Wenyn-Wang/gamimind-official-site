import React from 'react'
import Cover from '../common/Cover'
import Solutions from '../common/Solutions'

const cover_attr = {
  title : '品牌自媒體經營方案',
  desc  : '強力磁鐵把粉絲都吸過來！讓我們幫你輕鬆打造品牌生態圈，成為業界意見領袖！',
}

const solution_attr = {
  upper : [{
    img   : require('images/service/socialMedia/common/solutions/form.png'),
    title : '評估',
    text  : (
      <div>
        <p>企業形象</p>
        <p>品牌定位</p>
        <p>市場動態</p>
      </div>
    ),
  }, {
    img   : require('images/service/socialMedia/common/solutions/company.png'),
    title : '定調自媒體',
    text  : '與企業形象同步、規劃自媒體平台視覺及經營策略',
  }],
  steps : [{
    title : '導入遊戲化',
    text  : '已達成企業目標為原則，設計適合的遊戲化元素',
    img   : require('images/service/socialMedia/common/solutions/form.png'),
  }, {
    title : 'RWD響應式網站設計',
    text  : 'Android / IOS APP 開發',
    img   : require('images/service/socialMedia/common/solutions/game.png'),
  }, {
    title : '人工智慧',
    text  : '追蹤用戶行為軌跡形塑個人特質輪廓，挖掘隱私偏好',
    img   : require('images/service/socialMedia/common/solutions/development.png'),
  }, {
    title : '超越商業目標',
    text  : '定期數據追蹤、隨時調整參數，最大化成效',
    img   : require('images/service/socialMedia/common/solutions/operation.png'),
  }],
}


const WeMedia = () => {
  return (
    <main id="social-media">
      <Cover
        title = "品牌自媒體經營方案"
        desc  = "強力磁鐵把粉絲都吸過來！讓我們幫你輕鬆打造品牌生態圈，成為業界意見領袖！"
      />
      <Solutions { ...solution_attr } />
    </main>
  )
}

export default WeMedia
