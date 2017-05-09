import React, { Component } from 'react'
import Cover from './Cover'
import Problems from './Problems'
import Solutions from './Solutions'
import Technology from './Technology'
import CooperationProcess from './CooperationProcess'
import ContactUs from './ContactUs'

export default class Home extends Component {
  render() {
    return (
      <main>
        <Cover />
        <Problems />
        <Solutions />
        <Technology />
        <CooperationProcess />
        <ContactUs />
      </main>
    )
  }
}
