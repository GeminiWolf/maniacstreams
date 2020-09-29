import React from "react";
import "./home.css";

const Home = (props) => {
  if (!props.loaded) {
    return <div className="nothing">Nothing to show...</div>
  }
  else {
    return (
      <div className="home">
        <div>
          {/* <h1>{props.searched}</h1> */}
          <h2 className="results-title" style={{ display: props.searched ? "block" : "none" }}>Showing results for... {props.searched}</h2>
        </div>
        <div className="dummy-container">
          {props.shows.map(shows => (
            <div key={shows.id}>
              <img
                src={`https://image.tmdb.org/t/p/original${shows.poster_path}`}
                alt={shows.title} className="dummy-images"
              />
              <p className="show-title">
                {shows.title ? shows.title : shows.name}<br /> {shows.release_date ? shows.release_date.substr(0, 4) : shows.first_air_date.substr(0, 4)}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;