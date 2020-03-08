import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchRestaurant from "./components/SearchRestaurant";
import TopRestaurant from "./components/TopRestaurant";
import CountrylistRestaurant from "./components/CountrylistRestaurant";
import RestaurantList from "./components/RestaurantList";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
    this.updateChildSearch = this.updateChildSearch.bind(this);
    this.updateChildCountry = this.updateChildCountry.bind(this);
  }
  originalData;

  componentDidMount() {
    axios
      .get("http://starlord.hackerearth.com/TopRamen")
      .then(response => {
        console.log(response);
        this.setState({ posts: response.data });
        this.originalData = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }

  updateChildSearch(searchText) {
    this.setState({ posts: this.state.posts });
  }
  updateChildCountry(selectedCountry) {
    // console.log(selectedCountry)
    let allData = [];
    this.state.posts.forEach(elem => {
      if(elem.Country === selectedCountry){
        allData.push(elem);
      }
    })
    
    this.setState({ posts: allData });
  }

  render() {
    return (
      <div className="app">
        <Header />
        <SearchRestaurant restaurantsData={this.state.posts} searchHandler={this.updateChildSearch}/>
        <TopRestaurant restaurantsData={this.state.posts} />
        <CountrylistRestaurant restaurantsData={this.state.posts} countryHandler={this.updateChildCountry}/>
        <RestaurantList restaurantsData={this.state.posts} />
        <Footer />
      </div>
    );
  }
}

export default App;
