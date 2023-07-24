import React from "react"
import { Header, Flex, rem } from "@mantine/core"
import { HomeButton } from "./homeButton"
import { AddPost } from "../features/addPost/addPost"

const HEADER_HEIGHT = rem(60)

export const AppHeader = () => (
  <Header height={HEADER_HEIGHT}>
    <Flex p="sm" gap="sm" justify="flex-end">
      <HomeButton />
      <AddPost />
    </Flex>
  </Header>
)
