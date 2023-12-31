import React from "react"
import { AppShell } from "@mantine/core"

import { MainPage } from "./mainPage"
import { AuthorPage } from "./authorPage"
import { AppHeader } from "../components/appHeader"
import { FilteredPostsPage } from "./filteredPosts"
import { ErrorPage } from "./errorPage"

export const routes = [
  {
    path: "/",
    element: (
      <AppShell header={<AppHeader />}>
        <MainPage />
      </AppShell>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "authors/:authorId",
    element: (
      <AppShell header={<AppHeader />}>
        <AuthorPage />
      </AppShell>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "filtered",
    element: (
      <AppShell header={<AppHeader />}>
        <FilteredPostsPage />
      </AppShell>
    ),
    errorElement: <ErrorPage />,
  },
]
