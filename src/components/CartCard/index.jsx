import { useContext } from "react";
import { CartContext } from "../../Providers/cart";
import { Button } from "../Button";

import { Card } from "./style";

function CartCard() {
  const { cart } = useContext(CartContext);

  const { removeFromCart } = useContext(CartContext);

  return (
    <Card>
      {cart.map((element, index) => (
        <div key={index}>
          <h3>{element.name}</h3>
          <img src={element.img} alt="Imagem do produto" />
          <h4>R$ {element.price},00</h4>
          <Button onClick={() => removeFromCart(element)}>
            Remover do carrinho
          </Button>
        </div>
      ))}
    </Card>
  );
}

export default CartCard;
