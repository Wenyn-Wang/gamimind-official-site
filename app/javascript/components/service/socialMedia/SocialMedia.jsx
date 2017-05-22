import React from 'react'
import Cover from './Cover'
import Trouble from './Trouble'
import Solutions from './Solutions'
import ExpectedResult from './ExpectedResult'
import WhatKindOfPerson from './WhatKindOfPerson'
import ContactUs from '../../common/contactUs/ContactUs'

const contact_us_attr = {
  title     : '聯絡我們',
  sub_title : '立即啟動你的粉絲細胞',
}

const SocialMedia = () => {
  return (
    <main id="social-media">
      <Cover />
      <Trouble />
      <Solutions />
      <ExpectedResult />
      <WhatKindOfPerson />
      <ContactUs { ...contact_us_attr } />
    </main>
  )
}

export default SocialMedia
