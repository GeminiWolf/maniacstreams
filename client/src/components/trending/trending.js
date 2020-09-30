import React from "react";
import "./trending.css";

const Trending = (props) => {

  if (!props.loaded) {
    return <div className="nothing">Nothing to show...</div>
  }
  else {
    return (
      <div className="trending">
        <div>
          <h2 className="results-title" style={{ display: props.searched ? "block" : "none" }}>Showing results for... {props.searched}</h2>
        </div>
        <div className="dummy-container">
          {props.shows.map(shows => (
            <div key={shows.id}>
              <div className="higher-flip">
                <div className="flip">
                  <div className="dummy-images imagePoster">
                    <img
                      src={`https://image.tmdb.org/t/p/original${shows.poster_path}`}
                      alt={shows.title} className="poster"
                    />
                  </div>
                  <div className="dummy-images imageOverview">
                    <p className="overv">{shows.overview}</p>
                  </div>
                </div>
              </div>
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

export default Trending;
