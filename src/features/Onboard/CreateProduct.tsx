import React, { useState } from "react";
import { CheckboxGroup } from "../../Components/CheckboxGroup";

const CreateProduct: React.FC = () => {
  const [selectedColors] = useState<string[]>(["red", "blue", "green"]);
  const [selectedSizes] = useState<string[]>(["medium", "large"]);
  const [selectedBrands] = useState<string[]>(["apple", "samsung"]);
  const initialFormData = {
    productName: "Apple iPhone 14 Pro",
    productCategory: "",
    productColors: selectedColors,
    productSizes: selectedSizes,
    productBrands: selectedBrands,
  };

  const [formData, setFormData] = useState(initialFormData);
  //   const [productName, setProductName] = useState(formData.productName);
  const colorOptions = [
    { label: "Red", value: "red" },
    { label: "Blue", value: "blue" },
    { label: "Green", value: "green" },
    { label: "Yellow", value: "yellow" },
    { label: "Black", value: "black" },
    { label: "White", value: "white" },
    { label: "Purple", value: "purple" },
    { label: "Pink", value: "pink" },
  ];
  const sizeOptions: any[] = [
    { label: "S", value: "small" },
    { label: "M", value: "medium" },
    { label: "L", value: "large" },
    { label: "XL", value: "extra-large" },
    { label: "XXL", value: "extra-extra-large" },
    { label: "XXXL", value: "extra-extra-extra-large" },
  ];
  const brandOptions = [
    { label: "Apple", value: "apple" },
    { label: "Samsung", value: "samsung" },
    { label: "HP", value: "hp" },
    { label: "Sony", value: "sony" },
    { label: "Xiaomi", value: "xiaomi" },
    { label: "Nokia", value: "nokia" },
    { label: "LG", value: "lg" },
  ];

  const handleInput = (event: any) => {
    console.log("Input Changed: ", event.target.value);
    setFormData((prev) => {
      return {
        ...prev,
        productName: event.target.value,
      };
    });
  };

  const dropdownChange = (event: any) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleColorsChange = (newSelection: string[]) => {
    setFormData((prev) => ({
      ...prev,
      productColors: newSelection,
    }));
  };

  const handleSizesChange = (newSelection: string[]) => {
    setFormData((prev) => ({
      ...prev,
      productSizes: newSelection,
    }));
  };

  const handleBrandChange = (newSelection: string[]) => {
    setFormData((prev) => ({
      ...prev,
      productBrands: newSelection,
    }));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("Form Data Submitted: ", formData);
  };

  const handleReset = (event: any) => {
    event.preventDefault();
    setFormData(initialFormData);
  };

  return (
    <>
      <aside className="w-64 bg-gray-100 p-4 shrink-0 overflow-auto">
        <div className="text-gray-600">
          <div className="relative flex flex-col rounded-xl bg-transparent">
            {/* 
                                Name - Textbox,
                                Description - Textarea,
                                Category - Dropdown,
                                Size - Dropdown [Small, Medium, Large],

                                Price - Number [e.g. 100.00],
                                Images - File Upload [multiple files],
                                Stock - SKU (optional) - Textbox,
                                Tags (optional) - Textbox,
                                Colors (optional) - checkbox group [Red, Blue, Green],
                                Quantity - Number,
                                Availability - Dropdown (In Stock, Out of Stock),
                                Return Policy (optional) - Textarea (e.g., 30 days return),
                             */}
            <form
              onSubmit={handleSubmit}
              className="mb-2 w-full"
              name="createProductForm"
            >
              <div className="mb-1 flex flex-col gap-6">
                <div className="w-full max-w-sm min-w-[200px]">
                  <label
                    className="block mb-2 text-sm text-slate-600"
                    htmlFor="productName"
                  >
                    Product Name
                  </label>
                  <input
                    type="text"
                    value={formData.productName}
                    onChange={handleInput}
                    id="productName"
                    name="formData.productName"
                    className="placeholder:text-slate-400 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow w-full"
                    placeholder="Product Name"
                  />
                </div>

                <div className="w-full max-w-sm min-w-[200px]">
                  <label
                    className="block mb-2 text-sm text-slate-600"
                    htmlFor="productDescription"
                  >
                    Description
                  </label>
                  <textarea
                    rows={4}
                    id="productDescription"
                    name="productDescription"
                    className="w-full placeholder:text-slate-300"
                    placeholder="Write short product description.."
                  />
                </div>

                <div className="w-full max-w-sm min-w-[200px]">
                  <label
                    className="block mb-2 text-sm text-slate-600"
                    htmlFor="productCategory"
                  >
                    Category
                  </label>
                  <select
                    onChange={dropdownChange}
                    value={formData.productCategory}
                    id="productCategory"
                    name="productCategory"
                    className="text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow w-full"
                  >
                    <option value="">Select Category</option>
                    <option value="electronics">Electronics</option>
                    <option value="furniture">Furniture</option>
                    <option value="clothing">Clothing</option>
                  </select>
                </div>
                <div className="w-full max-w-sm min-w-[200px]">
                  <CheckboxGroup
                    options={colorOptions}
                    initialValues={selectedColors}
                    groupName="productColors"
                    groupLabel="Colors"
                    onChange={handleColorsChange}
                    required={true}
                    minSelections={2}
                    showCheckAll={true}
                  />
                  {/* <p>Selected : {selectedOptions.join(', ') || 'None'}</p> */}
                </div>
                <div className="w-full max-w-sm min-w-[200px]">
                  <CheckboxGroup
                    options={sizeOptions}
                    initialValues={selectedSizes}
                    groupName="productSizes"
                    groupLabel="Sizes"
                    onChange={handleSizesChange}
                    required={true}
                    showCheckAll={true}
                  />
                  {/* <p>Selected : {selectedOptions.join(', ') || 'None'}</p> */}
                </div>
                <div className="w-full max-w-sm min-w-[200px]">
                  <CheckboxGroup
                    value={formData.productBrands}
                    options={brandOptions}
                    initialValues={selectedBrands}
                    groupName="productBrands"
                    groupLabel="Brand(s)"
                    onChange={handleBrandChange}
                    required={true}
                    minSelections={2}
                    maxSelections={4}
                  />
                  {/* <p>Selected : {selectedOptions.join(', ') || 'None'}</p> */}
                </div>
              </div>
              <button
                className="mt-4 w-full rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="submit"
              >
                Create
              </button>
              <button type="button" onClick={handleReset}  className="w-full mt-1 px-4 py-2 bg-gray-300 text-gray-700 rounded">
                Reset
              </button>
            </form>
          </div>
        </div>
      </aside>
    </>
  );
};

export default CreateProduct;
