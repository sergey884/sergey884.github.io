import { materials } from "../materials";
import { searchResource } from '../utils/searchResource';

export const initalState = {
  materials,
  filteredTopics: [],
  filteredSubTopics: [],
};

export const appReducer = (state, action) => {
  const { type, payload } = action;
  // console.log("appReducer: ", action);

  switch (type) {
    case "SEARCH_MATERIAL":
      return { ...state, searchText: payload };

    case "FILTER_TOPICS":
      console.log("FILTER_TOPICS: ", payload);
      const { materials } = state;
      const resources = searchResource(payload, materials)
      // console.log('resources: ', resources);
      return { ...state, filteredTopics: [] };

    default:
      return state;
  }
};

export default appReducer;
