import { materials } from '../materials';
import { searchResource } from '../utils/searchResource';
import { generateTopics, generateSubTopics } from '../utils/generateTopics';

const topicsInfo = generateTopics(materials);
export const initalState = {
  materials,
  filteredTopics: materials,
  topicsInfo,
  subtopics: generateSubTopics(topicsInfo),
};

export const appReducer = (state, action) => {
  const { type, payload } = action;
  // console.log("appReducer: ", action);

  switch (type) {
    case 'SEARCH_MATERIAL': {
      const { materials } = state;
      const filteredTopics = searchResource(payload, materials);
      const topicsInfo = generateTopics(filteredTopics);
      const subtopics = generateSubTopics(topicsInfo)
      // console.log('resources: ', resources);
      return { ...state, filteredTopics, topicsInfo, subtopics };
    }
    case 'FILTER_TOPICS': {
      return { ...state, searchText: payload };
    }

    case 'GENERATE_TOPICS': {
      const { topicsInfo } = state;
      const subtopics = generateSubTopics(topicsInfo, payload)

      // console.log('RES subtopics: ', subtopics);
    
      return { ...state, subtopics };
    }

    default:
      return state;
  }
};

export default appReducer;
