import React from 'react'
import Cover from '../common/Cover'
import Solutions from '../common/Solutions'

const cover_attr = {
  title : '品牌自媒體經營方案',
  desc  : '強力磁鐵把粉絲都吸過來！讓我們幫你輕鬆打造品牌生態圈，成為業界意見領袖！',
}

const solution_attr = {
  steps : [{
    title : '評估',
    text  : '企業形象、品牌定位、市場動態',
    img   : require('images/service/socialMedia/common/solutions/form.png'),
  }, {
    title : '遊戲化導入',
    text  : '設計遊戲化文案，深化使用者互動',
    img   : require('images/service/socialMedia/common/solutions/game.png'),
  }, {
    title : '工具開發',
    text  : '建置 Line Add-on 遊戲化工具，Facebook 小遊戲',
    img   : require('images/service/socialMedia/common/solutions/development.png'),
  }, {
    title : '營運',
    text  : '結合「企業自媒體平台」整合性營運，分析用戶需求、標定客戶樣貌、發送客製化推薦',
    img   : require('images/service/socialMedia/common/solutions/operation.png'),
  }],
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
}


const WeMedia = () => {
  return (
    <main id="social-media">
      <Cover { ...cover_attr } />
      <Solutions { ...solution_attr } />
    </main>
  )
}

export default WeMedia
