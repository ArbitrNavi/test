import {configureStore} from "@reduxjs/toolkit";
import searchReducer from "./features/searchFeatures/searchSlice";
import repositoryReducer from "./features/repositoryFeatures/repositorySlice";

export default configureStore({
    reducer: {
        search: searchReducer,
        repository: repositoryReducer,
    }
})