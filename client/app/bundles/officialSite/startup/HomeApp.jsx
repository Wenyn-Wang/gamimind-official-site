import {
  BrowserRouter as Router,
  Route, Link, Redirect, Switch,
} from 'react-router-dom'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import Home from '../components/home/Home'
import SocialMedia from '../components/service/socialMedia/SocialMedia'
import Blog from '../components/blog/Blog'
import { HOME, SERVICE_SOCIAL_MEDIA, BLOG } from '../constants/url'
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
              <Route exact path={ HOME } component={ Home } />
              <Route path={ SERVICE_SOCIAL_MEDIA } component={ SocialMedia } />
              <Route path={ BLOG } component={ Blog } />
              <Redirect to={ HOME } />
            </Switch>
            <Footer />
          </div>
        </Router>
      </MuiThemeProvider>
    )
  }
}

export default HomeApp
