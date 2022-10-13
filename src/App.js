import { useState } from "react"
import React  from 'react'
import axios from 'axios'
import MealList from './MealList';

function App() {
  const [mealData,setMealData] = useState (null)
  const [calories, setCalories] = useState (2000)

  function handleChange (e) {
    setCalories(e.target.value)
    
  }

  function getMealData() {
    axios.get (`https://api.spoonacular.com/mealplanner/generate?apiKey=48ecf88e0caf4a6880d5ceae93392636&timeFrame=day&targetCalories=${calories}`)
    .then (response => {
      // console.log(response.data);
      setMealData(response.data)
    })
    // .then(error => {
    //   console.log(error);
    //   alert("error")
    // }) 
  }

  return (
    <div className="App">
      <section className="cantrols">
        <input type="number"
        placeholder="Calories (e.g: 2000)" 
        onChange={handleChange}/>
        
      </section>
      <button onClick={getMealData}>Get Daily Meal Plan</button>
      {mealData &&  <MealList mealData={mealData}/> }
    </div>
  )
}

export default App
