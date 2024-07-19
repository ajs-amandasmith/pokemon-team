import React, { useState, useEffect } from 'react';
import DeleteFavorite from './DeleteFavorite';

function FavoriteDisplay({ altText}) {
  const [favorites, setFavorites] = useState([]);
  const [id, setId] = useState(null)

  useEffect(() => {
    fetch("http://44.208.41.34/api/favorites/")
      .then(res => {
        if (res.ok) {
          res.json().then(res => {
            setFavorites(res);
          })
        }
      })
  }, [])

  const showFavorites = favorites.map(member => (
    <div key={member.id} className='flex'>
        <img src={member.image} alt={altText} height={150} width={150} onClick={(e => setId(member.id))}/>
        <ul>
          <li><p><strong>Name:</strong> {member.name}</p></li>
          <li><p><strong>National Number:</strong> {member.number}</p></li>
          <li><p><strong>Type 1:</strong> {member.type1}</p></li>
          <li><p><strong>Type 2:</strong> {member.type2}</p></li>
          <li><p><strong>Flavor Text:</strong> {member.flavor_text}</p></li>
        </ul>
    </div>
  ))

  return(
    <div className='flex flex-col'>
      {showFavorites} 
      <div className=""><DeleteFavorite id={id} setTeam={setFavorites} /></div>
    </div>
  )
}

export default FavoriteDisplay;