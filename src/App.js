import './App.css';
import { Switch, Route} from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './components/Home';
import Recipes from './components/Recipes';
import Favorites from './components/Favorites';
import FullRecipe from './components/FullRecipe';


function App() {
  return (
    <div className="App">
        <NavBar />
        <div className="content-containter">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route  exact path="/recipes">
              <Recipes />
            </Route>
            <Route  exact path="/recipes/:id">
              <FullRecipe />
            </Route>
            <Route  path="/favorites">
              <Favorites />
            </Route>
          </Switch>
          
      </div>
    </div>
  );
}

export default App;
