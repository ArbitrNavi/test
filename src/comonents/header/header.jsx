import React from 'react';
import styles from "./header.module.css";
import Search from "../UI/search/search";

const Header = () => {
    return (
        <div className={styles.header}>
            <div className="container">
                <Search placeholder={"Начните вводить текст для поиска (не менее трех символов)"}/>
            </div>
        </div>
    );
};

export default Header;