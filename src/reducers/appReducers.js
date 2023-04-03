import { materials } from '../materials';
import { searchResource } from '../utils/searchResource';
import { addSelectOption } from '../utils/addSelectOption';
import { generateTopics, generateSubTopics } from '../utils/generateTopics';

const topicsInfo = generateTopics(materials);
const subTopics = generateSubTopics(topicsInfo);
export const allSubtopicOption = {
  value: 'All', 
  title: 'All', 
  name: 'allsubtopics', 
  id: 'allsubtopics'
};
export const initalState = {
  materials,
  filteredTopics: materials,
  topicsInfo,
  subtopics: subTopics,
  prevSubtopics: addSelectOption(subTopics, allSubtopicOption),
};

export const appReducer = (state, action) => {
  console.log('STATE: ', state);
  const { type, payload } = action;

  switch (type) {
    case 'SEARCH_MATERIAL': {
      const { materials } = state;
      const filteredTopics = searchResource(payload, materials);
      const topicsInfo = generateTopics(filteredTopics);
      const subtopics = generateSubTopics(topicsInfo)

      return { 
        ...state, 
        filteredTopics, 
        topicsInfo, 
        subtopics,
        prevSubtopics: addSelectOption(subtopics, allSubtopicOption),
      };
    }
    case 'FILTER_TOPICS': {
      return { ...state, searchText: payload };
    }

    case 'GENERATE_TOPICS': {
      const { topicsInfo } = state;
      const subtopics = generateSubTopics(topicsInfo, payload);

      return { 
        ...state, 
        subtopics,
        prevSubtopics: addSelectOption(subtopics, allSubtopicOption),
      };
    }

    case 'FILTER_SUBTOPICS': {
      const { prevSubtopics, } = state;
      const { id } = payload;
      const subtopic = prevSubtopics.filter(topic => topic.id === id);
    
      return { 
        ...state,
        subtopics: subtopic,
      };
    }

    case 'ALL_SUBTOPICS': {
      const { prevSubtopics, } = state;
      const { id } = payload;
      const subtopics = prevSubtopics.filter(topic => topic.id !== id);

      return { 
        ...state,
        subtopics: subtopics,
      };
    }

    default:
      return state;
  }
};

export default appReducer;
