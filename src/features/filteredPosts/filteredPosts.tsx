import { useEffect } from "react"

import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { filteredPostsStateSelector } from "./filteredPostsSlice"
import { postsStateSelector } from "../posts/postsSlice"
import { fetchFilteredPostsAsync } from "./filteredPostsSlice"
import { Post } from "../../components/post"
import { Stack, Center, Loader, Title } from "@mantine/core"
import { Text } from "@mantine/core"
import { useSearchParams } from "react-router-dom"

type Params = {
  title: string
}

export const FilteredPosts = ({ title }: Params) => {
  let [searchParams] = useSearchParams()

  const { filteredPosts, status: filteredPostsStatus } = useAppSelector(
    filteredPostsStateSelector,
  )
  const { posts, status } = useAppSelector(postsStateSelector)
  const dispatch = useAppDispatch()

  const filterBy = searchParams?.get("filterBy")
  const query = searchParams?.get("query")

  useEffect(() => {
    if (
      filteredPostsStatus === "idle" &&
      filterBy &&
      query &&
      status === "idle" &&
      posts
    ) {
      // TODO: фильтрация на API, posts тут передаются чтобы фильтровались недавние результаты в моках
      dispatch(fetchFilteredPostsAsync({ filterBy, query, posts }))
    }
  }, [filterBy, query, dispatch, fetchFilteredPostsAsync, posts])

  if (filteredPostsStatus === "loading") {
    return (
      <Center>
        <Loader size="sm" variant="dots" />
      </Center>
    )
  }
  if (filteredPostsStatus === "failed") {
    return <Text>Failed loading content</Text>
  }
  if (filteredPostsStatus === "idle" && filteredPosts?.length > 0) {
    return (
      <>
        <Stack>
          <Title order={3}>{title}</Title>
          {filteredPosts.map((post) => (
            <Post post={post} key={post.id} />
          ))}
        </Stack>
      </>
    )
  }
  if (filteredPostsStatus === "idle" && filteredPosts?.length === 0) {
    return (
      <Stack>
        <Title order={3}>{title}</Title>
        <Text>No matching posts found</Text>
      </Stack>
    )
  }
  return null
}
