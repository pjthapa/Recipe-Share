import React from "react";
import Recipe from "./Recipe";

function RecipeList(recipeDatas) {
    return(
        <div className="recipe list">
            {recipeDatas.map((recipes, i)=> <Recipe recipeData={recipes}
            key={i} />)}
        </div>
    )
}

export default RecipeList;