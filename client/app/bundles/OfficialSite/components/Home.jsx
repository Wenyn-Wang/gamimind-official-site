import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Home extends React.Component {
  static propTypes = {
    clients: PropTypes.array.isRequired,
  }
  render() {
    return (
      <div>
        <h1>遊戲話社群媒體方案</h1>
        <h4>百萬粉絲醒過來，不要再封鎖我了！</h4>
        <h4>把百萬粉絲，變成真正的"品牌用戶"</h4>
      </div>
    );
  }
}
