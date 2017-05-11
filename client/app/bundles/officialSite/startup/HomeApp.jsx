import {
  BrowserRouter as Router,
  Route, Link, Redirect, Switch,
} from 'react-router-dom'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import Home from '../components/home/Home'
import Service from '../components/service/Service'
import { HOME_PAGE, SERVICE_PAGE } from '../constants/url'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import muiTheme from '../constants/materialUITheme/HomePageTheme'

injectTapEventPlugin()
class HomeApp extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={ muiTheme }>
        <Router>
          <div id="app-container">
            <Header />
            <Switch>
              <Route exact path={ HOME_PAGE } component={ Home } />
              <Route path={ SERVICE_PAGE } component={ Service } />
              <Redirect to={ HOME_PAGE } />
            </Switch>
            <Footer />
          </div>
        </Router>
      </MuiThemeProvider>
    )
  }
}

export default HomeApp