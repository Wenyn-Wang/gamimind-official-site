import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Draggable from 'react-draggable'

class SlideBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      x: 0,
      grid: 0,
      width: 1024,
      padding: 0,
    }

    this.handleResize = this.handleResize.bind(this)
  }

  componentDidMount () {
    this.slider_bar = this.refs.slider_bar
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
  }
  
  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize = (e) => {
    const width = this.slider_bar.offsetWidth
    const grid = width / this.props.points
    const padding = grid / 2

    
    this.setState({
      width,
      grid,
      x: padding,
      padding,
    })
  }
  

   handleDrag = (e, ui) => {
    const { x, y } = this.state

    this.setState({
      x: x + ui.deltaX,
    })
  }

  render() {
    const { x, grid, width, padding } = this.state
    const { points } = this.props

    return (
      <div className="slide-bar-container" ref="slider_bar">
        <ul className="scale">
          {[...Array(points)].map((x, index) =>
            <li key={ index } />
          )}
        </ul>
        
        <Draggable
          axis            = "x"
          handle          = ".ball"
          position        = {{ x, y: 0 }}
          grid            = { [grid, 0 ] }
          bounds          = {{ left: padding, right: width - padding }}
          onDrag          = { this.handleDrag }
        >
          <div className="ball" />
        </Draggable>

      </div>
    )
  }
}

SlideBar.propTypes = {
  points : PropTypes.number.isRequired,
}

export default SlideBar
