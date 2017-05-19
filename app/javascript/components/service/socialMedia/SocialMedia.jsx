import React from 'react'
import Cover from './Cover'
import Trouble from '../common/Trouble'
import Solutions from './Solutions'
import ExpectedResult from './ExpectedResult'

const SocialMedia = () => {
  const trouble_text = (
    <div>
      <p>你了解你的社群用戶嗎？</p>
      <p>超過100萬人氣追蹤，按讚 Facebook 與 Line，但實際的忠實用戶有多少呢？</p>
      <p>企業推出的貼圖超可愛，用戶加入官方帳號、下載貼圖後，如何避免被“封鎖”？</p>
    </div>
  )
  return (
    <main id="social-media">
      <Cover />
      <Trouble text={ trouble_text } />
      <Solutions />
      <ExpectedResult />
    </main>
  )
}

export default SocialMedia
