import React, { useState, useEffect } from 'react';
import DeleteTeamMember from './DeleteTeamMember';

function TeamDisplay({ altText, id }) {
  const [team, setTeam] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8000/api/team_members/")
      .then(res => {
        if (res.ok) {
          res.json().then(res => {
            console.log('r', res)
            setTeam(res);
          })
        }
      })
  }, [])

  const showTeam = team.map(member => (
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
          <button onClick={e => (setShow(true))}>Show Team?</button> :
          <button onClick={e => (setShow(false))}>Hide Team?</button>
        }
        {show ?
        <div>
           {showTeam} 
        </div> : null
        } 
            <AddToTeam 
        p_id={id}
        p_name={name}
        p_number={number} 
        p_image={image} 
        p_type1={type1} 
        p_type2={type2} 
        p_flavorText={flavorText} 
      />
        <DeleteTeamMember id={id} />
    </div>
   
  )
}

export default TeamDisplay;