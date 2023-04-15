import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

export const Filter = ({
  disabled = false,
  label = '',
  helperText = '',
  values = [],
  onChange,
  defaultValue,
  id,
  value,
}) => {
  console.log('VALUE>>>>>>>>>>>: ', value, values[0]?.value);
  const findValue = () => {
    if (value) {
      const { title } = values.find(it => it.id === value) || {};

      return title;
    }
    console.log('values[0]?.value>>>>>>>>>>>: ', values[0]?.value);
    return values[0]?.value;
  }

  const initialValue = value ? findValue() : (typeof defaultValue !== 'undefined' ? '' : values[0]?.value)

  const [option, setOption] = useState(initialValue);

  useEffect(() => {
    setOption(value ? findValue() : (typeof defaultValue !== 'undefined' ? '' : values[0]?.value));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values, value, defaultValue]);

  const selectOption = (event, child) => {
    const { id } = child.props;
    const { target: { value } } = event;

    setOption(value);

    if (typeof onChange === 'function') {
      onChange({ id, value });
    }
  };

  return (
    <TextField
      id={id}
      select
      disabled={disabled}
      label={label}
      value={option}
      helperText={helperText}
      style={{ width: "100%" }}
      onChange={selectOption}
    >
      {values.length ? values.map((option) => {
        return (
          <MenuItem
            key={option.value}
            value={option.value}
            id={option.name}
          >
            {option.value}
          </MenuItem>);
      }) : null}
    </TextField>
  );
};

export default Filter;