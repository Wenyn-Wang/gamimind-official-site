import React, { Component } from 'react'
import Cover from './Cover'
import Problems from './Problems'
import Services from './Services'
import CooperationProcess from './CooperationProcess'
import Technology from './Technology'
import Founder from './Founder'
import ContactUs from '../contactUs/ContactUs'

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
        <ContactUs />
      </main>
    )
  }
}
