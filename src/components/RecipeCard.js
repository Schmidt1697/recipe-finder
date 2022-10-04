import React from 'react'

const RecipeCard = ({ recipeDetails }) => {

  return (
    <div className="recipe-card">
      <h3>{recipeDetails.recipe.label}</h3>
      <img src={recipeDetails.recipe.image} alt={recipeDetails.recipe.label}/>
      <button className="recipe-button">View Recipe</button>
      <button className="favorite-button">Add to Favorites</button>
    </div>
  )
}

export default RecipeCard