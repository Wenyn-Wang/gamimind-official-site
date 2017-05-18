import React, { Component } from 'react'

const kinds = [{
  title     : '社群起步',
  subtitle  : '尚未開始經營品牌社群媒體',
  content   : '「投入 Facebook / Line 社群媒體一段時間，但苦於沒有新方持續擴大粉絲數量。」',
}, {
  title     : '社群養成中',
  subtitle  : '累計超過10,000人追蹤的品牌企業',
  content   : '正在規劃 Facebook / Line 的社群經營，但苦於不知如何起步就結合數據分析、掌握用戶輪廓。',
}, {
  title     : '品牌大戶',
  subtitle  : '擁有超過300,000人以上追蹤的品牌企業',
  content   : '經營 Facebook / Line 的社群媒體許久，擁有百萬量級以上的粉絲，但苦於活躍用戶比例極低的品牌或企業',
}]

class WhatKindOfPerson extends Component {
  constructor(props) {
    super(props)

    this.state = {
      current_index : 0,
    }
  }

  render() {
    const { current_index } = this.state

    return (
      <section id="what-kind-of-person">
        <div className="section-title">
          <h1>你是下列哪種人</h1>
        </div>
        
        <div className="kinds-container">
          <ul className="kinds">
            {
              kinds.map((kind, index) => (
                <li
                  key       = { index }
                  className = { ( current_index == index)? "active" : "" }
                >
                  <h2>{ kind.title }</h2>
                  <h5>{ kind.subtitle }</h5>
                  <p>{ kind.content }</p>
                </li>
              ))
            }
          </ul>
        </div>
      </section>
    )
  }
}

export default WhatKindOfPerson
