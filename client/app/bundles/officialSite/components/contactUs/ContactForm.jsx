import React, { Component } from 'react'
import PropTypes from 'prop-types'
import HardwareKeyboardArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left'
import TextField from 'material-ui/TextField'
import keys from 'lodash/keys'
import values from 'lodash/values'
import { createContact } from '../../apis/contactApis'

const icon_style = {
  width: '100%',
  height: '100%',
}
const email_pattern = /.+@.+\..+/

class ContactForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      contact   : {
        name    : "",
        company : "",
        phone   : "",
        email   : "",
        time    : "",
      },
      error : {
        name    : false,
        company : false,
        phone   : false,
        email   : false,
      },
    }
  }

  isValid = (field_idx, value) => {
    if (field_idx == 3) // email
      return !!value.match(email_pattern)
    else if ([0, 1, 2].indexOf(field_idx) != -1) //name, company, phone
      return value.length > 0
    return true
  }

  handleInputChange = (event) => {
    const { name, value } = event.target
    const { contact, error } = this.state
    const idx = keys(contact).indexOf(name)
    if (idx == -1) return
    const field_error = !this.isValid(idx, value)
    this.setState({
      ...this.state,
      contact: {
        ...contact,
        [name] : value,
      },
      error : {
        ...error,
        [name]: field_error,
      }
    })
  }

  submitForm = () => {
    const { contact, error } = this.state
    if (values(error).indexOf(true) != -1) return
    createContact(contact).then(res => {
      this.props.goNext()
    })
  }

  render() {
    const { contact, error } = this.state
    return (
      <div className="contact-us-form-container">
        <div className="go-back-btn" onClick={ this.props.goBack }>
          <HardwareKeyboardArrowLeft style={ icon_style } />
        </div>

        <div className="contact-us-form">
          <TextField
            floatingLabelText="姓名"
            name="name"
            value={ contact.name }
            onChange={ this.handleInputChange }
            errorText={ error.name && "請輸入姓名" } /><br />
          <TextField
            floatingLabelText="公司名稱"
            name="company"
            value={ contact.company }
            onChange={ this.handleInputChange }
            errorText={ error.company && "請輸入公司名稱" } /><br />
          <TextField
            floatingLabelText="聯絡電話"
            name="phone"
            value={ contact.phone }
            onChange={ this.handleInputChange }
            errorText={ error.phone && "請輸入聯絡電話" } /><br />
          <TextField
            floatingLabelText="Email"
            name="email"
            value={ contact.email }
            onChange={ this.handleInputChange }
            errorText={ error.email && "請輸入正確的Email" } /><br />
          <TextField
            floatingLabelText="希望聯絡時間"
            name="time"
            value={ contact.time }
            onChange={ this.handleInputChange } /><br />
        </div>

        <div className="btn primary" onClick={ this.submitForm }>
          立即送出
        </div>
      </div>
    )
  }
}

ContactForm.propTypes = {
  goBack : PropTypes.func,
  goNext : PropTypes.func,
}

export default ContactForm
