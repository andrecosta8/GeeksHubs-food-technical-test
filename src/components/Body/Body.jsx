import React from "react";
import { Route, Routes } from "react-router-dom";
import AddMeal from "../../containers/AddMeal/AddMeal";
import Home from "../../containers/Home/Home";
import MealDetail from "../../containers/MealDetail/MealDetail";
import Meals from "../../containers/Meals/Meals";

const Body = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meals" element={<Meals />} />
        <Route path="/mealdetail" element={<MealDetail />} />
        <Route path='/addmeal' element={<AddMeal/>}/>
      </Routes>
    </>
  );
};

export default Body;
