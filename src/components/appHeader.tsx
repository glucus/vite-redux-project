import React from "react"
import { Header, Flex, rem } from "@mantine/core"
import { AddPost } from "../features/addPost/addPost"

const HEADER_HEIGHT = rem(60)

export const AppHeader = () => (
  <Header height={HEADER_HEIGHT}>
    <Flex p="sm" justify="flex-end">
      <AddPost />
    </Flex>
  </Header>
)
