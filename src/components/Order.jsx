import React, { useState } from "react";

import RestaurantButton from "./RestaurantButton";

const Order = props => {
  const [orders, setOrders] = useState(0);
  function orderOne() {
    setOrders(orders + 1);
  }
  function eraseOne() {
    setOrders(orders - 1);
  }
  return (
    <div className="dishOrder">
      <li>
        {props.orderType}: {orders}
        <RestaurantButton clickHandler={orderOne} description="Add" />
        <RestaurantButton clickHandler={eraseOne} description="Remove" />
      </li>
    </div>
  );
};

export default Order;
