import { useContext, useEffect, useState } from 'react';
import Filter from "../Filter";
import Grid from "@mui/material/Grid";
import { useNavigate, useLocation } from "react-router-dom";
import { getQueryParams } from '../../utils/getQueryParams';
import { replaceUrl } from '../../utils/replaceUrl';
import { removeQueryParam } from '../../utils/removeQueryParam';
import { AppContext } from '../../AppContext';

export const FilterBlock = () => {
  let location = useLocation();
  let navigate = useNavigate();
  const queryParams = getQueryParams(location);
  const { topic: queryTopic, subtopic: querySubTopic } = queryParams;
  // console.log('queryParams: ', queryParams);

  const [topic, setTopic] = useState(queryTopic || undefined);
  const [subTopic, setSubTopic] = useState(querySubTopic || undefined);

  const { state, dispatch } = useContext(AppContext);

  // dispatch({
  //   type: 'GENERATE_TOPICS',
  //   payload: { id: queryTopic }
  // });

  const { topicsInfo, prevSubtopics } = state;
  console.log('topicsInfo+++++: ', topicsInfo);
  // useEffect(() => {
  //   const queryParams = getQueryParams(location);
  //   const { topic, subtopic } = queryParams;

  //   // console.log('queryParams: ', queryParams);
  //   // console.log('topicsInfo: ', state.topicsInfo);

  //   if (topic) {
  //     console.log('TOPIC: ', topic);

  //     // setTopic(topic);
  //     // findText(search);
  //     // dispatch({
  //     //   type: 'GENERATE_TOPICS',
  //     //   payload: { id: topic }
  //     // });
  //   }
  // }, []);

  const getSubTopics = (opts) => {
    const { search } = location;
    console.log("getSubTopics---getSubTopics: ", opts);
    const { id } = opts;
  
    let url = replaceUrl(search, 'topic', id);
    let removeSubtopic = removeQueryParam(url, 'subtopic');

    navigate(removeSubtopic);

    dispatch({
      type: 'GENERATE_TOPICS',
      payload: opts
    });
  }

  const selectSubTopics = (opts) => {
    const { search } = location;
    console.log("selectSubTopics---selectSubTopics: ", opts);
    const { id } = opts;

    let url = replaceUrl(search, 'subtopic', id);

    navigate(url);
  
    if (id === 'allsubtopics') {
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
          value={topic}
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
          value={subTopic}
          disabled={!prevSubtopics.length}
        />
      </Grid>
    </Grid>
  );
};

export default FilterBlock;