import React, { Component } from 'react';
import Line from './Line'

export default class Lines extends Component {
  componentDidMount () {
    setTimeout(() => this.init(), 0)
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize)
  }
  
  init = () => {
    this.canvas = this.refs.canvas
    this.width = this.canvas.width =  this.canvas.offsetWidth
    this.height = this.canvas.height = this.canvas.offsetHeight
    this.ctx = this.canvas.getContext('2d')

    const line_num = 25
    this.lines = [...(new Array(line_num))].map(() => new Line(this.canvas))

    this.update()
  }

  update = () => {
    const { ctx, lines, width, height } = this
    ctx.clearRect(0, 0, width, height)

    this.lines.map((line, index) => {
      if(!line.dead) {
        line.update()
      } else {
       this.lines[index] = new Line(this.canvas)
      }
    })

    this.request_id = requestAnimationFrame(this.update)
  }

  handleResize = () => {
    cancelAnimationFrame(this.request_id)
    this.init()
  }

  render() {
    return (
      <canvas className="lines" ref='canvas' />
    )
  }
}
