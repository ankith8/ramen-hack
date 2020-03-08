import React from "react";

const ListItem = (props) => {
   props = props.data;
    // console.log(props);
  return (
    <div className="list-item">
      <p>Brand : {props.Brand}</p>
      <p>Country : {props.Country}</p>
      <p>Stars : {props.Stars}</p>
      <p>Style : {props.Style}</p>
      <p>Top Ten : {props["Top Ten"]}</p>
      <p>Variety : {props.Variety}</p>
    </div>
  );
};

export default ListItem;
