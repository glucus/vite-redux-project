import { useEffect, useMemo } from "react"

import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { authorStateSelector, fetchPostsByAuthorAsync } from "./authorSlice"
import { postsStateSelector } from "../posts/postsSlice"
import { Post } from "../../components/post"
import { Center, Loader, Stack, Text, Title } from "@mantine/core"
import { useParams } from "react-router-dom"

export const PostsByAuthor = () => {
  const { authorId } = useParams<{ authorId: string }>()

  const { postsByAuthor, postsByAuthorStatus } =
    useAppSelector(authorStateSelector)

  const { posts } = useAppSelector(postsStateSelector)
  const dispatch = useAppDispatch()

  useEffect(() => {
    // authorId обязательный параметр в роуте, но за счет useParams становится опциональным
    if (authorId) {
      // TODO: фильтрация на API, posts тут передаются чтобы фильтровались недавние результаты в моках
      dispatch(fetchPostsByAuthorAsync({ authorId, posts }))
    }
  }, [authorId, dispatch, posts])

  return useMemo(() => {
    switch (postsByAuthorStatus) {
      case "loading": {
        return (
          <Center>
            <Loader size="sm" variant="dots" />
          </Center>
        )
      }
      case "failed": {
        return <Text>Failed loading content</Text>
      }
      case "success": {
        if (postsByAuthor?.length > 0) {
          return (
            <>
              <Stack>
                <Title order={3}>Posts by author</Title>
                {postsByAuthor.map((post) => (
                  <Post post={post} key={post.id} />
                ))}
              </Stack>
            </>
          )
        } else {
          return (
            <Stack>
              <Title order={3}>Posts by author</Title>
              <Text>No matching posts found</Text>
            </Stack>
          )
        }
      }
      default:
        return null
    }
  }, [postsByAuthor, postsByAuthorStatus])
}
