import React, { Component } from "react";
import "./movies.css";
import Slider from "../slider/slider";

export default class Movies extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isloaded: false,
      movies: [],
    }
  }
  render() {
    return (
      <div className="movies">
        <div>
          <h1>Movies</h1>
          <div className="shows">
            <h3>Featured</h3>
            <Slider>
              {data.map((value) => {
                return (
                  <div key={value} className="blocks">
                    {value}
                  </div>
                );
              })}
            </Slider>
          </div>
          <div className="shows">
            <h3>Latest</h3>
            <Slider>
              {data.map((value) => {
                return (
                  <div key={value} className="blocks">
                    {value}
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
