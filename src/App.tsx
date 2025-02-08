import "./App.css";
import { ProductCard } from "./components";
import { ProductProps } from "./types/product";
import { useFetch } from "./hooks/useFetch";

function App() {
  const {
    data: products,
    error,
    loading,
  } = useFetch<ProductProps[]>("https://fakestoreapi.com/products");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Ocurrio un error</p>;

  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 justify-items-center">
      {products?.map((product: ProductProps) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </section>
  );
}

export default App;
