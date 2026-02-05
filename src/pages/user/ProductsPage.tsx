// import ProductCard from "@/components/products/ProductCard";
// import { products} from "@/utils/products";

import ProductCard from "@/components/products/ProductCard";
import type { Product } from "@/utils/types";
import { useEffect, useState } from "react";


// show product using create typescript objects..
// const Products = ()=>{
//     return (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center mt-3 md:mt-5 p-4">
//         {products.map((item)=>(
//             <ProductCard 
//                  product={item}
//             />
//         ))}
//         </div>
//     );
// }

// export default Products;

// show product list using api

const Products = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
         fetch("https://fakestoreapi.com/products")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch Products");
                }
                return res.json();
            })
            .then((data) => {
                const formmatedData: Product[] = data.map((item: any) => ({
                    id: item.id,
                    title: item.title,
                    price: item.price,  
                    category: item.category,
                    qty: 10,
                    image: item.image,

                }));
                setProducts(formmatedData);
                setLoading(true);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);
    if (error) return <p className="text-center text-red-500">{error}</p>;

    return (
        <div className="ml-50 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 place-items-center mt-3 md:mt-5 p-4">
            {products.map((product)=>(
                <ProductCard product={product} />
            ))}
        </div>
    )
}
export default Products;
