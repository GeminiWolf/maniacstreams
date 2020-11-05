import Axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import './search.css';

const Search = ({ search }) => {
    const [found, setFound] = useState(false);
    const [results, setResults] = useState([]);
    const [page, setPage] = useState([1]);

    useEffect(() => {
        Axios.get(`/mulsearch/${search}/${page}`)
            .then(res => {
                setResults(res.data)
                setFound(true)
            })
            .catch(err => console.log(err))
    }, [search, page]);


    function nextPage() {
        window.scrollTo(0, 0)
        setPage(page + 1)
    }

    function prevPage() {
        window.scrollTo(0, 0)
        setPage(page + 1)
    }


    if (!found) {
        return (
            <div className='search-not-found'>
                <h2>No results... for {search}</h2>
            </div>
        )
    }
    return (
        <div className='search'>
            {console.log(results)}
            <div className="searched-shows-container">
                <div className="serched-shows">
                    <div className="searched-show">
                        <div className="search-show-image"></div>
                        <div className="searched-show-title"></div>
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

export default Search;
