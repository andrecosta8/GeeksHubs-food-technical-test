import React, {useState, useContext} from 'react'

const mealContext = React.createContext();
const mealChangeContext = React.createContext();

export const useMealContext = () => {
    return useContext(mealContext)
}

export const useMealChangeContext = () => {
    return useContext(mealChangeContext)
}

export const MealProvider = (props) => {
    const [meal, setMeal] = useState(null);

    const mealChange= (selected) => {
        setMeal(selected);
    }

    return(
        <mealContext.Provider value={meal}>
            <mealChangeContext.Provider value={mealChange}>
                {props.children}
            </mealChangeContext.Provider>
        </mealContext.Provider>
    )
}