import { useContext } from 'react';
import Filter from "../Filter";
import Grid from "@mui/material/Grid";
import { AppContext } from '../../AppContext';

export const FilterBlock = () => {
  const { dispatch, state } = useContext(AppContext);
  console.log('FilterBlock state: ', state);


  return (
    <Grid
      container
      spacing={2}
      style={{ paddingLeft: "50px", paddingRight: "50px" }}
    >
      <Grid item lg={6}>
        <Filter />
      </Grid>
      <Grid item lg={6}>
        <Filter />
      </Grid>
    </Grid>
  );
};

export default FilterBlock;