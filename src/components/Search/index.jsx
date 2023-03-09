// import Box from '@mui/material/Box';
import { useState, useContext } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import ClearIcon from '@mui/icons-material/Clear';
import { AppContext } from '../../AppContext';

export const Search = () => {
  const [inputText, setInputText] = useState('');
  const { dispatch, state } = useContext(AppContext);
  // console.log('dispatch: ', dispatch);
  // console.log('state: ', state);

  const searchText = (event) => {
    const { target: { value } } = event
    setInputText(value);

    dispatch({
      type: "FILTER_TOPICS",
      payload: value,
    });
  }

  const clearText = () => {
    setInputText('');
  }

  return (
    <TextField
      id="serach-field"
      label="Search metrial"
      variant="outlined"
      style={{ width: "100%" }}
      value={inputText}
      InputProps={{
        endAdornment:
          (
            <InputAdornment position="end">
              <IconButton
                aria-label="clear text button"
                onClick={clearText}
                disabled={inputText.length === 0}
                edge="end"
              >
                <ClearIcon />
              </IconButton>
            </InputAdornment>
          )

      }}
      onChange={searchText}
    />
  );
};

export default Search;