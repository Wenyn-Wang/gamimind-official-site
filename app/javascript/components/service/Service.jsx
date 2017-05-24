import React from 'react'
import { Route } from 'react-router-dom'
import { SERVICES } from '../../constants/url'
import SocialMedia from './socialMedia/SocialMedia'
import OwnedMedia from './ownedMedia/OwnedMedia'
import CustomerRelationship from './customerRelationship/CustomerRelationship'
import ContactUs from '../common/contactUs/ContactUs'

const contact_us_attr = {
  title     : '聯絡我們',
  sub_title : '立即啟動你的粉絲細胞',
}

const Service = () => {
  return (
    <main>
      <Route path={ SERVICES.SOCIAL_MEDIA } component={ SocialMedia } />
      <Route path={ SERVICES.OWNED_MEDIA } component={ OwnedMedia } />
      <Route path={ SERVICES.CUSTOMER_RELATIONSHIP } component={ CustomerRelationship } />
      <ContactUs { ...contact_us_attr } />
    </main>
  )
}

export default Service
