import { useContext } from "react";

import { Button } from "../Button";
import { ProductListContext } from "../../Providers/productList";
import { CartContext } from "../../Providers/cart";

import { Card } from "./styles";

function ProductCard() {
  const { products } = useContext(ProductListContext);
  const { addCart } = useContext(CartContext);

  return (
    <Card>
      {products.map((element, index) => (
        <div key={index}>
          <h3>{element.name}</h3>
          <img src={element.img} alt="Imagem do produto" />
          <h4>R$ {element.price},00</h4>
          <Button onClick={() => addCart(element)}>Comprar</Button>
        </div>
      ))}
    </Card>
  );
}

export default ProductCard;
