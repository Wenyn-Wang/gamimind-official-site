import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Draggable from 'react-draggable'

const toFixed = (number, fixed = 2) => Number(number.toFixed(fixed))

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
    this.scale = this.refs.scale
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
  }
  
  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize = (e) => {
    const width = this.slider_bar.offsetWidth
    const grid = toFixed((width / this.props.points))
    const padding = toFixed(grid / 2)

    this.setState({
      width,
      grid,
      x: padding,
      padding,
    })
    this.props.onChange(0)
  }

   handleDrag = (e, ui) => {
    const { x, y, grid, padding } = this.state
    const nex_x = toFixed(x + ui.deltaX)
    const index = toFixed((nex_x - padding) / grid)

    this.setState({
      x: nex_x,
    })
    this.props.onChange(index)
  }

  handleSelect = (e) => {
    const { grid, padding } = this.state
    const click_position = toFixed(e.clientX - this.scale.getBoundingClientRect().left)
    const index = Math.floor(click_position / grid)

    this.setState({
      x: (index * grid) + padding,
    })
    this.props.onChange(index)
  }

  render() {
    const { x, grid, width, padding } = this.state
    const { points } = this.props

    return (
      <div className="slide-bar-container" ref="slider_bar">
        <ul className="scale" onClick={ this.handleSelect } ref="scale">
          {
            [...Array(points)].map((x, index) => {
              return (
                 <li key={ index } style={{ left: padding + index * grid }}/>
              )
            })
          }
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
  points    : PropTypes.number.isRequired,
  onChange  : PropTypes.func,
}

SlideBar.defaultProps = {
  onChange : () => {},
}

export default SlideBar