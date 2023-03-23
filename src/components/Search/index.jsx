// import Box from '@mui/material/Box';
import { useState, useContext } from 'react';
import TextField from '@mui/material/TextField';
// import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import ClearIcon from '@mui/icons-material/Clear';
import { AppContext } from '../../AppContext';
import Button from '@mui/material/Button';

export const Search = () => {
  const [inputText, setInputText] = useState('');
  const { dispatch, } = useContext(AppContext);

  const searchText = (event) => {
    const { target: { value } } = event
    setInputText(value);

    dispatch({
      type: "SEARCH_MATERIAL",
      payload: value,
    });
  }

  const clearText = () => {
    setInputText('');
    dispatch({
      type: "SEARCH_MATERIAL",
      payload: '',
    });
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
              {/* <IconButton
                aria-label="clear text button"
                onClick={clearText}
                disabled={!inputText.length}
                edge="end"
              >
                <ClearIcon />
              </IconButton> */}
              <Button
                variant="outlined"
                aria-label="clear text button"
                onClick={clearText}
                disabled={!inputText.length}
                startIcon={<ClearIcon />}
              >
                Clear
              </Button>
            </InputAdornment>
          )

      }}
      onChange={searchText}
    />
  );
};

export default Search;