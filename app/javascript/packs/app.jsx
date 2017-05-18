import {
  BrowserRouter as Router,
  Route, Redirect, Switch,
} from 'react-router-dom'
import React, { Component } from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import Home from '../components/home/Home'
import Service from '../components/service/Service'
import Blog from '../components/blog/Blog'
import { HOME, SERVICE, BLOG } from '../constants/url'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import muiTheme from '../constants/materialUITheme/HomePageTheme'

injectTapEventPlugin()
export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={ muiTheme }>
        <Router>
          <div id="app-container">
            <Header />
            <Switch>
              <Route exact path={ HOME } component={ Home } />
              <Route path={ SERVICE } component={ Service } />
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
