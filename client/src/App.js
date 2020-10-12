import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./App.css";
import Nav from './components/nav/nav';
import Trending from "./components/trending/trending";


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
        console.log(json.results);
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
      })
  }

  render() {
    const { isloaded, shows, searched } = this.state;
    return (
      <div className="App">
        <Router>
          <Nav handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
          <div className='content'>
            <Switch>
              <Route exact path={'/'} component={() => <Trending loaded={isloaded} searched={searched} shows={shows} />} />
              <Route  path={'/trending'} component={() => <Trending loaded={isloaded} searched={searched} shows={shows} />} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
