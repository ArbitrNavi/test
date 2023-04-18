import React from "react";
import Header from "./comonents/header/header";
import {Outlet} from "react-router-dom";

function SearchPage() {
    return (
        <div className="App">
            <Header />
            <Outlet />
        </div>
    );
}

export default SearchPage;
