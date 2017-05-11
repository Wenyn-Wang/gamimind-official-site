import React, { Component } from 'react'
import Cover from './Cover'
import Problems from './Problems'
import Solutions from './Solutions'
import CooperationProcess from './CooperationProcess'
import Technology from './Technology'
import ContactUs from '../contactUs/ContactUs'

export default class Home extends Component {
  render() {
    return (
      <main>
        <Cover />
        <Problems />
        <Solutions />
        <CooperationProcess />
        <Technology />
        <ContactUs />
      </main>
    )
  }
}
