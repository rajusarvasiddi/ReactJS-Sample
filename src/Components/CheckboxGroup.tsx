import React, { useState } from "react";
import Checkbox from "./Checkbox";


const CheckboxGroup: React.FC<any> = ({ options, initialValues = [], onChange, groupName, groupLabel }) => {
    const [selectedValues, setSelectedValues] = useState(initialValues || []);
    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value, checked} = event.target;
        let newSelectedValues = [...selectedValues];

        if(checked) {
            newSelectedValues.push(value);
        } else {
            newSelectedValues = newSelectedValues.filter(item => item !== value);
        }

        setSelectedValues(newSelectedValues);
        onChange && onChange(newSelectedValues);
    }

    return <>
        <fieldset className="checkbox-group">
            <legend>{groupLabel}</legend>
            {options?.map((option: any) => (
                <Checkbox
                    key={option.value}
                    label={option.label}
                    value={option.value}
                    checked={selectedValues.includes(option.value)}
                    onChange={handleCheckboxChange}
                    name={groupName}
                />
            ))}
        </fieldset>
    </>
}

export default CheckboxGroup;