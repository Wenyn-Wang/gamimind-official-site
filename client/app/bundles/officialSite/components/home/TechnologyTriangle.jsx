import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TechnologyTriangle extends Component {
  constructor(props) {
    super(props)

    this.MAX_INDEX = 2
    this.INTERVAL = 3 * 1000
    this.INTERVAL_ID = 0
    this.tmp_index = 0
    this.state = {
      current_index : 0,
    }
  }

  componentDidMount () {
    this.autoSwitch()
  }

  componentWillUnmount () {
    clearInterval(this.INTERVAL_ID)
  }

  autoSwitch() {
    this.INTERVAL_ID = setInterval(this.addIndex, this.INTERVAL)
  }
  
  addIndex = () => {
    let new_index = this.state.current_index + 1
    if(new_index > this.MAX_INDEX) new_index = 0

    this.setState({
      current_index : new_index,
    })
  }

  handleHoverOn = (e) => {
    const { current_index } = this.state
    this.tmp_index = this.state.current_index

    this.setState({
      current_index : e.target.dataset.index,
    })

    clearInterval(this.INTERVAL_ID)
  }

  handleHoverOff = (e) => {
    this.setState({
      current_index : this.tmp_index,
    })
    this.autoSwitch()
  }

  render() {
    const { content } = this.props
    const { current_index } = this.state

    return (
      <div className="container triangle">
        <div className="lines">
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </div>

        <ul>
          {
            content.map((content, index) => (
              <li
                key           = { content.title }
                data-index    = { index }
                onMouseEnter  = { this.handleHoverOn }
                onMouseLeave  = { this.handleHoverOff }
                className     = { index == current_index ? "active circle" : "circle" }
              >
                { content.title }
              </li>
            ))
          }
        </ul>

        <div className="text">
          { content[current_index].text }
        </div>
      </div>
    )
  }
}

TechnologyTriangle.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      title : PropTypes.string.isRequired,
      text  : PropTypes.string.isRequired,
    }
  )).isRequired,
}

export default TechnologyTriangle
