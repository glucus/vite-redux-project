import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { store } from "./app/store"
import { MainPage } from "./routes/mainPage"
import React from "react"
import { BrowserRouter } from "react-router-dom"
import { POSTS } from "./features/posts/mocks"

test("eventually renders posts heading and mock posts on main page", async () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
    </Provider>,
  )

  const header = await screen.findByText(/posts/i)
  expect(header).toBeVisible()

  const items = screen.getAllByTestId("post")
  expect(items).toHaveLength(POSTS.length)
})
