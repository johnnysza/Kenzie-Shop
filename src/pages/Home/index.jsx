import { useHistory } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";

import { Button } from "../../components/Button";
import ProductCard from "../../components/ProductCard";

import { Title, PageCard } from "./style";

function Home() {
  const history = useHistory();

  return (
    <div>
      <PageCard>
        <Title>
          <h1>KenzieShop</h1>
          <Button onClick={() => history.push("/cart")}>
            <BsCart3 />
            carrinho
          </Button>
        </Title>
        <ProductCard />
      </PageCard>
    </div>
  );
}

export default Home;
