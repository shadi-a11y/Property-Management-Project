import React from 'react'
import './Cards.css'
import { CardsData } from './CardsData'
import Card from '../Card/Card'

const Cards = () => {
  return (
    <div className='Cards'>
        {CardsData.map((card, key) => {
            return (
                <div className="parentContainer" key={key}>
                    <Card
                    title={card.title}
                    color={card.color}
                    barValue={card.barValue}
                    value={card.value}
                    series={card.series} 
                  />
                </div>
            );
        })}
    </div>
  )
}

export default Cards