import React from "react"
import { AppShell } from "@mantine/core"

import { MainPage } from "./mainPage"
import { AuthorPage } from "./authorPage"
import { AppHeader } from "../components/appHeader"

export const routes = [
  {
    path: "/",
    element: (
      <AppShell header={<AppHeader />}>
        <MainPage />
      </AppShell>
    ),
  },
  {
    path: "authors/:authorId",
    element: (
      <AppShell header={<AppHeader />}>
        <AuthorPage />
      </AppShell>
    ),
  },
]
