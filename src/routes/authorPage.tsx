import { Container } from "@mantine/core"
import { Author } from "../features/author/author"
import { FilteredPosts } from "../features/filteredPosts/filteredPosts"

export const AuthorPage = () => {
  return (
    <Container>
      <Author />
      <FilteredPosts title="Posts by author" />
    </Container>
  )
}
