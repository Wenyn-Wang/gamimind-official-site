import React, { Component } from 'react'
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

  render() {
    const { step } = this.state

    return (
      <section id="contact-us">
        <div className="contact-us-center">
          {
            step == steps[0] &&
              <div className="company-info-container">
                <h1>和我們一起精準預測！</h1>
                <CompanyInfo />
                <div className="btn primary" onClick={ this.goForm }>合作洽談</div>
              </div>
          }
          {
            step == steps[1] &&
              <ContactForm goBack={ this.goWelcome } />
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
