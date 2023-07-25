import { useEffect } from "react"
import { useParams } from "react-router-dom"

import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { filteredPostsStateSelector } from "./filteredPostsSlice"
import { fetchFilteredPostsAsync } from "./filteredPostsSlice"
import { Post } from "../../components/post"
import { Stack, Center, Loader, Title } from "@mantine/core"
import { Text } from "@mantine/core"

export const FilteredPosts = () => {
  const { filteredPosts, status } = useAppSelector(filteredPostsStateSelector)
  const dispatch = useAppDispatch()

  let { authorId } = useParams()

  useEffect(() => {
    if (status === "idle" && authorId) {
      dispatch(fetchFilteredPostsAsync({ authorId }))
    }
  }, [authorId, dispatch, fetchFilteredPostsAsync])

  if (status === "loading") {
    return (
      <Center>
        <Loader size="sm" variant="dots" />
      </Center>
    )
  }
  if (status === "failed") {
    return (
      <div>
        <Text>Failed loading content</Text>
      </div>
    )
  }
  if (status === "idle" && filteredPosts?.length > 0) {
    return (
      <>
        <Stack>
          <Title order={4}>Posts by author</Title>
          {filteredPosts.map((post) => (
            <Post post={post} key={post.id} />
          ))}
        </Stack>
      </>
    )
  }
  return null
}
