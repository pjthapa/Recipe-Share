import React from "react";
import { Link } from "react-router-dom";

function HomePage(){
    return(
        <div>
            <Link to="/display_recipe">View Recipes</Link>
            <Link to="/add_recipe">Add Recipe</Link>
        </div>
    )
}

export default HomePage;