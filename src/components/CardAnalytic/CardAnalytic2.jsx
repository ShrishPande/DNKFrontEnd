import React from 'react'
import './CardAnalytic2.css'
import { CardsStat2 } from '../../Data/Data'
import Card2 from '../Card/Card2'

const CardAnalytic2 = () => {
    return (
      <div className="Cards1">
          {CardsStat2.map((card, id)=>{
              return(
                  <div className="parentContainer">
                      <Card2
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

export default CardAnalytic2