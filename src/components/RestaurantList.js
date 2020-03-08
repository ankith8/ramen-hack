import React from "react";
import ListItem from "./ListItem";

const RestaurantList = rdata => {
  return (
    <div className="restaurant-list">
      <h3>Top Restaurant List</h3>
      {rdata.restaurantsData.length
        ? rdata.restaurantsData.map((data, index) => (
            <ListItem key={index} data={data} />
          ))
        : null}
      {console.log(rdata.restaurantsData)}
    </div>
  );
};

export default RestaurantList;
