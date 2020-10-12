import React from "react";
import Bar from '../progressbar/progressbar'
import "./trending.css";

const Trending = (props) => {
  if (!props.loaded) {
    return <div className="nothing">Nothing to show...</div>
  }
  else {
    return (
      <div className="trending">
        {console.log(props)}
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
                      alt={shows.title ? shows.title : shows.name} className="poster"
                    />
                      <div className='rating-bar'>
                        <Bar rate={shows.vote_average*10} />
                      </div>
                  </div>
                  <div className="dummy-images imageOverview">
                    <div className="over-cont">
                      <div className='over-cont-title'>
                        {shows.title ? shows.title : shows.name}
                      </div>
                      <div className='over-cont-overview'>
                        {shows.overview}
                      </div>
                    </div>
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
