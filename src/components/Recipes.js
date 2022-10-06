import { useEffect, useState } from 'react';
import RecipeList from './RecipeList';
import Search from './Search';

const Recipes = () => {
  const randomFoods = ['chicken', 'tasty', 'chocolate', 'pasta', 'fruit', 'beef']
  const randomIndex = Math.floor((Math.random() * randomFoods.length)); //return an integer from 0 to 5 (randomFoods.length-1)
  
  //state
  const [recipeData, setRecipeData] = useState([]);
  const [searchSubmit, setSearchSubmit] = useState(randomFoods[randomIndex]);
  const [nextRecipes, setNextRecipes] = useState('')


  // GET recipe data
    useEffect(() => {
    fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${searchSubmit}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`)
    .then(res => res.json())
    .then(data => {
      if (data.message === "Usage limits are exceeded") {
        alert('Too many requests! Please wait a minute and try again.')
        throw new Error('Too many requests! Please wait a minute and try again.')
      }
      setNextRecipes(data["_links"].next.href);
      setRecipeData(data.hits) 
    })

  },[searchSubmit])

  const showMoreRecipes = () => {
    fetch(nextRecipes)
    .then(res => res.json())
    .then(data => {
      
     setRecipeData([...recipeData, ...data.hits])
     //update nextRecipes href
     setNextRecipes(data["_links"].next.href);
      
    })
  }


  return (
    <div className='recipes'>
      <h1>Recipes</h1>
      <Search setSearchSubmit={setSearchSubmit}/>
      <RecipeList recipeData={recipeData}/>
      <button className="show-more-btn" onClick={showMoreRecipes}>Show More</button>
    </div>
  )
}

export default Recipes