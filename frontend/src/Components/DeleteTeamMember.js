import React from "react";

function DeleteTeamMember({ id }) {

  function handleDelete() {
    fetch(`http://localhost:8000/api/team_members/${id}`, {
      method: "DELETE"
    })

  }
  return(
    <div>
      <form onSubmit={handleDelete}>
        <button type="submit" >Delete From Team?</button>
      </form>
    </div>
  )
}

export default DeleteTeamMember;