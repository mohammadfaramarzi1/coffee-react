const addToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getFromLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

const getItemFromLocalStorage = (key, item) => {
  return JSON.parse(localStorage.getItem(key))[item];
};

export { addToLocalStorage, getFromLocalStorage, getItemFromLocalStorage };
