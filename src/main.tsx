import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { AppShell, MantineProvider } from "@mantine/core"
import { routes } from "./routes"
import { store } from "./app/store"
import "./index.css"

const router = createBrowserRouter(routes, { basename: "/vite-redux-project" })

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <AppShell>
          <RouterProvider router={router} />
        </AppShell>
      </MantineProvider>
    </Provider>
  </React.StrictMode>,
)
