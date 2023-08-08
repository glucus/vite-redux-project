import { useEffect, useMemo } from "react"
import { useParams } from "react-router-dom"
import { Group, Loader, Center, Text, Stack } from "@mantine/core"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { fetchAuthorAsync, authorStateSelector } from "./authorSlice"
import { AuthorInfo } from "./authorInfo"

export const Author = () => {
  const { authorId } = useParams<{ authorId: string }>()

  const { author, status } = useAppSelector(authorStateSelector)
  const dispatch = useAppDispatch()

  useEffect(() => {
    // authorId обязательный параметр в роуте, но за счет useParams становится опциональным
    if (authorId) {
      dispatch(fetchAuthorAsync({ authorId }))
    }
  }, [authorId, dispatch])

  return useMemo(() => {
    switch (status) {
      case "loading": {
        return (
          <Center>
            <Loader />
          </Center>
        )
      }
      case "failed": {
        return (
          <Group>
            <Text>Failed loading content</Text>
          </Group>
        )
      }
      case "success": {
        if (author) {
          return (
            <Stack>
              <AuthorInfo author={author} />
            </Stack>
          )
        } else {
          return (
            <Group>
              <Text>No authors found</Text>
            </Group>
          )
        }
      }
      default:
        return null
    }
  }, [author, status])
}
