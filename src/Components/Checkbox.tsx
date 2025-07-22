import React from "react"
interface CheckboxProps {
    label: string;
    value?: string;
    checked?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, value, checked, onChange, name }) => {
    return <>
    <div>
        <label>
            <input
                type="checkbox"
                value={value}
                checked={checked}
                onChange={onChange}
                name={name}
                className="form-checkbox h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            { label }
        </label>
        </div>
    </>
}

export default Checkbox;