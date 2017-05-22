import React from 'react'
import Cover from '../common/Cover'
import Trouble from '../common/Trouble'
import Solutions from '../common/Solutions'
import ExpectedResult from '../common/ExpectedResult'
import WhoSuits from '../common/WhoSuits'

const trouble_text = (
  <div>
    <p>現在用line經營不方便，滑開手機看到100個未讀好緊張！</p>
    <p>不夠了解客戶，在錯的時間出現，總是吃閉門羹！</p>
    <p>客戶不會主動表達需求，花了大把時間，仍雞同鴨講！</p>
  </div>
)

const solution_steps = [{
  title : '設計CRM方案',
  text  : '以實踐業務需求為目標，設計符合品牌定位、產品特質的CRM方案',
  img   : require('images/service/customerRelationship/crm.png'),
}, {
  title : '導入遊戲化',
  text  : '根據用戶屬性，設計“高活躍度”遊戲化機制，深化與客戶的關係',
  img   : require('images/service/common/solutions/game.png'),
}, {
  title : '跨端開發',
  text  : 'RWD 響應式網站設計、Android / iOS APP 開發',
  img   : require('images/service/customerRelationship/cross-screen.png'),
}, {
  title : '人工智慧',
  text  : '追蹤用戶行為軌跡形塑個人特質輪廓，挖掘隱性偏好',
  img   : require('images/service/common/solutions/personal.png'),
}, {
  title : '超越商業目標',
  text  : '定期數據追蹤、隨時調整參數，最大化成效',
  img   : require('images/service/common/solutions/milestone.png'),
}]

const expected_results = [
  '高效管理百位用戶',
  '企業可一手掌握全體客戶動態',
  '準確預測客戶最佳成單時機',
  '增進品牌影響力'
]

const suit_conditions = [{
  desc : "大批的業務員，每人須管理百位以上的客戶",
  img  : require('images/service/common/whoSuits/people.png'),
}, {
  desc : "公司產品更新速度快，協助業務員更快速地傳遞訊息給客戶",
  img  : require('images/service/common/whoSuits/company.png'),
}, {
  desc : "希望\"客戶可以自己找上門來\"，業務員可以更效率地進行\"關鍵行動\"",
  img  : require('images/service/common/whoSuits/client-info.png'),
}]

const CustomerRelationship = () => {
  return (
    <main id="customer-relationship">
      <Cover
        title="客戶關係管理方案"
        desc="客戶維繫並不難，我們讓你比客戶更懂自己"
      />
      <Trouble title="困擾" text={ trouble_text } />
      <Solutions steps={ solution_steps }/>
      <ExpectedResult results={ expected_results } />
      <WhoSuits conditions={ suit_conditions } />
    </main>
  )
}

export default CustomerRelationship
