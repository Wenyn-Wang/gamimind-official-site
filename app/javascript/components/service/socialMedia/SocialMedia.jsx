import React from 'react'
import Cover from '../common/Cover'
import Trouble from '../common/Trouble'
import Solutions from '../common/Solutions'
import ExpectedResult from '../common/ExpectedResult'
import WhatKindOfPerson from './WhatKindOfPerson'
import ContactUs from '../../common/contactUs/ContactUs'

const contact_us_attr = {
  title     : '聯絡我們',
  sub_title : '立即啟動你的粉絲細胞',
}

const cover_decorations = (
  <div className="cover-right">
    <span className="fb-logo" />
    <span className="line-logo" />
  </div>
)

const trouble_text = (
  <div>
    <p>你了解你的社群用戶嗎？</p>
    <p>超過100萬人氣追蹤，按讚 Facebook 與 Line，但實際的忠實用戶有多少呢？</p>
    <p>企業推出的貼圖超可愛，用戶加入官方帳號、下載貼圖後，如何避免被“封鎖”？</p>
  </div>
)

const solution_steps = [{
  title : '評估',
  text  : '企業形象、品牌定位、市場動態',
  img   : require('images/service/common/solutions/form.png'),
}, {
  title : '遊戲化導入',
  text  : '設計遊戲化文案，深化使用者互動',
  img   : require('images/service/common/solutions/game.png'),
}, {
  title : '工具開發',
  text  : '建置 Line Add-on 遊戲化工具，Facebook 小遊戲',
  img   : require('images/service/common/solutions/development.png'),
}, {
  title : '營運',
  text  : '結合「企業自媒體平台」整合性營運，分析用戶需求、標定客戶樣貌、發送客製化推薦',
  img   : require('images/service/common/solutions/operation.png'),
}]

const results = [
  '擴大追蹤用戶數',
  '提升活躍用戶數',
  '增加品牌認同感',
  '提高目標轉換率，增加分享、按讚及留言數',
]

const SocialMedia = () => {
  return (
    <main id="social-media">
      <Cover
        title       = "Line／Facebook 行銷方案"
        desc        = "把沈睡的用戶，一次叫醒！變身為忠誠的品牌VIP"
        decorations = { cover_decorations }
      />
      <Trouble title="困擾" text={ trouble_text } />
      <Solutions steps={ solution_steps }/>
      <ExpectedResult results={ results } />
      <WhatKindOfPerson />
      <ContactUs { ...contact_us_attr } />
    </main>
  )
}

export default SocialMedia
