import { createContext, useReducer } from "react";
import { useLocation } from "react-router-dom";
import { initalState,  appReducer } from './reducers/appReducers';
import { getQueryParams } from './utils/getQueryParams';
import { addSelectOption } from './utils/addSelectOption';
import { searchResource } from './utils/searchResource';
import { generateTopics, generateSubTopics } from './utils/generateTopics';
import { allSubtopicOption } from './reducers/appReducers';
import { isTopicExist } from './utils/generateTopics';

export const AppContext = createContext(null);

const applyQuryParam = (initialState, queryParams) => {
  const {
    search,
    topic,
    subtopic,
  } = queryParams;
  console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>: ", queryParams);
  const {
    materials
  } = initialState;
  
  const res = {
    ...initalState
  };


  if (search) {
    const filteredTopics = searchResource(search, materials);
    // console.log('filteredTopics---filteredTopics: ', search, filteredTopics);
    const topicsInfo = generateTopics(filteredTopics);
    const subtopics = generateSubTopics(topicsInfo, { id: topic });

    
    res.filteredTopics = filteredTopics;
    res.topicsInfo = topicsInfo;
    res.subtopics = subtopics;
    res.prevSubtopics = addSelectOption(subtopics, allSubtopicOption);
  }

console.log('AAAAAAAAAA: ', isTopicExist(topic, res.topicsInfo));
  if (topic) {
    const topicsInfo = generateTopics(res.filteredTopics);
    const subtopics = generateSubTopics(topicsInfo, { id: topic });

    res.topicsInfo = topicsInfo;
    res.subtopics = subtopics;
    res.prevSubtopics = addSelectOption(subtopics, allSubtopicOption);
  }

  if (subtopic) {
    const { prevSubtopics, } = res;
    const subtopicItem = prevSubtopics.filter(topic => topic.id === subtopic);

    res.subtopics = subtopicItem;
  }

  // console.log('RES: ', res);
  return res;
};


export const AppProvider = ({ children }) => {
  const location = useLocation();
  const queryParams = getQueryParams(location);

  const [state, dispatch] = useReducer(appReducer, initalState, () => applyQuryParam(initalState, queryParams))

  return (
    <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
  );
};
