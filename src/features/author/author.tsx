import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { Group, Loader, Center, Text, Stack } from "@mantine/core"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { fetchAuthorAsync, authorStateSelector } from "./authorSlice"
import { AuthorInfo } from "./authorInfo"
import { PostsByAuthor } from "./postsByAuthor"

export const Author = () => {
  let { authorId } = useParams()

  const { author, status } = useAppSelector(authorStateSelector)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchAuthorAsync({ authorId }))
  }, [authorId, dispatch])

  if (status === "loading") {
    return (
      <Center>
        <Loader />
      </Center>
    )
  }
  if (status === "failed") {
    return (
      <Group>
        <Text>Failed loading content</Text>
      </Group>
    )
  }
  if (status === "success" && author) {
    return (
      <Stack>
        <AuthorInfo author={author} />
        <PostsByAuthor />
      </Stack>
    )
  }
  if (status === "success" && !author) {
    return (
      <Group>
        <Text>No authors found</Text>
      </Group>
    )
  }
  return null
}
