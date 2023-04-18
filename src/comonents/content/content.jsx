import React, {useEffect, useState} from 'react';
import Card from "../UI/card/card";
import styles from "./content.module.css";
import axios from "axios";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setData} from "../../store/features/repositoryFeatures/repositorySlice";
import Info from "../info/info";

const Content = () => {
    const searchValue = useParams()
    const api = "https://api.github.com/search/repositories?q=";
    const data = useSelector((state) => state.repository.data)
    // const [open, setOpen] = useState(true);

    const dispatch = useDispatch();

    useEffect(() => {
        axios
            .get(api + searchValue.value).then((r) => dispatch(setData(r.data.items)) )
    }, [dispatch, searchValue])


    return (
        <div className="container">
            <div className={styles.content}>

                {
                    data.length === 0 ? ('') : data.map(data => <Card data={data} key={data.id}/>)
                }
                {/*{*/}
                {/*    // open ? <Info /> : ""*/}
                {/*// }*/}
            </div>
        </div>

    );
};

export default Content;