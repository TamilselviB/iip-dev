import React from 'react';
import NumberFormat from 'react-number-format';
import _isObject from 'lodash/isObject';

const IIPNumberFormat = ({
  field: { name, value, onChange, onBlur },
  form: { touched, errors, values, setFieldValue, setFieldTouched },
  ...custom
}) => {
  return (
    <NumberFormat
      name={name}
      thousandSeparator
      value={_isObject(value) ? value.formattedValue : value}
      onValueChange={val => setFieldValue(name, val.floatValue)}
      {...custom}
    />
  );
};

export default IIPNumberFormat;
