import { useEffect, useState } from 'react';
import RecipeList from './RecipeList';
import Search from './Search';

const Recipes = () => {
  //state
  const [recipeData, setRecipeData] = useState([]);
  const [searchSubmit, setSearchSubmit] = useState('chocolate');

  const API_KEY = process.env.REACT_APP_API_KEY;
  const API_ID = process.env.REACT_APP_API_ID;

  const [itemsToShow, setItemsToShow] = useState(4);

  // GET recipe data
  useEffect(() => {
    fetch(`/v2?type=public&q=${searchSubmit}&app_id=${API_ID}&app_key=${API_KEY}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        // display "x" recipes, change slice argument to show more or less
        setRecipeData(data.hits)
    })
    .then(console.error)

  },[searchSubmit])

  return (
    <div className='recipes'>
      Recipes
      <Search setSearchSubmit={setSearchSubmit}/>
      <RecipeList recipeData={recipeData} itemsToShow={itemsToShow}/>
      <button className="show-more-button" onClick={() => setItemsToShow(itemsToShow + 4)}>Show More Recipes</button>
    </div>
  )
}

export default Recipes