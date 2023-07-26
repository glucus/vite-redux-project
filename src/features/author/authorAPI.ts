// A mock function to mimic making an async request for data
import { AUTHORS } from "./mocks"
import { Author } from "./types"

export type FetchAuthorParams = { authorId: string }

const findAuthorById = (authorId: string) => AUTHORS[authorId] || null

/**
 * GET AUTHOR
 * Выдает данные по автору поста
 * @param authorId
 * @returns Author или Error
 */

export const fetchAuthor = ({ authorId }: FetchAuthorParams) => {
  const author = findAuthorById(authorId)

  return new Promise<{ data: Author | null }>((resolve) => {
    console.log(`fetching data for author ${authorId}`)
    setTimeout(() => resolve({ data: author }), 500)
  })
}
