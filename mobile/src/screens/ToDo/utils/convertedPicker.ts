interface IStateProp {
  [key: string]: any;
}

function getValuesFromConverterPicker(arr: string[]) {
  return arr.reduce((prev, item): IStateProp => {
    const [key, prop] = item.split(":");
    prev = { ...prev, [key]: Boolean(prop) };
    return prev;
  }, {});
}

export { getValuesFromConverterPicker };
