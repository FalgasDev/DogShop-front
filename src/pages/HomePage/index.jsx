import Header from "../../components/Header";
import ProductCard from "../../components/ProductCard";
import { Container, RecomendedProducts } from "./style";

export default function HomePage() {
  return (
    <>
      <Header />
      <Container>
        <RecomendedProducts>
          <h1>Produtos recomendados</h1>
          <div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </RecomendedProducts>
      </Container>
    </>
  )
}