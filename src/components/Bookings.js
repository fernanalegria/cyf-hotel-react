import React, { useState, useEffect } from "react";

import Search from "./Search.jsx";
import SearchResults from "./SearchResults.jsx";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong");
      })
      .then(data => {
        setBookings(data);
      })
      .catch(error => console.log(error));
  }, []);

  const search = searchVal => {
    // console.info("TO DO!", searchVal);
    const filteredBookings = bookings.filter(booking => {
      return (
        booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        booking.surname.toLowerCase().includes(searchVal.toLowerCase())
      );
    });
    setBookings(filteredBookings);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {bookings.length > 0 ? (
          <SearchResults bookings={bookings} />
        ) : (
          <h3 className="loading-data-h1">Loading..</h3>
        )}
        {/* <SearchResults results={FakeBookings} /> */}
      </div>
    </div>
  );
};

export default Bookings;
