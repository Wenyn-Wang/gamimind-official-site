import React from 'react'
import Cover from '../common/Cover'
import Trouble from '../common/Trouble'
import Solutions from '../common/Solutions'
import ExpectedResult from '../common/ExpectedResult'
import ContactUs from '../../common/contactUs/ContactUs'

const contact_us_attr = {
  title : '立刻打造品牌生態圈',
}

const trouble_text = (
  <div>
    <p>用品牌整合資源，跨領域發展，真正發揮出品牌的力量</p>
    <p>打造生態圈即要求企業用品牌的背書與積累起來的信任，在自己的主營業務外</p>
    <p>實現跨界整合，為消費者創造更多的價值，提供一線話的服務</p>
    <p>同時，況大企業的未來與版圖</p>
  </div>
)

const solution_attr = {
  unordered_steps : [{
    img   : require('images/service/common/solutions/form.png'),
    title : '評估',
    text  : (
      <div>
        <p>企業形象</p>
        <p>品牌定位</p>
        <p>市場動態</p>
      </div>
    ),
  }, {
    img   : require('images/service/common/solutions/company.png'),
    title : '定調自媒體',
    text  : '與企業形象同步、規劃自媒體平台視覺及經營策略',
  }],
  steps : [{
    title : '導入遊戲化',
    text  : '已達成企業目標為原則，設計適合的遊戲化元素',
    img   : require('images/service/common/solutions/game-b.png'),
  }, {
    title : 'RWD響應式網站設計',
    text  : 'Android / IOS APP 開發',
    img   : require('images/service/common/solutions/cross-screen.png'),
  }, {
    title : '人工智慧',
    text  : '追蹤用戶行為軌跡形塑個人特質輪廓，挖掘隱私偏好',
    img   : require('images/service/common/solutions/personal.png'),
  }, {
    title : '超越商業目標',
    text  : '定期數據追蹤、隨時調整參數，最大化成效',
    img   : require('images/service/common/solutions/milestone.png'),
  }],
}

const expected_results = [
  '累積品牌SEO',
  '深化會員關係，增進顧客黏著度',
  '雇客互動指標顯著提升：停留時間、平均跳出率、CPC 等',
  '自媒體將延伸為品牌重要資產',
]

const OwnedMedia = () => {
  return (
    <main id="social-media">
      <Cover
        title = "品牌自媒體經營方案"
        desc  = "強力磁鐵把粉絲都吸過來！讓我們幫你輕鬆打造品牌生態圈，成為業界意見領袖！"
      />
      <Trouble
        className = "blue-cloud"
        title     = "在這個快速變化的時代，品牌需的要是打造生態圈"
        text      = { trouble_text }
      />
      <Solutions { ...solution_attr } />
      <ExpectedResult results={ expected_results } />
      <ContactUs { ...contact_us_attr } />
    </main>
  )
}

export default OwnedMedia
