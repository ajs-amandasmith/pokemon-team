import React from "react";

function DeleteTeamMember({ id }) {

  function handleDelete() {
    fetch(`http://44.208.41.34/api/team_members/${id}`, {
      method: "DELETE",
    })
    .then(data => alert("Deleted from your team"))
  }
  return(
    <div>
      <button className="border bg-gray-300 m-10 rounded p-2" onClick={handleDelete}>Delete From Team?</button>
    </div>
  )
}

export default DeleteTeamMember;