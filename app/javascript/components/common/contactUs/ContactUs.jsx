import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ContactForm from './ContactForm'
import CompanyInfo from './CompanyInfo'

const steps = ["welcome", "form", "success"]

export default class ContactUs extends Component {
  constructor(props) {
    super(props)

    this.state = {
      step : steps[0],
    }
  }

  goWelcome = () => {
    this.setState({ step : steps[0] })
  }

  goForm = () => {
    this.setState({ step : steps[1] })
  }

  goSuccess = () => {
    this.setState({ step : steps[2] })
  }

  render() {
    const { title, sub_title } = this.props
    const { step } = this.state

    return (
      <section id="contact-us">
        <div className="contact-us-center">
          {
            step == steps[0] &&
              <div className="company-info-container">
                <h1>{ title }</h1>
                { 
                  sub_title && <h3>{ sub_title }</h3>
                }
                <CompanyInfo />
                <div className="btn primary" onClick={ this.goForm }>合作洽談</div>
              </div>
          }
          {
            step == steps[1] &&
              <ContactForm goBack={ this.goWelcome } goNext={ this.goSuccess } />
          }
          {
            step == steps[2] &&
              <div className="company-info-container">
                <h1>我們會儘速與您聯絡！</h1>
                <CompanyInfo />
              </div>
          }
        </div>
      </section>
    )
  }
}

ContactUs.propTypes = {
  title     : PropTypes.string.isRequired,
  sub_title : PropTypes.string,
}