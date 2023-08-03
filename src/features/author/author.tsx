import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { Group, Loader, Center, Text } from "@mantine/core"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { fetchAuthorAsync, authorStateSelector } from "./authorSlice"
import { AuthorInfo } from "./authorInfo"

export const Author = () => {
  let { authorId } = useParams()

  const { author, status } = useAppSelector(authorStateSelector)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (authorId && authorId !== author?.id) {
      dispatch(fetchAuthorAsync({ authorId }))
    }
  }, [author, authorId, dispatch, status])

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
      <Group>
        <AuthorInfo author={author} />
      </Group>
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
