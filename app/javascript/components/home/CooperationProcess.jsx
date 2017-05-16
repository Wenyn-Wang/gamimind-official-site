import React from 'react'

const steps = ['商業目標確認', '遊戲思維導入', '專案開發', '動態成效追蹤', '']

const CooperationProcess = () => {
  return (
    <section id="cooperation-process">
      <div className="section-title">
        <h1>合作流程</h1>
      </div>

      <ul className="cooperation-process-content">
        {
          steps.map((text, index) => (
            <li key={ index }>
              <span className="point" />
              {
                text && <p>{ text }</p>
              }
            </li>
          ))
        }
      </ul>
    </section>
  )
}

export default CooperationProcess
