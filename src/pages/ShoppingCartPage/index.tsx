import Navbar from "../../components/Navbar";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context";

export default function ShoppingCartPage() {
  const context = useContext(ShoppingCartContext);

  return (
    <>
      <Navbar />
      <section className="product-detail grid grid-cols-1 md:grid-cols-2 gap-4 px-4 py-6 max-w-6xl container mx-auto">
        <h1 className="text-2xl uppercase font-bold">Your cart</h1>
        <ul>
          {context.cartProducts.map((product) => (
            <li key={product.id} className="flex items-center gap-4">
              <img
                className="max-w-[80px]"
                src={product.image}
                alt={product.title}
              />
              <p>{product.title}</p>
              <p className="font-bold text-2xl">${product.price}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
