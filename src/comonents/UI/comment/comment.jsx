import React, {useState} from 'react';
import styles from "./comment.module.css";
import comment from "./assets/comment.svg";


const Comment = ({placeholder, getValue}) => {
    const [value, setValue] = useState("")

    return (
        <div className={styles.comment}>
            <input value={value} onChange={(e) => setValue(e.target.value)}  placeholder={placeholder} type="text" className={styles.input} />
            <button onClick={() => {
                getValue(value)
            }} className={styles.button}>
                <img src={comment} alt=""/>
            </button>
        </div>
    );
};

export default Comment;