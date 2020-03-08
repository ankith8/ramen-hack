import React, { Component } from "react";

class CountrylistRestaurant extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    let selectedValue = event.target.value;
    console.log(this.props);
    this.props.countryHandler(selectedValue);
  };

  render() {
    let arrayOfData = this.props.restaurantsData;
    let uniqueCountries = [];
    arrayOfData.forEach(element => {
        if (!uniqueCountries.includes(element.Country)) {
          uniqueCountries.push(element.Country);
        }
    });

    let options = uniqueCountries.map((data, index) => (
      <option key={index} value={data}>
        {data}
      </option>
    ));
    return (
      <div className="countrylist-restaurant">
        <p>Select Top Restaurant By Country</p>
        <select name="customSearch" onChange={this.handleChange}>
          <option>Select Item</option>
          {options}
        </select>
      </div>
    );
  }
}

export default CountrylistRestaurant;
