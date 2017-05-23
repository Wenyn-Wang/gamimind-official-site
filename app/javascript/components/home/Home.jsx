import React, { Component } from 'react'
import Cover from './Cover'
import Problems from './Problems'
import Services from './Services'
import CooperationProcess from './CooperationProcess'
import Technology from './Technology'
import Founder from './Founder'
import ContactUs from '../common/contactUs/ContactUs'

const contact_us_title = '和我們一起精準預測！'

export default class Home extends Component {
  render() {
    return (
      <main>
        <Cover />
        <Problems />
        <Services />
        <CooperationProcess />
        <Technology />
        <Founder />
        <ContactUs title={ contact_us_title } />
      </main>
    )
  }
}
