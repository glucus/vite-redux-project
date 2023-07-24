import { Container } from "@mantine/core"
import { Posts } from "./features/posts/posts"
import { AddPostModal } from "./features/addPost/addPostModal"

function App() {
  return (
    <Container>
      <AddPostModal />
      <Posts />
    </Container>
  )
}

export default App
