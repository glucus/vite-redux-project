import React from "react";

import App from '../App';
import {Author} from "../features/author/author";

export const routes = [
    {
        path: "/",
        element: <App />,
    },
    {
        path: "authors/:authorId",
        element: <Author />,
    },
]
