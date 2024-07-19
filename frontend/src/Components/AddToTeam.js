import React from "react";

function AddToTeam({ p_name, p_number, p_image, p_type1, p_type2, p_flavorText, p_id }) {

  

  function addTeamPoke(e) {
    e.preventDefault()
      fetch("http://44.208.41.34/api/team_members/", {
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
          res.json().then(data => alert("Added to your Team"))
        } else {
          res.json().then(err => console.log(err))
        }
      })
  }


  return(
    <div>
      <form onSubmit={addTeamPoke}>
        <button className="border bg-gray-300 mt-5 p-2 rounded">
          Add To Your Team?
        </button>
      </form>
    </div>
  )
}

export default AddToTeam;