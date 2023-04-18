import React, {useState} from 'react';
import Comment from "../comment/comment";
import Statistic from "./card-component/statistic";
import styles from "./card.module.css";
import eyes from "./assets/eyes.svg";
import star from "./assets/star.svg";
import Info from "../../info/info";

const Card = ({data}) => {
    const [open, setOpen] = useState(false);

    return (
        <div onClick={() => setOpen(!open)} className={styles.card}>
            <a href={data.html_url} className={styles.projectName}>{data.name}</a>
            <div className={styles.userInfo}>
                <div className={styles.avatar}>
                    <img src={data.owner.avatar_url} alt=""/>
                </div>
                <a href={data.owner.html_url} className={styles.userName}>
                    {data.owner.login}
                </a>
            </div>
            <div className={styles.statistic}>
                <Statistic image={eyes} entity={data.watchers_count} />
                <Statistic image={star} entity={data.stargazers_count} />
            </div>
            <Comment placeholder={"Комментарий к проекту"} />
        </div>
    );
};

export default Card;