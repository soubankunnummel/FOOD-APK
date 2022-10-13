import axios from 'axios'
import React, {useState,useEffect} from 'react'

function Meal({meal}) {
    const [imageUrl,setImageUrl] = useState ('')
    useEffect (() => {
        axios.get(`https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=48ecf88e0caf4a6880d5ceae93392636&includeNutrition=false`)
        .then(function (response){
          console.log(response.data.image);
          setImageUrl(response.data.image)

        } )
    }, [meal.id])
  return (
    <article>
      <h1>{meal.title} </h1>
      <img src={imageUrl} alt="racipe img" />
      <ul className='instuctions'>
        <li>Preparation tiem: {meal.readyInMinutes}  minuts</li>
        <li>Number of serivgs: {meal.servings}</li>
      </ul>

      <a href={meal.servings}>Racipe</a>
    </article>
  )
}

export default Meal
