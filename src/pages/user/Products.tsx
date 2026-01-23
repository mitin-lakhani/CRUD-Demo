function Products() {
    return (
        <div className="grid grid-cols-4">
            <div className="w-80 border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">

                {/* Image */}
                <img
                    src="src/assets/product-1.jpg"
                    className="w-full h-48 object-cover"
                    alt="product"
                />

                {/* Content */}
                <div className="p-4 space-y-3">

                    {/* Title */}
                    <h3 className="font-semibold text-lg text-white">
                        This Product
                    </h3>

                    {/* Price & Category */}
                    <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-green-600">
                            $300
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
                        <span className="font-medium text-neutral-500">
                            Available Qty
                        </span>
                        <span className="font-bold text-blue-600 text-lg">
                            25
                        </span>
                    </div>

                </div>
            </div>
            <div className="w-80 border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">

                {/* Image */}
                <img
                    src="src/assets/product-1.jpg"
                    className="w-full h-48 object-cover"
                    alt="product"
                />

                {/* Content */}
                <div className="p-4 space-y-3">

                    {/* Title */}
                    <h3 className="font-semibold text-lg text-white">
                        This Product
                    </h3>

                    {/* Price & Category */}
                    <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-green-600">
                            $300
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
                        <span className="font-medium text-neutral-500">
                            Available Qty
                        </span>
                        <span className="font-bold text-blue-600 text-lg">
                            25
                        </span>
                    </div>

                </div>
            </div>
            <div className="w-80 border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">

                {/* Image */}
                <img
                    src="src/assets/product-1.jpg"
                    className="w-full h-48 object-cover"
                    alt="product"
                />

                {/* Content */}
                <div className="p-4 space-y-3">

                    {/* Title */}
                    <h3 className="font-semibold text-lg text-white">
                        This Product
                    </h3>

                    {/* Price & Category */}
                    <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-green-600">
                            $300
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
                        <span className="font-medium text-neutral-500">
                            Available Qty
                        </span>
                        <span className="font-bold text-blue-600 text-lg">
                            25
                        </span>
                    </div>

                </div>
            </div>
            <div className="w-80 border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">

                {/* Image */}
                <img
                    src="src/assets/product-1.jpg"
                    className="w-full h-48 object-cover"
                    alt="product"
                />

                {/* Content */}
                <div className="p-4 space-y-3">

                    {/* Title */}
                    <h3 className="font-semibold text-lg text-white">
                        This Product
                    </h3>

                    {/* Price & Category */}
                    <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-green-600">
                            $300
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
                        <span className="font-medium text-neutral-500">
                            Available Qty
                        </span>
                        <span className="font-bold text-blue-600 text-lg">
                            25
                        </span>
                    </div>

                </div>
            </div>

        </div>
    )
}
export default Products;