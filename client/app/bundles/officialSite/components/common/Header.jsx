import PropTypes from 'prop-types'
import React, { Component } from 'react'
import cx from 'classnames'

const logo_white = require('images/home/header/logo-gamemind-white.svg')
const logo_blue = require('images/home/header/logo-gamemind-blue.svg')

class Header extends React.Component {
  constructor(prop){
    super(prop)

    this.UP = 0
    this.DOWN = 1
    this.last_known_pos = 0
    this.state = {
      show            : true,
      opacity_bg      : false,
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

  closeHamburger = () => {
    if (this.state.hamburger_open)
      this.setState({ hamburger_open: false })
  }

  render() {
    const { show, opacity_bg } = this.state
    const class_name = cx({ 
      show,
      'opacity-bg': opacity_bg,
    })

    return (
      <header className={ class_name }>
        <div id="logo">
          <img src={ logo_white } />
          <img src={ logo_blue } />
        </div>

        <nav>
          <span>服務</span>
          <span>技術</span>
          <span>部落格</span>
          <span>合作洽談</span>
        </nav>
      </header>
    )
  }
}

export default Header