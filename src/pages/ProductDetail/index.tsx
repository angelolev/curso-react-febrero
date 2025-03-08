import { useParams } from "react-router";
import { useFetch } from "../../hooks/useFetch";
import { ProductProps } from "../../types/product";
import Navbar from "../../components/Navbar";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context";

export default function ProductDetail() {
  const context = useContext(ShoppingCartContext);
  const { id } = useParams();
  const {
    data: product,
    loading,
    error,
  } = useFetch<ProductProps>(`https://fakestoreapi.com/products/${id}`);

  const addToCart = () => {
    context.setCount(context.count + 1);
    if (product) {
      context.setCartProducts([...context.cartProducts, product]);
    }
  };

  if (loading) return <p>Loading product...</p>;
  if (error) return <p>There was an error</p>;

  return (
    <>
      <Navbar />
      <section className="product-detail grid grid-cols-1 md:grid-cols-2 gap-4 px-4 py-6 max-w-6xl container mx-auto">
        <div className="product-image flex justify-center items-center mb-6">
          <img
            className="max-w-[150px]"
            src={product?.image}
            alt={product?.title}
          />
        </div>
        <div className="product-information">
          <h1 className="text-xl uppercase font-bold mb-4 lg:text-5xl">
            {product?.title}
          </h1>
          <p className="font-bold text-2xl mb-2 lg:text-3xl">
            $ {product?.price}
          </p>
          <p className="text-black/60 text-sm lg:text-base">
            {product?.description}
          </p>
          <div className="product-actions mt-6">
            <button
              className="rounded-full bg-black text-white px-6 py-3 cursor-pointer"
              onClick={addToCart}
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
