import React from 'react'

const solutions = [{
  title : '評估',
  text  : '企業形象、品牌定位、市場動態',
  img   : '',
}, {
  title : '遊戲化導入',
  text  : '設計遊戲化文案，深化使用者互動',
  img   : '',
}, {
  title : '工具開發',
  text  : '建置 Line Add-on 遊戲化工具，Facebook 小遊戲',
  img   : '',
}, {
  title : '營運',
  text  : '結合「企業自媒體平台」整合性營運，分析用戶需求、標定客戶樣貌、發送客製化推薦',
  img   : '',
}]

const Solutions = () => {
  return (
    <section id="solutions">
      <div className="section-title">
        <h1>我們的方法</h1>
      </div>
      
      <ul>
        {
          solutions.map((solution, index) => (
            <li key={ index }>
              <div className="solution-title">
                <h2>{ solution.title }</h2>
              </div>

              <p>{ solution.text }</p>

              <div className="solution-img">
                <img src={ solution.img } />
              </div>
            </li>
          ))
        }
      </ul>
      
    </section>
  )
}

export default Solutions
