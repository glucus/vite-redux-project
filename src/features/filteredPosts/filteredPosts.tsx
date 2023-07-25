import { useEffect } from "react"
import { useParams } from "react-router-dom"

import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { filteredPostsStateSelector } from "./filteredPostsSlice"
import { fetchFilteredPostsAsync } from "./filteredPostsSlice"
import { Post } from "../../components/post"
import { Stack, Center, Loader, Title } from "@mantine/core"
import { Text } from "@mantine/core"
import { useSearchParams } from "react-router-dom"

export const FilteredPosts = () => {
  let [searchParams] = useSearchParams()

  const { filteredPosts, status } = useAppSelector(filteredPostsStateSelector)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (status === "idle" && searchParams) {
      dispatch(fetchFilteredPostsAsync(searchParams))
    }
  }, [searchParams, dispatch, fetchFilteredPostsAsync])

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
          {filteredPosts.map((post) => (
            <Post post={post} key={post.id} />
          ))}
        </Stack>
      </>
    )
  }
  return null
}
