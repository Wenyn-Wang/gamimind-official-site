import React, { Component } from 'react'
import Cover from './Cover'
import Problems from './Problems'
import Services from './Services'
import CooperationProcess from './CooperationProcess'
import Technology from './Technology'
import ContactUs from './ContactUs'

export default class Home extends Component {
  render() {
    return (
      <main>
        <Cover />
        <Problems />
        <Services />
        <CooperationProcess />
        <Technology />
        <ContactUs />
      </main>
    )
  }
}
