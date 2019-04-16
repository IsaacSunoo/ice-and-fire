import React from 'react';

const HouseCard = ({ name, founded, seats, titles, coatOfArms, ancestralWeapons, words }) => {
    if (!founded) {
        founded='N/A'
    }

  return (
    <div className='house-card'>
        <h3>{name}</h3>
        <p>Founded: {founded}</p>
        <p>Seats: {seats}</p>
        <p>Titles: {titles}</p>
        <p>Ancestral Weapons: {ancestralWeapons}</p>
        <p>Coat of Arms: {coatOfArms}</p>
        <p>Words: {words}</p>
    </div>
  )
}

export default HouseCard;