import React from "react"

import { MainPage } from "./mainPage"
import { AuthorPage } from "./authorPage"

export const routes = [
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "authors/:authorId",
    element: <AuthorPage />,
  },
]
