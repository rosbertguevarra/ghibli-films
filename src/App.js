import React, { Component } from "react";
import Films from "./Films";
import Axios from "axios";

const alignGrid = {
  display: "flex",
  flexWrap: "wrap"
};

const URL = "https://ghibliapi.herokuapp.com/films";
class App extends Component {
  state = {
    data: [],
    searchTerm: ""
    
  };
  componentDidMount() {
    Axios.get(URL)
      .then(res => {
        this.setState({
          data: res.data
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
    const films = this.state.data.map(film => (
      <Films
        key={film.id}
        title={film.title}
        description={film.description}
        director={film.director}
        producer={film.producer}
        release_date={film.release_date}
        rt_score={film.rt_score}
      />

    
    ));
  
    return <div style={alignGrid}>{films}</div>;
  }
}




export default App;
