import React from 'react'
import './CardAnalytic.css'
import { CardsStat1 } from '../../Data/Data'
import Card1 from '../Card/Card1'

const CardAnalytic = () => {
    return (
      <div className="Cards1">
          {CardsStat1.map((card, id)=>{
              return(
                  <div className="parentContainer">
                      <Card1
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

export default CardAnalytic