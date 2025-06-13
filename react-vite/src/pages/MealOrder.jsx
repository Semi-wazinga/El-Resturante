import { React, useState, useEffect } from "react";
import mealPrices from "../../components/mealPrices";

const MealOrder = () => {
  const [meals, setMeals] = useState([]);
  const [prices, setPrices] = useState({});

  useEffect(() => {
    (async () => {
      try {
        // Fetch meals from API
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/search.php?s=Beef"
        );
        const data = await response.json();
        setMeals(data.meals);

        console.log(mealPrices);

        // Map prices to meals
        const prices = mealPrices.reduce((acc, meal) => {
          acc[meal.idMeal] = meal.price.amount + " " + meal.price.currency;
          return acc;
        }, {});

        // Set prices after mapping
        setPrices(prices);
      } catch (error) {
        console.error(error);
      }
    })(); // Immediately invoke the async function
  }, []); // Add an empty dependency array to run once on mount

  return (
    <>
      <div className='mt-5 pt-5'>
        <ul>
          {meals.map((meal) => (
            <li key={meal.idMeal}>
              {meal.strMeal} - Price:{" "}
              {prices[meal.idMeal]
                ? `${prices[meal.idMeal]}`
                : "Price not available"}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MealOrder;
