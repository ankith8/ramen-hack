import React, { Component } from "react";

class TopRestaurant extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    let selectedValue = event.target.value;
    console.log(selectedValue);
    // this.props.onSelectChange(selectedValue);
  };

  render() {
    let arrayOfData = this.props.restaurantsData;
    let arrayOfDataUnique = [];
    arrayOfData.forEach(element => {
      if (element["Top Ten"] !== "NaN") {
        arrayOfDataUnique.push(element);
      }
    });
    let options = arrayOfDataUnique.map((data, index) => (
      <option key={index} value={data["Top Ten"]}>
        {data["Top Ten"]}
      </option>
    ));
    return (
      <div className="top-restaurant">
        <p>Select Top Restaurant By Year</p>
        <select name="customSearch" onChange={this.handleChange}>
          <option>Select Item</option>
          {options}
        </select>
      </div>
    );
  }
}

export default TopRestaurant;

