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
const fields = [
  {
    label: "姓名",
    name: "name",
    errorText: "請輸入姓名",
  },
  {
    label: "公司名稱",
    name: "company",
    errorText: "請輸入公司名稱",
  },
  {
    label: "電話",
    name: "phone",
    errorText: "請輸入聯絡電話",
  },
  {
    label: "Email",
    name: "email",
    errorText: "請輸入正確的Email",
  },
  {
    label: "方便聯絡時間",
    name: "time",
    errorText: "請輸入您方便聯絡的時間",
  },
]

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
    return value.length > 0 //name, company, phone, time
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
    if (values(contact).indexOf("") != -1) return
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
          {
            fields.map(field => (
              <div key={ field.name }>
                <TextField
                  floatingLabelText={ field.label }
                  name={ field.name }
                  value={ contact[field.name] }
                  onChange={ this.handleInputChange }
                  errorText={ error[field.name] && field.errorText } />
              </div>
            ))
          }
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
