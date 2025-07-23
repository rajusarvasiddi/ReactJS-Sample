import React, { useEffect, useState } from "react";
import Checkbox from "./Checkbox";


const CheckboxGroup: React.FC<any> = ({ 
    options, 
    initialValues = [], 
    onChange, 
    groupName, 
    groupLabel,
    minSelections,
    maxSelections,
    errorMessage,
    required = false
 }) => {
    const [selectedValues, setSelectedValues] = useState(initialValues || []);
    const [isValid, setIsValid] = useState(true);

    // Determine the effective minimum selections for validation
    const validationMinSelections = required && minSelections === undefined ? 1 : minSelections || 0;
    // If required and minSelections isn't explicitly set, default to 1. Otherwise, use minSelections if provided, or 0 if neither required nor minSelections is set.

    const validationMaxSelections = maxSelections === undefined ? options.length : maxSelections;
    // If maxSelections isn't explicitly set, default to the length of options. Otherwise, use  maxSelections if provided.

    // const defaultErrorMessage = `Please select at least ${validationMinSelections} option(s).`;
    const defaultErrorMessage = selectedValues.length < validationMinSelections
        ? `Please select at least ${validationMinSelections} option(s).`
        : `Please select no more than ${validationMaxSelections} option(s).`;
    const finalErrorMessage = errorMessage || defaultErrorMessage;

    // useEffect(() => {
    //     if (required) {
    //         setIsValid(selectedValues.length >= validationMinSelections);
    //     } else {
    //         setIsValid(true);
    //     }
    // }, [selectedValues, required, validationMinSelections]);

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

    return <>
        <fieldset className="checkbox-group">
            <legend>{groupLabel} {required && <span style={{color: 'red'}}>*</span>}</legend>
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
            {required && !isValid && (
                <p style={{color: 'red'}}>{finalErrorMessage}</p>
            )}
        </fieldset>
    </>
}

export default CheckboxGroup;