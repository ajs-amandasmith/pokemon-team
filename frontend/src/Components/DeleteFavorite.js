import React from "react";

function DeleteFavorite({ id }) {

  function handleDelete() {
    fetch(`http://44.208.41.34/api/favorites/${id}`, {
      method: "DELETE"
    })
    .then(data => alert("Deleted from your team"))

  }
  return(
    <div>
        <button type="submit" className="border bg-gray-300 m-10 rounded p-2" onClick={handleDelete}>Delete From Favorites?</button>
    </div>
  )
}

export default DeleteFavorite;