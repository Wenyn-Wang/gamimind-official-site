import React, { Component } from 'react'
import keys from 'lodash/keys'
import TextField from 'material-ui/TextField'
import HardwareKeyboardArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left'

const icon_style = {
  width: '100%',
  height: '100%',
}

export default class ContactUs extends Component {
  constructor(props) {
    super(props)

    this.state = {
      show_form : true,
      contact   : {
        name    : "",
        company : "",
        phone   : "",
        email   : "",
        time    : "",
      },
    }
  }

  showForm = () => {
    this.setState({ show_form : true })
  }

  hideForm = () => {
    this.setState({ show_form : false })
  }

  handleInputChange = (event) => {
    const { name, value } = event.target
    const { contact } = this.state
    const fields = keys(contact)
    if (fields.indexOf(name) == -1) return
    this.setState({
      ...this.state,
      contact: {
        ...contact,
        [name] : value,
      },
    })
  }

  render() {
    const { show_form, contact } = this.state

    return (
      <section id="contact-us">
        <div className="contact-us-center">
          {
            !show_form ?
              <div className="company-info-container">
                <h1>和我們一起精準預測！</h1>

                <div className="company-info">
                  <p>電話：+886-2-23681580</p>
                  <p>email：info@gamemind.org</p>
                  <p>地址：台北市中正區羅斯福路三段302號12樓之1</p>
                </div>

                <div className="btn primary" onClick={ this.showForm }>合作洽談</div>
              </div>
            :
              <div className="contact-us-form-container">
                <div className="go-back-btn" onClick={ this.hideForm }>
                  <HardwareKeyboardArrowLeft style={ icon_style } />
                </div>

                <div className="contact-us-form">
                  <TextField
                    floatingLabelText="姓名"
                    name="name"
                    value={ contact.name }
                    onChange={ this.handleInputChange } /><br />
                  <TextField
                    floatingLabelText="公司名稱"
                    name="company"
                    value={ contact.company }
                    onChange={ this.handleInputChange } /><br />
                  <TextField
                    floatingLabelText="電話"
                    name="phone"
                    value={ contact.phone }
                    onChange={ this.handleInputChange } /><br />
                  <TextField
                    floatingLabelText="Email"
                    name="email"
                    value={ contact.email }
                    onChange={ this.handleInputChange } /><br />
                  <TextField
                    floatingLabelText="希望聯絡時間"
                    name="time"
                    value={ contact.time }
                    onChange={ this.handleInputChange } /><br />
                </div>

                <div className="btn primary" onClick={ this.hideForm }>立即送出</div>
              </div>
          }
        </div>
      </section>
    )
  }
}
