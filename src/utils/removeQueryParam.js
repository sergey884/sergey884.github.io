export const removeQueryParam = (searchUrl, queryName) => {
  const queryNameRegExp = new RegExp(`${queryName}=`, 'i');
  const queryNameReplaceRegExp = new RegExp(`&?${queryName}=(.*?)(?=&|$)`, 'i');
  
  const isQueryParam = queryNameRegExp.test(searchUrl);

  if (isQueryParam) {
    return searchUrl.replace(queryNameReplaceRegExp, '')
  }

  return searchUrl;
}

export default removeQueryParam;