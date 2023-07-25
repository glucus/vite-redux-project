import React from "react"
import { Header, Flex, rem } from "@mantine/core"
import { HomeButton } from "./homeButton"
import { AddPost } from "./addPost/addPost"
import { SearchField } from "./searchField/searchField"

const HEADER_HEIGHT = rem(60)

export const AppHeader = () => (
  <Header height={HEADER_HEIGHT}>
    <Flex p="sm" gap="sm" justify="flex-end">
      <HomeButton />
      <AddPost />
      <SearchField />
    </Flex>
  </Header>
)
