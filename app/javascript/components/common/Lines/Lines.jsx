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
    const line_num = 20

    this.lines = [ ...(new Array(line_num))].map(()=>{
      return new Line(this.canvas)
    })

    this.update()
  }

  update = () => {
    const { ctx, lines, width, height } = this
    const dead_lines = []
    ctx.clearRect(0, 0, width, height)

    this.lines.map((line, index) => {
      if(!line.dead) {
        line.update()
      } else {
        dead_lines.push(index)
      }
    })

    dead_lines.forEach((index) => {
      delete this.lines[index]
      this.lines[index] = new Line(this.canvas)
    })

    this.request_id = requestAnimationFrame(this.update)
  }

  handleResize = () => {
    cancelAnimationFrame(this.request_id)
    this.init()
  }

  render() {
    return (
      <canvas ref='canvas' />
    )
  }
}
