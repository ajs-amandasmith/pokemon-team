import React from "react";

function DeleteFavorite({ id }) {
  console.log('f', id)
  function handleDelete() {
    fetch(`http://localhost:8000/api/favorites/${id}`, {
      method: "DELETE"
    })

  }
  return(
    <div>
      <form onSubmit={handleDelete}>
        <button type="submit" className="border bg-gray-300 m-10 rounded p-2">Delete From Favorites?</button>
      </form>
    </div>
  )
}

export default DeleteFavorite;