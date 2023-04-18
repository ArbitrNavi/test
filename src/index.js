import React from 'react';
import ReactDOM from 'react-dom/client';
import "./global.css";
import {Provider} from "react-redux";
import store from "./store/store";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Content from "./comonents/content/content";
import SearchPage from "./SearchPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <SearchPage />,
        children: [
            {
                path: ":value",
                element: <Content />,
            }
        ],
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);


