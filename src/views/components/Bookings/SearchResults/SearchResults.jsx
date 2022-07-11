import React, { useState } from "react";
// import fakeBookings from "../data/fakeBookings";
import moment from "moment";
import RowInfo from "./RowInfo";
import CustomerProfile from "./CostumerProfile";

const SearchResults = props => {
  const [activeCustomerId, setActiveCustomerId] = useState(null);
  const handleOnSelectedCustomerId = Id => {
    console.log(Id);
    setActiveCustomerId(Id);
  };
  function showProfile() {
    if (activeCustomerId != null) {
      return (
        <CustomerProfile
          customerId={activeCustomerId}
          onClose={() => setActiveCustomerId(null)}
        />
      );
    }
  }
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room Id</th>
            <th scope="col">Check In Date</th>
            <th scope="col">Check Out Date</th>
            <th scope="col">Nights</th>
          </tr>
        </thead>
        <tbody>
          {props.bookings.map(booking => {
            const checkIn = moment(booking.checkInDate);
            const checkOut = moment(booking.checkOutDate);
            const nightsCalculation = checkOut.diff(checkIn, "days");
            return (
              <RowInfo
                nightsCalculation={nightsCalculation}
                booking={booking}
                handleOnSelectedCustomerId={handleOnSelectedCustomerId}
              />
            );
          })}
        </tbody>
      </table>
      {showProfile()}
    </div>
  );
};

export default SearchResults;
