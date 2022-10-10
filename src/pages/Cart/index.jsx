import { useHistory } from "react-router";
import { useContext } from "react";
import { AiFillPlusCircle } from "react-icons/ai";

import { Button } from "../../components/Button";
import CartCard from "../../components/CartCard";
import { CartContext } from "../../Providers/cart";

import { Title, PageCard, Resumo, ShowBox } from "./style";

function Cart() {
  const history = useHistory();

  const { cart } = useContext(CartContext);

  const valor = cart
    .reduce((acc, currentValue) => acc + currentValue.price, 0)
    .toFixed(2);

  return (
    <PageCard>
      <Title>
        <h1>KenzieShop</h1>

        <Button onClick={() => history.push("/")}>
          <AiFillPlusCircle />
          Loja!
        </Button>
      </Title>
      {cart.length > 0 ? (
        <ShowBox>
          <CartCard />{" "}
          <Resumo>
            <h3>Resumo de compra</h3>
            <h4> {cart.length} itens</h4>
            Total R$ {valor}
          </Resumo>
        </ShowBox>
      ) : (
        <h3>Seu carrinho está vazio</h3>
      )}
    </PageCard>
  );
}

export default Cart;
