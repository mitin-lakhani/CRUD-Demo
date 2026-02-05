import type { Product } from "@/utils/types";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="w-full max-w-sm border rounded-2xl overflow-hidden shadow-sm hover:shadow-violet-500 transition">

      {/* Image */}
      <img
        src={product.image}
        className="w-full h-48 object-cover"
        alt={product.title}
      />

      {/* Content */}
      <div className="p-4 space-y-3 card bg-background text-text">

        {/* Title */}
        <h3 className="font-semibold text-lg ">
          {product.title}
        </h3>

        {/* Price & Category */}
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-green-600">
            ₹{product.price}
          </span>

          <select className="border rounded-md px-2 py-1 text-sm">
            <option className="text-black">
              {product.category}
            </option>
          </select>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200" />

        {/* Quantity */}
        <div className="flex justify-between items-center text-sm">
          <span className="font-medium">
            Available Qty
          </span>
          <span className="font-bold text-blue-600 text-lg">
            {product.qty}
          </span>
        </div>

        <button
          className="mt-3 w-full border rounded-md p-2 cursor-pointer"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};
export default ProductCard;

