import React, { useState, useEffect } from "react";

import { connect } from "react-redux";

import Search from "./Search";
import SearchResults from "./SearchResults";
import { bookingActions } from "state/modules/bookings";

const Bookings = ({ bookings, getBookings }) => {
  const [searchFilter, setSearchFilter] = useState("");

  useEffect(() => {
    getBookings();
  }, []);

  const updateSearchFilter = newSearchFilter => {
    setSearchFilter(newSearchFilter);
  };

  const filteredBookings = bookings.filter(
    booking =>
      !searchFilter ||
      booking.firstName.toLowerCase().includes(searchFilter.toLowerCase()) ||
      booking.surname.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <div className="App-content">
      <div className="container">
        <Search search={updateSearchFilter} />
        {filteredBookings.length > 0 ? (
          <SearchResults bookings={filteredBookings} />
        ) : (
          <h3 className="loading-data-h1">No results</h3>
        )}
        {/* <SearchResults results={FakeBookings} /> */}
      </div>
    </div>
  );
};

const mapStateToProps = ({ bookings }) => ({ bookings });

const mapDispatchToProps = {
  getBookings: bookingActions.getBookings
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bookings);
