import { useEffect, useState } from "react";
import { getProducts, saveProducts } from "@/utils/productsStorage";
import type { Product } from "@/utils/types";
import ProductForm from "@/components/products/ProductForm";
import ProductTable from "@/components/products/ProductTable";



const ProductListing = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [showForm, setShowForm] = useState(false);

  // console.log("product values",products);
  useEffect(() => {
    setProducts(getProducts());
  },[]);
  const refreshProducts = () => {
    setProducts(getProducts());
    // setShowForm(true);
  };
  // console.log("refresh products",refreshProducts);
  const handleDelete = (id: number) => {
    const updated = products.filter((p) => p.id !== id);
    saveProducts(updated);
    setProducts(updated);
    
  };
  const handleEdit = (product:Product) => {
  setEditingProduct(product);

  setShowForm(true);
    
 // fill form with product values
};
  const handleClose = () =>{
    setEditingProduct(null);
    setShowForm(false);
 }
  return (
    <div className="p-8 space-y-6 ms-60">
      {/* Add Product Button */}
      <button onClick={() => setShowForm(!showForm)} className="border p-2 block  text-center cursor-pointer ">
        Add Product
      </button>
      {/* <button onClick={()=>setShowForm(!showForm)}></button> */}
        
      {/* Form */}      
      {showForm && (
        <ProductForm
          editingProduct={editingProduct}
          onSuccess={refreshProducts}
          onClose = {handleClose}      

        />
      )}
      {/* Table */}
      <ProductTable
        products={products}
        onEdit={handleEdit}
        onDelete={handleDelete} 
        />
    </div>
  );
};

export default ProductListing;

