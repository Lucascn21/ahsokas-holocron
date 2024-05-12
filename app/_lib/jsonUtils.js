export const filterResultsList = (data) => {
  if (!Array.isArray(data)) data = [data];

  return data?.map((item) => {
    const newItem = { ...item };

    Object.keys(newItem).forEach((key, index) => {
      const itemValue = newItem?.results[index];

      if (
        itemValue === "n/a" ||
        itemValue === "unknown" ||
        itemValue.length === 0
      ) {
        delete newItem.results[index];
      }
      Object.entries(itemValue).forEach(([key, value]) => {
        if (value === "n/a" || value === "unknown" || value.length === 0) {
          delete itemValue[key];
        }
      });
    });

    return newItem;
  });
};

export const filterResult = (data) => {
  if (!Array.isArray(data)) data = [data];

  return data?.map((item) => {
    const newItem = { ...item };

    Object.keys(newItem).forEach((key, index) => {
      if (
        newItem[key] === "n/a" ||
        newItem[key] === "unknown" ||
        newItem[key] === "" ||
        (Array.isArray(newItem[key]) && newItem[key].length === 0)
      ) {
        delete newItem[key];
      }
    });

    return newItem;
  });
};

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
