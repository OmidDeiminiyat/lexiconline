import style from './SearchBox.module.scss';
import React, { useState } from 'react';
export const Search = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      if (query.trim()) {
        onSearch(query);
      }
    };

    return(
        <>
        <section className={style.searchBox}>
            <h1>Enter a word to search for</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Search a world' value={query} onChange={(e) => setQuery(e.target.value)} />
                <button type='submit' >Search</button>
            </form>
        </section> 
        </>
    )
}