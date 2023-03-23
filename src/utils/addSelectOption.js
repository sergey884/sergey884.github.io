export const addSelectOption = (selectOptions = [], newOpts) => {
  if (!selectOptions.length) {
    return selectOptions;
  }

  return [newOpts, ...selectOptions];
}

export default addSelectOption;