import { useEffect, useMemo } from "react"
import { useSearchParams } from "react-router-dom"

import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { filteredPostsStateSelector } from "./filteredPostsSlice"
import { postsStateSelector } from "../posts/postsSlice"
import { fetchFilteredPostsAsync } from "./filteredPostsSlice"
import { Post } from "../../components/post"
import { Stack, Center, Loader, Title } from "@mantine/core"
import { Text } from "@mantine/core"

export const FilteredPosts = () => {
  let [searchParams] = useSearchParams()

  const { filteredPosts, status: filteredPostsStatus } = useAppSelector(
    filteredPostsStateSelector,
  )
  const { posts } = useAppSelector(postsStateSelector)
  const dispatch = useAppDispatch()

  const query = searchParams?.get("query")

  useEffect(() => {
    if (query && posts) {
      // TODO: фильтрация на API, posts тут передаются чтобы фильтровались недавние результаты в моках
      dispatch(fetchFilteredPostsAsync({ query, posts }))
    }
  }, [dispatch, posts, query])

  return useMemo(() => {
    switch (filteredPostsStatus) {
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
        if (filteredPosts?.length > 0) {
          return (
            <>
              <Stack>
                <Title order={3}>Filtered results</Title>
                {filteredPosts.map((post) => (
                  <Post post={post} key={post.id} />
                ))}
              </Stack>
            </>
          )
        } else {
          return (
            <Stack>
              <Title order={3}>Filtered results</Title>
              <Text>No matching posts found</Text>
            </Stack>
          )
        }
      }
      default:
        return null
    }
  }, [filteredPosts, filteredPostsStatus])
}
