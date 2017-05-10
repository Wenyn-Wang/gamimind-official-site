import React, { Component } from 'react'
import ContactForm from './ContactForm'

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

                <div className="company-info">
                  <p>電話：+886-2-23681580</p>
                  <p>email：info@gamemind.org</p>
                  <p>地址：台北市中正區羅斯福路三段302號12樓之1</p>
                </div>

                <div className="btn primary" onClick={ this.goForm }>合作洽談</div>
              </div>
          }
          {
            step == steps[1] &&
              <ContactForm goBack={ this.goWelcome } />
          }
        </div>
      </section>
    )
  }
}
