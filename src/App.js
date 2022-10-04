import { useEffect, useState } from "react";
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './components/Home';
import Recipes from './components/Recipes';
import Favorites from './components/Favorites';
import FullRecipe from './components/FullRecipe';

function App() {

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route  path="/recipes">
          <Recipes />
        </Route>
        <Route  path="/favorites">
          <Favorites />
        </Route>
      </Switch>

     
    </div>
  );
}

export default App;
