import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useMealChangeContext } from '../../providers/MealProvider'

const MealCard = ({value}) => {
    console.log(value,"<<<<<<<<<<<<<<<<<<<<<<<");
    let navigate = useNavigate();
    const mealChange = useMealChangeContext();

    const goDetail = () => {
        mealChange(value);
        setTimeout(()=> {
            navigate('/mealdetail')
        },200)
        
    }

  return (
    <div className='mealCardDesign' onClick={()=> goDetail()}>
            <div><img className='mealImage' src={value.strMealThumb} alt={value.strMeal}/></div>
            <div>{value.strMeal}</div>
         </div>
  )
}

export default MealCard