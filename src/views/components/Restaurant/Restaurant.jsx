import React from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div className="restaurantContainer">
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          <Order orderType="Pizza" />
          <Order orderType="Cola" />
          <Order orderType="Salad" />
          <Order orderType="Chocolate Cake" />
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
