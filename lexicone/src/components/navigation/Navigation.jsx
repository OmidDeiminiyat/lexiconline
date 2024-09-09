import style from './Navigation.module.scss';
import icone from './../../assets/books.png';
import { Link } from 'react-router-dom';
import React from 'react';

export const Nav = ({ children }) => {
    return(
        <>
        <nav className={style.nav}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/pages/About">About</Link></li>
                <li><Link to="https://dictionaryapi.dev">Api</Link></li>
            </ul>
        </nav>
        <div className={style.halfCircle}>
            <img src={icone} alt="" />
        </div>
       
        </>
    )
}