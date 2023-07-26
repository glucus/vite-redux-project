import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { store } from "./app/store"
import { MainPage } from "./routes/mainPage"
import React from "react"
import { BrowserRouter, MemoryRouter } from "react-router-dom"
import { POSTS } from "./features/posts/mocks"
import { AuthorPage } from "./routes/authorPage"
import { AUTHORS } from "./features/author/mocks"
import { Regex } from "tabler-icons-react"
import { FilteredPostsPage } from "./routes/filteredPosts"

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

test("filtered page should render posts for author", async () => {
  const route = "/filtered?filterBy=author&query=EnidMerritt"

  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[route]}>
        <FilteredPostsPage />
      </MemoryRouter>
    </Provider>,
  )

  const authorName = await screen.findByText(/Enid Merritt/i)
  expect(authorName).toBeVisible()

  const items = screen.getAllByTestId("post")
  expect(items).toHaveLength(1)
})

test("filtered page should render posts for message text", async () => {
  const query = "ad"
  const route = `filtered?filterBy=message&query=${query}`

  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[route]}>
        <FilteredPostsPage />
      </MemoryRouter>
    </Provider>,
  )

  const authorName1 = await screen.findByText(/Josefa Dillon/i)
  const authorName2 = await screen.findByText(/Wolfe Strickland/i)
  expect(authorName1).toBeVisible()
  expect(authorName2).toBeVisible()

  const items = screen.getAllByTestId("post")
  expect(items).toHaveLength(2)
})

test("filtered page should render No posts found for message text that is not in mocks", async () => {
  const query = "ffffff"
  const route = `filtered?filterBy=message&query=${query}`

  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[route]}>
        <FilteredPostsPage />
      </MemoryRouter>
    </Provider>,
  )

  const text = await screen.findByText(/No matching posts found/i)
  expect(text).toBeVisible()
})
