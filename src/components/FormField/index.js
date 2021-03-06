import React from 'react';
import PropTypes from 'prop-types';
import { Label, Input, WrapperFormField } from './styles';

function FormField({
  value, onChange, type, name, label, suggestions,
}) {
  const fieldId = `id_${name}`
  const isTextArea = type === 'textarea';
  const tag = isTextArea ? 'textarea' : 'input';

  const hasValue = Boolean(value.lenght);
  const hasSuggestions = Boolean(suggestions.length);
  return (
    <WrapperFormField>
      <Label>
        <Input
          required
          as={tag}
          id={fieldId}
          type={type}
          value={value}
          name={name}
          hasValue={hasValue}
          onChange={onChange}
          autoComplete={hasSuggestions ? 'off' : 'on'}
          list={hasSuggestions ? `suggestionFor_${fieldId}` : undefined}
        />
        <Label.Text>
          {label}
          :
        </Label.Text>
        {
          hasSuggestions && (
            <datalist id={`suggestionFor_${fieldId}`}>
              {
                suggestions.map((suggestion) => (
                  <option value={suggestion} key={`suggestionFor_${fieldId}_option${suggestion}`}>
                    {suggestion}
                  </option>
                ))
              }
            </datalist>
          )
        }
      </Label>
    </WrapperFormField>
  );
}
FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => { },
  suggestions: [],


};
FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  suggestions: PropTypes.arrayOf(PropTypes.string),
};
export default FormField;
