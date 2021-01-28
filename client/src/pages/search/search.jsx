import Axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './search.css';

const Search = ({ search }) => {
    const [found, setFound] = useState(false);
    const [init, setInit] = useState(false);
    const [results, setResults] = useState([]);
    const [page, setPage] = useState(1);
    const [currentTerm, setCurrentTerm] = useState('');
    const [unknown, setUnknown] = useState('');

    let params = useParams()
    // let history = useHistory()

    // const searchange = (e) => {
    //     setCurrentTerm(e.target.value)
    //     console.log(params)
    // }

    useEffect(() => {
        setPage(1)
        Axios.get(`api/search/${params.search}/${page}`)
            .then(({ data }) => {
                console.log(data)
                setResults(data)
                if (data.length > 0) {
                    setInit(true)
                }
                else {
                    setFound(true)
                    setInit(false)
                    setUnknown(currentTerm)
                }
            })
            .catch(err => console.log(err))
    }, [params])

    // const sear = (e) => {
    //     e.preventDefault()
    //     history.push(`/search/${search}`)

    // }


    function nextPage() {
        window.scrollTo(0, 0)
        setPage(page - 1)
    }

    function prevPage() {
        window.scrollTo(0, 0)
        setPage(page + 1)
    }

    return (
        <div className='search-page-container'>
            {/* <form className='sear-container-form' onSubmit={sear}>
                <input placeholder='Search...' type="text" className='sear-page' onChange={searchange} />
            </form> */}
            {!init ?
                <div className='search-not-found'>
                    {
                        !found ?
                            <h2>Search... </h2>
                            :
                            <h2>No results for... {unknown}</h2>
                    }
                </div>
                :
                <div className='search'>
                    {console.log(results)}
                    <div className="searched-shows-container">
                        <div className="searched-shows">
                            {results.map(s => (
                                <div key={s.id} className="searched-show">
                                    <div className="search-show-image">
                                        <img
                                            src={`https://image.tmdb.org/t/p/original${s.poster_path}`}
                                            onError={
                                                (ev) => ev.target.src = 'https://www.diotron.co.za/wp-content/uploads/2020/01/placeholder.png'
                                            }
                                            alt={s.title ? s.title : s.name}
                                            className="search-show-image-poster"
                                        />
                                    </div>
                                    <div className="searched-show-title">
                                        {s.title ? s.title : s.name}
                                        <br />
                                        {s.release_date ? s.release_date.substring(0, 4) : null}
                                        {s.first_air_date ? s.first_air_date.substring(0, 4) : null}
                                    </div>
                                </div>
                            ))
                            }
                        </div>
                        <div className='pagination-container'>
                            <span style={{ fontSize: 25, cursor: 'pointer', marginRight: 10 }} onClick={() => prevPage()}>{page === 1 ? '' : 'Prev'}</span>
                            <span style={{ fontSize: 25, cursor: 'pointer', marginRight: 10 }}>{page === 1 ? '' : page - 1}</span>
                            <span style={{ color: "teal", fontSize: 25, cursor: 'pointer', marginRight: 10 }}>{page}</span>
                            <span style={{ fontSize: 25, cursor: 'pointer', marginRight: 10 }}>{page < results.length / 20 ? page + 1 : ''}</span>
                            <span style={{ fontSize: 25, cursor: 'pointer', marginRight: 10 }} onClick={() => nextPage()}>{page < results.length / 20 ? 'Next' : ''}</span>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default Search;
