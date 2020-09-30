import React, { Component } from "react";
import "./App.css";
import Nav from "./components/nav/nav";
import Home from "./components/home/home";
import Sidebar from "./components/sidebar/sidebar";

class App extends Component {
  constructor() {
    super()
    this.state = {
      isloaded: false,
      shows: [],
      term: "",
      msg: "",
      searched: "",
    }
    this.apikey = process.env.REACT_APP_MOVIEAPI
  }

  componentDidMount = () => {
    fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${this.apikey}`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          isloaded: true,
          shows: [...json.results],
        })
      });
  }

  handleSubmit = (e) => {

    e.preventDefault();
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apikey}&query=${this.state.term}`)
      .then(res => res.json())
      .then(res => {
        if (res.results.length === 0) {
          this.setState({
            isloaded: false,
            searched: this.state.term,
            shows: [],
          })
        }
        else {
          this.setState({
            isloaded: true,
            searched: this.state.term,
            shows: [...res.results],
          })
        }
        console.log(res.results);
      })
  }

  handleChange = (e) => {
    this.setState({
      term: e.target.value,
    })
  }

  render() {

    const { isloaded, shows, searched } = this.state;

    return (
      <div className="App">
        <Nav handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        <Sidebar />
        <div className="content">
          <Home loaded={isloaded} searched={searched} shows={shows} />
        </div>
      </div>
    );
  }
}

export default App;
