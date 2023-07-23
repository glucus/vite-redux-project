import React from "react";

import App from '../App';
import { AuthorPage } from "./author"

export const routes = [
    {
        path: "/",
        element: <App />,
    },
    {
        path: "authors/:authorId",
        element: <AuthorPage />,
    },
]
