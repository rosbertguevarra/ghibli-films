import React, { Component } from "react";
import Films from "./Films";
import Axios from "axios";
import Spinner from "react-spinkit";
import Navbar from "./Navbar";
import "./App.css"

const alignGrid = {
  display: "flex",
  flexWrap: "wrap"
};

const alignSearch = {
  margin: "0px 0px 0px 10px",
  padding: "50px"

}

const styleInput = {
  padding: "10px 200px 10px 10px"
}
const alignStyle = {
  display: "flex",
  justifyContent: "center",
  paddingTop: "100px"
}

const spinnerStyle = {
  display: "flex",
  justifyContent: "center",
  color: "#3498db",
  paddingTop: "20px"
  
}

const URL = "https://ghibliapi.herokuapp.com/films";
class App extends Component {
  state = {
    data: [],
    searchTerm: "",
    isLoaded: false

  };
  componentDidMount() {
    Axios.get(URL)
      .then(res => {
        this.setState({
          data: res.data,
          isLoaded: true
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleSearchTermChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    const { isLoaded } = this.state;
    if (!isLoaded) {
      return (
        <div>
          <Navbar />
          <div style={alignStyle}>
            <h1>Loading</h1>
          </div>
          <Spinner name="three-bounce" style={spinnerStyle} />

        </div>
      )
    }
    else {
      const films = this.state.data.filter(film => `${film.title}`.toUpperCase()
        .indexOf(this.state.searchTerm.toUpperCase()) >= 0)
        .map(film =>
          <Films
            key={film.id}
            {...film}
          />


        );

      return (
        <div>
          <Navbar />
          <div className="search" style={alignSearch}>
            Search:  <input style={styleInput}
              onChange={this.handleSearchTermChange}
              value={this.state.searchTerm}
              type="text"
              placeholder="Search Ghibli Film"
            />
          </div>
          <div className="films"style={alignGrid}>{films}</div>
        </div>
      )
    }
  }
}
export default App;
