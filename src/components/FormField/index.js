import React from 'react';

function FormField({ value, onChange, type, name, placeholder, label}) {
    return (
        <div>
            <label>
                {label}:
            <input
                type={type}
                placeholder="Nome"
                name={name}
                value={value}
                onChange={onChange}
                />
            </label>
        </div>
    );
}
export default FormField;