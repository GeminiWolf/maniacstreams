import React, { Component } from "react";
import "./mydomain.css";

export default class Mydomain extends Component {
  render() {
    return (
      <div className="mydomain">
        <div className="name">
          <h1>name</h1>
        </div>
        <div className="watch-series">
          <div className="block-title">Watching</div>
          <div className="watch-blocks">
            <div className="series-block"></div>
            <div className="series-block"></div>
            <div className="series-block"></div>
            <div className="series-block"></div>
            <div className="series-block"></div>
            <div className="series-block"></div>
            <div className="series-block"></div>
            <div className="series-block"></div>
            <div className="series-block"></div>
            <div className="series-block"></div>
            <div className="series-block"></div>
          </div>
        </div>
      </div>
    );
  }
}
