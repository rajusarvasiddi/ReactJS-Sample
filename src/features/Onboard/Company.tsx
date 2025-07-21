import React, { useState } from 'react';
import { TextField, Button, Box, MenuItem } from '@mui/material';

interface CompanyFormData {
    name: string;
    address: string;
    email: string;
    zipcode: string;
    phone: string;
    country: string;
}

interface CompanyFormErrors {
    name?: string;
    address?: string;
    email?: string;
    phone?: string;
    zipcode?: string;
    country?: string;
}

// Example country list with codes and zipcode length
const countries = [
    { code: 'US', name: 'United States' },
    { code: 'IN', name: 'India' },
    { code: 'GB', name: 'United Kingdom' },
    { code: 'CA', name: 'Canada' },
    { code: 'AU', name: 'Australia' }
];

const zipcodeRegexMap: Record<string, RegExp> = {
    US: /^\d{5}$/,
    IN: /^\d{6}$/,
    GB: /^[A-Za-z0-9]{6}$/,
    CA: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6}$/,
    AU: /^\d{4}$/
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

const getZipcodeRegex = (countryCode: string) => {
    return zipcodeRegexMap[countryCode] ?? /^\d+$/;
};

const CreateCompany: React.FC = () => {
    const [form, setForm] = useState<CompanyFormData>({
        name: '',
        address: '',
        email: '',
        phone: '',
        zipcode: '',
        country: '',
    });
    const [errors, setErrors] = useState<CompanyFormErrors>({});

    const validate = (field: string, value: string, countryCode?: string): string | undefined => {
        switch (field) {
            case 'name':
                if (!value) return 'Company name is required';
                break;
            case 'address':
                if (!value) return 'Address is required';
                break;
            case 'email':
                if (!value) return 'Email is required';
                if (!emailRegex.test(value)) return 'Invalid email address';
                break;
            case 'zipcode':
                if (!value) return 'Zipcode is required';
                const code = countryCode || form.country;
                if (!code) return 'Select country';
                const zipcodeRegex = getZipcodeRegex(code);
                if (!zipcodeRegex.test(value)) {
                    // Show required length for known countries using zipcodeRegexMap
                    let lengthMsg = '';
                    const regex = zipcodeRegexMap[code];
                    if (regex) {
                        // Try to infer length from regex
                        const regexStr = regex.source;
                        const match = regexStr.match(/\{(\d+)\}/);
                        if (match) {
                            lengthMsg = `${match[1]} characters`;
                        } else if (code === 'GB' || code === 'CA') {
                            lengthMsg = '6 alphanumeric characters';
                        }
                    }
                    return `Invalid zipcode for selected country${lengthMsg ? ` (${lengthMsg})` : ''}`;
                }
                // Check for all identical characters
                if (/^([A-Za-z0-9])\1*$/.test(value)) {
                    return 'Zipcode cannot have all identical characters or digits';
                }
                break;
            case 'country':
                if (!value) return 'Country is required';
                break;
            default:
                break;
        }
        return undefined;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (name === 'country') {
            setForm(prev => ({
                ...prev,
                country: value,
            }));
            setErrors(prev => ({
                ...prev,
                country: validate('country', value),
                zipcode: validate('zipcode', form.zipcode, value), // validate zipcode with new country
            }));
        } else {
            setForm(prev => ({
                ...prev,
                [name]: value,
            }));
            setErrors(prev => ({
                ...prev,
                [name]: validate(name, value),
            }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors: CompanyFormErrors = {};
        Object.entries(form).forEach(([key, value]) => {
            if (key === 'zipcode') {
                newErrors[key as keyof CompanyFormErrors] = validate(key, value, form.country);
            } else {
                const error = validate(key, value);
                if (error) newErrors[key as keyof CompanyFormErrors] = error;
            }
        });
        // Remove undefined errors
        Object.keys(newErrors).forEach(key => {
            if (!newErrors[key as keyof CompanyFormErrors]) {
                delete newErrors[key as keyof CompanyFormErrors];
            }
        });
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            // Submit logic here
            console.log('Company created:', form);
        }
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400, mx: 'auto' }}
        >
            <TextField
                label="Company Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                fullWidth
                error={!!errors.name}
                helperText={errors.name}
            />
            <TextField
                label="Address"
                name="address"
                value={form.address}
                onChange={handleChange}
                required
                fullWidth
                error={!!errors.address}
                helperText={errors.address}
            />
            <TextField
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                fullWidth
                error={!!errors.email}
                helperText={errors.email}
            />
            <TextField
                label="Phone Number"
                name="phone"
                type="number"
                value={form.phone}
                onChange={handleChange}
                required
                fullWidth
                error={!!errors.phone}
                helperText={errors.phone}
            />
            <TextField
                select
                label="Country"
                name="country"
                value={form.country}
                onChange={handleChange}
                required
                fullWidth
                error={!!errors.country}
                helperText={errors.country}
            >
                {countries.map(country => (
                    <MenuItem key={country.code} value={country.code}>
                        {country.name} ({country.code})
                    </MenuItem>
                ))}
            </TextField>
            <TextField
                label="Zipcode"
                name="zipcode"
                value={form.zipcode}
                onChange={handleChange}
                required
                fullWidth
                error={!!errors.zipcode}
                helperText={errors.zipcode}
            />
            <Button type="submit" variant="contained" color="primary">
                Create Company
            </Button>
        </Box>
    );
};

export default CreateCompany;
