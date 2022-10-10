import { ProductListProvider } from "./productList";
import { CartProvider } from "./cart";

export const Providers = ({ children }) => {
  return (
    <CartProvider>
      <ProductListProvider>{children}</ProductListProvider>
    </CartProvider>
  );
};
