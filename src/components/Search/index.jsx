// import Box from '@mui/material/Box';
import { useState, useContext, useEffect } from 'react';
import TextField from '@mui/material/TextField';
// import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import ClearIcon from '@mui/icons-material/Clear';
import { AppContext } from '../../AppContext';
import Button from '@mui/material/Button';
import { useNavigate, useLocation, useParams, useMatches } from "react-router-dom";

export const Search = () => {
  let location = useLocation();
  let navigate = useNavigate();
  let params = useParams();
  let matches = useMatches();
  // console.log('location: ', location);
  console.log('params: ', params);
  console.log('matches: ', matches);

  const [inputText, setInputText] = useState('');
  const { dispatch, } = useContext(AppContext);

  useEffect(() => {
    const { search } = location;
    const queryParams = search
      .replace('?', '')
      .split('&');
    const params = queryParams.reduce((acc, item) => {
      const [queryKey, queryVal] = item.split('=');

      console.log('RES: ', acc);

      return {
        ...acc,
        [queryKey]: queryVal,
      };
    }, {});
    console.log('>>>>>>>>>>>>>>>>>>>>>: ', params);
  }, []);

  const searchText = (event) => {
    const { target: { value } } = event;
    navigate(`?search=${value}`);

    setInputText(value);

    dispatch({
      type: "SEARCH_MATERIAL",
      payload: value,
    });
  }

  const clearText = () => {
    setInputText('');
    navigate('');

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