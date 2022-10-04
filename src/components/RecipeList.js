import React from 'react';
import RecipeCard from './RecipeCard';
import { v4 as uuidv4 } from 'uuid';

const RecipeList = ({ recipeData , itemsToShow}) => {

  const renderRecipes = recipeData.slice(0, itemsToShow).map(recipe => {
    return(
      <RecipeCard key={uuidv4()} recipeDetails={recipe}/>
      
    )
  })

  return (
    <div className="recipe-list">
      {renderRecipes}
    </div>
  )
}

export default RecipeList