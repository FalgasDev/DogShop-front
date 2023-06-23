import { Container } from "./style";
import { FaPaw } from "react-icons/fa"
import { GiHamburgerMenu } from "react-icons/gi"
import { IoMdCart } from "react-icons/io"

export default function Header() {
  return (
    <>
      <Container>
        <GiHamburgerMenu />
        <div>
          <FaPaw />
          <h1>DogShop</h1>
        </div>
        <IoMdCart />
      </Container>
    </>
  )
}