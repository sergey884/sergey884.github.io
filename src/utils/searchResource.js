export const clearText = (text) => {
  const clearedText = text.trim().toLowerCase();

  return clearedText;
};

export const checkTextInLinks = (textRegExp, links) => {
  const isAnyLink = links.some((it) => {
    const { title } = it;

    // console.log('checkTextInLinks: ', title);
    const isTextExist = textRegExp.test(clearText(title));

    return isTextExist;
  });
  // debugger;
  return isAnyLink;
};

export const searchResource = (text, resources) => {
  // debugger;
  const result = resources.reduce((acc, curr) => {
    const { id, topics = [], title } = curr;

    const filteredTopics = topics.filter((item) => {
      const { title = '', links } = item;
      const clearedText = clearText(title);
      const textRegExp = new RegExp(text.toLowerCase(), 'g');
      const isTextExist = textRegExp.test(clearedText);

      return isTextExist || checkTextInLinks(textRegExp, links);
    });

    acc.push({
      id,
      title,
      topics: filteredTopics,
    });

    return acc;
  }, []);

  return result;
};
