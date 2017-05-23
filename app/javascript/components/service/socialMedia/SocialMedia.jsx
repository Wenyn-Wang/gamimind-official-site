import React from 'react'
import Cover from '../common/Cover'
import Trouble from '../common/Trouble'
import Solutions from './Solutions'
import ExpectedResult from './ExpectedResult'
import WhatKindOfPerson from './WhatKindOfPerson'

const SocialMedia = () => {
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
  return (
    <main id="social-media">
      <Cover
        title="Line／Facebook 行銷方案"
        desc="把沈睡的用戶，一次叫醒！變身為忠誠的品牌VIP"
        decorations={ cover_decorations }
      />
      <Trouble title="困擾" text={ trouble_text } />
      <Solutions />
      <ExpectedResult />
      <WhatKindOfPerson />
    </main>
  )
}

export default SocialMedia
