import PropTypes from 'prop-types'
import React, { Component } from 'react'
import ContactUs from './ContactUs'

export default class Home extends React.Component {
  static propTypes = {
    clients: PropTypes.array.isRequired,
  }
  render() {
    return (
      <main>
        <ContactUs />
      </main>
    );
  }
}
