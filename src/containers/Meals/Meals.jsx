import React, { useState, useEffect } from "react";
import { getDataFromAPI } from "../../services/apiCalls";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Meals.css";
import MealCard from "../../components/MealCard/MealCard";

const Foodsearch = () => {
  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");

  const inputSearchHandler = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const bring = setTimeout(() => {
      getDataFromAPI(search)
        .then((foodResults) => {
          if (foodResults.meals === null) {
            setMeals([]);
          } else setMeals(foodResults.meals);
        })
        .catch((error) => console.log(error));
    }, 500);

    return () => clearTimeout(bring);
  }, [search]);

  return (
    <div className="searchDiv">
      <input
        name="food"
        placeholder="Search your meal..."
        className="searchInput"
        onChange={(e) => inputSearchHandler(e)}
      />
      {meals.length > 0 ? (
        <div className="mealsContainer">
          {meals.map((food) => {
            return (
              <div className="mealsDesign">
                <MealCard value={food} />
              </div>
            );
          })}
        </div>
      ) : (
        <p>This food doesn't exist</p>
      )}
    </div>
  );
};

export default Foodsearch;
