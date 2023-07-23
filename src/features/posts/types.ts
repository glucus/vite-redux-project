import { Author } from "../author/types"

export type PostContents = {
  id: string
  author: Author
  message: string
  posted: string
}
