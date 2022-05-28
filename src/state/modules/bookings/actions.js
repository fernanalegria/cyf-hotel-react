import { createAction } from "@reduxjs/toolkit";

import * as types from "./types";

const actionCreators = {
  getBookings: createAction(types.GET_BOOKINGS)
};

const getBookings = () => dispatch =>
  fetch("https://cyf-react.glitch.me/")
    .then(response => {
      if (!response.ok) {
        throw new Error(
          "Something went wrong when serializing the API response"
        );
      }
      return response.json();
    })
    .then(data => {
      dispatch(actionCreators.getBookings(data));
      return Promise.resolve(data);
    })
    .catch(error => {
      console.log(error);
    });

export { actionCreators, getBookings };
