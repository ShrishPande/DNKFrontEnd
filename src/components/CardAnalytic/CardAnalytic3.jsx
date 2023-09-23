import React from 'react'
import './CardAnalytic3.css'
import { CardsStat3 } from '../../Data/Data'
import Card3 from '../Card/Card3'

const CardAnalytic3 = () => {
    return (
      <div className="Cards3">
          {CardsStat3.map((card, id)=>{
              return(
                  <div className="parentContainer">
                      <Card3
                      title={card.title}
                      color={card.color}
                      barValue={card.barValue}
                      value={card.value}
                      png={card.png}
                      series={card.series}
                      />
                  </div>
              )
          })}
      </div>
    )
  }

export default CardAnalytic3