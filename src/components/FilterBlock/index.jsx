import { useContext } from 'react';
import Filter from "../Filter";
import Grid from "@mui/material/Grid";
import { AppContext } from '../../AppContext';

export const FilterBlock = () => {
  const { state, dispatch } = useContext(AppContext);

  const { topicsInfo, prevSubtopics } = state;

  const getSubTopics = (opts) => {
    dispatch({
      type: 'GENERATE_TOPICS',
      payload: opts
    });
  }

  const selectSubTopics = (opts) => {
    if (opts.id === 'allsubtopics') {
      dispatch({
        type: 'ALL_SUBTOPICS',
        payload: opts
      });

      return;
    }

    dispatch({
      type: 'FILTER_SUBTOPICS',
      payload: opts
    });
  }

  return (
    <Grid
      container
      spacing={2}
      style={{ paddingLeft: "50px", paddingRight: "50px", paddingBottom: "25px", paddingTop: "25px" }}
    >
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <Filter
          id="topic-filter-block"
          label="Select Main Area"
          values={topicsInfo}
          onChange={getSubTopics}
          disabled={!topicsInfo.length}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <Filter
          id="subtopic-filter-block"
          label="Select Topic"
          values={prevSubtopics}
          onChange={selectSubTopics}
          defaultValue
          disabled={!prevSubtopics.length}
        />
      </Grid>
    </Grid>
  );
};

export default FilterBlock;