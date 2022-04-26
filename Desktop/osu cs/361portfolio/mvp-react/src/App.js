import './App.css';
import HomePage from './pages/homepage';
import AddRecipe from './pages/add-recipe';
import DisplayRecipe from './pages/display-recipes';
import AddIngredients from './pages/add-ingredients';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<HomePage />}></Route>
        <Route path='/add_recipe' element={<AddRecipe />}></Route>
        <Route path='/add_ingredients' element= {<AddIngredients />}> </Route>
        <Route path='/display_recipe' element= {<DisplayRecipe />}> </Route>
      </Routes>
    </Router>
  );
}

export default App;
