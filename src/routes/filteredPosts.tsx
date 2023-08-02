import { Container } from "@mantine/core"
import { FilteredPosts } from "../features/filteredPosts/filteredPosts"

export const FilteredPostsPage = () => {
  return (
    <Container>
      <FilteredPosts title="Filtered results" />
    </Container>
  )
}
