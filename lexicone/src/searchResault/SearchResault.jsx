import React, { useState, useRef } from 'react';
import style from './SearchResault.module.scss';
import speaker from './../assets/Speaker.png';

export const SearchResults = ({ results, error }) => {
  if (error) {
    return <div className="error-message">Error: {error}</div>;
  }
console.log(results);

  if (!results || results.length === 0) {
    return <div className={style.results}> <h3> No results found. </h3></div>;
  }


  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);   

  };
  

  return (
    <>
    <div className={style.results}>
      {results.map((result, index) => (
        <div key={index} className="result">
          <div className={style.firstDiv}> <img src={speaker} onClick={handlePlayPause} alt="" /> {isPlaying ? '' : ''} <audio ref={audioRef} src={result.phonetics[0].audio} /> <h2>{result.word}</h2> </div>
         {console.log(result.phonetics[0].audio)}
         
          {result.meanings.map((meaning, idx) => (
            <div className={ meaning.partOfSpeech === 'noun' ? style.secondDiv : style.DivSingle}  key={idx}>
              <h4>{meaning.partOfSpeech}</h4>
              {meaning.partOfSpeech === 'noun' ? (<h4>Synonyms</h4>) : ''}

              {meaning.definitions.map((definition, idy) => (
                <>
                <p key={idy}> {idy + 1} . {definition.definition}</p> {meaning.partOfSpeech === 'noun' ? <p>{meaning.synonyms[idy]}</p> : ''} 
                </>
                              ))}
             { <hr /> }</div>
       ))}
        </div>
      ))}
    </div>
    </>
  );
};

