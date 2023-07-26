import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { Group, Loader, Center, Text } from "@mantine/core"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { fetchAuthorAsync, authorStateSelector } from "../author/authorSlice"
import { AuthorInfo } from "./authorInfo"

export const Author = () => {
  let { authorId } = useParams()

  const { author, status } = useAppSelector(authorStateSelector)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (status === "idle" && authorId) {
      dispatch(fetchAuthorAsync({ authorId }))
    }
  }, [authorId, dispatch, fetchAuthorAsync])

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
  if (status === "idle" && author) {
    return (
      <Group>
        <AuthorInfo author={author} />
      </Group>
    )
  }
  if (status === "idle" && !author) {
    return (
      <Group>
        <Text>No authors found</Text>
      </Group>
    )
  }
  return null
}
