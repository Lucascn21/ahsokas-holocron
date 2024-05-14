export const replaceUrls = (json, oldUrl, newUrl) => {
  const parsedJson = JSON.parse(JSON.stringify(json));

  const replaceUrl = (parsedJson) => {
    for (let key in parsedJson) {
      if (typeof parsedJson[key] === "object") {
        replaceUrl(parsedJson[key]);
      } else if (
        typeof parsedJson[key] === "string" &&
        parsedJson[key].includes(oldUrl)
      ) {
        parsedJson[key] = parsedJson[key].replace(oldUrl, newUrl);
      }
    }
  };

  replaceUrl(parsedJson);
  return parsedJson;
};

export const removeEmptyValues = (json) => {
  const parsedJson = JSON.parse(JSON.stringify(json));

  const removeEmpty = (parsedJson) => {
    for (let key in parsedJson) {
      if (typeof parsedJson[key] === "object") {
        removeEmpty(parsedJson[key]);
      } else if (
        parsedJson[key] === "n/a" ||
        parsedJson[key] === "" ||
        (Array.isArray(parsedJson[key]) && parsedJson[key].length === 0)
      ) {
        delete parsedJson[key];
      }
    }
  };

  removeEmpty(parsedJson);
  return parsedJson;
};

export const processJson = (json, oldUrl, newUrl) => {
  let processedJson = replaceUrls(json, oldUrl, newUrl);
  processedJson = removeEmptyValues(processedJson);
  return processedJson;
};
