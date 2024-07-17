import React from "react";

function AddToTeam({ p_name, p_number, p_image, p_type1, p_type2, p_flavorText }) {

  function addTeamPoke(e) {
    e.preventDefault()
    fetch("http://localhost:8000/api/team_members/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: p_name,
        number: p_number,
        image: p_image,
        type1: p_type1,
        type2: p_type2,
        flavor_text: p_flavorText
      })
    }).then(res => {
        if (res.ok) {
          res.json().then(data => console.log(data))
        } else {
          res.json().then(err => console.log(err))
        }
      })
  }


  return(
    <div>
      <form onSubmit={addTeamPoke}>
        <button>
          Add To Your Team?
        </button>
      </form>
    </div>
  )
}

export default AddToTeam;