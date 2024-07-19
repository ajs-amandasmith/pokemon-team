import React, { useState, useEffect } from 'react';
import DeleteTeamMember from './DeleteTeamMember';

function TeamDisplay({ altText }) {
  const [team, setTeam] = useState([]);
  const [id, setId] = useState(0);

  useEffect(() => {
    fetch("http://44.208.41.34/api/team_members/")
      .then(res => {
        if (res.ok) {
          res.json().then(res => {
            setTeam(res);
          })
        }
      })
  }, [])

  const showTeam = team.map(member => (
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
console.log('blah', id)

  return(
    <div className='flex flex-col'>
      {showTeam} 
      <div className=""><DeleteTeamMember id={id} setTeam={setTeam} /></div>
    </div>
   
  )
}

export default TeamDisplay;