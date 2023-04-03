export const replaceUrl = (searchUrl, queryName, newVal) => {
  let url = '';

  const queryNameRegExp = new RegExp(`${queryName}=`, 'i');
  const queryNameReplaceRegExp = new RegExp(`(${queryName}=)(.+?)(?=&|$)`, 'i');

  if (!searchUrl) {
    url += `?${queryName}=${newVal}`;
  } else {
    const isTopic = queryNameRegExp.test(searchUrl);
    const replaceTopic = isTopic
      ? searchUrl.replace(queryNameReplaceRegExp, `$1${newVal}`)
      : `${searchUrl}&${queryName}=${newVal}`;

    url += replaceTopic;
  }

  return url;
};

export default replaceUrl;
