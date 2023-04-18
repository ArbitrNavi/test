import React, {useState} from 'react';
import styles from "./search.module.css";
import search from "./assets/search.svg";
import {useDispatch, useSelector} from "react-redux";
import {setValue} from "../../../store/features/searchFeatures/searchSlice";
import {Link} from "react-router-dom";

const Search = ({placeholder}) => {
    const value = useSelector((state) => state.search.value);
    const dispatch = useDispatch();

    return (
        <div className={styles.search}>
            <input value={value} onChange={(event) => dispatch(setValue(event.target.value))} placeholder={placeholder}
                   type="text" className={styles.input}/>
            <Link to={`${value}`} className={styles.button}>
                <img src={search} alt=""/>
            </Link>
        </div>
    );
};

export default Search;