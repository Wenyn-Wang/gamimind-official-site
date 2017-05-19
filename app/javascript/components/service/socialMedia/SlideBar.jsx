import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SlideBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      current_index : 0,
    }
  }

  render() {
    const { points } = this.props

    return (
      <div className="slide-bar-container">
        <div className="ball" />
        <ul className="scale">
          {[...Array(points)].map((x, index) =>
            <li key={ index } />
          )}
        </ul>
      </div>
    )
  }
}

SlideBar.propTypes = {
  points : PropTypes.number.isRequired,
}

export default SlideBar
