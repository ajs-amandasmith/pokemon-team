import React from "react";

function DeleteTeamMember({ id, setTeam }) {
  console.log('ssss', id)

  function handleDelete() {
    console.log('bbbb', id)
    fetch(`http://44.208.41.34/api/team_members/${id}`, {
      method: "DELETE"
    })
  }

  return(
    <div>
      <button className="border bg-gray-300 m-10 rounded p-2" onClick={handleDelete}>Delete From Team?</button>
    </div>
  )
}

export default DeleteTeamMember;