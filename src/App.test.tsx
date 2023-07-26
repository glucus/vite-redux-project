import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { store } from "./app/store"
import { MainPage } from "./routes/mainPage"
import React from "react"
import { BrowserRouter } from "react-router-dom"
import { POSTS } from "./features/posts/mocks"
import { AuthorPage } from "./routes/authorPage"

test("eventually renders posts heading and mock posts on main page", async () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
    </Provider>,
  )

  const title = await screen.findByText(/posts/i)
  expect(title).toBeVisible()

  const items = screen.getAllByTestId("post")
  expect(items).toHaveLength(POSTS.length)
})

test("author page without params should render not found text", async () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <AuthorPage />
      </BrowserRouter>
    </Provider>,
  )

  const notAuthorsFound = await screen.findByText(/No authors found/i)
  const notPostsFound = await screen.findByText(/No matching posts found/i)
  expect(notAuthorsFound).toBeVisible()
  expect(notPostsFound).toBeVisible()
})
