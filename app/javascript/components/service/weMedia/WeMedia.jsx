import React from 'react'
import Cover from '../common/Cover'
import Trouble from '../common/Trouble'
import Solutions from '../common/Solutions'

const trouble_text = (
  <div>
    <p>用品牌整合資源，跨領域發展，真正發揮出品牌的力量</p>
    <p>打造生態圈即要求企業用品牌的背書與積累起來的信任，在自己的主營業務外</p>
    <p>實現跨界整合，為消費者創造更多的價值，提供一線話的服務</p>
    <p>同時，況大企業的未來與版圖</p>
  </div>
)

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
      <Cover 
        title = "品牌自媒體經營方案"
        desc  = "強力磁鐵把粉絲都吸過來！讓我們幫你輕鬆打造品牌生態圈，成為業界意見領袖！"
      />
      <Trouble
        title = "在這個快速變化的時代，品牌需的要是打造生態圈"
        text  = { trouble_text }
      />
      <Solutions { ...solution_attr } />
    </main>
  )
}

export default WeMedia
