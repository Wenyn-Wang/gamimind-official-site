import {
  BrowserRouter as Router,
  Route, Redirect, Switch,
} from 'react-router-dom'
import React, { Component } from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import Home from '../components/home/Home'
import SocialMedia from '../components/service/socialMedia/SocialMedia'
import WeMedia from '../components/service/weMedia/WeMedia'
import CustomerRelationship from '../components/service/customerRelationship/CustomerRelationship'
import Blog from '../components/blog/Blog'
import Post from '../components/post/Post'
import { HOME, SERVICES, BLOG, POST } from '../constants/url'
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
              <Route path={ SERVICES.SOCIAL_MEDIA } component={ SocialMedia } />
              <Route path={ SERVICES.WE_MEDIA } component={ WeMedia } />
              <Route path={ SERVICES.CUSTOMER_RELATIONSHIP } component={ CustomerRelationship } />
              <Route path={ BLOG } component={ Blog } />
              <Route path={ `${POST}/:slug` } component={ Post } />
              <Redirect to={ HOME } />
            </Switch>
            <Footer />
          </div>
        </Router>
      </MuiThemeProvider>
    )
  }
}
