import React from 'react'
import './AgentCards.css'
import { AgentCardsData } from './AgentCardsData'
import AgentCard from '../AgentCard/AgentCard'

const AgentCards = () => {
  return (
    <div className='AgentCards'>
        {AgentCardsData.map((card, key) => {
            return (
                <div className="parentContainer" key={key}>
                    <AgentCard 
                    name={card.name}
                    email={card.email}
                    avatar={card.avatar}
                    allProperties={card.allProperties}
                    />

                </div>
            );
        })}
    </div>
  )
}

export default AgentCards;