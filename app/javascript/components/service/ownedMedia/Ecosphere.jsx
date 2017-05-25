import React, { Component } from 'react'

const items = [{
  letter : 'A',
  text   : '減少對 Line / Facebook 等社群媒體的依賴，建立自己的品牌自媒體，透過“文字、多媒體”的力量經營忠實客戶',
  img    : require('images/service/ownedMedia/ecosphere/icon1.png'),
}, {
  letter : 'B',
  text   : '將流量導入“品牌自媒體”，拒絕為對手累積流量',
  img    : require('images/service/ownedMedia/ecosphere/icon2.png'),
}, {
  letter : 'C',
  text   : '將品牌自落實於手機、APP 或官網部落格中',
  img    : require('images/service/ownedMedia/ecosphere/icon3.png'),
}, {
  letter : 'D',
  text   : '導入遊戲化，增進用戶與品牌的互動',
  img    : require('images/service/ownedMedia/ecosphere/icon4.png'),
}, {
  letter : 'E',
  text   : '運用人工智慧，標定用戶喜好、預測用戶未來行為，打造品牌生態圈，達成在 Facebook / Line 無法成就的商業目標',
  img    : require('images/service/ownedMedia/ecosphere/icon5.png'),
}, {
  letter : 'F',
  text   : '定期數據追蹤、隨時調整參數，最大化成效',
  img    : require('images/service/ownedMedia/ecosphere/icon6.png'),
}]
const map_img_src = require('images/service/ownedMedia/ecosphere/world-map.png')
const arrow_img_src = require('images/service/ownedMedia/ecosphere/arrow.png')

const bg_color = ["#0082D2" , "#00AAE1" , "#00D7E1" , "#00D2AA" , "#8CD26E" , "#00AAE1"]
const icon_bg_color = ["#0A62A5" , "#008CB4" , "#00AAB4" , "#00AA87" , "#64B44B" , "#008CB4"]

const toRadians = (angle) => angle * (Math.PI / 180)

class Ecosphere extends Component {
  componentDidMount () {
    const { canvas } = this.refs

    canvas.width  = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
    this.center_x = canvas.width / 2
    this.center_y = canvas.height - 100
    this.draw(canvas, items)
  }
  
  draw(canvas, items){
    const ctx = canvas.getContext("2d")
    const outer_radius = 450
    const inner_radius = 250
    const arrow_radius = 210
    const icon_radius = 30
    const eraser_width = 10
    const letter_radius = outer_radius + 30
    const text_radius = outer_radius - 85
    let startPoint = Math.PI
    
    items.map((item, i) => {
      let shape_center_angle = (180 / items.length * i) + (180 / items.length / 2)
      let shape_end_angle = 180 / items.length * i

      // 扇型
      let endPoint = startPoint + Math.PI * (1 / items.length)
      ctx.fillStyle = bg_color[i]
      ctx.beginPath()
      ctx.moveTo(this.center_x, this.center_y)
      ctx.arc(this.center_x, this.center_y, outer_radius, startPoint, endPoint, false )
      ctx.arc(this.center_x, this.center_y, inner_radius, endPoint, startPoint, true )
      ctx.fill()
      startPoint = endPoint


      // ABCDEF 文字
      ctx.save()
      ctx.translate(0, 10)
      let letter_pos = this.getCirclePosition(shape_center_angle, letter_radius)
      ctx.font = "36px sans-serif"
      ctx.textAlign = "center"
      ctx.fillText(item.letter, letter_pos.x, letter_pos.y)
      ctx.restore()


      // 扇形間的空白
      if(i !== 0 ) {
        shape_end_angle = 180 / items.length * i
        ctx.save()
        ctx.lineJoin = 'round'
        ctx.translate(this.center_x, this.center_y )
        ctx.rotate(Math.PI + toRadians(shape_end_angle))
        ctx.clearRect(-eraser_width / 2, -eraser_width / 2, this.center_x, eraser_width)
        ctx.restore()
      }

      // 陰影
      ctx.save()
      ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'
      ctx.shadowBlur = 5
      ctx.fill()
      ctx.restore()

      // 內文
      ctx.save()
      let text_pos = this.getCirclePosition(shape_center_angle, text_radius)
      ctx.fillStyle = '#FFFFFF'
      ctx.textAlign = "center"
      ctx.font = '13px sans-serif'
      this.wrapText(ctx, item.text ,text_pos.x , text_pos.y, 120, 20)
      ctx.restore()

      // icon 們
      ctx.save()
      ctx.beginPath()
      let icon_pos = this.getCirclePosition(shape_center_angle, inner_radius)
      ctx.fillStyle = icon_bg_color[i]
      ctx.arc(icon_pos.x, icon_pos.y, icon_radius, 0, Math.PI * 2, false )
      ctx.fill()

      let icon_img = new Image();
      icon_img.src = item.img
      icon_img.onload = () => ctx.drawImage(icon_img, icon_pos.x - 18 , icon_pos.y - 18 , 35, 35)
      ctx.restore()

      // arrow
      ctx.save()
      let arrow_pos = this.getCirclePosition(shape_center_angle, arrow_radius)
      let arrow = new Image();
      arrow.src = arrow_img_src
      arrow.onload = (a, b) => {
        ctx.translate(arrow_pos.x, arrow_pos.y )
        ctx.rotate(toRadians(shape_center_angle + 5))
        ctx.drawImage(arrow, 0, 0, 40 ,15 )
        ctx.restore()
      }
    })

    // map
    let map = new Image();
    map.src = map_img_src
    map.onload = (a, b) => {
      ctx.drawImage(map, this.center_x - map.width / 2 , this.center_y - map.width * 0.3)
    }
  }


  getCirclePosition = (angle, radius) => ({
    x : this.center_x - Math.cos(toRadians(angle)) * radius,
    y : this.center_y - Math.sin(toRadians(angle)) * radius,
  })

  wrapText = (ctx, text, x, y, maxWidth, lineHeight) => {
    const words = text.split('')
    let line = ''
    if ( words.length > 30) y -=35

    for(let n = 0; n < words.length; n++) {
      const testLine = line + words[n]
      const metrics = ctx.measureText(testLine)
      const testWidth = metrics.width

      if (testWidth > maxWidth && n > 0) {
        ctx.fillText(line, x, y)
        line = words[n]
        y += lineHeight
      }
      else {
        line = testLine
      }
    }
    ctx.fillText(line, x, y)
  }

  render() {
    return (
      <section id="ecosphere" className="section-arrow-down">
        <div className="section-title">
          <h1>如何打造品牌生態圈</h1>
        </div>
        
        <div className="ecosphere-container">
          <canvas ref="canvas" />
        </div>
      </section>
    )
  } 
}

export default Ecosphere
