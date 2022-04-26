import React from "react";

function Recipe({recipeData}){
    return(
        <div>
            <h3>{recipeData.name}</h3>
            <p>{recipeData.ingredients}</p>
        </div>
    )
}

export default Recipe