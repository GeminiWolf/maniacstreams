import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./App.css";
import Nav from './components/nav/nav.jsx';
import Trending from "./components/trending/trending";
import Profile from "./components/profile/profile.jsx";
import Series from "./components/series/series.jsx";
import Watching from './components/watching/watching.jsx';
import Movies from "./components/movies/movies";
import Search from "./components/search/search";

import axios from 'axios';

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
    axios.get('/api/trending')
      .then(res => {
        this.setState({
          isloaded: true,
          shows: res.data,
        })
      });
  }

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apikey}&query=${this.state.term}`)
  //     .then(res => res.json())
  //     .then(res => {
  //       if (res.results.length() === 0) {
  //         this.setState({
  //           isloaded: false,
  //           searched: this.state.term,
  //           shows: [],
  //         })
  //       }
  //       else {
  //         this.setState({
  //           isloaded: true,
  //           searched: this.state.term,
  //           shows: [...res.results],
  //         })
  //       }
  //     })
  // }

  handleChange = (e) => {
    this.setState({
      term: e.target.value
    })
    // console.log(e.target.value)
  }

  handleSubmit = () => {
    this.setState({
      searched: this.state.term
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
              <Route exact path={'/'} component={() => <Trending loaded={isloaded} shows={shows} />} />
              <Route path={'/profile'} component={Profile} />
              <Route path={'/movies'} component={Movies} />
              <Route path={'/series'} component={Series} />
              <Route path={'/watching'} component={Watching} />
              <Route path={'/search'} component={() => <Search search={searched} />} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
