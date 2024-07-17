import React from "react";

function DeleteFavorite({ id }) {

  function handleDelete() {
    fetch(`http://localhost:8000/api/favorites/${id}`, {
      method: "DELETE"
    })

  }
  return(
    <div>
      <form onSubmit={handleDelete}>
        <button type="submit" >Delete From Favorites?</button>
      </form>
    </div>
  )
}

export default DeleteFavorite;