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

  useEffect(() => {
    axios.get('/api/movies',)
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, []);


  return (
    <div className="series" >
      <div>
        <h1>series</h1>
        <div className="shows">
          <div className="shows-block-container">
            {data.map((value) =>
              <div key={value.id} className="blocks">
                {value.name}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Series