import { Author } from "../author/types"

export type PostContents = {
  id: string
  author: Pick<Author, "id" | "image" | "firstName" | "lastName">
  message: string
  posted: string
}
