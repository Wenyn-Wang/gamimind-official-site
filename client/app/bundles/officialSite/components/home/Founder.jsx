import React from 'react'
import MediaQuery from 'react-responsive'
import { PAD_WIDTH } from '../../constants/deviceTypes'

const founders = [{
  selfie        : require('images/home/founder/seanc.png'),
  name_ch       : '陳識仁',
  name_en       : 'Sean Chen',
  title         : '執行董事暨共同創辦人',
  introduction  : '資深專業經理人、商業智慧',
  link          : '',
}, {
  selfie        : require('images/home/founder/lichieh.png'),
  name_ch       : '楊立潔',
  name_en       : 'Lichieh Young',
  title         : '行銷長暨共同創辦人',
  introduction  : '商業策略與開發、專案管理 資料視覺化',
  link          : '',
}, {
  selfie        : require('images/home/founder/mia.png'),
  name_ch       : '陳昭廷',
  name_en       : 'Mia Chen',
  title         : '技術長暨共同創辦人',
  introduction  : '網頁全端開發、跨端整合技術、網路爬蟲',
  link          : 'https://www.linkedin.com/in/mia81514/',
}, {
  selfie        : require('images/home/founder/wenyn.png'),
  name_ch       : '王汶鈺',
  name_en       : 'Wenyn Wang',
  title         : '執行董事暨共同創辦人',
  introduction  : '人工智慧、機器學習與產品策略',
  link          : '',
}, {
  selfie        : require('images/home/founder/bryan.png'),
  name_ch       : '黃沛聲',
  name_en       : 'Bryan Huang',
  title         : '執行董事暨法律顧問',
  introduction  : '法律顧問、跨國合作戰略規劃',
  link          : '',
}]

const Founder = () => {
  const openWindow = (url) => {
    window.open(url, '_blank')
  }

  return (
    <section id="founder">
      <div className="section-title">
        <h1>創辦人</h1>
      </div>

      <ul className="founders">
        {
          founders.map((founder) => {
            const media_query_attr = {
              className : 'founder',
              component : 'li',
            }

            return [(
              <MediaQuery 
                key       = { founder.name_en }
                minWidth  = { PAD_WIDTH + 1 }
                { ...media_query_attr }
              >
                <div className="circle" onClick={ () => openWindow(founder.link) }>
                  <img src={ founder.selfie } />
                  <div className="circle-content">
                    <p className="name-ch">{ founder.name_ch }</p>
                    <p className="name-en">{ founder.name_en }</p>
                    <span className="linkedin-icon" href={ founder.link } />
                  </div>
                </div>
                
                <div className="info">
                  <p className="title">{ founder.title }</p>
                  <p className="introduction">{ founder.introduction }</p>
                </div>
              </MediaQuery>
            ), (
              <MediaQuery 
                key       = { founder.name_en + 'm' }
                maxWidth  = { PAD_WIDTH  }
                { ...media_query_attr }
              >
                <div className="circle">
                  <img src={ founder.selfie } />
                </div>
                
                <div className="info">
                  <p className="title">{ founder.title }</p>
                  <p className="introduction">{ founder.introduction }</p>
                  <p className="name-ch">{ founder.name_ch }</p>
                  <p className="name-en">{ founder.name_en }</p>
                  <a className="linkedin-icon" href={ founder.link } />
                </div>
              </MediaQuery>
            )]
          })
        }
      </ul>
    </section>
  )
}

export default Founder
