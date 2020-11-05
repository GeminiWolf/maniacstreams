import React from "react";
import Bar from '../progressbar/progressbar'
import "./trending.css";

const Trending = (props) => {
  if (!props.loaded) {
    return <div className="nothing"><div>Nothing to show...</div></div>
  }
  else {
    return (
      <div className="trending">
        <div>
          <h2 className="results-title" style={{ display: props.searched ? "block" : "none" }}>Showing results for... {props.searched}</h2>
        </div>
        <div className="trending-shows-container">
          {props.shows.map(shows => (
            <div key={shows.id} className='trending-shows'>
              <div className="trending-shows-images">
                <img
                  src={`https://image.tmdb.org/t/p/original${shows.poster_path}`}
                  alt={shows.title ? shows.title : shows.name} className="trending-shows-images-poster"
                />
                <div className='rating-bar'>
                  <Bar rate={shows.vote_average * 10} />
                </div>
              </div>
              <p className="trending-shows-images-title">
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
