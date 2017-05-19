import React from 'react'
import Cover from '../common/Cover'
import Trouble from '../common/Trouble'

const CustomerRelationShip = () => {
  const trouble_text = (
    <div>
      <p>現在用line經營不方便，滑開手機看到100個未讀好緊張！</p>
      <p>不夠了解客戶，在錯的時間出現，總是吃閉門羹！</p>
      <p>客戶不會主動表達需求，花了大把時間，仍雞同鴨講！</p>
    </div>
  )
  return (
    <main id="customer-relationship">
      <Cover
        title="客戶關係管理方案"
        desc="客戶維繫並不難，我們讓你比客戶更懂自己"
      />
      <Trouble text={ trouble_text } />
    </main>
  )
}

export default CustomerRelationShip
