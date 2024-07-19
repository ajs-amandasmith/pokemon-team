import React from "react";

function AddToFavorites({ p_name, p_number, p_image, p_type1, p_type2, p_flavorText, p_id }) {

  function addFavoritePoke(e) {
    e.preventDefault()
    fetch("http://44.208.41.34/api/favorites/", {
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
        flavor_text: p_flavorText,
        id: p_id
      })
    }).then(res => {
        if (res.ok) {
          res.json().then(data => alert("Added to Favorites!"))
        } else {
          res.json().then(err => console.log(err))
        }
      })
  }


  return(
    <div>
      <form onSubmit={addFavoritePoke}>
        <button className="border bg-gray-300 mt-5 p-2 rounded">
          Add To Your Favorites?
        </button>
      </form>
    </div>
  )
}

export default AddToFavorites;