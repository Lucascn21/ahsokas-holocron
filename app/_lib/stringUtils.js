export const capitalizeFirstLetter = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export const getPageParameter = (url, fallbackURL = "https://swapi.dev") => {
  const myURL = new URL(`${url || fallbackURL}`);
  const parameters = myURL.searchParams.get("page");
  return parameters;
};
