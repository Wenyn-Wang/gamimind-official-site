import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Header from '../components/common/Header'
import Home from '../components/home/Home'
import Service from '../components/service/Service'
import { HOME_PAGE, SERVICE_PAGE } from '../constants/url'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import muiTheme from '../constants/materialUITheme/HomePageTheme'

injectTapEventPlugin()

 class HomeApp extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={ muiTheme }>
        <Router>
          <div id="app-container">
            <Header />
            
            <Route exact path={ HOME_PAGE } component={ Home } />
            <Route path={ SERVICE_PAGE } component={ Service } />
          </div>
        </Router>
      </MuiThemeProvider>
    )
  }
}

export default HomeApp