import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import { store } from "./app/store"
import {MainPage} from "./routes/mainPage";

test("renders learn react link", () => {
  const { getByText } = render(
    <Provider store={store}>
      <MainPage />
    </Provider>,
  )

  expect(getByText(/posts/i)).toBeInTheDocument()
})
