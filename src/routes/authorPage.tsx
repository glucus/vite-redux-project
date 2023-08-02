import { Container } from "@mantine/core"
import { Author } from "../features/author/author"
import { FilteredPosts } from "../features/filteredPosts/filteredPosts"
import { useEffect } from "react"
import { useSearchParams, useParams } from "react-router-dom"

export const AuthorPage = () => {
  let { authorId } = useParams()
  let [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    if (authorId) {
      setSearchParams({ filterBy: "author", query: authorId })
    }
  }, [authorId, setSearchParams])

  return (
    <Container>
      <Author />
      <FilteredPosts title="Posts by author" />
    </Container>
  )
}
