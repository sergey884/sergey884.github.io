export const getQueryParams = (location = {}) => {
  const { search } = location;

  if (!search) {
    return {};
  }

  const queryParams = search.replace('?', '').split('&');
  const params = queryParams.reduce((acc, item) => {
    const [queryKey, queryVal] = item.split('=');

    return {
      ...acc,
      [queryKey]: queryVal,
    };
  }, {});

  return params;
};

export default getQueryParams;
