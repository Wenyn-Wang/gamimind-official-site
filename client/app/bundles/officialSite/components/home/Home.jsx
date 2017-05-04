import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Cover from './Cover'
import Problems from './Problems'
import ContactUs from './ContactUs'

export default class Home extends Component {
  render() {
    return (
      <main>
        <Cover />
        <Problems />
        <ContactUs />
      </main>
    )
  }
}
