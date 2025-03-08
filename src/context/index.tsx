import { createContext, useState } from "react";
import { ProductProps } from "../types/product";

interface ShoppingCartContextType {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  cartProducts: ProductProps[];
  setCartProducts: React.Dispatch<React.SetStateAction<ProductProps[]>>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const ShoppingCartContext = createContext<ShoppingCartContextType>(
  {} as ShoppingCartContextType
);

interface ShoppingCartProviderProps {
  children: React.ReactNode;
}

export const ShoppingCartProvider = ({
  children,
}: ShoppingCartProviderProps) => {
  const [count, setCount] = useState<number>(0);
  const [cartProducts, setCartProducts] = useState<ProductProps[]>([]);

  return (
    <ShoppingCartContext.Provider
      value={{ count, setCount, cartProducts, setCartProducts }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
