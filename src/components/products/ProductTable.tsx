import type { Product } from "@/utils/types";
import { useState } from "react";

import ConfirmDialog from "../ui/ShowDialog";



// import ConfirmDialog from "../ui/ShowDialog";
// import { useState } from "react";

interface Props {
  products: Product[];
  onEdit: (product: Product) => void;
  onDelete: (id: number) => void;
}


const ProductTable = ({ products, onDelete, onEdit }: Props) => {

  const [isOpean, setShowDialog] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
     <>
    <div className="overflow-x-auto bg-background  text-text w-full rounded-xl border shadow py-5 px-5 ">
      

      {/* <button className="flex justify-end p-2  border">AddProduct</button> */}
     
      <div>
        <table className="w-full text-left  ">
          <thead className="">
            <tr>
              <th>Id</th>
              <th className="p-3">Name</th>
              <th className="p-3">Image</th>
              <th className="p-3">Category</th>
              <th className="p-3">Price</th>
              <th className="p-3">Qty</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product, index) => (
              <tr
                key={product.id}
                className="border-t"
              >
                <td key={index}>{index + 1}</td>
                <td className="p-3 font-medium">{product.title}</td>
                <td className="p-3">
                  {product.image && (
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-12 w-12 object-cover rounded"
                    />
                  )}
                </td>
                <td className="p-3">{product.categories}</td>

                <td className="p-3">₹ {product.price}</td>

                <td className="p-3">{product.qty}</td>

                <td className="p-3">
                  <div className="flex justify-center gap-4">
                    <button onClick={() => {
                      onEdit(product)
                    }} className=" border p-2  cursor-pointer">
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        setSelectedId(product.id);
                        setShowDialog(true);
                      }}
                      className="border p-2 cursor-pointer text-red-500"
                    >
                      Delete
                    </button>

                  </div>
                </td>
              </tr>
            ))}

            {products.length === 0 && (
              <tr>
                <td
                  colSpan={5}
                  className="text-center p-6 text-gray-500"
                >
                  No products found
                </td>
              </tr>
            )}
          </tbody>
        </table>

      </div>
      <ConfirmDialog
        isOpen={isOpean}
        title="Delete Product"
        message="Are you sure you want to delete this product?"
        confirmText="Delete"
        cancelText="Cancel"
        onConfirm={() => {
          if (selectedId !== null) {
            onDelete(selectedId);
          }
        }}
        onClose={() => setShowDialog(false)}
      />
    </div>
    </>
  );
};

export default ProductTable;


