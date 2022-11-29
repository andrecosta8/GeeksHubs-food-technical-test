import React from 'react'
import './MealDetailCard.css'

const MealDetailCard = ({meal}) => {
  return (
    <div className='detailCardDesign'>
                <img className='detailImage' src={meal.strMealThumb} alt={meal.strMeal}></img>
                <div>{meal.strMeal}</div>
                <div>{meal.strArea}</div>
                <div>{meal.strYoutube}</div>
                <div className='ingredientsDesign'>
                <span>INGREDIENTS: </span>
                <div>{meal.strIngredient1 !== "" && meal.strIngredient1}</div>
                <div>{meal.strIngredient2 !== "" && ", "+meal.strIngredient2 }</div>
                <div>{meal.strIngredient3 !== "" && ", "+meal.strIngredient3}</div>
                <div>{meal.strIngredient4 !== "" && ", "+meal.strIngredient4}</div>
                <div>{meal.strIngredient5 !== "" && ", "+meal.strIngredient5}</div>
                <div>{meal.strIngredient6 !== "" && ", "+meal.strIngredient6}</div>
                <div>{meal.strIngredient7 !== "" && ", "+meal.strIngredient7}</div>
                <div>{meal.strIngredient8 !== "" && ", "+meal.strIngredient8}</div>
                <div>{meal.strIngredient9 !== "" && ", "+meal.strIngredient9}</div>
                <div>{meal.strIngredient10 !== "" && ", "+meal.strIngredient10}</div>
                <div>{meal.strIngredient11 !== "" && ", "+meal.strIngredient11}</div>
                <div>{meal.strIngredient12 !== "" && ", "+meal.strIngredient12}</div>
                <div>{meal.strIngredient13 !== "" && ", "+meal.strIngredient13}</div>
                <div>{meal.strIngredient14 !== "" && ", "+meal.strIngredient14}</div>
                <div>{meal.strIngredient15 !== "" && ", "+meal.strIngredient15}</div>
                <div>{meal.strIngredient16 !== "" && ", "+meal.strIngredient16}</div>
                <div>{meal.strIngredient17 !== "" && ", "+meal.strIngredient17}</div>
                <div>{meal.strIngredient18 !== "" && ", "+meal.strIngredient18}</div>
                <div>{meal.strIngredient19 !== "" && ", "+meal.strIngredient19}</div>
                <div>{meal.strIngredient20 !== "" && ", "+meal.strIngredient20}</div>
                </div>
                
    </div>
  )
}

export default MealDetailCard