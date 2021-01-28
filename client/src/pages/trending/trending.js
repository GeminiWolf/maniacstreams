import React from "react";
import Bar from '../../components/progressbar/progressbar'
import "./trending.css";

const Trending = (props) => {
  if (!props.loaded) {
    return <div className="nothing"><div>Nothing to show...</div></div>
  }
  else {
    return (
      <div className="trending">
        <div className="trending-shows-container">
          {props.shows.map(shows => (
            <div key={shows.id} className='trending-shows'>
              <div className="trending-shows-images">
                <img
                  src={`https://image.tmdb.org/t/p/original${shows.poster_path}`}
                  onError={
                    (ev) => ev.target.src = 'https://www.diotron.co.za/wp-content/uploads/2020/01/placeholder.png'
                  }
                  alt={shows.title ? shows.title : shows.name} className="trending-shows-images-poster"
                />
                <div className='rating-bar'>
                  <Bar rate={shows.vote_average * 10} />
                </div>
              </div>
              <p className="trending-shows-images-title">
                {shows.title ? shows.title : shows.name}
                <br />
                {shows.release_date ? shows.release_date.substring(0, 4) : null}
                {shows.first_air_date ? shows.first_air_date.substring(0, 4) : null}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Trending;
