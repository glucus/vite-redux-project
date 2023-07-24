import { Button } from "@mantine/core"
import { useNavigate } from "react-router-dom"

export const HomeButton = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/")
  }
  return (
    <Button
      variant="gradient"
      gradient={{ from: "teal", to: "blue", deg: 60 }}
      onClick={handleClick}
    >
      Main page
    </Button>
  )
}
