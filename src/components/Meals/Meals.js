import React from 'react'
import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

const Meals = (props) => {
  return (
    <>
        <AvailableMeals></AvailableMeals>
        <MealsSummary></MealsSummary>
    </>
  )
}

export default Meals