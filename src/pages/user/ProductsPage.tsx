function Products() {
    return (
        <div className="grid grid-cols-4 mt-5  p-4">
            <div className="w-80 border  rounded-2xl overflow-hidden shadow-sm hover:shadow-violet-500 transition ">

                {/* Image */}
                <img
                    src="src/assets/product-1.jpg"
                    className="w-full h-48 object-cover"
                    alt="product"
                />

                {/* Content */}
                <div className="p-4 space-y-3 card bg-background text-text">

                    {/* Title */}
                    <h3 className="font-semibold text-lg text-text card">
                        technology 
                    </h3>

                    {/* Price & Category */}
                    <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-green-600">
                             Rs. 200
                        </span>

                        <select className="border rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
                            <option className="text-black">All Categories</option>
                            <option className="text-black">Electronics</option>
                            <option className="text-black">Clothing</option>
                            <option className="text-black">Furniture</option>
                        </select>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gray-200 card text-text" />

                    {/* Available Quantity */}
                    <div className="flex justify-between items-center text-sm">
                        <span className="font-medium  card text-text">
                            Available Qty
                        </span>
                        <span className="font-bold text-blue-600 text-lg">
                            25
                        </span>
                    </div>
                    <button className="border rounded-md p-1 cursor-pointer w-full card text-text ">Buy Now</button>
                </div>
            </div>
            <div className="w-80 border rounded-2xl overflow-hidden shadow-sm hover:shadow-violet-500 transition">

                {/* Image */}
                <img
                    src="src/assets/product-1.jpg"
                    className="w-full h-48 object-cover"
                    alt="product"
                />

                {/* Content */}
                <div className="p-4 space-y-3">

                    {/* Title */}
                    <h3 className="font-semibold text-lg card text-text">
                        This Product
                    </h3>

                    {/* Price & Category */}
                    <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-green-600">
                             Rs. 700
                        </span>

                        <select className="border rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
                            <option className="text-black">All Categories</option>
                            <option className="text-black">Electronics</option>
                            <option className="text-black">Clothing</option>
                            <option className="text-black">Furniture</option>
                        </select>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gray-200 " />

                    {/* Available Quantity */}
                    <div className="flex justify-between items-center text-sm">
                        <span className="font-medium  card text-text">
                            Available Qty
                        </span>
                        <span className="font-bold text-blue-600 text-lg">
                            25
                        </span>
                    </div>
                    <button className="border w-full rounded-md p-1 cursor-pointer">Buy Now</button>

                </div>
            </div>
            <div className="w-80 border rounded-2xl overflow-hidden shadow-sm hover:shadow-violet-500 transition">

                {/* Image */}
                <img
                    src="src/assets/product-1.jpg"
                    className="w-full h-48 object-cover"
                    alt="product"
                />

                {/* Content */}
                <div className="p-4 space-y-3">

                    {/* Title */}
                    <h3 className="font-semibold text-lg  card text-text ">
                        This Product
                    </h3>

                    {/* Price & Category */}
                    <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-green-600">
                         Rs. 100
                        </span>

                        <select className="border rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
                            <option className="text-black">All Categories</option>
                            <option className="text-black">Electronics</option>
                            <option className="text-black">Clothing</option>
                            <option className="text-black">Furniture</option>
                        </select>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gray-200" />

                    {/* Available Quantity */}
                    <div className="flex justify-between items-center text-sm">
                        <span className="font-medium card text-text">
                            Available Qty
                        </span>
                        <span className="font-bold text-blue-600 text-lg">
                            25
                        </span>
                    </div>
                    <button className="border w-full rounded-md p-1 cursor-pointer">Buy Now</button>

                </div>
            </div>
            <div className="w-80 border rounded-2xl overflow-hidden shadow-sm hover:shadow-violet-500 transition">

                {/* Image */}
                <img
                    src="src/assets/product-1.jpg"
                    className="w-full h-48 object-cover"
                    alt="product"
                />

                {/* Content */}
                <div className="p-4 space-y-3">

                    {/* Title */}
                    <h3 className="font-semibold text-lg card text-text">
                        This Product
                    </h3>

                    {/* Price & Category */}
                    <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-green-600">
                            Rs.300
                        </span>

                        <select className="border rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
                            <option className="text-black">All Categories</option>
                            <option className="text-black">Electronics</option>
                            <option className="text-black">Clothing</option>
                            <option className="text-black">Furniture</option>
                        </select>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gray-200" />

                    {/* Available Quantity */}
                    <div className="flex justify-between items-center text-sm">
                        <span className="font-medium card text-text">
                            Available Qty
                        </span>
                        <span className="font-bold text-blue-600 text-lg">
                            25
                        </span>
                    </div>
                    <button className="border w-full  rounded-md p-1 cursor-pointer">Buy Now</button>

                </div>
            </div>

        </div>
    )
}
export default Products;