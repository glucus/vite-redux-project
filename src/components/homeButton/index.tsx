import { Button } from "@mantine/core"
import { Link } from "react-router-dom"

import styles from "./index.module.css"

export const HomeButton = () => {
  return (
    <Link to={"/"} className={styles.link}>
      <Button
        variant="gradient"
        gradient={{ from: "teal", to: "blue", deg: 60 }}
      >
        Home
      </Button>
    </Link>
  )
}
