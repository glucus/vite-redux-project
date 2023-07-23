// A mock function to mimic making an async request for data
import { AUTHORS} from "./mocks";
import { Author } from "./types"

export type FetchAuthorParams = { authorId: string }

const findAuthorById = (authorId: string) => AUTHORS[authorId] || null

export const fetchAuthor = ({ authorId }: FetchAuthorParams) => {
  // TODO: Add response type
  return new Promise<{ data: Author | null }>((resolve) => {
    const author = findAuthorById(authorId)
    setTimeout(() => resolve({ data: author }), 500)
  })
}
