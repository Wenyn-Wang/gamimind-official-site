import PropTypes from 'prop-types'
import React, { Component } from 'react'
import ContactUs from './ContactUs'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import muiTheme from '../constants/materialUITheme/HomePageTheme'

injectTapEventPlugin()

export default class Home extends React.Component {
  static propTypes = {
    clients: PropTypes.array.isRequired,
  }
  render() {
    return (
      <MuiThemeProvider muiTheme={ muiTheme }>
        <main>
          <ContactUs />
        </main>
      </MuiThemeProvider>
    )
  }
}
