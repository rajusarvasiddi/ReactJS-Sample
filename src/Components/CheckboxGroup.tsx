import React, { useEffect, useState } from "react";
import Checkbox from "./Checkbox";


export const CheckboxGroup: React.FC<any> = ({ 
    options, 
    initialValues = [], 
    onChange, 
    groupName, 
    groupLabel,
    minSelections,
    maxSelections,
    errorMessage,
    required = false,
    showCheckAll = false,
    checkAllLabel
 }) => {
    const [selectedValues, setSelectedValues] = useState(initialValues || []);
    const [isValid, setIsValid] = useState(true);

    // Calculate CheckAll state if showCheckAll is true
    const isAllChecked = selectedValues.length === options.length;
    // const isIndeterminate = selectedValues.length > 0 && selectedValues.length < options.length;

    // Determine the effective minimum selections for validation
    const validationMinSelections = required && minSelections === undefined ? 1 : minSelections || 0;
    const validationMaxSelections = maxSelections === undefined ? options.length : maxSelections;


    // --- Dynamic Error Message ---
    let currentErrorMessage: string = '';
    if (selectedValues.length < validationMinSelections) {
        currentErrorMessage = `Please select at least ${validationMinSelections} option(s).`;
    } else if (selectedValues.length > validationMaxSelections) {
        currentErrorMessage = `Please select no more than ${validationMaxSelections} option(s).`;
    }

    const finalErrorMessage = errorMessage || currentErrorMessage;

    // --- Crucial addition: useEffect to re-sync internal state with the prop ---
  useEffect(() => {
    // Only update if the initialValues prop is different from the current internal state
    // This prevents infinite loops if initialValues is an empty array that never changes
    if (initialValues && initialValues !== selectedValues) {
        setSelectedValues(initialValues);
    } else if (!initialValues && selectedValues.length > 0) {
        // Handle cases where initialValues become null/undefined but state still has values
        setSelectedValues([]);
    }
  }, [initialValues]); // Rerun this effect whenever the initialValues prop changes

  
    useEffect(() => {
        const isMinValid = selectedValues.length >= validationMinSelections;
        const isMaxValid = selectedValues.length <= validationMaxSelections;

        setIsValid(isMinValid && isMaxValid);
    }, [selectedValues, validationMinSelections, validationMaxSelections, required]);
    
    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value, checked} = event.target;
        let newSelectedValues;

        if(checked) {
            newSelectedValues = [...selectedValues, value];
        } else {
            newSelectedValues = selectedValues.filter((val: any) => val !== value);
        }

        setSelectedValues(newSelectedValues);
        onChange && onChange(newSelectedValues);
    }

    const handleCheckAllChange = (event: any) => {
        const checked = event.target.checked;
        let newSelectedValues = [];

        if (checked) {
            // Select all options
            newSelectedValues = options.map((option: any) => option.value);
        } else {
            // Unselect all options
            newSelectedValues = [];
        }
        setSelectedValues(newSelectedValues);
        onChange && onChange(newSelectedValues);
    };


    const displayCheckAllLabel = checkAllLabel || "Select All";
    return <>
        <fieldset className="checkbox-group">
            <legend>{groupLabel} {required && <span style={{color: 'red'}}>*</span>}</legend>
            {showCheckAll && (
                <div>
                <label>
                    <input
                    type="checkbox"
                    onChange={handleCheckAllChange}
                    checked={isAllChecked}
                    // ref={input => input && (input.indeterminate = isIndeterminate)} // Indeterminate state
                    />
                    {displayCheckAllLabel}
                </label>
                </div>
            )}
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
            {!isValid && <p style={{ color: 'red' }}>{finalErrorMessage}</p>}

        </fieldset>
    </>
}

// export default CheckboxGroup;