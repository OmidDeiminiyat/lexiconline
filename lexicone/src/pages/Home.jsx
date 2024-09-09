import { Header } from "../components/header/Header";
import { Search } from "../components/searchBox/SearchBox";
import { SearchResults } from "../searchResault/SearchResault";
import React, { useState, useEffect } from 'react';

export const Home = () => {
    const [results, setResults] = useState([]);
    const [error, setError] = useState(null);

    const handleSearch = (word) => {
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Word not found');
          }
          return response.json();
        })
        .then((data) => {
          setResults(data);
          setError(null);

        })
        .catch((error) => {
          setError(error.message);
          setResults([]);
        });
    };

    useEffect(() => {
        handleSearch('hello');
      }, []);


     

    return (
        <>
      <Header />
      <Search onSearch={handleSearch} />
      <SearchResults results={results} error={error}  />
        
        </>
    )
}
