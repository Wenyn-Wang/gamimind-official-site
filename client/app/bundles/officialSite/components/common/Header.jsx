import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Drawer from 'material-ui/Drawer'
import { HOME, SERVICE, BLOG } from '../../constants/url'
import cx from 'classnames'

const logo_white = require('images/home/header/logo-gamemind-white.svg')
const logo_blue = require('images/home/header/logo-gamemind-blue.svg')
const menu_logo = require('images/home/header/menu-logo.png')

class Header extends Component {
  constructor(prop){
    super(prop)

    this.UP = 0
    this.DOWN = 1
    this.last_known_pos = 0
    this.state = {
      show            : true,
      opacity_bg      : true,
      hamburger_open  : false,
    }

    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll() {
    const { UP, DOWN } = this
    const { show, opacity_bg } = this.state
    let support_offset = window.pageYOffset !== undefined
    let scroll_dir
    let current_pos
    let next_show
    let next_opacity_bg = false

    current_pos = support_offset ? window.pageYOffset : document.body.scrollTop
    scroll_dir = this.last_known_pos > current_pos ? UP : DOWN
    this.last_known_pos = current_pos

    next_show = scroll_dir === UP
    if(this.last_known_pos < 50) next_show = true
    if(this.last_known_pos < 80) next_opacity_bg = true
    if(next_show !== show || next_opacity_bg !== opacity_bg) {
      this.setState({ 
        opacity_bg: next_opacity_bg,
        show : next_show,
      })
    }
  }

  openHamburger = () => {
    if (!this.state.hamburger_open) {
      this.setState({ hamburger_open: true })
    }
  }

  closeHamburger = () => {
    if (this.state.hamburger_open) {
      this.setState({ hamburger_open: false })
    }
  }

  renderNavLink() {
    return (
      <div className="nav-container">
        <Link to={ SERVICE } className="nav-link">服務</Link>
        <Link to={ HOME } className="nav-link">技術</Link>
        <Link to={ BLOG } className="nav-link">部落格</Link>
      </div>
    )
  }

  render() {
    const { show, opacity_bg } = this.state
    const class_name = cx({ 
      show,
      'opacity-bg': opacity_bg,
    })
    const contact_us_class = cx({
      btn : true,
      primary   : !opacity_bg,
      secondary : opacity_bg,
    })

    return (
      <header className={ class_name }>
        <div className="hamburger-container">
          <div className="hamburger" onClick={ this.openHamburger }/>
        </div>

        <Link to={ HOME }>
          <div id="logo">
            <img src={ logo_white } />
            <img src={ logo_blue } />
          </div>
        </Link>

        <nav>
          { this.renderNavLink() }
          <Link to={ HOME } className={ contact_us_class }>合作洽談</Link>
        </nav>

        <Drawer
          docked          = { false }
          width           = { 200 }
          open            = { this.state.hamburger_open }
          onRequestChange = { (hamburger_open) => this.setState({ hamburger_open }) }
        >
          <div className="material-drawer">
            <img className="menu-logo" src={ menu_logo } onClick={ this.closeHamburger } />
            { this.renderNavLink() }
          </div>
        </Drawer>
      </header>
    )
  }
}

export default Header