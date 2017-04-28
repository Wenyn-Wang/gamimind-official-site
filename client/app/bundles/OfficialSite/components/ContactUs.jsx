import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContactUs extends React.Component {
  render() {
    return (
      <section id="contact-us">
        <div className="contact-us-center">
          <h1>和我們一起精準預測！</h1>
          <div className="company-info">
            <p>電話：+886-2-23681580</p>
            <p>email：info@gamemind.org</p>
            <p>地址：台北市中山區羅斯福路三段302號12樓之1</p>
          </div>
          <div className="btn primary">合作洽談</div>
        </div>
      </section>
    );
  }
}

ContactUs.propTypes = {
}

export default ContactUs
