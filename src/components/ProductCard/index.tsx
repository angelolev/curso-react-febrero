import { ProductProps } from "../../types/product";

export default function ProductCard({ image, title, price, id }: ProductProps) {
  return (
    <div className="product-card shadow-xl p-2 rounded-lg bg-white w-full">
      <a href={`/product/${id}`}>
        <div className="product-image">
          <img src={image} className="max-w-[150px]" alt={title} />
        </div>
        <div className="product-information">
          <h3 className="text-lg font-bold mb-2">{title}</h3>
          <p className="text-2xl font-bold">${price}</p>
        </div>
      </a>
    </div>
  );
}
