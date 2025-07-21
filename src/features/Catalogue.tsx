import React from "react";

const ProductForm: React.FC = () => {
    return <>
        <main className="flex-1 p-4 overflow-auto">
            <div className="bg-white rounded shadow p-4 mb-4">
                <h2 className="text-xl font-semibold mb-2 text-gray-800">Create Product</h2>
                <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <input
                                type="text"
                                maxLength={12}
                                placeholder="Product Name"
                            />
                        </div>
                    </div>
                </form>
            </div>
        </main>
    </>
}

export default ProductForm;