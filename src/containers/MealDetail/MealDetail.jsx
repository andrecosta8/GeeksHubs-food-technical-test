import React from 'react'
import MealDetailCard from '../../components/MealDetailCard/MealDetailCard';
import { useMealContext } from '../../providers/MealProvider'

const MealDetail = () => {
  const meal = useMealContext();
  return (
    <div className='mealDetailDesign'>

            {meal.idMeal !== undefined &&
                <MealDetailCard meal={meal} />
            }
        </div>
  )
}

export default MealDetail