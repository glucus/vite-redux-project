export type Author = {
  id: string
  image: string
  age: number
  firstName: string
  lastName: string
  email: string
  about: string
  registered: string
}

export type PostContents = {
  id: string
  author: Author
  message: string
  posted: string
}
