import React, { useState, useEffect } from 'react';

function FavoriteDisplay({ altText }) {
  const [favorites, setFavorites] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8000/api/favorites/")
      .then(res => {
        if (res.ok) {
          res.json().then(res => {
            console.log('r', res)
            setFavorites(res);
          })
        }
      })
  }, [])

  const showFavorites = favorites.map(member => (
    <div key={member.id}>
      <img src={member.image} alt={altText} />
      <br></br>
      <label>
        Name:
      </label>
      <p>{member.name}</p>
      <label>
        National Number:
      </label>
        <p>{member.number}</p>
      <label>
        Type 1:
      </label>
        <p>{member.type1}</p>
      <label>
        Type 2:
      </label>
        <p>{member.type2}</p>
      <label>
        Flavor Text
      </label>
        <p>{member.flavorText}</p>
    </div>
  ))

  return(
    <div>
        {!show ?  
          <button onClick={e => (setShow(true))}>Show Favorites?</button> :
          <button onClick={e => (setShow(false))}>Hide Favorites?</button>
        }
        {show ?
        <div>
           {showFavorites} 
        </div> : null
        }
    </div>
  )
}

export default FavoriteDisplay;