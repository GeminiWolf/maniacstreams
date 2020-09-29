import React, { Component } from "react";
import Selectbox from "./selectbox";
import "./sidebar.css";
// import noprofile from "../../img/no-profile.png";

let type = [
  { value: "All", key: 1 },
  { value: "Movies", key: 2 },
  { value: "Series", key: 3 },
  { value: "Cartoon", key: 4 },
  { value: "Anime", key: 5 },
];

let genre = [
  { value: "All", key: 1 },
  { value: "Action", key: 2 },
  { value: "Comedy", key: 3 },
  { value: "Documentary", key: 4 },
  { value: "Horror", key: 5 },
];

let year = [
  { value: "All", key: 1 },
  { value: "2020", key: 2 },
  { value: "2019", key: 3 },
  { value: "2018", key: 4 },
  { value: "2017", key: 5 },
];

export default class Sidebar extends Component {
  constructor() {
    super()
    this.state = {
      users: [],
      loaded: false,
      photo: {},
    }
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then(json => {
        this.setState({
          loaded: true,
          users: json.results[0].name,
          photo: json.results[0].picture,
        })
      });
  }
  render() {

    const { users, photo } = this.state;

    return (
      <div className="sidebar">
        <div className="sidebar-padding">
          <div className="Pofile-container">
            <img src={photo.medium} alt="no-profile" className="pro-pic" />
            <p className="pro-name">{users.first} {users.last}</p>
          </div>
          <h4 className="section-title">Explore</h4>
          <div className="side-nav">
            <ul>
              <li className="sidenav-active">Dicover</li>
              <li>Subscription</li>
              <li>Downloaded</li>
              <li>Favorites</li>
              <li>Notifications</li>
            </ul>
          </div>
          <h4 className="section-title">Fliters</h4>
          <div className="filter-list">
            <div>Type</div>
            <Selectbox type={type} />
            <div>Genre</div>
            <Selectbox type={genre} />
            <div>Year</div>
            <Selectbox type={year} />
          </div>
        </div>
      </div>
    );
  }
}
