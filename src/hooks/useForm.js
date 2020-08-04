import { useState } from 'react';

function useForm(InitialValues) {
  const [values, setValues] = useState(InitialValues);

  function setValue(key, value) {
    // key: name, description, color
    setValues({
      ...values,
      [key]: value, // name: 'value'
    });
  }

  function handleOnChange(event) {
    setValue(
      event.target.getAttribute('name'),
      event.target.value,
    );
  }
  function clearForm() {
    setValues(InitialValues);
  }
  return {
    values,
    handleOnChange,
    clearForm,
  };
}

export default useForm;
