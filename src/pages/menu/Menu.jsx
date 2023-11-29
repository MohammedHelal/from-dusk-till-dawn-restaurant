import { useState, useEffect } from "react";
import MealItem from "./MealItem";
import "./Menu.css";

function Menu() {
  const [mealItems, setMealItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/meals")
      .then((res) => res.json())
      .then((data) => setMealItems(data));
  });
  
  return (
    <section id="meals">
      <div className="meal-heading">
        <h1>Menu</h1>
        <ul>
          <li>
            <a className="menu-link-items" href="#salads">
              Salads
            </a>
          </li>
          <li>
            <a className="menu-link-items" href="#sandwiches">
              Sandwiches
            </a>
          </li>
          <li>
            <a className="menu-link-items" href="#main">
              Mains
            </a>
          </li>
          <li>
            <a className="menu-link-items" href="#seafood">
              Seafood
            </a>
          </li>
          <li>
            <a className="menu-link-items" href="#vegetarian">
              Vegetarian
            </a>
          </li>
          <li>
            <a className="menu-link-items" href="#dessert">
              Dessert
            </a>
          </li>
        </ul>
      </div>
      <h2 id="salads">🥗 Salads</h2>
      {mealItems.map((item) => {
        if (item.category === "salad") {
          return <MealItem key={item.id} item={item} />;
        }
      })}
      <h2 id="sandwiches">🌮 Sandwiches</h2>
      {mealItems.map((item) => {
        if (item.category === "sandwiches") {
          return <MealItem key={item.id} item={item} />;
        }
      })}
      <h2 id="main">🍛 Mains</h2>
      {mealItems.map((item) => {
        if (item.category === "main") {
          return <MealItem key={item.id} item={item} />;
        }
      })}

      <h2 id="seafood">🍤 Seafood</h2>
      {mealItems.map((item) => {
        if (item.category === "seafood") {
          return <MealItem key={item.id} item={item} />;
        }
      })}

      <h2 id="vegetarian">🥘 Vegetarian</h2>
      {mealItems.map((item) => {
        if (item.category === "vegetarian") {
          return <MealItem key={item.id} item={item} />;
        }
      })}

      <h2 id="dessert">🍰 Desserts</h2>
      {mealItems.map((item) => {
        if (item.category === "dessert") {
          return <MealItem key={item.id} item={item} />;
        }
      })}
    </section>
  );
}

export default Menu;
