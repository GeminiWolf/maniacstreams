import React from 'react';
import './watching.css';

const watching = () => {
    return (
        <div className='watching-container'>
            <div className="watching-title">watching</div>
            <div className="watching-window">
                <div className="watching-window-movie">
                    <div className="watching-window-movie-screen"></div>
                    <div className="watching-window-movie-play">
                        <img className='watching-window-movie-play-btn' src={require(`../../img/play.svg`)} alt="play" />
                    </div>
                </div>
                <div className="watching-movie-info">
                    <div className="movie-info">
                        <div className="watch-movie-info-genre">
                            Genre
                        </div>
                        <div className="watch-movie-info-rating">
                            Rating
                        </div>
                        <div className="watch-movie-info-description">
                            poihgqwklfdhsbne,rldhsbe ,rfkdhsber,fduhnermfdehbfnvkdjhnfmdksij
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default watching;