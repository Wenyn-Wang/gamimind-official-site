import React from 'react'
import Cover from '../common/Cover'
import Trouble from '../common/Trouble'
import Solutions from '../common/Solutions'
import ExpectedResult from '../common/ExpectedResult'

const cover_attr = {
  title : '品牌自媒體經營方案',
  desc  : '強力磁鐵把粉絲都吸過來！讓我們幫你輕鬆打造品牌生態圈，成為業界意見領袖！',
}

const WeMedia = () => {
  return (
    <main id="social-media">
      <Cover { ...cover_attr }/>
    </main>
  )
}

export default WeMedia
