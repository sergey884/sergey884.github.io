// import Box from '@mui/material/Box';
import { useState, useContext, useEffect } from 'react';
import TextField from '@mui/material/TextField';
// import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import ClearIcon from '@mui/icons-material/Clear';
import { AppContext } from '../../AppContext';
import Button from '@mui/material/Button';
import { useNavigate, useLocation } from "react-router-dom";
import { getQueryParams } from '../../utils/getQueryParams';

export const Search = () => {
  let location = useLocation();
  let navigate = useNavigate();

  const { search } = getQueryParams(location);

  const [inputText, setInputText] = useState(search || '');
  const { dispatch, } = useContext(AppContext);

  // useEffect(() => {
  //   const { search } = getQueryParams(location);

  //   if (search) {
  //     // findText(search);
  //     setInputText(search);

  //   }
  // }, []);

  const findText = (text) => {
    setInputText(text);

    dispatch({
      type: "SEARCH_MATERIAL",
      payload: text,
    });
  }

  const searchText = (event) => {
    const { target: { value } } = event;
    navigate(`?search=${value}`);

    findText(value);
  }

  const clearText = () => {
    navigate('');

    findText('');
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