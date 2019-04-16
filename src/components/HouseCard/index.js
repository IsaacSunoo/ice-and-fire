import React from 'react';

const HouseCard = ({ name, founded, seats, titles, coatOfArms, ancestralWeapons, words }) => {
    console.log(founded)

  return (
    <div className='house-card'>
        <h3>{name}</h3>
        <h5>{founded}</h5>
        <p>{seats}</p>
        <p>{titles}</p>
        <p>{ancestralWeapons}</p>
        <p>{coatOfArms}</p>
        <p>{words}</p>
    </div>
  )
}

export default HouseCard;