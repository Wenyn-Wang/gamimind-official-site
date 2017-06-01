const randomRange = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min)
}

const randomTrueOrFalse = () => {
  return Math.random() > 0.5
}

export default class Line {
  constructor(canvas) {
    this.ctx = canvas.getContext('2d')
    this.origin = {
      x : randomRange(0, canvas.width),
      y : randomRange(-canvas.height / 2, canvas.height),
    }
    this.x = this.origin.x
    this.y = this.origin.y
    this.current = {
      x : this.x,
      y : this.y,
    }
    this.lines = []
    this.points = []
    this.point_radius = 2
    this.length = canvas.height / 2
    this.turn_length = canvas.height / 8
    this.bypass = false
    this.dir = 'y'
    this.move = 6
    this.turn_count = 0
    this.frames = 0
    this.begin = randomRange(0, 500)
    this.end = false
    this.dead = false
    this.flip = randomTrueOrFalse()
    this.rotate = randomRange(0, 4)

    this.ctx.lineWidth = 1
    this.ctx.fillStyle = 'white'
    this.ctx.strokeStyle = 'rgba(255,255,255,0.7)'
  }

  update = () => {
    const { ctx, current, begin } = this
    const max_length = (this.bypass == false) ? this.length : this.turn_length

    this.frames += 1
    if(this.frames < begin) return

    this.translate()
    
    if(Math.abs(this.current.y - this.y) > max_length || Math.abs(this.current.x - this.x) > max_length) {
      this.saveLine()
      this.savePoint()
      this.drawPoint()
      this.turn_count += 1

      if(this.turn_count == 1) {
        this.bypass = true
      } else if (this.turn_count == 4) {
        this.bypass = false
      }

      if(this.turn_count == 3 || this.turn_count == 4){
        this.move = -this.move
      } else if (this.turn_count == 5) {
        this.end = true
      }

      this.dir = this.dir == 'y' ? 'x' : 'y'
    }

    if(!this.end) {
      this.load()
      this.drawLine()
    } else if (!this.dead) {
      this.eraser()
      this.load()
    } 

    ctx.restore()
  }

  saveLine = () => {
    this.lines.push({
      x: this.x,
      y: this.y,
      to_x: this.current.x,
      to_y: this.current.y,
    })

    this.x = this.current.x
    this.y = this.current.y
  }

  savePoint = () => {
    this.points.push({
      x: this.current.x,
      y: this.current.y,
    })
  }

  load = () => {
    this.loadLine()
    this.loadPoints()
  }

  loadLine = () => {
    const { ctx, lines } = this
    
    lines.map((line) => {
      ctx.beginPath()
      ctx.moveTo(line.x, line.y )
      ctx.lineTo( line.to_x, line.to_y )
      ctx.stroke()
    })
  }

  loadPoints = () => {
    const { ctx, points, point_radius } = this
    
    points.map((point) => {
      ctx.beginPath()
      ctx.arc( point.x, point.y , point_radius, 0, Math.PI * 2, true)
      ctx.moveTo(point.x, point.y )
      ctx.fill()
    })
  }

  drawLine = () => {
    const { ctx, current, dir, move } = this

    current[dir] += move

    ctx.beginPath()
    ctx.moveTo(this.x, this.y )
    ctx.lineTo( current.x, current.y )
    ctx.stroke()
  }

  drawPoint = () => {
    const { ctx, x, y, point_radius } = this

    ctx.beginPath()
    ctx.arc( x, y , point_radius * 2, 0, Math.PI * 2, true)
    ctx.moveTo( x, y )
    ctx.fill()
  }

  eraser = () => {
    const { ctx, lines, move, points } = this
    
    lines.some((line, index) => {
      if(line.removed) return false

      if(line.x < line.to_x) {
        line.x += move
      } else if(line.x > line.to_x) {
        line.x -= move
      } else if (line.y < line.to_y) {
        line.y += move
      } else if (line.y > line.to_y) {
        line.y -= move
      } else {
        line.removed = true
        if(index == lines.length - 1) this.dead = true
        points.splice(0,1)
        return false
      }

      return true
    })
    
  }

  translate = () => {
    const { ctx, origin, begin } = this

    this.frames += 1
    if(this.frames < begin) return
    
    ctx.save()
    if(this.flip ) {
      ctx.save()
      ctx.translate(1000, 0)
      ctx.scale(-1, 1)
    }

    if(this.rotate != 0) {
      ctx.translate(origin.x, origin.y)
      ctx.rotate((this.rotate * 90) * Math.PI / 180)
      ctx.translate(-origin.x, -origin.y)
    }
  }
}
