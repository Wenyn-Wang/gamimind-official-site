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

const toRadians = (angle) => angle * (Math.PI / 180)

class Ecosphere extends Component {
  componentDidMount () {
    this.draw(this.refs.canvas, items)
  }
  
  draw(canvas, items){
    const bg_color = [ "#0082D2" , "#00AAE1" , "#00D7E1" , "#00D2AA" , "#8CD26E" , "#00AAE1" ]
    const icon_bg_color = [ "#0A62A5" , "#008CB4" , "#00AAB4" , "#00AA87" , "#64B44B" , "#008CB4" ]
    const ctx = canvas.getContext("2d")
    const center_x = canvas.offsetWidth / 2
    const center_y = canvas.offsetHeight - 60
    const outer_radius = 450
    const inner_radius = 250
    const icon_radius = 30
    const eraser_width = 10
    const letter_radius = outer_radius + 30
    const text_radius = outer_radius - 80
    let startPoint = Math.PI
    let angle, text_x, text_y
    
    items.map((item, i) => {
      let endPoint = startPoint + Math.PI * (1 / items.length)

      // 扇型
      ctx.fillStyle = bg_color[i]
      ctx.beginPath()
      ctx.moveTo(center_x, center_y)
      ctx.arc(center_x, center_y, outer_radius, startPoint, endPoint, false )
      ctx.arc(center_x, center_y, inner_radius, endPoint, startPoint, true )
      ctx.fill()
      startPoint = endPoint


      // ABCDEF 文字
      ctx.save()
      ctx.translate(-10, 10)
      angle = (180 / items.length * i) + (180 / items.length / 2)
      text_x = center_x - Math.cos(toRadians(angle)) * letter_radius
      text_y = center_y - Math.sin(toRadians(angle)) * letter_radius
      ctx.font = "36px sans-serif"
      ctx.fillText(item.letter, text_x, text_y)
      ctx.restore()


      // 扇形間的空白
      if(i !== 0 ) {
        angle = 180 / items.length * i
        ctx.save()
        ctx.lineJoin = 'round'
        ctx.translate(center_x, center_y )
        ctx.rotate(Math.PI + toRadians(angle))
        ctx.clearRect(-eraser_width / 2, -eraser_width / 2, center_x, eraser_width)
        ctx.restore()
      }

      ctx.save()
      ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
      ctx.shadowBlur = 5
      ctx.fill()
      ctx.restore()

      // 內文
      ctx.save()
      angle =  (180 / items.length * i) + (180 / items.length / 2)
      text_x = center_x - Math.cos(toRadians(angle)) * text_radius
      text_y = center_y - Math.sin(toRadians(angle)) * text_radius
      ctx.fillStyle = '#FFFFFF'
      ctx.textAlign = "center"
      ctx.font = '13px sans-serif'
      this.wrapText(ctx, item.text ,text_x , text_y, 120, 20)
      ctx.restore()

      // icon 們
      ctx.save()
      ctx.beginPath()
      angle = (180 / items.length * i) + (180 / items.length / 2)
      let icon_bg_x = center_x - Math.cos(toRadians(angle)) * inner_radius
      let icon_bg_y = center_y - Math.sin(toRadians(angle)) * inner_radius
      ctx.fillStyle = icon_bg_color[i]
      ctx.arc(icon_bg_x, icon_bg_y, icon_radius, 0, Math.PI * 2, false )
      ctx.fill()

      let imageObj = new Image();
      imageObj.onload = () => ctx.drawImage(imageObj, icon_bg_x - 18 , icon_bg_y - 18 , 35, 35)
      imageObj.src = item.img
      ctx.restore()
    })
  }

  wrapText = (context, text, x, y, maxWidth, lineHeight) => {
    const words = text.split('')
    let line = ''
    if ( words.length > 30) y -=30

    for(let n = 0; n < words.length; n++) {
      const testLine = line + words[n]
      const metrics = context.measureText(testLine)
      const testWidth = metrics.width

      if (testWidth > maxWidth && n > 0) {
        context.fillText(line, x, y)
        line = words[n]
        y += lineHeight
      }
      else {
        line = testLine
      }
    }
    context.fillText(line, x, y)
  }

  render() {
    return (
      <section id="ecosphere">
        <div className="section-title">
          <h1>如何打造品牌生態圈</h1>
        </div>
        
        <div className="ecosphere-container">
          <canvas ref="canvas" width="1024" height="600"/>
        </div>
      </section>
    )
  } 
}

export default Ecosphere
