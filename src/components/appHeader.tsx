import React from "react"
import { Header } from "@mantine/core"
import { AddPost } from "../features/addPost/addPost"

export const AppHeader = () => (
  <Header height="3em">
    <AddPost />
  </Header>
)
