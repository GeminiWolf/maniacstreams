import React, { Component } from "react";
import "./series.css";
import Slider from "../slider/slider";

export default class Series extends Component {
  render() {
    let data = [
      "pain",
      "pool",
      "car",
      "sleep",
      "brain",
      "rain",
      "mountain",
      "thor",
      "loki",
      "iron man",
      "spiderman",
      "hulk",
      "steve",
      "rogers",
      "banner",
    ];

    return (
      <div className="series">
        <div>
          <h1>series</h1>
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
