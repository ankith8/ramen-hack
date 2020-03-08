import React, { Component } from "react";

class SearchRestaurant extends Component {
  state = {
    text: ""
  };
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
  }

  handleChange = event => {
    
    event.preventDefault();
    let selectedValue = this.state.text;
    console.log(selectedValue);
  };

  onTextChange = event => {
    this.setState({ text: event.target.value });

  }

  componentWillMount = () => {
    this.setState({
      initialItems: this.props.content,
      items: this.props.content
    });
  };

  render() {
    return (
      <div className="search-restaurant">
        <p>Search Restaurants</p>
        <form>
          <input type="text" placeholder="Search" onChange={this.onTextChange} />
          <button onClick={this.handleChange}>Search</button>
        </form>
      </div>
    );
  }
}

export default SearchRestaurant;
