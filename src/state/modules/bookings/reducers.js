import { createReducer } from "@reduxjs/toolkit";

import { actionCreators } from "./actions";

const bookingReducer = createReducer([], builder => {
  builder
    .addCase(actionCreators.getBookings, (state, action) => [
      ...state,
      ...action.payload
    ])
    .addDefaultCase(() => {});
});

export default bookingReducer;
