import { Cart, Container } from "./style";
import DogFood from "../../assets/DogFood.png"
import { IoMdCart } from "react-icons/io"

export default function ProductCard() {
  return (
    <Container>
      <img src={DogFood}/>
      <div>
        <h2>Ração Royal Canin Shih Tzu Adulto</h2>
        <p>R$ 173,37</p>
        <Cart>
          <IoMdCart />
        </Cart>
      </div>
    </Container>
  )
}