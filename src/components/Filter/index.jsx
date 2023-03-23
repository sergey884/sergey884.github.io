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
  id
}) => {
  const [option, setOption] = useState(typeof defaultValue !== 'undefined' ? '' : values[0]?.value);

  useEffect(() => {
    setOption(typeof defaultValue !== 'undefined' ? '' : values[0]?.value);
  }, [values, defaultValue]);

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