import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { postsSelector, statusSelector } from "../posts/postsSlice"
import { fetchPostsAsync } from "../posts/postsSlice"
import { useEffect } from "react"
import { Post } from "../../components/post"

export const Posts = () => {
  const posts = useAppSelector(postsSelector)
  const status = useAppSelector(statusSelector)
  const dispatch = useAppDispatch()

  useEffect(() => {
    // TODO: можно добавить еще условия
    if (!posts) {
      fetchPostsAsync()
    }
  }, [posts, fetchPostsAsync])

  if (posts) {
    return (
      <div>
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    )
  }
  return null
}
