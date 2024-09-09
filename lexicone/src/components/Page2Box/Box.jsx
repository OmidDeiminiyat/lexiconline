import style from './Box.module.scss';
import React, { useState } from 'react';

export const Box = ({ onSearch }) => {
    

    return(
        <>
        <section className={style.searchBox}>
            <h1>About Lexiconline</h1>
        </section> 
        </>
    )
}