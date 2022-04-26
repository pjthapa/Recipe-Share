import React from "react";
import {useState, useEffect} from "react";
import RecipeList from "../components/RecipeList";

function DisplayRecipe(){
    const [recipeDatas, setRecipeData] = useState([])

    const loadRecipe = async () =>{
        const response = await fetch("/recipe", {
            headers:{
                "accepts":"application/json"
            }
        })
        const data = await response.json();
        return setRecipeData(data)
    }

    useEffect(()=>{
        loadRecipe()
    },[]);
    console.log(recipeDatas)
    return(
        <div>
            <RecipeList recipeData = {recipeDatas}></RecipeList>
        </div>
    )
}

export default DisplayRecipe;