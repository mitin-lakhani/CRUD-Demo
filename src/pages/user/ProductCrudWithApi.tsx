// import { Input } from "@/components/ui/Input";
// import { productcrudapischema, type ProductCrudApiValues, } from "@/validations/auth.schema";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useState } from "react";
// import { useForm } from "react-hook-form";

// function ProductCrudWithApi() {
//     const[editngProduct,setEditingProduct] = useState("");
//     const {
//         register,
//         handleSubmit,
//         reset,
//         formState: { errors },
//     } = useForm<ProductCrudApiValues>({
//         resolver: zodResolver(productcrudapischema)
//     })
//     const onSubmit = (data:ProductCrudApiValues) => {
//         console.log(data);

//         reset();        
//     }
//     const [showForm, setShowForm] = useState(false);

//     const onclose = () => {
//         setShowForm(false);
//     }
//     const handleEdit = () =>{
//         setShowForm(true);
//     }
//     const handleDelete = () =>{

//     }
//     return (
//         <div className="ms-60 ">
//             <div className="flex justify-center  items-center p-10">
//                 {
//                     showForm && (
//                        <form action="" className="border p-4 rounded-2xl w-1/3 flex  flex-col" onSubmit={handleSubmit(onSubmit)}>
//                             <h1 className="text-center pb-5">Product Form</h1>
//                             <div className="my-3">
//                                 <Input
//                                     label="Product Name"
                                   
//                                     {...register("productname")}
//                                     placeholder="Enter Product Name"
//                                     className="border w-full"
//                                     errorMsg={errors.productname?.message}

//                                 />
//                             </div>
//                             <div className="my-3">
//                                 <Input
//                                     label="Product Price"
//                                     {...register("productprice")}
//                                     placeholder="Enter Product Price"
//                                     className="border w-full"
//                                     errorMsg={errors.productprice?.message}
//                                 />
//                             </div>
//                             <div className="mt-3">
//                                 <Input
//                                     label="Product Qty"
                                    
//                                     {...register("productqty")}
//                                     placeholder="Enter Product Qty"
//                                     className="border w-full"
//                                     errorMsg={errors.productqty?.message}
//                                 />
//                             </div>
//                             <div className="mt-3">
//                                 <Input
//                                     label="Product Image"
//                                     {...register("productimage")}
//                                     placeholder="Enter Image URL"
//                                     className="border w-full"
//                                     errorMsg={errors.productimage?.message}
//                                 />

//                             </div>
//                             <div className="flex gap-4 mt-7">
//                                 <button type="submit" className="border text-center p-2 w-1/3 cursor-pointer block">{
//                                     editngProduct ? "add Product":"edit Product"
//                                 }</button>
//                                 <button className="border p-2 w-1/3 cursor-pointer text-center block" onClick={() => onclose()}>Cancel</button>
//                             </div>
//                         </form>
//                     )
//                 }
//             </div>
//             <button className="text-right border mb-2 p-2 cursor-pointer" onClick={()=>setShowForm(true)}>AddProduct</button>
//             {/* show product table ui */}
//             <div className="border p-5   mr-10 rounded-md">
//                 <table className="w-full">
//                     <thead className=" border-b mb-10">
//                         <tr>
//                             <th className="py-5">Id</th>
//                             <th className="py-5">Product Name</th>
//                             <th className="py-5">Product Price</th>
//                             <th className="py-5">Product Qty</th>
//                             <th className="py-5">Product Image</th>
//                             <th className="py-5">Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr className="text-center mt-10">
//                             <td className="py-3">1</td>
//                             <td className="py-3">Samsung</td>
//                             <td className="py-3">200</td>
//                             <td className="py-3">2</td>
//                             <td className="py-3">sdfs</td>
//                             <td className="py-3">
//                                 <button className="border mr-4 px-2 py-2 w-1/4 cursor-pointer" onClick={()=>handleEdit()}>Edit</button>
//                                 <button className="border px-2 py-2 w-1/4 cursor-pointer" onClick={()=>handleDelete()}>Delete</button>
//                             </td>
//                         </tr>
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     )
// }
// export default ProductCrudWithApi;