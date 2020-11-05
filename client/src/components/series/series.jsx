import axios from "axios";
import React, { useEffect, useState } from "react";
import "./series.css";

// let data = [
//   "pain",
//   "pool",
//   "car",
//   "sleep",
//   "brain",
//   "rain",
//   "mountain",
//   "thor",
//   "loki",
//   "iron man",
//   "spiderman",
//   "hulk",
//   "steve",
//   "rogers",
//   "banner",
// ];

const Series = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1)

  useEffect(() => {
    axios.get(`api/series/${page}`)
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
    <div className="series" >
      <div>
        <h1>series</h1>
        <div className="series-shows-container">
          <div className="series-shows-cent">
            {data.map((value) =>
              <div key={value.id} className="series-shows-blocks">
                <img alt='poster' src={`https://image.tmdb.org/t/p/original${value.poster_path}`} className='series-show-blocks-img' />
              </div>
            )}
          </div>
        </div>
        <div>
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

export default Series