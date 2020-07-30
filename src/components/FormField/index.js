import React from 'react';
import {Label, Input} from './styles'

function FormField({ value, onChange, type, name, placeholder, label}) {
    return (
        <div>
            <Label>
                {label}:
            <Input 
                type={type}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                />
            </Label>
        </div>
    );
}
export default FormField;