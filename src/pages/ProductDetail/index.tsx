import { useParams } from "react-router";
import { useFetch } from "../../hooks/useFetch";
import { ProductProps } from "../../types/product";

export default function ProductDetail() {
  const { id } = useParams();
  const {
    data: product,
    loading,
    error,
  } = useFetch<ProductProps>(`https://fakestoreapi.com/products/${id}`);

  if (loading) return <p>Loading product...</p>;
  if (error) return <p>There was an error</p>;

  return (
    <div>
      <h1>{product?.title}</h1>
      <img
        className="max-w-[150px]"
        src={product?.image}
        alt={product?.title}
      />
      <p>{product?.description}</p>
      <p>${product?.price}</p>
    </div>
  );
}
