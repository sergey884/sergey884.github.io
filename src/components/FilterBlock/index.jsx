import { useContext, useState } from 'react';
import Filter from "../Filter";
import Grid from "@mui/material/Grid";
import { AppContext } from '../../AppContext';

export const FilterBlock = () => {
  const { state, dispatch } = useContext(AppContext);
  console.log('FilterBlock: ', state);
  const { topicsInfo, subtopics } = state;

  const getSubTopics = (opts) => {
    dispatch({
      type: 'GENERATE_TOPICS',
      payload: opts
    });
  }

  const selectSubTopics = (opts) => {
    console.log('selectSubTopics>>>>>: ', opts);
  }

  return (
    <Grid
      container
      spacing={2}
      style={{ paddingLeft: "50px", paddingRight: "50px", paddingBottom: "25px", paddingTop: "25px" }}
    >
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <Filter
          label="Select Main Area"
          values={topicsInfo}
          onChange={getSubTopics}
          id="topic-filter-block"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <Filter
          label="Select Topic"
          values={subtopics}
          onChange={selectSubTopics}
          defaultValue
          id="subtopic-filter-block"
        />
      </Grid>
    </Grid>
  );
};

export default FilterBlock;