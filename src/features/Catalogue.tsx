import React, { Suspense, useState } from "react";

const CreateProduct = React.lazy(() => import("../features/Onboard/CreateProduct"));

const ProductForm: React.FC = () => {
    const [showForm, setShowForm] = React.useState(false);
    const [delayLoading, setDelayLoading] = useState(false);

    const toggleCreateUserForm = () => {
        setDelayLoading(true);
        setTimeout(() => {
            setShowForm((prev) => !prev);
        }, 100);
    }

    return <>
        <main className="flex-1 p-4 overflow-auto">
            <div className="bg-white rounded shadow p-4 mb-4">
                <h2 className="text-xl font-semibold mb-2 text-gray-800">Create Product</h2>
                <button 
                    onClick={toggleCreateUserForm}
                    className="mt-4 rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                        Create Product
                </button>
            </div>
        </main>
        {/* Right Sidebar */}
            {showForm && (
            <Suspense fallback="loading...">
                <CreateProduct />
            </Suspense>
        )}
    </>
}

export default ProductForm;