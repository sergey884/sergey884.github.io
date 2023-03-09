export const searchResource = (text, resources) => {
  // debugger;

  const result = Object.keys(resources).reduce((acc, curr, index) => {
    const topics = resources[curr];
    const filteredTopics = topics.filter((item) => {
      const { title = "" } = item;
      const clearedText = title.trim().toLowerCase();
      const textRegex = new RegExp(text.toLowerCase(), "g");
      console.log("title: textRegex: ", clearedText, textRegex);
      const isTextExist = textRegex.test(clearedText);

      return isTextExist;
    });

    acc[curr] = filteredTopics;

    return acc;
  }, {});

  console.log(" searchResource result: ", result);

  return result;
};
