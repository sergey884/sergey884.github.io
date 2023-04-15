export const generateTopics = (materials) => {
  // console.log('generateTopics materials ::::::::::: ', materials);
  const result = materials.reduce((acc, topic) => {
    const { title, id, topics } = topic;
    let res = {
      id,
      name: id,
      title,
      value: title,
      subtopics: [],
    };

    if (topics.length) {
      const subTopics = topics.map((it) => {
        const { id, title, links } = it;
        return {
          value: title,
          title,
          name: id,
          id,
          links,
        };
      });

      res = {
        ...res,
        subtopics: subTopics,
      };

      acc.push(res);
    }

    return acc;
  }, []);
  // console.log('generateTopics::::::::::: ', result);
  return result;
};

export const generateSubTopics = (topicsInfo, opts = {}) => {
  const { id } = opts;

  if (id) {
    const { subtopics } = topicsInfo.find((it) => it.id === id) || {};

    return subtopics || [];
  }
  const firstTopic = topicsInfo[0];

  return firstTopic ? firstTopic.subtopics : [];
};

export const isTopicExist = (topicName, materials) => {
  console.log('topicName, materials: ', topicName, materials, materials.some(it => it.id === topicName));

  return materials.some(it => it.id === topicName);
};
