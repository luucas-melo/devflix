import React from 'react';
import PropTypes from 'prop-types';
import { Label, Input, WrapperFormField } from './styles';

function FormField({
  value, onChange, type, name, label,
}) {
  const isTextArea = type === 'textarea';
  const tag = isTextArea ? 'textarea' : 'input';
  return (
    <WrapperFormField>
      <Label>
        <Input
          as={tag}
          type={type}
          value={value}
          name={name}
          onChange={onChange}
        />
        <Label.Text>
          {label}
          :
        </Label.Text>
      </Label>
    </WrapperFormField>
  );
}
FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},

};
FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,

};
export default FormField;
