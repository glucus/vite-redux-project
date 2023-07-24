import { Container } from "@mantine/core"
import { Author } from "../features/author/author"
import { PostsByAuthor } from "../features/postsByAuthor/postsByAuthor"

export const AuthorPage = () => {
  return (
    <Container>
      <Author />
      <PostsByAuthor />
    </Container>
  )
}
