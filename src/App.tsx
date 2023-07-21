import "./App.css"
import { Posts } from "./features/posts/posts"
import { AddPostModal } from "./features/addPost/addPostModal"

function App() {
  return (
    <div className="App">
      <AddPostModal />
      <Posts />
    </div>
  )
}

export default App
