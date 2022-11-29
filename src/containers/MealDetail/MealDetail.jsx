import React from 'react'
import { useMealContext } from '../../providers/MealProvider'

const MealDetail = () => {
  const meal = useMealContext();
  return (
    <div className='mealDetailDesign'>

            {meal.idMeal !== undefined &&
            
                <div>{meal.strMeal}</div>
            }
        </div>
  )
}

export default MealDetail