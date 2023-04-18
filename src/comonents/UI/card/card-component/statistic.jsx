import React from 'react';
import styles from "../card.module.css";

const Statistic = ({image, entity}) => {
    return (
        <div>
            <div className={styles.statisticImage}>
                <img src={image} alt=""/>
            </div>
            <p>
                {entity}
            </p>
        </div>
    );
};

export default Statistic;