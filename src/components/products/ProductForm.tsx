import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { getProducts, saveProducts } from "@/utils/productsStorage";
import type { Product } from "@/utils/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/Input";
import { productschema, type productFormValues } from "@/validations/auth.schema";
import { Select } from "../ui/Select";
import { toast } from "sonner";

interface Props {
  editingProduct: Product | null;
  onClose: () => void;
  onSuccess:()=>void;
}

const ProductForm = ({ editingProduct, onClose,onSuccess }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<productFormValues>({
    resolver: zodResolver(productschema),
  });

  useEffect(() => {
    if (editingProduct) {
      reset(editingProduct);
    } else {
      reset({
        title: "",
        price: 0,
        qty: 0,
        categories: "",
        image: "",
      });
    }
  }, [editingProduct, reset]);

  const onSubmit = (data: productFormValues) => {
    const products = getProducts();

    if (editingProduct) {
      const updated = products.map((p) =>
        p.id === editingProduct.id ? { ...p, ...data } : p
      );
      saveProducts(updated);
      toast.success("Product updated successfully");
      
    } else {
      const newProduct = {
        id: Date.now(),
        ...data,
      };
      saveProducts([...products, newProduct]);
      toast.success("Product added successfully");
    }

    reset();
    onClose(); // close form/modal
// to show the table data given form
    onSuccess(); 
  };

  return (
    <div className="w-full flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-2xl bg-background border text-text rounded-2xl shadow-lg p-6 md:p-8 space-y-6"
      >
       

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            type="text"
            label="Product Name"
            {...register("title")}
            placeholder="Product Name"
            errorMsg={errors.title?.message}
          />

          <Input
            label="Product Price"
            {...register("price", { valueAsNumber: true })}
            placeholder="Enter Price"
            errorMsg={errors.price?.message}
          />

          <div className="flex flex-col">
            <label className="font-semibold mb-1">Category</label>
            <Select
              {...register("categories")}
              className="border rounded-lg px-3 py-2"
            >
              <option value="" selected>Select Category</option>
              <option value="Shoes">Shoes</option>
              <option value="Mobile">Mobile</option>
              <option value="Clothing">Clothing</option>
              <option value="Laptops">Laptops</option>
              <option value="Groceries">Groceries</option>
            </Select>
            {errors.categories && (
              <p className="text-red-500 text-sm">
                {errors.categories.message}
              </p>
            )}
          </div>

          <Input
            label="Product Quantity"
            {...register("qty", { valueAsNumber: true })}
            placeholder="Enter Quantity"
            errorMsg={errors.qty?.message}
          />

          <div className="md:col-span-2">
            <Input
              label="Product Image URL"
              {...register("image")}
              placeholder="https://example.com/image.jpg"
              errorMsg={errors.image?.message}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2 cursor-pointer rounded-lg border border-gray-300 text-white hover:bg-black transition"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-2 cursor-pointer rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            {editingProduct ? "Update Product" : "Add Product"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
