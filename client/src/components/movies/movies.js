import React, { useEffect, useState } from "react";
import "./movies.css";
import axios from "axios";

const Movies = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1)

  useEffect(() => {
    axios.get(`api/movies/${page}`)
      .then(res => {
        setData(res.data)
      });
  }, [page]);

  function nextPage() {
    window.scrollTo(0, 0)
    setPage(page + 1)
  }

  function prevPage() {
    window.scrollTo(0, 0)
    setPage(page + 1)
  }

  return (
    <div className="movies">
      <div>
        <h1>Movies</h1>
        <div className="movies-shows-container">
          <div className="movies-shows-cent">
            {data.map((value) =>
              <div key={value.id} className="movies-shows-blocks">
                <div>
                  <img alt='poster' src={`https://image.tmdb.org/t/p/original${value.poster_path}`} className='movies-show-blocks-img' />
                </div>
                <div>
                  <h5 className='movies-show-blocks-title' >{value.title} ({value.release_date.substr(0, 4)})</h5>
                </div>
              </div>
            )}
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20, marginBottom: 20 }}>
          <span style={{ fontSize: 25, cursor: 'pointer', marginRight: 10 }} onClick={() => prevPage()}>{page === 1 ? '' : 'Prev'}</span>
          <span style={{ fontSize: 25, cursor: 'pointer', marginRight: 10 }}>{page === 1 ? '' : page - 1}</span>
          <span style={{ color: "teal", fontSize: 25, cursor: 'pointer', marginRight: 10 }}>{page}</span>
          <span style={{ fontSize: 25, cursor: 'pointer', marginRight: 10 }}>{page + 1}</span>
          <span style={{ fontSize: 25, cursor: 'pointer', marginRight: 10 }} onClick={() => nextPage()}>Next</span>
        </div>
      </div>
    </div>
  );
}

export default Movies;